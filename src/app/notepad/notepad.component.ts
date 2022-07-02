import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notepad',
  templateUrl: './notepad.component.html',
  styleUrls: ['./notepad.component.scss']
})
export class NotepadComponent implements OnInit {

  public teste = [
    { id: 1, titulo: 'a', descricao: 'aaaaaa' },
    { id: 2, titulo: 'b', descricao: 'bbbbbb' },
    { id: 3, titulo: 'c', descricao: 'cccccc' },
    { id: 4, titulo: 'd', descricao: 'dddddd' },
    { id: 5, titulo: 'e', descricao: 'jkhdsaffhjkadsjkhfdasjkfdjkhasdkjhjkhdsajhkfdsjkhldasfjkhafdsjkhdfsajkhlafdsjkhlfdaskjhlfdsajkhlfdasjkhlfdasjklfdasjkadfskjdfaskjdafskjjfdkhsajkhlfdsakjhlfdaskjhjkhdsaffhjkadsjkhfdasjkfdjkhasdkjhjkhdsajhkfdsjkhldasfjkhafdsjkhdfsajkhlafdsjkhlfdaskjhlfdsajkhlfdasjkhlfdasjklfdasjkadfskjdfaskjdafskjjfdkhsajkhlfdsakjhlfdaskjhjkhdsaffhjkadsjkhfdasjkfdjkhasdkjhjkhdsajhkfdsjkhldasfjkhafdsjkhdfsajkhlafdsjkhlfdaskjhlfdsajkhlfdasjkhlfdasjklfdasjkadfskjdfaskjdafskjjfdkhsajkhlfdsakjhlfdaskjhjkhdsaffhjkadsjkhfdasjkfdjkhasdkjhjkhdsajhkfdsjkhldasfjkhafdsjkhdfsajkhlafdsjkhlfdaskjhlfdsajkhlfdasjkhlfdasjklfdasjkadfskjdfaskjdafskjjfdkhsajkhlfdsakjhlfdaskjhjkhdsaffhjkadsjkhfdasjkfdjkhasdkjhjkhdsajhkfdsjkhldasfjkhafdsjkhdfsajkhlafdsjkhlfdaskjhlfdsajkhlfdasjkhlfdasjklfdasjkadfskjdfaskjdafskjjfdkhsajkhlfdsakjhlfdaskjhjkhdsaffhjkadsjkhfdasjkfdjkhasdkjhjkhdsajhkfdsjkhldasfjkhafdsjkhdfsajkhlafdsjkhlfdaskjhlfdsajkhlfdasjkhlfdasjklfdasjkadfskjdfaskjdafskjjfdkhsajkhlfdsakjhlfdaskjhjkhdsaffhjkadsjkhfdasjkfdjkhasdkjhjkhdsajhkfdsjkhldasfjkhafdsjkhdfsajkhlafdsjkhlfdaskjhlfdsajkhlfdasjkhlfdasjklfdasjkadfskjdfaskjdafskjjfdkhsajkhlfdsakjhlfdaskjhjkhdsaffhjkadsjkhfdasjkfdjkhasdkjhjkhdsajhkfdsjkhldasfjkhafdsjkhdfsajkhlafdsjkhlfdaskjhlfdsajkhlfdasjkhlfdasjklfdasjkadfskjdfaskjdafskjjfdkhsajkhlfdsakjhlfdaskjh' },
  ];

  constructor() { }

  ngOnInit() {
  }

  public testeee(titulo: any) {
    console.log(titulo);
  }

}