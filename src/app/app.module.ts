import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LOCALE_ID, NgModule } from '@angular/core';


import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './componentes/home/home.component';
import { AboutComponent } from './componentes/about/about.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavegacionComponent } from './componentes/navegacion/navegacion.component';
import { LoteriaComponent } from './componentes/loteria/loteria.component';
import { GenerarnumeroComponent } from './componentes/generarnumero/generarnumero.component';
import { CalculadoraComponent } from './componentes/calculadora/calculadora.component';
import { MultiplicarComponent } from './componentes/multiplicar/multiplicar.component';
import { HolaComponent } from './componentes/hola/hola.component';
import { DniPipe } from './tuberias/dni.pipe';
import { DniComponent } from './componentes/dni/dni.component';
import { EstructurasComponent } from './componentes/estructuras/estructuras.component';
import { FormularioClaseComponent } from './componentes/formulario-clase/formulario-clase.component';
import { CrudLocalComponent } from './componentes/crud-local/crud-local.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { CrudComponent } from './componentes/crud/crud.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { PerfilComponent } from './componentes/auth/perfil/perfil.component';
import { EnviarTokenInterceptor } from './auth/enviar-token.interceptor';
import { ListaPerfilesComponent } from './componentes/lista-perfiles/lista-perfiles.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    NavegacionComponent,
    LoteriaComponent,
    GenerarnumeroComponent,
    CalculadoraComponent,
    MultiplicarComponent,
    HolaComponent,
    DniPipe,
    DniComponent,
    EstructurasComponent,
    FormularioClaseComponent,
    CrudLocalComponent,
    RegistroComponent,
    CrudComponent,
    LoginComponent,
    RegisterComponent,
    PerfilComponent,
    ListaPerfilesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:LOCALE_ID, useValue:"es"},
    {provide: HTTP_INTERCEPTORS, useClass:EnviarTokenInterceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
