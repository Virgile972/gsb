import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConnectableObservable, takeUntil } from 'rxjs';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit {
  titre: String ="Connexion";
  login : string ="";
  mdp: string="";
  estCache: boolean=true;
  lblMessage:string="";
  visiteur : any ;

  constructor(private router : Router, private dataService :DataService) { 
    
  }
  

  valider() : void{

 this.dataService.connexion(this.login,this.mdp).subscribe({
  next : (data) =>{
    this.visiteur =data;
    this.dataService.visiteur =data;
    console.log(data);
    console.log("vi" +  JSON.stringify(this.visiteur));
    console.log("vi2" +JSON.stringify(this.dataService.visiteur));
    this.router.navigate(['accueil']);
    console.log("identifiant"+this.login+"mot de passe "+this.mdp)

    this.lblMessage = "";
    this.estCache = true ;

  },
  error :(error) =>{
  console.log("error :",JSON.stringify(error));
  console.log("error");
  console.log("identifiant"+this.login+"mot de passe "+this.mdp)
  this.lblMessage = "votre identifiant ou mot de passe est incorrecte ";
  this.estCache =false;
  }


 })


    /*if(this.login !="toto" || this.mdp !="titi")
    console.log("ok");
    else
    console.log("erreur");
  }*/

}
ngOnInit(): void {
    
}}