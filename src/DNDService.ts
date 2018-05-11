import * as request from 'request';
import { DNDResponse, AbilityScoreResponse } from './Responses/Index';

export class DNDService {
    private static _instance: DNDService;
    private readonly baseUrl: String = 'http://dnd5eapi.co/api';

    private constructor() {

    }

    public makeRequest(api: string, index?: number): DNDResponse {
        let details: DNDResponse = new AbilityScoreResponse();
        details.id = 'Someid';
        request(`${this.baseUrl}/${api}/${index}`, (error, response, body) => {
        });
        return details;
    }

    public static getInstance(): DNDService {
        return this._instance || (this._instance = new this());
    }
}