import { DNDResponse } from '../DNDResponse';

export class ProficiencyResponse implements DNDResponse  {
    id: string;
    index: number;
    name: string;
    uri: string;

    public getResponse(): string {
        return 'Hello';
    };
}