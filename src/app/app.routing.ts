import { NgModule } from "@angular/core";

import { Routes,RouterModule } from "@angular/router";


import { HomeComponent } from "./components/home/home.component";
import { ProductDetailComponent } from "./components/product-detail/product-detail.component";
import { ProductListComponent } from "./components/product-list/product-list.component";
import { AddProductComponent } from "./components/add-product/add-product.component";

const appRoutes: Routes= [
    {path:'',component:HomeComponent},
    {path:'home',component:HomeComponent},
    {path:'products', component:ProductListComponent},
    {path:'product', component:ProductDetailComponent},
    {path:'pedido', component:AddProductComponent}
];


@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]

} )

export class appRouterModule{

constructor(){

}

}