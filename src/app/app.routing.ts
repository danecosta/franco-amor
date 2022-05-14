import { AuthGuardService } from './auth/guard/auth-service.guard';
import { NgModule } from '@angular/core';
import { CommonModule, } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { ContatoComponent } from './site/contato/contato.component';
import { HomeComponent } from './site/home/home.component';
import { ListarInstituicaoComponent } from './admin/listar-instituicao/listar-instituicao.component';
import { ListarPostagemComponent } from './admin/listar-postagem/listar-postagem.component';
import { ListarProdutoComponent } from './admin/listar-produto/listar-produto.component';
import { ManterInstituicaoComponent } from './admin/manter-instituicao/manter-instituicao.component';
import { ManterPostagemComponent } from './admin/manter-postagem/manter-postagem.component';
import { ManterProdutoComponent } from './admin/manter-produto/manter-produto.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ApoiarComponent } from './site/apoiar/apoiar.component';
import { ProdutosComponent } from './site/produtos/produtos.component';
import { BlogComponent } from './blog/blog.component';
import { ListarAtendimentosAtividadesComponent } from './admin/listar-atendimentos-atividades/listar-atendimentos-atividades.component';
import { ManterEventoComponent } from './admin/manter-evento/manter-evento.component';
import { ManterPresencialComponent } from './admin/manter-presencial/manter-presencial.component';
import { ManterTelefonicoComponent } from './admin/manter-telefonico/manter-telefonico.component';
import { ManterVirtualComponent } from './admin/manter-virtual/manter-virtual.component';
import { VejaMaisComponent } from './site/veja-mais/veja-mais.component';
import { FaqComponent } from './site/faq/faq.component';
import { CadastreAcaoComponent } from './site/cadastre-acao/cadastre-acao.component';
import { QuemSomosComponent } from './site/quem-somos/quem-somos.component';
import { ListaAtividadesComponent } from './site/lista-atividades/lista-atividades.component';

const routes: Routes = [
  // Site
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'contato/:page', component: ContatoComponent },
  { path: 'apoiar', component: ApoiarComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'procuro-ajuda', component: ListaAtividadesComponent, data: { title: 'Procuro Ajuda', apenasComVagas: false } },
  { path: 'lista-atividades', component: ListaAtividadesComponent, data: { title: 'Quero Ajudar', apenasComVagas: true } },
  { path: 'veja-mais/:type/:id', component: VejaMaisComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'cadastre-acao', component: CadastreAcaoComponent },
  { path: 'quem-somos', component: QuemSomosComponent },

  // Blog
  { path: 'blog', component: BlogComponent },

  // Admin
  { path: 'home-admin', component: HomeAdminComponent, canActivate: [AuthGuardService] },
  { path: 'home-admin/:tab', component: HomeAdminComponent, canActivate: [AuthGuardService] },
  { path: 'listar-instituicao', component: ListarInstituicaoComponent, canActivate: [AuthGuardService] },
  { path: 'listar-postagem', component: ListarPostagemComponent, canActivate: [AuthGuardService] },
  { path: 'listar-produto', component: ListarProdutoComponent, canActivate: [AuthGuardService] },
  { path: 'listar-atendimentos-atividades', component: ListarAtendimentosAtividadesComponent, canActivate: [AuthGuardService] },
  { path: 'cadastrar-instituicao', component: ManterInstituicaoComponent, canActivate: [AuthGuardService], data: { title: 'Cadastrar Instituição' } },
  { path: 'editar-instituicao/:id', component: ManterInstituicaoComponent, canActivate: [AuthGuardService], data: { title: 'Editar Instituição' } },
  { path: 'cadastrar-postagem', component: ManterPostagemComponent, canActivate: [AuthGuardService], data: { title: 'Cadastrar Postagem' } },
  { path: 'editar-postagem/:id', component: ManterPostagemComponent, canActivate: [AuthGuardService], data: { title: 'Editar Postagem' } },
  { path: 'cadastrar-produto', component: ManterProdutoComponent, canActivate: [AuthGuardService], data: { title: 'Cadastrar Produto' } },
  { path: 'editar-produto/:id', component: ManterProdutoComponent, canActivate: [AuthGuardService], data: { title: 'Editar Produto' } },
  { path: 'cadastrar-evento', component: ManterEventoComponent, canActivate: [AuthGuardService], data: { title: 'Cadastrar Evento' } },
  { path: 'editar-evento/:id', component: ManterEventoComponent, canActivate: [AuthGuardService], data: { title: 'Editar Evento' } },
  { path: 'cadastrar-presencial', component: ManterPresencialComponent, canActivate: [AuthGuardService], data: { title: 'Cadastrar Serviço Presencial' } },
  { path: 'editar-presencial/:id', component: ManterPresencialComponent, canActivate: [AuthGuardService], data: { title: 'Editar Serviço Presencial' } },
  { path: 'cadastrar-telefonico', component: ManterTelefonicoComponent, canActivate: [AuthGuardService], data: { title: 'Cadastrar Serviço Telefônica' } },
  { path: 'editar-telefonico/:id', component: ManterTelefonicoComponent, canActivate: [AuthGuardService], data: { title: 'Editar Serviço Telefônica' } },
  { path: 'cadastrar-virtual', component: ManterVirtualComponent, canActivate: [AuthGuardService], data: { title: 'Cadastrar Serviço Virtual' } },
  { path: 'editar-virtual/:id', component: ManterVirtualComponent, canActivate: [AuthGuardService], data: { title: 'Editar Serviço Virtual' } },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
      relativeLinkResolution: 'legacy'
    })
  ],
  exports: [
  ],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
