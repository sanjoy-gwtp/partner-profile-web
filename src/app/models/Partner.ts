
export class Partner {
     id: Number;
     level: Number;
     parent: Number;
     customerName: string;
     mobileNumber: string;
     referenceNumber: string;
     email: string;
     dealerArea: string;
     dealerCode: string;
     accountBalance: Number;
     purchaseBalance: Number;
}

export class Vote {
     id: Number;
     description: string;
     isActive: boolean;
}

export class Selection {
     id: Number;
     userId: string;
     selection: boolean;
     vote: Vote;
}