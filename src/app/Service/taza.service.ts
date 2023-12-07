import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http'
import { environment } from '../environment/environment';
@Injectable({
  providedIn: 'root'
})
export class TazaService {

  constructor(private http: HttpClient) { }

  getCotizador(monto: number, plazo: number){
    return this.http.get(environment.base_url, {
      params:{monto:monto, plazo: plazo}
    })
  }
}
