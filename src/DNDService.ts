import * as request from 'request';

export class DNDService {
    private static _instance: DNDService;
    private baseUrl: String = 'http://dnd5eapi.co/api';

    private constructor() {

    }

    public makeRequest(api: string, index?: number) {
        request(`${this.baseUrl}/${api}/${index}`, (error, response, body) => {
            if(response.statusCode != 200) {
                return;
            } else {
                let details: DNDResponse = 
                return details.getResponse();
            }
        });
    }

    public static getInstance(): DNDService {
        return this._instance || (this._instance = new this());
    }
}