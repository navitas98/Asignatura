export type Asignatura={
    id:string,
    nombre:string,
    aula:string,
    profesor:string,
    horarios:string,
    temario:Temario,
    ejercicios:Ejercicio[],
    examenes_pasados:Examen[],
    practicas:Info_Practicas,
    parcial?:string,
    final?:string
}
export type Temario={
    id:string,
    nombre_temas:string[],
    temas_resumidos:Resumen[],
}
export type Ejercicio={
    id:string,
    nombre:string,
    ubicacion_enunciado:string,
    ubicacion_resolucion?:string,
    asignatura:Asignatura
}
export type Examen={
    id:string,
    nombre:string,
    ano:number,
    ubicacion:string,
    asignatura:Asignatura
}
export type Resumen={
    id:string,
    nombre:string,
    ubicacion?:string,
    tema:Temario
}
export type Info_Practicas={
    id:string,
    numero_practicas:number,
    nombre_practicas:string[],
    practicas_anos_pasados:Practicas[],
    practicas:Practicas[]
    dias:string[],
    asignatura:Asignatura
}
export type Practicas={
    id:string,
    ano:number,
    ubicacion_enunciado:string,
    ubicacion_practicas:string,
    dia_practica:string,
    info_practicas:Info_Practicas
}