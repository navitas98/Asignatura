import mongoose from "mongoose"
import {Info_Practicas} from "../types.ts"
const Schema=mongoose.Schema;
const Info_PracticasSchema=new Schema({
    numero_practicas:Number,
    nombre_practicas:[String],
    dias:[String],
    asignatura:Schema.Types.ObjectId
})
export type Info_PracticasModelType=mongoose.Document&Omit<Info_Practicas,"practicas_anos_pasados"|"practicas"|"asignatura">&{
    asignatura:mongoose.Types.ObjectId
}
export const Info_PracticasModel=mongoose.model<Info_PracticasModelType>("Info Practica",Info_PracticasSchema);
