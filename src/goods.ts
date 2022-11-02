export class Product {
    codeProduct: number;
    nameProducy: string;
    classify: string;
    productPrice: number;
    amount: number;
    dateCreated: string;
    describe: string;
    constructor(code: number,
                name: string,
                classify: string,
                price: number,
                amount: number,
                date,
                describe: string) {
        this.codeProduct = code;
        this.nameProducy = name;
        this.classify = classify;
        this.productPrice = price;
        this.dateCreated = date;
        this.describe = describe;
        this.amount = amount;
    }
}