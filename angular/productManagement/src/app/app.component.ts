import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  products = [];

  onSubmit(product){
    this.products.push(product);
    console.log(this.products);
  }
}


// USE SERVICE TO PUSH PRODUCTS ON
// INPUT/OUTPUT WILL NOT BE SUFFICIENT 
