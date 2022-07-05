export class MuralItemModel{
    id: number;
    title: string;
    description: string;
    muralId: number;
    sequence: number;
    srcImage?: string;

    constructor(id: number, title: string, description: string, sequence: number, muralId:number, srcImage?: string){
        this.id = id;
        this.title = title;
        this.description = description;
        this.muralId = id;
        this.sequence = sequence;
        this.srcImage = this.srcImage;
    }

}