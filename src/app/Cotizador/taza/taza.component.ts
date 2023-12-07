import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { TazaService } from 'src/app/Service/taza.service';

@Component({
  selector: 'app-taza',
  templateUrl: './taza.component.html',
  styleUrls: ['./taza.component.css']
})
export class TazaComponent implements OnInit {

  // formTaza!: FormGroup
  monto!: number;
  plazo!: number;
  taza = 0.5;
  valRend = 0;
  montoRecib =0;
  constructor(private service: TazaService, private formBuilder: FormBuilder){
    
  }
  ngOnInit(): void {

  }

  getTaza(){
    if((this.plazo<=0 || this.plazo>=13) || (this.monto <200  || this.monto >100000)){
      window.alert("Error en la inserción")
    }else{
      this.service.getCotizador(this.monto, this.plazo).subscribe(
        {
          next: (data: any) =>{
            
            this.valRend = data.valorRendimiento
            this.montoRecib = data.montoRecibir
          },
          error: () =>{
  
          }
        }
      )
    }
    
  }


}
