export class UserModel{
    id: Number;
    name: string;
    password?: string;
    email: string;
    office: string;
    enterpriseId: Number;
    icAdmin: boolean;
    icUse: boolean;
    icEligible: boolean;
    icElection: boolean;
    icFirstAccess: boolean;

    constructor(id: Number, name: string, email: string, office: string, 
                enterpriseId: Number, icAdmin: boolean, 
                icUse: boolean, icEligible: boolean, 
                icElection: boolean, icFirstAccess: boolean,
                password?: string){
        this.id = id;
        this.name = name;
        this.password = password;
        this.email = email;
        this.office = office;
        this.enterpriseId = enterpriseId;
        this.icAdmin = icAdmin;
        this.icUse = icUse;
        this.icEligible = icEligible;
        this.icElection = icElection;
        this.icFirstAccess = icFirstAccess;
    }
}