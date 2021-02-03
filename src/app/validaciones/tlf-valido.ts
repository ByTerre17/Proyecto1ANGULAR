import { AbstractControl, Validator, ValidatorFn } from "@angular/forms";

export function telefonoValido(): ValidatorFn{
    return(telefono: AbstractControl):{[key:string]:any}|null=>{
        const numTelefono = telefono.value;
        if(numTelefono>999999999 || numTelefono<60000000 || numTelefono.tipeof!==Number){
            return {telefono: "invalido"};
        }else{
            return null
        }
    }
}
export function dniValido(): ValidatorFn{
    return(dni: AbstractControl):{[key:string]:any}|null=>{
        const letras = "TRWAGMYFPDXBNJZSQVHLCKET";
        const numero = dni.value.match(/\d+/g);
        let letra = dni.value.match(/[a-z]/gi);
        const letra_eval = letras [numero%23]
        if(letra == null) return {dni: "falta la letra"};
        else letra == letra.join().toUpperCase();
        if(letra_eval != letra) return {dni: "invalido"};
        else return
    }
}
