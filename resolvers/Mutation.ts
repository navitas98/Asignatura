import { AsignaturaModelType,AsignaturaModel } from "../db/Asignatura.ts";
import { TemarioModel, TemarioModelType } from "../db/Temario.ts";
import { EjercicioModel, EjercicioModelType } from "../db/Ejercicios.ts";
import { ExamenModel, ExamenModelType } from "../db/Examen.ts";
import { Info_PracticasModel, Info_PracticasModelType } from "../db/Info_Practicas.ts";
import { PracticaModel, PracticaModelType } from "../db/Practicas.ts";
import { GraphQLError } from "graphql";
import { ResumenModel, ResumenModelTye } from "../DB/Resumen.ts";
export const Mutation={
    nueva_asignatura:async(_:unknown,args:{nombre:string, aula:string, profesor:string, horarios:string}):Promise<AsignaturaModelType>=>{
        const asignatura={
            nombre:args.nombre,
            aula:args.aula,
            profesor:args.profesor,
            horarios:args.horarios,
        }
        const nueva_asignatura=await AsignaturaModel.create(asignatura);
        return nueva_asignatura;
    },
    nuevo_temario:async(_:unknown,args:{nombre_temas:string[]}):Promise<TemarioModelType>=>{
        const temario={
            nombre_temas:args.nombre_temas.map((e:string)=>e)
        }
        const nuevo_temario=await TemarioModel.create(temario);
        return nuevo_temario
    },
    nuevo_ejercicio:async(_:unknown,args:{nombre:string, ubicacion_enunciado:string,asignatura:string}):Promise<EjercicioModelType>=>{
        const {nombre, ubicacion_enunciado,asignatura}=args;
        const asignaturaID=await AsignaturaModel.findById(asignatura);
        if(!asignaturaID){throw new GraphQLError("No existe el id de la asignatura")};
        const ejercicios={
            nombre,
            ubicacion_enunciado,
            asignatura
        }
        const nuevo_ejercicio=await EjercicioModel.create(ejercicios);
        return nuevo_ejercicio;

    },
    nuevo_examen:async(_:unknown,args:{nombre:string, ano:number, ubicacion:string, asignatura:string}):Promise<ExamenModelType>=>{
        const {nombre, ano, ubicacion, asignatura}=args;
        const asignaturaID=await AsignaturaModel.findById(asignatura);
        if(!asignaturaID){throw new GraphQLError("No existe el id de la asignatura")};
        const examen={
            nombre,
            ano,
            ubicacion,
            asignatura
        }
        const nuevo_examen=await ExamenModel.create(examen);
        return nuevo_examen;
    },
    nueva_infoPracticas:async(_:unknown, args:{numero_practicas:number, nombre_practicas:string[],dias:string[],asignatura:string}):Promise<Info_PracticasModelType>=>{
        const {numero_practicas, nombre_practicas,dias, asignatura}=args;
        const asignaturaID=await AsignaturaModel.findById(asignatura);
        if(!asignaturaID)throw new GraphQLError("El id de la asignatura no existe");
        const Info_Practicas={
            numero_practicas,
            nombre_practicas:nombre_practicas.map((e:string)=>e),
            dias:dias.map((e)=>e),
            asignatura
        }
        const nueva_infoPracticas=await Info_PracticasModel.create(Info_Practicas);
        return nueva_infoPracticas;
    },
    nueva_Practicas:async(_:unknown,args:{ano:number, ubicacion_enunciado:string,dia_practicas:string,info_practicas:string }):Promise<PracticaModelType>=>{
        const {ano, ubicacion_enunciado,dia_practicas,info_practicas}=args;
        const info_PracticasID=await Info_PracticasModel.findById(info_practicas);
        if(!info_PracticasID)throw new GraphQLError("El id de la informacion de las practicas no existe");
        const practicas={
            ano,
            ubicacion_enunciado,
            dia_practicas,
            info_practicas
        }
        const nueva_Practicas=await PracticaModel.create(practicas);
        return nueva_Practicas;
    },
    nuevo_resumen:async(_:unknown,args:{nombre:String, tema:string}):Promise<ResumenModelTye>=>{
        const {nombre, tema}=args;
        const temaId=await TemarioModel.findById(tema);
        if(!temaId)throw new GraphQLError("El id del tema es erronea");
        const resumen={
            nombre,
            tema
        }
        const nuevo_resumen=await ResumenModel.create(resumen);
        return nuevo_resumen;

    }
}