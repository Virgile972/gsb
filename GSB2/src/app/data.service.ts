import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private urlAPI ="http://localhost/restGSB"

  constructor(private http: HttpClient) { }

  public connexion(login:string ,mdp:string){
    let url =this.urlAPI+ '/connexion?login=' + login +"&mdp=" + mdp;
    let req = this.http.get<string>(url);
    return req;
  }

}
