import mongoose from "mongoose"
import {Examen} from "../types.ts"
const Schema=mongoose.Schema;
const ExamenSchema=new Schema({
    nombre:String,
    ano:Number,
    ubicacion:String,
    asignatura:Schema.Types.ObjectId
})
export type ExamenModelType=mongoose.Document&Omit<Examen,"asignatura">&{
    asignatura:mongoose.Types.ObjectId
}
export const ExamenModel=mongoose.model<ExamenModelType>("Examen",ExamenSchema);