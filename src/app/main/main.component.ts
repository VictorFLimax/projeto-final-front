import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatIconButton } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatFormField } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [
    RouterOutlet,
    MatToolbarModule,
    MatIconModule,
    MatIconButton,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatFormField,
    FormsModule,
    CommonModule,
  ],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'], // Corrigido para "styleUrls"
})
export class MainComponent implements OnInit {
  salas = [
    { nome: 'Sala 1' },
    { nome: 'Sala 2' },
    // Adicione mais salas conforme necessário
  ];
  novoNomeSala: string = '';
  exibirFormulario: boolean = false; // Controle da exibição do formulário

  constructor(private router: Router) {}

  ngOnInit() {
    const token = localStorage.getItem('token');
    if (!token) {
      this.router.navigate(['login']).then();
    }
  }

  criarSala() {
    if (this.novoNomeSala) {
      this.salas.push({ nome: this.novoNomeSala });
      this.novoNomeSala = ''; // Limpa o campo de entrada
      this.exibirFormulario = false; // Oculta o formulário após criar a sala
    }
  }

  toggleFormulario() {
    this.exibirFormulario = !this.exibirFormulario; // Alterna a visibilidade do formulário
  }

  entrarNaSala(sala) {
    // Lógica para entrar na sala
    console.log(`Entrando na ${sala.nome}`);
  }
}
