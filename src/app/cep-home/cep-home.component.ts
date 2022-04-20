import { Component, OnInit } from '@angular/core';
import { CepModel } from "../Models/cep-model/CepModel";
import { CepServiceService } from '../Services/cep-service.service';

@Component({
  selector: 'app-cep-home',
  templateUrl: './cep-home.component.html',
  styleUrls: ['./cep-home.component.css']
})
export class CepHomeComponent implements OnInit {

Cepvar: CepModel | undefined
Ceppreenchido: any = ''
 

constructor(private service: CepServiceService) { }

    
ngOnInit(): void {}

FindCep(cep: any){
    this.service.FindCep(cep).subscribe((Object)=>{this.Cepvar = Object})}

  }




