import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ContatoComponent } from './site/contato/contato.component';
import { HomeComponent } from './site/home/home.component';
import { SobreNosComponent } from './site/sobre-nos/sobre-nos.component';
import { ListarInstituicaoComponent } from './admin/listar-instituicao/listar-instituicao.component';
import { ListarPostagemComponent } from './admin/listar-postagem/listar-postagem.component';
import { ListarProdutoComponent } from './admin/listar-produto/listar-produto.component';
import { ManterInstituicaoComponent } from './admin/manter-instituicao/manter-instituicao.component';
import { ManterPostagemComponent } from './admin/manter-postagem/manter-postagem.component';
import { ManterProdutoComponent } from './admin/manter-produto/manter-produto.component';
import { ManterVoluntarioComponent } from './admin/manter-voluntario/manter-voluntario.component';
import { ListarVoluntarioComponent } from './admin/listar-voluntario/listar-voluntario.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ProcuroAjudaComponent } from './site/procuro-ajuda/procuro-ajuda.component';
import { QueroAjudarComponent } from './site/quero-ajudar/quero-ajudar.component';
import { DoacaoComponent } from './site/doacao/doacao.component';
import { ProdutosComponent } from './site/produtos/produtos.component';
import { BlogComponent } from './blog/blog.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: SignupComponent },
  { path: 'sobre-nos', component: SobreNosComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'doacao', component: DoacaoComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'procuro-ajuda', component: ProcuroAjudaComponent },
  { path: 'quero-ajudar', component: QueroAjudarComponent },
  { path: 'home-admin', component: HomeAdminComponent },
  { path: 'listar-instituicao', component: ListarInstituicaoComponent },
  { path: 'listar-postagem', component: ListarPostagemComponent },
  { path: 'listar-produto', component: ListarProdutoComponent },
  { path: 'listar-voluntario', component: ListarVoluntarioComponent },
  { path: 'manter-instituicao', component: ManterInstituicaoComponent },
  { path: 'manter-postagem', component: ManterPostagemComponent },
  { path: 'manter-produto', component: ManterProdutoComponent },
  { path: 'manter-voluntario', component: ManterVoluntarioComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      useHash: true
    })
  ],
  exports: [
  ],
})
export class AppRoutingModule { }
