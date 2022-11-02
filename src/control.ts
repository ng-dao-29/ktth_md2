import * as readlineSync from "readline-sync"
import {manegerProduc} from "../main";

export class Control {
    constructor() {
    }
    showmenu() {
        console.log("quản lý");
        console.log("1 - thêm mặt hàng");
        console.log("2 - xóa mặt hàng");
        console.log("3 - update số lượng mặt hàng");
        console.log("4 - hiển thị danh sách mặt hàng");
        console.log("5 - tim kiếm sản phẩm");
        console.log("0 - thoat")
    }
    mainMenu(): void {
        let back = true;
        while (back) {
            this.showmenu();
            let action = +readlineSync.question("chon chuc nang: ");
            switch (action) {
                case 1:
                    this.add()
                    break;
                case 2:
                    this.delete()
                    break;
                case 3:
                    this.updateamount()
                    break
                case 4:
                    this.showlist()
                    break;
                case 5:
                    this.sear();
                    break
                case 0:
                    back = false;
                    break;
            }
        }
    }
    //chưa valideta :(
    add() {
        let code = +readlineSync.question("nhap vao ma mat hang: ");
        let codecheck = manegerProduc.checkcode(code)
        if (codecheck < 0) {
            let name = readlineSync.question("nhap ten mat hang: ")
            let check = manegerProduc.checkProduc(name);
            if (check < 0) {
                let classify = readlineSync.question("mat hang thuoc phan loai: ");
                let price = +readlineSync.question("gia san pham la: ");
                let a: RegExp = /^[+ 0-9]{4,10}$/;
                if (!a.test("price")) {
                    console.log("định dạng tiền tệ ko hợp lệ");
                    console.log("giá sản phẩm ít nhất là 1000")
                    price = +readlineSync.question("nhap lai gia san pham: ");
                }
                let amount = +readlineSync.question("so luong la: ");
                let date = readlineSync.question("ngay nhap kho: ");
                let describe = readlineSync.question("mo ta san pham")
                manegerProduc.addProduc(code, name, classify, price, amount, date, describe);
            } else {
                console.log("mặt hàng đã tồn tại trong kho");
            }
        }
        else {
            console.log("đã có hàng hóa sử hữu mã tương tự hãy lấy mã khác");
        }
    }

    delete() {
        let nameProduc = readlineSync.question("nhap ten mat hang can xoa: ");
        manegerProduc.deleter(nameProduc);
    }
    // chưa validata :(
    updateamount() {
        let name = readlineSync.question("ten mat hang can cap nhat so luog: ")
        let index = manegerProduc.checkProduc(name);
        if (index < 0) {
            console.log("măt hàng ko tồn tại")
        }
        else {
            let amount = +readlineSync.question("so luong thay doi thanh: ")
            manegerProduc.updateamountProduc(name,amount)
        }
    }

    showlist() {
        manegerProduc.showListProduc()
    }
    sear() {
        let name = readlineSync.question("ten san pham muon tim kiem: ");
        manegerProduc.searchProduc(name);
    }
}