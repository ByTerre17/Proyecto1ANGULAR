import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/servicios/user.service';
import { dniValido, telefonoValido } from 'src/app/validaciones/validaciones';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})

export class RegisterComponent implements OnInit {
  formRegister= this.fb.group({
    nombre:[''],
    apellidos:[''],
    password:['', [Validators.required, Validators.minLength(4)]],
    password2:['', [Validators.required]],
    email:['', [Validators.required, Validators.email]],
    telefono:[undefined,[telefonoValido()]],
    dni:['', [Validators.required, dniValido()]]
  })
  constructor(private fb:FormBuilder, private servicioUsuario:UserService, private irHacia:Router) { }
  errorhttp:String=""
  ngOnInit(): void {
    
  }
submit(): void{
  if (this.formRegister.value.password == this.formRegister.value.password2){
    this.servicioUsuario.registrar(this.formRegister.value).subscribe(
      respuesta =>{
        console.log(respuesta)
        this.servicioUsuario.guardarToken(respuesta)
        this.irHacia.navigate(['/perfil'])
      },
      error => this.errorhttp=error.error.error
    )
  }
  else alert('Las contraseñas no coinciden')
}
error(error: String ){
  if(error!="null"){
    return error
  }
}
}
