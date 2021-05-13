import { Byte } from "@angular/compiler/src/util";


export class Profile{
      id: Number;
      userId: string;
      fatherName: string;
      motherName: string;
      spouseName: string;
      dateOfBirth: Date;
      bloodGroup: string;
      profession: string;
      nidType: NIDType;
      nid: string;
      dob: string;
      presentAddress: string;
      permanentAddress:string;
      mailingAddress: string;
      nomineeName: string;
      nomineePhoneNumber: string;
      dealerArea: string;
      position: Number;
      image:Byte[];
      imageType:string;
      imageName: string;
}

export enum NIDType{
    OWN,FATHER,MOTHER,WIFE
}

export class Notice{
    id:number;
    description: string;
    noticeDate: Date;
}