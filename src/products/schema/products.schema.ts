import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

@Schema({
    timestamps:true
})

export class Products{
    @Prop()
    productName:string;

    @Prop()
    desc:string;
}

export const ProductSchema=SchemaFactory.createForClass(Products)