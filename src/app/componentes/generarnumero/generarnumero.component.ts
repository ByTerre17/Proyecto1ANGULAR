import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-generarnumero',
  templateUrl: './generarnumero.component.html',
  styleUrls: ['./generarnumero.component.css']
})
export class GenerarnumeroComponent implements OnInit {
  
  digito: number
  @Input() entrada : number
  @Input()objetoEntrada = {nombre:"",apellido:""}
  constructor() { }

  ngOnInit(): void {

  }
  obtenAleatorio(): number{
    this.digito = Math.floor(Math.random()* (10))
    return this.digito
  }
}
