export class ParticipantsModel{
    id: number;
    votingId: number;
    userId: number;
    voted: boolean;

    constructor(id: number, votingId: number, userId: number, voted: boolean){
        this.id = id;
        this.votingId = votingId;
        this.userId = userId;
        this.voted = voted;
    }
}