import {Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {LoginComponent} from './login/login.component';
import {AulaComponent} from './aula/aula.component';
import {AlunoComponent} from './aluno/aluno.component';
import {appGuard} from './app.guard';
import {CadastroComponent} from './cadastro/cadastro.component';


export const routes: Routes = [

  {path: 'login', component: LoginComponent},
  {path: 'cadastro', component: CadastroComponent},

  {
    path: '', component: MainComponent, canActivate: [appGuard], children: [
      {path: 'main', component: MainComponent},
      {path: 'aula', component: AulaComponent},
      {path: 'aluno', component: AlunoComponent},
    ]
  },
];
