import { Controller, Get, Inject, Param } from "@nestjs/common";
import { ProductsService } from "./products.service";


@Controller('products')
export class ProductsController {    
    constructor(private readonly productsService: ProductsService) {}
    // constructor(@Inject(ProductsService) private readonly productsService: ProductsService) {}

    @Get('')
    getProducts() {
        return this.productsService.getProducts();
    }

    @Get('/:id')
    getProduct(@Param('id') id: number) {
        return this.productsService.getProduct(id);
    }
}