import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:5000/criaNota'

@Injectable({
  providedIn: 'root'
})
export class CriarNotaService {

  constructor(private httpClient: HttpClient) { }

  public criarNota(nota: any) {
    return this.httpClient.post(`${baseUrl}/criarNota`, nota)
  }

}
