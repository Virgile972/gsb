import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { takeUntil } from 'rxjs';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  titre: String ="Connexion";
  login : string ="Dupont";
  mdp: string="";
  estCache: boolean=true;
  lblMessage:string="";


  constructor(private router : Router) { 
    
  }
  
  ngOnInit(): void {
    
  }
  valider() : void{
    if(this.login !="toto" || this.mdp !="titi")
    console.log("ok");
    else
    console.log("erreur");
  }

}
