import mongoose from "mongoose"
import {Temario} from "../types.ts"
const Schema=mongoose.Schema;
const TemarioSchema=new Schema({
    nombre_temas:[String],
})
export type TemarioModelType=mongoose.Document&Omit<Temario,"id">
export const TemarioModel=mongoose.model<TemarioModelType>("Temario", TemarioSchema);
