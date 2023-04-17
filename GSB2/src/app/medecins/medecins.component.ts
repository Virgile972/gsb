import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-medecins',
  templateUrl: './medecins.component.html',
  styleUrls: ['./medecins.component.scss']
})
export class MedecinsComponent implements OnInit {
  lesMedecins!: Array<any>; 
  nomMedecin : any;
  estCacheMenu :any ;
  derniersRapport :any ;
  majMedecins : any ;
  nomMedecins:any ;
  medecin : any;
  idMedecin: any;
  date : any ;
  motif : any;
  bilan : any;
  nomvisiteur : any ;
  afficherRapports :any;
  lesRapports : any ;
  afficherMedecin :any; 


  constructor(private router : Router, private dataService :DataService) { 
    
  }
  

  ngOnInit(): void {
  }
  
  charger(){
    this.dataService.chargerMedecins(this.nomMedecins).subscribe({
      next :(data) => {
        this.lesMedecins = data;
        
      },
      error : (error)=> {
        console.log(error)
      }
    })
    
   }

   selectionner(leMedecin :any){
    this.medecin= leMedecin;
    this.nomMedecin= leMedecin.nom +" " +leMedecin.prenom+ ";dep: "+this.medecin.departement;
    this.idMedecin =leMedecin.id;
    
  }

   public dernierRapports(){
    this.dataService.chargerRapports(this.medecin.id).subscribe({
   next: (data ) => {
    const lesRapports = data ;
    this.lesRapports =Array.of(data);
    console.log(lesRapports);
   },
  error : (error) =>{
   console.log( error) ;
   }
   
    })
 }
 majMedecin() :void{
this.afficherRapports= false; 
this.afficherMedecin=true;
this.afficherMessage =false;
 }
 valider():void{ 
  this.afficherMessage=true;
  this.dataService.majMedecin(this.medecin.id,this.medecin.adresse,this.medecin.tel,this.medecin.specialitecomplementaire).subscribe
  (data)=>{this.lblMessage="Enregistrement effectué";
},
(error)=>{
  this.lblMessage="Merci de réessayer plus tard";
}); 
 
}
}
