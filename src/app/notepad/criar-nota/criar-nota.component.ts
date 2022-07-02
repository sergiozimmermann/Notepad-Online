import { Component, OnInit } from '@angular/core';
import { CriarNotaService } from './services/criar-nota.service';

@Component({
  selector: 'app-criar-nota',
  templateUrl: './criar-nota.component.html',
  styleUrls: ['./criar-nota.component.scss']
})
export class CriarNotaComponent implements OnInit {

  constructor(private criarNotaService: CriarNotaService) { }

  ngOnInit() {
  }

  public criarNota() {
    const inputTitulo = (document.getElementById('inputTitulo') as HTMLInputElement).value;
    const inputDescricao = (document.getElementById('inputDescricao') as HTMLInputElement).value;
    if (inputTitulo) {
      this.criarNotaService.criarNota({ inputTitulo: inputTitulo, inputDescricao: inputDescricao }).subscribe((retorno: any) => {
        console.log('criado com sucesso');
      });
    }
  }
}
