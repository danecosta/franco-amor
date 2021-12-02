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
import { ManterVoluntarioComponent } from './admin/manter-voluntario/manter-voluntario.component';
import { ListarVoluntarioComponent } from './admin/listar-voluntario/listar-voluntario.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ProcuroAjudaComponent } from './site/procuro-ajuda/procuro-ajuda.component';
import { QueroAjudarComponent } from './site/quero-ajudar/quero-ajudar.component';
import { DoacaoComponent } from './site/doacao/doacao.component';
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
  { path: 'login', component: LoginComponent, canActivate: [AuthGuardService] },
  { path: 'contato', component: ContatoComponent },
  { path: 'doacao', component: DoacaoComponent },
  { path: 'produtos', component: ProdutosComponent },
  { path: 'procuro-ajuda', component: ProcuroAjudaComponent },
  { path: 'quero-ajudar', component: QueroAjudarComponent },
  { path: 'veja-mais', component: VejaMaisComponent },
  { path: 'faq', component: FaqComponent },
  { path: 'cadastre-acao', component: CadastreAcaoComponent },
  { path: 'quem-somos', component: QuemSomosComponent },

  // Blog
  { path: 'blog', component: BlogComponent },

  // Admin
  { path: 'home-admin', component: HomeAdminComponent, canActivate: [AuthGuardService] },
  { path: 'listar-instituicao', component: ListarInstituicaoComponent },
  { path: 'listar-postagem', component: ListarPostagemComponent },
  { path: 'listar-produto', component: ListarProdutoComponent },
  { path: 'listar-voluntario', component: ListarVoluntarioComponent },
  { path: 'listar-atendimentos-atividades', component: ListarAtendimentosAtividadesComponent },
  { path: 'manter-instituicao', component: ManterInstituicaoComponent },
  { path: 'manter-postagem', component: ManterPostagemComponent },
  { path: 'manter-produto', component: ManterProdutoComponent },
  { path: 'manter-voluntario', component: ManterVoluntarioComponent },
  { path: 'manter-evento', component: ManterEventoComponent },
  { path: 'manter-presencial', component: ManterPresencialComponent },
  { path: 'manter-telefonico', component: ManterTelefonicoComponent },
  { path: 'manter-virtual', component: ManterVirtualComponent },

  { path: '', redirectTo: 'home', pathMatch: 'full' }
];

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RouterModule.forRoot(routes, {
    useHash: true,
    relativeLinkResolution: 'legacy'
})
  ],
  exports: [
  ],
  providers: [AuthGuardService]
})
export class AppRoutingModule { }
