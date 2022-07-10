import { EnterpriseModel } from "./EnterpriseModel";

export class SettingsModel{
    id: number;
    enterprise: EnterpriseModel;
    secondsPerCard: number;
    isSendEmailInsertVoting: boolean;
    isSendEmailFinishedVoting: boolean;
    isShowWinner: boolean;
    
  
    constructor(id: number, enterprise: EnterpriseModel, secondsPerCard : number, isSendEmailInsertVoting: boolean, isSendEmailFinishedVoting: boolean, isShowWinner: boolean){
      this.id = id;
      this.enterprise = enterprise;
      this.secondsPerCard = secondsPerCard;
      this.isSendEmailInsertVoting = isSendEmailInsertVoting;
      this.isSendEmailFinishedVoting = isSendEmailFinishedVoting;
      this.isShowWinner = isShowWinner;
    }
  };