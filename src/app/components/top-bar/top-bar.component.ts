import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {

  query = "search..."
  isAuthenticated = false;
  totalCartItems = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    const username =localStorage.getItem('user');
    if(username){
      this.isAuthenticated = true;
    }
    this.cartService.cartItems.subscribe(items => {
      this.totalCartItems = items.length;
    })
  }

  logout(){
    localStorage.clear();
    this.isAuthenticated = false;
  }

  showCartData($event: any){
    console.log("button is clicked!");
    console.log("query value = " + this.query);
    if($event) {
       console.log($event.target);
       console.log($event.target.value);
    }
 }

}
