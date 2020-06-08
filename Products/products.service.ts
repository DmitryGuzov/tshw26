import { Injectable } from "@nestjs/common";
import {product} from 'src/product';
@Injectable()
export class ProductsService { 
   
    getProduct(id: number){
        return product.filter(product =>product.id === +id);
    }
    getProducts(){
        return product;
    }
}