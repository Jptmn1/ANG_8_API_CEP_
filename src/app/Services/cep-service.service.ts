import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CepModel } from "../Models/cep-model/CepModel";


@Injectable({
  providedIn: 'root'
})
export class CepServiceService {

 BaseUrl: String = "https://viacep.com.br/ws"
  
  constructor(

    private http : HttpClient

  ) {}

FindCep(cep: String):Observable<CepModel>{
  return this.http.get<CepModel>(`${this.BaseUrl}/${cep}/json/`)
}

}

