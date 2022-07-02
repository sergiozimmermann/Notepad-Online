import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const baseUrl = 'http://localhost:5000/editarNota'

@Injectable({
  providedIn: 'root'
})
export class EditarNotaService {

  constructor(private httpClient: HttpClient) { }

  public obterNota(cdNota: number) {
    return this.httpClient.get(`${baseUrl}/obterNota/${cdNota}`)
  }

  public editarNota(nota: any) {
    return this.httpClient.put(`${baseUrl}/editarNota`, nota)
  }
}
