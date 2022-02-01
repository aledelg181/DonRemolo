import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { appRouterModule } from './app.routing';


import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { Router, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { CardsComponent } from './components/cards/cards.component';
import { ItemsNavComponent } from './components/items-nav/items-nav.component';
import { AddProductComponent } from './components/add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HomeComponent,
    ProductListComponent,
    ProductDetailComponent,
    CardsComponent,
    ItemsNavComponent,
    AddProductComponent,
    
  ],
  imports: [
    BrowserModule,
   appRouterModule,
   RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
