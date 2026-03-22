import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListaTarefas } from './componentes/lista-tarefas/lista-tarefas';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet,ListaTarefas],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('projeto_lista_tarefas');
}
