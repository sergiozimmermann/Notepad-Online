import { Component, OnInit } from '@angular/core';
import { EditarNotaService } from './services/editar-nota.service';

@Component({
  selector: 'app-editar-nota',
  templateUrl: './editar-nota.component.html',
  styleUrls: ['./editar-nota.component.css']
})
export class EditarNotaComponent implements OnInit {

  constructor(private editarNotaService: EditarNotaService) { }

  ngOnInit() {
  }

  public obterNota() {
    this.editarNotaService.obterNota(1).subscribe((retorno: any) => {
      (document.getElementById('inputTitulo') as HTMLInputElement).value = retorno.inputTitulo;
      (document.getElementById('inputDescricao') as HTMLInputElement).value = retorno.inputDescricao;
    })
  }

  public editarNota() {
    const inputTitulo = (document.getElementById('inputTitulo') as HTMLInputElement).value;
    const inputDescricao = (document.getElementById('inputDescricao') as HTMLInputElement).value;
    if (inputTitulo) {
      this.editarNotaService.editarNota({ inputTitulo: inputTitulo, inputDescricao: inputDescricao }).subscribe((retorno: any) => {
        console.log('editado com sucesso');
      });
    }
  }

}
