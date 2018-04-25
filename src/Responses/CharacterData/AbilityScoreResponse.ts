export class AbilityScoreResponse implements DNDResponse  {
    id: string;
    index: number;
    name: string;
    fullName: string;
    description: string;
    skills : Array<AbilityScoreSkill>;

    public getResponse(): string {
        return 'Hello';
    };
}

class AbilityScoreSkill {
    name: string;
    uri: string;
}