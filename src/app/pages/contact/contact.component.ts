import { Component } from '@angular/core';

@Component({
  selector: 'page-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {

  nome:string
  sobrenome:string
  sexo:string
  mensagem:string

  constructor(){
    this.nome = "";
    this.sobrenome = "";
    this.sexo = "";
    this.mensagem = "";
  }

  public sentForm():void{
    console.log(`nome: ${this.nome}`)
    console.log(`sobrenome: ${this.sobrenome}`)
    console.log(`sexo: ${this.sexo}`)
    console.log(`mensagem: ${this.mensagem}`)
  }

}
