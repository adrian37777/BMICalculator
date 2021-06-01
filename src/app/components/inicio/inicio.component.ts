import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {

  public edad = 25;
  public peso = 60;
  public altura = 170;
  public sexo='masculino';


  constructor(private router:Router){}


  cambiarAltura(event:any){

    this.altura = event.target.value;

  };

  masculino(){
    this.sexo='masculino';

  }

  femenino(){ 
    this.sexo='femenino';

  }

  calcularBMI(){
    // vamos a hacer unos calculos

    const BMI = this.peso/ Math.pow(this.altura/100, 2 );

    this.router.navigate(['/resultado', BMI.toFixed(1)]);

  }


}
