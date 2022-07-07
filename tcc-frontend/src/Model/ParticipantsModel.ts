export class ParticipantsModel{
    id: number;
    votingId: number;
    userId: number;
    voted: boolean;
    participant: boolean;

    constructor(id: number, votingId: number, userId: number, voted: boolean, participant: boolean, profilePicture: string) {
        this.id = id;
        this.votingId = votingId;
        this.userId = userId;
        this.voted = voted;
        this.participant = participant;
    }
}