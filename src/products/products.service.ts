import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Products } from "./schema/products.schema";
import * as mongoose from "mongoose";
import { Query } from 'express-serve-static-core';


@Injectable()
export class ProductsService{
    constructor (
        @InjectModel(Products.name)
        private productsModel:mongoose.Model<Products>
    ){}

    async findAll(query:Query):Promise<Products[]>{
        const products=await this.productsModel.find()
        return products;
    }
}