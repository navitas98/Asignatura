import mongoose from "mongoose"
import {Asignatura} from "../types.ts"
const Schema=mongoose.Schema;
const AsignaturaSchema=new Schema({
    nombre:String,
    aula:String,
    profesor:String,
    horarios:String,
    pacial:String,
    final:String
})
export type AsignaturaModelType=mongoose.Document&Omit<Asignatura,"temario"|"ejercicios"|"examenes_pasados"|"practicas">
export const AsignaturaModel=mongoose.model<AsignaturaModelType>("Asignatura",AsignaturaSchema);