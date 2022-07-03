export class Result{
    id:number;
    userWinner: number;
    icYear: boolean;

    constructor(id:number, userWinner:number, icYear:boolean){
        this.id = id;
        this.userWinner = userWinner;
        this.icYear = icYear;
    }
}