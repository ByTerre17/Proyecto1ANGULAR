import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { telefonoValido } from 'src/app/validaciones/tlf-valido';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  FormRegister: FormGroup = new FormGroup({
    nombre: new FormControl('',[Validators.required]),
    apellidos: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    dni: new FormControl('',[Validators.required]),
    telefono: new FormControl(undefined ,[Validators.required]),
  })
  FormRegister2 = this.fb.group({
    nombre: ['',[Validators.required]],
    apellidos: ['',[Validators.required]],
    password: ['',[Validators.required]],
    email: ['',[Validators.required]],
    dni: ['',[Validators.required]],
    telefono: [undefined,[Validators.required,telefonoValido]]
  })
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
  }
  evaluaForm(): void{
    alert("Evaluando")
    console.log(this.FormRegister.getRawValue)
    if (this.FormRegister.valid) console.log("Verificado")
    else console.log("Esta mal")
  }
  get dni(){
    return this.FormRegister.get("dni")
  }
  get nombre(){
    return this.FormRegister.get("nombre")
  }
  get apellidos(){
    return this.FormRegister.get("apellidos")
  }
  get password(){
    return this.FormRegister.get("password")
  }
  get email(){
    return this.FormRegister.get("email")
  }
  
  get telefono(){
    return this.FormRegister.get("telefono")
  }
}
