import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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

  constructor() { }

  ngOnInit(): void {
  }

}
