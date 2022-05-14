import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';
import { ListarInstituicaoComponent } from './admin/listar-instituicao/listar-instituicao.component';
import { ListarPostagemComponent } from './admin/listar-postagem/listar-postagem.component';
import { ListarProdutoComponent } from './admin/listar-produto/listar-produto.component';
import { ManterInstituicaoComponent } from './admin/manter-instituicao/manter-instituicao.component';
import { ManterPostagemComponent } from './admin/manter-postagem/manter-postagem.component';
import { ManterProdutoComponent } from './admin/manter-produto/manter-produto.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { ContatoComponent } from './site/contato/contato.component';
import { HomeAdminComponent } from './admin/home-admin/home-admin.component';
import { ApoiarComponent } from './site/apoiar/apoiar.component';
import { ListarAtendimentosAtividadesComponent } from './admin/listar-atendimentos-atividades/listar-atendimentos-atividades.component';
import { ManterEventoComponent } from './admin/manter-evento/manter-evento.component';
import { ManterPresencialComponent } from './admin/manter-presencial/manter-presencial.component';
import { ManterTelefonicoComponent } from './admin/manter-telefonico/manter-telefonico.component';
import { ManterVirtualComponent } from './admin/manter-virtual/manter-virtual.component';
import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TextMaskModule } from 'angular2-text-mask';
import { VejaMaisComponent } from './site/veja-mais/veja-mais.component';
import { FaqComponent } from './site/faq/faq.component';
import { CadastreAcaoComponent } from './site/cadastre-acao/cadastre-acao.component';
import { QuemSomosComponent } from './site/quem-somos/quem-somos.component';
import { HomeComponent } from './site/home/home.component';
import { environment } from '../environments/environment'
import { AngularFireModule } from '@angular/fire/compat';
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';
import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';
import { ListaAtividadesComponent } from './site/lista-atividades/lista-atividades.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SignupComponent,
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    ContatoComponent,
    ManterInstituicaoComponent,
    ManterPostagemComponent,
    ManterProdutoComponent,
    ListarProdutoComponent,
    ListarPostagemComponent,
    ListarInstituicaoComponent,
    HomeAdminComponent,
    ListaAtividadesComponent,
    ApoiarComponent,
    ListarAtendimentosAtividadesComponent,
    ManterTelefonicoComponent,
    ManterPresencialComponent,
    ManterVirtualComponent,
    ManterEventoComponent,
    VejaMaisComponent,
    FaqComponent,
    CadastreAcaoComponent,
    QuemSomosComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    RouterModule,
    AppRoutingModule,
    NgxMaterialTimepickerModule,
    BrowserAnimationsModule,
    TextMaskModule,
    AngularFireModule.initializeApp(environment.firebaseConfig), 
    AngularFireAuthModule,
    CommonModule,
    NgxLoadingModule.forRoot({
      animationType: ngxLoadingAnimationTypes.wanderingCubes,
      backdropBackgroundColour: 'rgba(0,0,0,0.1)', 
      backdropBorderRadius: '4px',
      primaryColour: '#ffffff', 
      secondaryColour: '#ffffff', 
      tertiaryColour: '#ffffff'
  })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
