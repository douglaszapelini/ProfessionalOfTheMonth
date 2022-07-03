export class VoteModel{
    id:number;
    votingId: number;
    userVotedId: number;
    dateVote: Date;

    constructor(id:number, votingId:number, userVotedId:number, dateVote:Date) {
        this.id = id;
        this.votingId = votingId;
        this.userVotedId = userVotedId;
        this.dateVote = dateVote;
    }
}