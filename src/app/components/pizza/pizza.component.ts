
import { HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PizzaService } from 'app/services/pizza.service';


@Component({
  selector: 'app-pizza',
  templateUrl: './pizza.component.html',
  styleUrls: ['./pizza.component.css'],
  providers: [PizzaService]

})
export class PizzaComponent implements OnInit {
  title= 'proxy';
 
  constructor(
    private route:ActivatedRoute, 
    private _pizzaservice: PizzaService
  ) {}

  ngOnInit(){
  
  this._pizzaservice.getAll().subscribe(response => console.log(response))
  
}
  



}
