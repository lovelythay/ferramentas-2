import { Component } from '@angular/core';
import { Tarefa } from '../../../modelos/tarefa.modelo';

@Component({
  selector: 'app-lista-tarefas',
  imports: [],
  templateUrl: './lista-tarefas.html',
  styleUrl: './lista-tarefas.css',
})
export class ListaTarefas {
  protected tarefas: Tarefa[] = [
    { descricao: 'Tarefa FPR2', concluida: false },
    { descricao: 'Tarefa RCO2', concluida: true },
    { descricao: 'Tarefa GEPR', concluida: false },
    { descricao: 'Entrega 1 INOV', concluida: true },
    { descricao: 'Trabalho ACAL', concluida: false },
  ];

  protected alternar(tarefa: Tarefa, index: number) {
    
    tarefa.concluida = !tarefa.concluida;
    this.tarefas.splice(index, 1, tarefa);
  }

  protected totalTarefas(): number {
    return this.tarefas.length;
  }

  protected concluidas(): number {
    let total: number = 0;
    for (let i of this.tarefas) {
      if (i.concluida) {
        total++;
      }
    }

    return total;
  }

  protected pendentes(): number {
    let total: number = 0;
    for (let i of this.tarefas) {
      if (!i.concluida) {
        total++;
      }
    }

    return total;
  }
}
