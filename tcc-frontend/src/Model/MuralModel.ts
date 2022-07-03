export class MuralModel{
  id: number;
  name: string;
  enterpriseId:number;

  constructor(id: number, name: string, enterpriseId:number){
    this.id = id;
    this.name = name;
    this.enterpriseId = enterpriseId;
  }
};