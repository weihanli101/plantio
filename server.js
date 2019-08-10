const express     = require('express');
const bodyParser  = require('body-parser');
const app         = express();
const http        = require('http').Server(app);
const io          = require('socket.io')(http);
const mongoose    = require('mongoose');
const cors        = require('cors');
const routes      = require('./routes/index');
const helmet      = require('helmet');
const plantRouter = require('./routes/plants');

// middleware
app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended : true }));
app.use(cors());
app.use(helmet());

// API calls
app.use('/plants', plantRouter);

// routes
app.use('*', routes);
// TODO: 04/16/2018 move into dbURL into config file
const dbUrl = 'mongodb://weihan:W4*Amgt6PtZ7@ds337377.mlab.com:37377/plant';

io.on('connection', (socket) => {
	console.log('a user connected')
})

mongoose.connect(dbUrl, { useNewUrlParser: true }, (err) => {
	if (err) {
		console.log('Database failed to connect: ', err);
	} else {
		console.log('Database connected!');
	}
})

// TODO: 04/16/2018 move into port into config file
const server = http.listen(process.env.PORT || 1234, () => {
	console.log('server is listening on port', server.address().port)
})