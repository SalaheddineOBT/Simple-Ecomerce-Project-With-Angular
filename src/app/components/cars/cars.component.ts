import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})

export class CarsComponent implements OnInit {

    constructor(private apiService : ApiService,private cartApi:CartService) { }
    searchKey:string='';
    data:any=null;
    public filterCategory:any;

    ngOnInit():void {
        this.apiService.getMarques().subscribe(
            res =>
            {
                this.data = res
                this.filterCategory=res;
                this.data.forEach((element:any) => {
                    if(element.category === "women's clothing" || element.category === "men's clothing"){
                        element.category = "fashion";
                    }
                    Object.assign(element,{
                        quantity:1,
                        total:element.price
                    });
                    //console.log(this.data)
                });
            },err => console.log(err.message));
        this.cartApi.search.subscribe((v : any) => {
            this.searchKey = v;
        });
    }

    addtocart(i:any){
        this.cartApi.addProduct(i);
    }

    filter(cat:any){
        this.filterCategory=this.data.filter((a:any)=>{
            if(cat === a.category || cat === ''){
                return a;
            }
        });
    }

}
