import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class CartService{
    public cartItem:any=[];
    public productList=new BehaviorSubject<any>([]);
    public search=new BehaviorSubject<string>("");

    constructor(){};

    getProducts(){
        return this.productList.asObservable();
    }

    setProduct(p:any){
        this.cartItem.push(...p);
        this.productList.next(p);
    }

    addProduct(p:any){
        this.cartItem.push(p);
        this.productList.next(this.cartItem);
        this.getTotalPrice();
        console.log(this.cartItem)
    }

    getTotalPrice():number{
        let totla=0;
        this.cartItem.map((a:any)=>{
            totla+=a.total;
        });
        return totla;
    }

    removeCartItem(p:any){
        this.cartItem.map((a:any,i:any)=>{
            if(p.id == a.id){
                this.cartItem.splice(i,1);
            }
        });
        this.productList.next(this.cartItem);
    }

    removeAll(){
        this.cartItem=[];
        this.productList.next(this.cartItem);
    }
};