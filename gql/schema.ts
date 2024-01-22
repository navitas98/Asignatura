// The GraphQL schema
export const typeDefs = `#graphql
type Asignatura{
    id:String!
    nombre:String!
    aula:String!
    profesor:String!
    horarios:String!
    temario:Temario!
    ejercicios:[Ejercicio!]!,
    examenes_pasados:[Examen!]!
    practicas:Info_Practicas!
    parcial:String
    final:String
}
type Temario{
    id:ID!
    nombre_temas:[String!]!
    temas_resumidos:[Resumen!]!
}
type Ejercicio{
    id:ID!
    nombre:String!
    ubicacion_enunciado:String!
    ubicacion_resolucion:String
    asignatura:Asignatura
}

type Resumen{
    id:ID!
    nombre:String!
    ubicacion:String
    tema:Temario!
}
type Info_Practicas{
    id:ID!
    numero_practicas:Int!
    nombre_practicas:[String!]!
    practicas_anos_pasados:[Practicas!]!
    practicas:[Practicas!]!
    dias:[String!]!
    asignatura:Asignatura!
}
type Practicas{
    id:ID!
    ano:Int!
    ubicacion_enunciado:String!
    ubicacion_practicas:String!
    dia_practica:String!
}
type Examen{
    id:ID!
    nombre:String!
    ano:Int!
    ubicacion:String!
    asignatura:Asignatura!
}
type Mutation{
    nueva_asignatura(nombre:String!, aula:String!, profesor:String!, horarios:String!, parcial:String, final:String):Asignatura!
    nuevo_temario(nombre_temas:[String!]):Temario!
    nuevo_ejercicio(nombre:String!, ubicacion_enunciado:String!, asignatura:ID!):Ejercicio!
    nuevo_examen(nombre:String!, ano:Int!, ubicacion:String!, asignatura:ID!):Examen!
    nueva_infoPracticas(numero_practicas:Int!,nombre_practicas:[String!]!, dias:[String!]!, asignatura:ID! ):Info_Practicas!
    nueva_Practicas(ano:Int!, ubicacion_enunciado:String!,dia_practica:String!,info_practicas:ID!):Practicas!
    nuevo_resumen(nombre:String!,tema:ID!):Resumen!
}
type Query{
    test:String!
}
`