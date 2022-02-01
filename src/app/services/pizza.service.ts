import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Pizza } from '../models/pizza';



@Injectable()

export class PizzaService {

    urlApi:string="http://localhost:8000/products/list";
    
        constructor (private _http:HttpClient){}
    
       getAll():Observable <any>{
           return this._http.get<any> (`${this.urlApi}`)
       }
    }