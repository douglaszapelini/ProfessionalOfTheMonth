export class VotingModel{
    id: number;
    enterpriseId: number;
    userOpenId: number;
    yearMonth: number;
    resultId: number;
    dateOppened: Date;
    datePlannedClosure: Date;
    dateFinished: Date;

    constructor(id: number, enterpriseId: number, 
        userOpenId: number, yearMonth: number, 
                resultId: number, dateOppened: Date, 
                datePlannedClosure: Date, dateFinished: Date) {
        this.id = id;
        this.enterpriseId = enterpriseId;
        this.userOpenId = userOpenId;
        this.yearMonth = yearMonth;
        this.resultId = resultId;
        this.dateOppened = dateOppened;
        this.datePlannedClosure = datePlannedClosure;
        this.dateFinished = dateFinished;
    }
}