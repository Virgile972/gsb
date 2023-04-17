import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  dataService: any;
  lesMedecins!: Array<any>;
  nomMedecins:any;
  estCacheMenu:any;
  constructor() { }

  ngOnInit(): void {
  }
 
  charger(){

  }
  majMedecins(){}

  derniersRapport(){}
}
