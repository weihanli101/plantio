import axios from "axios";

class API {
    constructor({ url }) {
        this.url = url;
        this.endpoints = {}
    }

    createEntity(entity) {
        this.endpoints[entity.name] = this.createEndpoints(entity);
    }

    createEndpoints({ name }) {
        const endpoints = {};
        
        const resourceURL = `${this.url}/${name}`;
        
        endpoints.getOne = ({id}) => axios.get(`${resourceURL}/${id}`);
        endpoints.create = (entityToCreate) => axios.post(resourceURL, entityToCreate);

        // TODO: getALL, delete, update
        return endpoints;
    }
}

export default API;