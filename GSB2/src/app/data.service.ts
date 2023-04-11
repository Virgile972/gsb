import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError , retry } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPI ="http://localhost/restGSB"
  visiteur: any;

  constructor(private http: HttpClient) { }

  public connexion(login:string ,mdp:string){
    let url =this.urlAPI+ '/connexion?login=' + login +"&mdp=" + mdp;
    let req = this.http.get<string>(url);
    return req;
  }

}
