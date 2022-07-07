export class VoteModel{
    id:number;
    votingId: number;
    userVotedId: number;
    profilePicture: string;

    constructor(id:number, votingId:number, userVotedId:number, profilePicture:string) {
        this.id = id;
        this.votingId = votingId;
        this.userVotedId = userVotedId;
        this.profilePicture = profilePicture;
    }
}