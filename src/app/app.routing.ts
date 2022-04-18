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
import { ProcuroAjudaComponent } from './site/procuro-ajuda/procuro-ajuda.component';
import { QueroAjudarComponent } from './site/quero-ajudar/quero-ajudar.component';
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

const routes: Routes = [
  // Site
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: SignupComponent },
  { path: 'login', component: LoginComponent },
  { path: 'contato', component: ContatoComponent },
  { path: 'contato/:page', component: ContatoComponent },
  { path: 'apoiar', component: ApoiarComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'procuro-ajuda', component: ProcuroAjudaComponent },
  { path: 'quero-ajudar', component: QueroAjudarComponent },
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
  { path: 'manter-instituicao', component: ManterInstituicaoComponent, canActivate: [AuthGuardService] },
  { path: 'manter-instituicao/:id', component: ManterInstituicaoComponent, canActivate: [AuthGuardService] },
  { path: 'manter-postagem', component: ManterPostagemComponent, canActivate: [AuthGuardService] },
  { path: 'manter-postagem/:id', component: ManterPostagemComponent, canActivate: [AuthGuardService] },
  { path: 'manter-produto', component: ManterProdutoComponent, canActivate: [AuthGuardService] },
  { path: 'manter-produto/:id', component: ManterProdutoComponent, canActivate: [AuthGuardService] },
  { path: 'manter-evento', component: ManterEventoComponent, canActivate: [AuthGuardService] },
  { path: 'manter-evento/:id', component: ManterEventoComponent, canActivate: [AuthGuardService] },
  { path: 'manter-presencial', component: ManterPresencialComponent, canActivate: [AuthGuardService] },
  { path: 'manter-presencial/:id', component: ManterPresencialComponent, canActivate: [AuthGuardService] },
  { path: 'manter-telefonico', component: ManterTelefonicoComponent, canActivate: [AuthGuardService] },
  { path: 'manter-telefonico/:id', component: ManterTelefonicoComponent, canActivate: [AuthGuardService] },
  { path: 'manter-virtual', component: ManterVirtualComponent, canActivate: [AuthGuardService] },
  { path: 'manter-virtual/:id', component: ManterVirtualComponent, canActivate: [AuthGuardService] },

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
