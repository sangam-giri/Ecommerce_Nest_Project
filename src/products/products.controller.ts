import { Controller, Get, Query } from "@nestjs/common";
import { ProductsService } from "./products.service";
import { Products } from "./schema/products.schema";
import { Query as ExpressQuery } from 'express-serve-static-core';


@Controller()
export class ProductsController{
    constructor (private productsService:ProductsService){}

    @Get()
    async getAllProducts(@Query() query:ExpressQuery):Promise<Products[]>{
        return this.productsService.findAll(query);
    }
}