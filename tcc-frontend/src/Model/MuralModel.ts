import { MuralItemModel } from "./MuralItemModel";

export class MuralModel{
  id: number;
  name: string;
  enterpriseId:number;
  listMuralItem?: Array<MuralItemModel>;

  constructor(id: number, name: string, enterpriseId:number, listMuralItem?: Array<MuralItemModel>){
    this.id = id;
    this.name = name;
    this.enterpriseId = enterpriseId;
    this.listMuralItem = listMuralItem;
  }
};