import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TesteComponent } from './components/teste/teste.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, TesteComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularCursoAula';

  nomes = ['Caio', 'Fernanda', 'Lorena', 'Matheus', 'Lucas'];

  vaiAparecer: boolean = false;

  fonte = 40;
  cor = 'blue';
  classe = 'letraMaiuscula';

  mensagemDoPai: string = 'Eu estou te olhando!';

  meMostre1(){
    alert('Estou mostrando');
  }

  meMostre(mensagem: string){
    alert(mensagem);
  }
}
