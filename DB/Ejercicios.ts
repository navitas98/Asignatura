import mongoose from "mongoose"
import {Ejercicio} from "../types.ts"
const Schema=mongoose.Schema;
const EjercicioSchema=new Schema({
    nombre:String,
    ubicacion_enunciado:String,
    ubicacion_resolucion:{type:String, requiered:false},
    asignatura: Schema.Types.ObjectId
})
export type EjercicioModelType=mongoose.Document&Omit<Ejercicio,"asignatura">&{
    asignatura:mongoose.Types.ObjectId
}
export const EjercicioModel=mongoose.model<EjercicioModelType>("Ejercicio",EjercicioSchema);