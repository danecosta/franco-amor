import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ListarInstituicaoComponent } from './admin/listar-instituicao/listar-instituicao.component';
import { ListarPostagemComponent } from './admin/listar-postagem/listar-postagem.component';
import { ListarProdutoComponent } from './admin/listar-produto/listar-produto.component';
import { ListarVoluntarioComponent } from './admin/listar-voluntario/listar-voluntario.component';
import { ManterInstituicaoComponent } from './admin/manter-instituicao/manter-instituicao.component';
import { ManterPostagemComponent } from './admin/manter-postagem/manter-postagem.component';
import { ManterProdutoComponent } from './admin/manter-produto/manter-produto.component';
import { ManterVoluntarioComponent } from './admin/manter-voluntario/manter-voluntario.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContatoComponent } from './site/contato/contato.component';
import { HomeModule } from './site/home/home.module';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { DoacaoComponent } from './site/doacao/doacao.component';
import { ProcuroAjudaComponent } from './site/procuro-ajuda/procuro-ajuda.component';
import { QueroAjudarComponent } from './site/quero-ajudar/quero-ajudar.component';
import { ListarAtendimentosAtividadesComponent } from './admin/listar-atendimentos-atividades/listar-atendimentos-atividades.component';
import { ManterAtividadesComponent } from './admin/manter-atividades/manter-atividades.component';
import { ManterEventoComponent } from './admin/manter-evento/manter-evento.component';
import { ManterPresencialComponent } from './admin/manter-presencial/manter-presencial.component';
import { ManterTelefonicoComponent } from './admin/manter-telefonico/manter-telefonico.component';
import { ManterVirtualComponent } from './admin/manter-virtual/manter-virtual.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFileUploaderModule } from 'angular-file-uploader';
import { TextMaskModule } from 'angular2-text-mask';
import { VejaMaisComponent } from './site/veja-mais/veja-mais.component';
import { FaqComponent } from './site/faq/faq.component';
import { CadastreAcaoComponent } from './site/cadastre-acao/cadastre-acao.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ContatoComponent,
    ManterInstituicaoComponent,
    ManterPostagemComponent,
    ManterVoluntarioComponent,
    ManterProdutoComponent,
    ListarProdutoComponent,
    ListarVoluntarioComponent,
    ListarPostagemComponent,
    ListarInstituicaoComponent,
    HomeAdminComponent,
    QueroAjudarComponent,
    ProcuroAjudaComponent,
    DoacaoComponent,
    ListarAtendimentosAtividadesComponent,
    ManterTelefonicoComponent,
    ManterPresencialComponent,
    ManterVirtualComponent,
    ManterAtividadesComponent,
    ManterEventoComponent,
    VejaMaisComponent,
    FaqComponent,
    CadastreAcaoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    HomeModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    AngularFileUploaderModule,
    TextMaskModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
