import { DNDResponse, AbilityScoreResponse } from './Responses/Index';

export function Factory(api : string ): DNDResponse {
    switch(api) {
        default:
            let temp: DNDResponse = {
                id: null,
                index: null,
                name: 'Error',
                uri: null
            };
            return temp;
    }
}