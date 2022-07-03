export class VotingModel{
    id: number;
    enterpriseId: number;
    userOpenId: number;
    monthYear: number;
    resultId: number;
    dateOppened: Date;
    datePlannedClosure: Date;
    dateFinished: Date;

    constructor(id: number, enterpriseId: number, 
        userOpenId: number, monthYear: number, 
                resultId: number, dateOppened: Date, 
                datePlannedClosure: Date, dateFinished: Date) {
        this.id = id;
        this.enterpriseId = enterpriseId;
        this.userOpenId = userOpenId;
        this.monthYear = monthYear;
        this.resultId = resultId;
        this.dateOppened = dateOppened;
        this.datePlannedClosure = datePlannedClosure;
        this.dateFinished = dateFinished;
    }
}