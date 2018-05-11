import { DNDResponse } from '../DNDResponse';

export class SkillResponse implements DNDResponse  {
    id: string;
    index: number;
    name: string;
    uri: string;

    public getResponse(): string {
        return 'Hello';
    };
}