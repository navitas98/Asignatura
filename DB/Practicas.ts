import mongoose from "mongoose"
import {Practicas} from "../types.ts"
const Schema=mongoose.Schema;
const PracticaSchema=new Schema({
    ano:Number,
    ubicacion_enunciado:String,
    ubicacion_practicas:{type:String, requiered:false},
    dia_practica:String,
    info_practicas:Schema.Types.ObjectId
})
export type PracticaModelType=mongoose.Document&Omit<Practicas,"info_Practicas">&{
    info_practicas:mongoose.Types.ObjectId
}
export const PracticaModel=mongoose.model<PracticaModelType>("Practica",PracticaSchema)