export class Product {
    brand: string;
    category: ProductCategory;
    description: string;
    discount: Number = 0;
    id: Number;
    name: string;
    newPro: boolean;
    pictures: Picture[];
    price: Number = 0;
    sale: boolean;
    salePrice: Number = 0;
    shortDetails: string;
    state: string;
    stock: Number = 0;
    type: ProductType;
}

export class Picture {
    id: Number;
    big: string;
    small: string;
}

export class ProductCategory {
    id: Number;
    name: string;
}

export class ProductType {
    id: Number;
    name: string;
}

export class TransactionRequest{
    id: Number;
    fromAccount: string;
    toAccount: string;
    amount: Number;
    paymentMethod:PaymentMethod;
    txnRequestType: TxnRequestType;
    txnRequestStatus:TxnRequestStatus;
}

export class PaymentMethod{
    id: Number;
    name: string;
    number: string;
}
export enum TxnRequestType{
    DEPOSIT,WITHDRAW
}
export enum TxnRequestStatus{
    PENDING,CONFIRM,REJECTED
}
