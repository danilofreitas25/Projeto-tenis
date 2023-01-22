import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tenis } from '../model/tenis.model';

@Injectable({
  providedIn: 'root'
})
export class TenisService {

  HttpOptions = {
    headers: new HttpHeaders({'Content-Type' : 'application/json'})
  }
  readonly API = "http://localhost:3000/tenis/";

  constructor(private http: HttpClient) { }

  getTenis(){
    return this.http.get<Tenis[]>(this.API);
  }

  getOneTenis(id:number){
    return this.http.get<Tenis>(this.API + id);
  }

  favoritoTenis(favorito: Tenis){
    return this.http.put(this.API + favorito.id, JSON.stringify(favorito), this.HttpOptions).subscribe();
  }

  carrinhoTenis(carrinho: Tenis){
    return this.http.put(this.API + carrinho.id, JSON.stringify(carrinho), this.HttpOptions).subscribe();
  }
}
