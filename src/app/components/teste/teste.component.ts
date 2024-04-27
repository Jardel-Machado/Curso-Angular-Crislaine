import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-teste',
  standalone: true,
  imports: [],
  templateUrl: './teste.component.html',
  styleUrl: './teste.component.css',
})
export class TesteComponent {
  @Input() mensagemRecebida!: string;

  @Output() mensagemEnviada = new EventEmitter<string>();

  enviarParaOPai(){
    this.mensagemEnviada.emit("Filho enviando msg pro Pai!")
  };
}
