import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

    constructor(private cartApi:CartService,private router:Router,private routerAct:ActivatedRoute,) { };
    
    public itemCount : number = 0;
    public binding : string = '';

    ngOnInit(): void {
        this.cartApi.getProducts().subscribe(res => {
            this.itemCount=res.length;
        });
    }

    searchFor(e:Event){
        //console.log((e.target as any).value);
        this.binding=(e.target as HTMLInputElement).value;
        // console.log(this.binding)
        this.cartApi.search.next(this.binding);
    }

    navigateToCard = () => this.router.navigate(['saves'],{relativeTo:this.routerAct});
}
