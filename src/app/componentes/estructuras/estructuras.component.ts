import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.css']
})
export class EstructurasComponent implements OnInit {
verdad: boolean = false;
edad: number;
num1:number=0;
num2:number=0;
operador:string="";
operaciones:string[] = ['sumar', 'restar', 'multiplicar', 'dividir']
  constructor() { }

  ngOnInit(): void {
  }

}
