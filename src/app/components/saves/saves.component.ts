import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-saves',
  templateUrl: './saves.component.html',
  styleUrls: ['./saves.component.css']
})
export class SavesComponent implements OnInit {

    public product:any=[];
    public totalGrnd!:number;

    constructor(private cartApi:CartService) { }

    ngOnInit(): void {
        this.cartApi.getProducts().subscribe(res => {
            this.product=res;
            this.totalGrnd=this.cartApi.getTotalPrice();
        });
    }

    deleteItem = (item:any) => this.cartApi.removeCartItem(item);

    emptyTable = () => this.cartApi.removeAll();

}
