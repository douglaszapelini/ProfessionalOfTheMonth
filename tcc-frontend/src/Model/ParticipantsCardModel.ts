export class ParticipantsCardModel{
    id: number;
    votingId: number;
    userId: number;
    voted: boolean;
    participant: boolean;
    profilePicture?: string;
    username: string;

    constructor(id: number, votingId: number, userId: number, voted: boolean, participant: boolean, username: string, profilePicture?: string) {
        this.id = id;
        this.votingId = votingId;
        this.userId = userId;
        this.voted = voted;
        this.participant = participant;
        this.profilePicture = profilePicture;
        this.username = username;
    }
}