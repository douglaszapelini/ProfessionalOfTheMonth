export class MuralItemModel{
    id: number;
    title: string;
    description: string;
    muralId: number;

    constructor(id: number, title: string, description: string, muralId:number){
        this.id = id;
        this.title = title;
        this.description = description;
        this.muralId = id;
    }

}