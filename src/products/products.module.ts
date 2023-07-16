import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ProductSchema } from "./schema/products.schema";
import { ProductsController } from "./products.controller";
import { ProductsService } from "./products.service";

@Module({
    imports:[
        MongooseModule.forFeature([{name:'Products',schema:ProductSchema}])
    ],
    controllers:[ProductsController],
    providers:[ProductsService]
})
export class ProductsModule{}