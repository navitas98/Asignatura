import mongoose from "mongoose"
import {Resumen} from "../types.ts"
const Schema=mongoose.Schema;
const ResumenSchema=new Schema({
    nombre:String,
    ubicacion:{type:String, requiered:false},
    asignatura:Schema.Types.ObjectId
})
export type ResumenModelTye=mongoose.Document&Omit<Resumen,"asignatura">&{
    asignatura:mongoose.Types.ObjectId
}
export const ResumenModel=mongoose.model<ResumenModelTye>("Resumen",ResumenSchema);