import { stringify } from '@angular/compiler/src/util';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Usuario } from 'src/app/clases/usuario';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  variable: string= "texto de prueba"
  numero1: number = 0
  numero2: number = 0
  numero3: number

  usuario_seleccionado

  letras=["a","b","c"]

  usuarios=[
    {nombre:"Juan",apellido:"Perez"},
    {nombre:"Carla",apellido:"Ples"},
  ]

  usuarioselecionado(nombre, apellido){
    this.usuario_seleccionado= nombre + " " + apellido  
  }
  usuarios2: Usuario[]=[
    {nombre:"Juan",apellido:"Perez"},
    {nombre:"Carla",apellido:"Ples"},
  ]
  usuario3: Usuario = new Usuario("Juan","Perez")

  constructor() { }
  ngOnDestroy(): void {
    alert("Hasta luego")
  }

  ngOnInit(): void {
  }

}
