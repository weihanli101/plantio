const express          = require('express');
const bodyParser       = require('body-parser');
const app              = express();
const http             = require('http').Server(app);
const io               = require('socket.io')(http);
const mongoose         = require('mongoose');
const cors             = require('cors');
const routes           = require('./routes');
const helmet           = require('helmet');


// middleware
app.use(express.static(__dirname))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cors());
app.use(helmet());

// routes
app.use('/', routes);


// TODO: 04/16/2018 move into dbURL into config file
const dbUrl = 'mongodb://<weihanli>:<8aetnQUPftSbbyt>@ds125588.mlab.com:25588/plant'

const Message = mongoose.model('Message', {
	name: String,
	message: String
})

app.get('/messages', (req, res) => {
	Message.find({}, (err, messages) => {
		res.send(messages)
	})
})

app.get('/messages/:user', (req, res) => {
	const user = req.param.user
	Message.find({name: user}, (err, messages) => {
		res.send(messages)
	})
})

app.post('/messages', async (req, res) => {

	try {
		const message = new Message(req.body)

		const savedMessage = await message.save()

		console.log('saved')

		const censored = await Message.findOne({ message: 'badword' })

		if (censored)
			await Message.remove({ _id: censored.id })
		else
			io.emit('message', req.body)

		res.sendStatus(200)
	} catch (error) {
		res.sendStatus(500)
		return console.error(error)
	} finally {
		console.log('message post called')
	}
})



io.on('connection', (socket) => {
	console.log('a user connected')
})

mongoose.connect(dbUrl, { useNewUrlParser: true }, (err) => {
	if(err) {
		console.log('Database failed to connect.');
	}
	console.log('Database connected!')
})

// TODO: 04/16/2018 move into port into config file
const server = http.listen(process.env.PORT || 1234, () => {
	console.log('server is listening on port', server.address().port)
})