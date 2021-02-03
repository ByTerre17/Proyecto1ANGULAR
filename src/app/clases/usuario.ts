export class Usuario {
    nombre?:String
    apellido?:String
    edad?:number
    constructor(nombre_ent?:string,apellido_ent?:string,edad_ent?:number){
        this.nombre = nombre_ent
        this.apellido = apellido_ent
        this.edad = edad_ent
    }
}
