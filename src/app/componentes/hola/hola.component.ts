import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-hola',
  templateUrl: './hola.component.html',
  styleUrls: ['./hola.component.css']
})
export class HolaComponent implements OnInit {
  nombre: String
  apellidos: String
  constructor(private rutaActiva: ActivatedRoute, private irHacia:Router) { }

  ngOnInit(): void {
    this.nombre = this.rutaActiva.snapshot.paramMap.get("nombre")
    this.apellidos = this.rutaActiva.snapshot.paramMap.get("apellidos")
  }
  volverAAbout(): void{
    this.irHacia.navigate(['/about'])
  }

}
