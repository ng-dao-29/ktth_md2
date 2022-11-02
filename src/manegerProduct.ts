import {Product} from "./goods";
import {manegerProduc} from "../main";

export class ManegerProduct {
    listProduc: Product [] = [];
    amount: number;
    constructor() {
    }
    // xong
    showListProduc() {
        console.table(this.listProduc)
    }
    checkcode(code): number {
        let index = -1
        for (let i=0; i< this.listProduc.length; i++) {
            if (this.listProduc[i].codeProduct == code) {
                index = i;
                return index;
            }
        }
        return index
    }
    //xong
    checkProduc(nameProduc): number {
        let index = -1
        for (let i=0; i< this.listProduc.length; i++) {
            if (this.listProduc[i].nameProducy == nameProduc) {
                index = i;
                return index;
            }
        }
        return index
    }
    //xong
    deleter(nameProduc) {
        let index = this.checkProduc(nameProduc);
        if (index < 0) {
            console.log("ko tồn tại mặt hàng này");
        }
        else {
            if (manegerProduc.listProduc[index].amount < 1) {
                this.listProduc.splice(index, 1);
                console.log(`đã xóa mawth hàng có tên ${nameProduc}`);
                this.amount--;
            }
            else {
                console.log("mặt hàng này vẫn tồn kho cần bán hết trước khi thực hiện xóa");
            }

        }
    }
    // chưa validate
    addProduc(code:number,
              name: string,
              classify: string,
              productPrice: number,
              amount: number,
              date: string,
              describe: string) {
        let index = this.checkProduc(name);
        if (index < 0) {
            this.listProduc.push(new Product(code, name, classify, productPrice, amount, date, describe));
            this.amount++;
        }
        else {
            console.log("đã tồn tạo mặt hàng có tên tương ứng");
        }
    }
    //xong
    searchProduc(nameProduc) {
        let index: number = this.checkProduc(nameProduc);
        if (index < 0) {
            console.log(` hiên tại mặt hàng ${nameProduc} cưa có trong kho `);
        }
        else {
            console.log("thông tin mặt hàng bạn cần tìm là :")
            console.table(this.listProduc[index]);
        }
    }
    //xong
    updateamountProduc(nameProduc, amount: number) {
        let index = this.checkProduc(nameProduc);
        if (index < 0) {
            console.log(` mặt hàng ${nameProduc} không có trong kho`);
        }
        else {
            this.listProduc[index].amount = amount;
            console.log("số lượng sản phẩm đã đc cập nhật");
        }
    }
}