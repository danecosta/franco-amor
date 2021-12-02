(self["webpackChunkfranco_amor"] = self["webpackChunkfranco_amor"] || []).push([["main"],{

/***/ 98255:
/*!*******************************************************!*\
  !*** ./$_lazy_route_resources/ lazy namespace object ***!
  \*******************************************************/
/***/ (function(module) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 98255;
module.exports = webpackEmptyAsyncContext;

/***/ }),

/***/ 96443:
/*!*****************************************!*\
  !*** ./src/app/admin/base.component.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BaseComponent": function() { return /* binding */ BaseComponent; }
/* harmony export */ });
class BaseComponent {
    constructor() {
        // Máscaras
        this.phoneMask = ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
        this.cepMask = [/\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/];
        this.cpfMask = [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        this.cnpjMask = [/\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '/', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/];
        // Config upload imagem
        this.afuConfig = {
            multiple: false,
            formatsAllowed: ".jpg,.png",
            maxSize: "1",
            uploadAPI: {
                url: "https://example-file-upload-api",
                method: "POST",
                headers: {
                    "Content-Type": "text/plain;charset=UTF-8"
                },
                params: {
                    'page': '1'
                },
                responseType: 'blob',
            },
            theme: "dragNDrop",
            hideProgressBar: false,
            hideResetBtn: false,
            hideSelectBtn: false,
            fileNameIndex: true,
            replaceTexts: {
                selectFileBtn: 'Selecionar',
                resetBtn: 'Limpar',
                uploadBtn: 'Upload',
                dragNDropBox: 'Arraste e solte',
                attachPinBtn: 'Selecionando...',
                afterUploadMsg_success: 'Upload realizado com sucesso !',
                afterUploadMsg_error: 'Upload falhou !',
                sizeLimit: 'Tamanho máximo'
            }
        };
    }
    ngOnInit() { }
    voltar() {
        history.back();
    }
}


/***/ }),

/***/ 60608:
/*!**********************************************************!*\
  !*** ./src/app/admin/home-admin/home-admin.component.ts ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeAdminComponent": function() { return /* binding */ HomeAdminComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_admin_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home-admin.component.html */ 23874);
/* harmony import */ var _home_admin_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home-admin.component.css */ 67097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let HomeAdminComponent = class HomeAdminComponent {
    constructor() {
        this.active = 1;
    }
    ngOnInit() {
    }
};
HomeAdminComponent.ctorParameters = () => [];
HomeAdminComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-home-admin',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_admin_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_admin_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeAdminComponent);



/***/ }),

/***/ 39608:
/*!**************************************************************************************************!*\
  !*** ./src/app/admin/listar-atendimentos-atividades/listar-atendimentos-atividades.component.ts ***!
  \**************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarAtendimentosAtividadesComponent": function() { return /* binding */ ListarAtendimentosAtividadesComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_listar_atendimentos_atividades_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./listar-atendimentos-atividades.component.html */ 37679);
/* harmony import */ var _listar_atendimentos_atividades_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listar-atendimentos-atividades.component.css */ 50682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ListarAtendimentosAtividadesComponent = class ListarAtendimentosAtividadesComponent {
    constructor(router) {
        this.router = router;
        this.tipo = null;
        this.atividades = [];
    }
    ngOnInit() {
    }
    novoEvento() {
        this.router.navigate(['manter-evento']);
    }
    novoTelefonico() {
        this.router.navigate(['manter-telefonico']);
    }
    novoVirtual() {
        this.router.navigate(['manter-virtual']);
    }
    novoPresencial() {
        this.router.navigate(['manter-presencial']);
    }
};
ListarAtendimentosAtividadesComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ListarAtendimentosAtividadesComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-listar-atendimentos-atividades',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_listar_atendimentos_atividades_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_listar_atendimentos_atividades_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListarAtendimentosAtividadesComponent);



/***/ }),

/***/ 19053:
/*!**************************************************************************!*\
  !*** ./src/app/admin/listar-instituicao/listar-instituicao.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Filtro": function() { return /* binding */ Filtro; },
/* harmony export */   "ListarInstituicaoComponent": function() { return /* binding */ ListarInstituicaoComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_listar_instituicao_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./listar-instituicao.component.html */ 71914);
/* harmony import */ var _listar_instituicao_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listar-instituicao.component.css */ 94981);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ 96443);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ 61172);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};






class Filtro {
}
let ListarInstituicaoComponent = class ListarInstituicaoComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(router) {
        super();
        this.router = router;
        this.filtro = new Filtro();
        this.instituicoes = [];
    }
    ngOnInit() {
        this.buscarInstituicoes();
    }
    novaInstituicao() {
        this.router.navigate(['manter-instituicao']);
    }
    buscarInstituicoes() {
        return __awaiter(this, void 0, void 0, function* () {
            const inst = yield axios__WEBPACK_IMPORTED_MODULE_3___default().get('https://franco-amor-api.herokuapp.com/instituicoes');
            inst.data.forEach(element => {
                let inst = { nome: element.nome,
                    email: element.email,
                    cidade: element.endereco.cidade,
                    cnpj: element.cnpj,
                    telefone: element.telefone
                };
                // this.instituicoes.push(inst);
            });
        });
    }
};
ListarInstituicaoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router }
];
ListarInstituicaoComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-listar-instituicao',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_listar_instituicao_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_listar_instituicao_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListarInstituicaoComponent);



/***/ }),

/***/ 84110:
/*!********************************************************************!*\
  !*** ./src/app/admin/listar-postagem/listar-postagem.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarPostagemComponent": function() { return /* binding */ ListarPostagemComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_listar_postagem_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./listar-postagem.component.html */ 9430);
/* harmony import */ var _listar_postagem_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listar-postagem.component.css */ 5471);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ListarPostagemComponent = class ListarPostagemComponent {
    constructor(router) {
        this.router = router;
        this.postagens = [];
    }
    ngOnInit() {
    }
    novaPostagem() {
        this.router.navigate(['manter-postagem']);
    }
};
ListarPostagemComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ListarPostagemComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-listar-postagem',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_listar_postagem_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_listar_postagem_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListarPostagemComponent);



/***/ }),

/***/ 13704:
/*!******************************************************************!*\
  !*** ./src/app/admin/listar-produto/listar-produto.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarProdutoComponent": function() { return /* binding */ ListarProdutoComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_listar_produto_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./listar-produto.component.html */ 5258);
/* harmony import */ var _listar_produto_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listar-produto.component.css */ 15889);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ListarProdutoComponent = class ListarProdutoComponent {
    constructor(router) {
        this.router = router;
        this.produtos = [];
    }
    ngOnInit() {
    }
    novoProduto() {
        this.router.navigate(['manter-produto']);
    }
};
ListarProdutoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ListarProdutoComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-listar-produto',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_listar_produto_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_listar_produto_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListarProdutoComponent);



/***/ }),

/***/ 71327:
/*!************************************************************************!*\
  !*** ./src/app/admin/listar-voluntario/listar-voluntario.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ListarVoluntarioComponent": function() { return /* binding */ ListarVoluntarioComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_listar_voluntario_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./listar-voluntario.component.html */ 32573);
/* harmony import */ var _listar_voluntario_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./listar-voluntario.component.css */ 58365);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ 96443);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ListarVoluntarioComponent = class ListarVoluntarioComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(router) {
        super();
        this.router = router;
        this.voluntarios = [];
    }
    ngOnInit() {
    }
    novoVoluntario() {
        this.router.navigate(['manter-voluntario']);
    }
};
ListarVoluntarioComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router }
];
ListarVoluntarioComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-listar-voluntario',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_listar_voluntario_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_listar_voluntario_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ListarVoluntarioComponent);



/***/ }),

/***/ 27048:
/*!****************************************************************!*\
  !*** ./src/app/admin/manter-evento/manter-evento.component.ts ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManterEventoComponent": function() { return /* binding */ ManterEventoComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manter_evento_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manter-evento.component.html */ 98882);
/* harmony import */ var _manter_evento_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manter-evento.component.css */ 10210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ 96443);
/* harmony import */ var cep_promise__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! cep-promise */ 25440);
/* harmony import */ var cep_promise__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(cep_promise__WEBPACK_IMPORTED_MODULE_3__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ManterEventoComponent = class ManterEventoComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(modalService) {
        super();
        this.modalService = modalService;
        this.periodicidade = null;
        this.prazoIndefinido = false;
        this.repete = false;
        this.domingo = true;
        this.segunda = true;
        this.terca = true;
        this.quarta = true;
        this.quinta = true;
        this.sexta = true;
        this.sabado = true;
        this.endereco = null;
    }
    ngOnInit() {
        this.afuConfig.multiple = true;
    }
    salvar() { }
    buscarCep() {
        this.limparCamposCep();
        cep_promise__WEBPACK_IMPORTED_MODULE_3__(this.cepInformado).then(data => {
            this.logradouro = data.street;
            this.bairro = data.neighborhood;
            this.cidade = data.city;
        });
    }
    limparCamposCep() {
        this.logradouro = '';
        this.bairro = '';
        this.cidade = '';
    }
    openModal(content) {
        this.modalService.open(content, { centered: true }).result.then((result) => {
            this.closeResult = 'Fechado: $result';
        }, (reason) => {
            this.closeResult = 'Fechado';
        });
    }
};
ManterEventoComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal }
];
ManterEventoComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-manter-evento',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manter_evento_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_manter_evento_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManterEventoComponent);



/***/ }),

/***/ 39207:
/*!**************************************************************************!*\
  !*** ./src/app/admin/manter-instituicao/manter-instituicao.component.ts ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManterInstituicaoComponent": function() { return /* binding */ ManterInstituicaoComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manter_instituicao_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manter-instituicao.component.html */ 98247);
/* harmony import */ var _manter_instituicao_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manter-instituicao.component.css */ 58210);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var cep_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cep-promise */ 25440);
/* harmony import */ var cep_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cep_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ 96443);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






let ManterInstituicaoComponent = class ManterInstituicaoComponent extends _base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
    constructor(modalService) {
        super();
        this.modalService = modalService;
    }
    ngOnInit() {
        this.afuConfig.multiple = true;
    }
    salvar() { }
    buscarCep() {
        this.limparCamposCep();
        cep_promise__WEBPACK_IMPORTED_MODULE_2__(this.cepInformado).then(data => {
            this.logradouro = data.street;
            this.bairro = data.neighborhood;
            this.cidade = data.city;
        });
    }
    limparCamposCep() {
        this.logradouro = '';
        this.bairro = '';
        this.cidade = '';
    }
    openModal(content) {
        this.modalService.open(content, { centered: true }).result.then((result) => {
            this.closeResult = 'Fechado: $result';
        }, (reason) => {
            this.closeResult = 'Fechado';
        });
    }
    openModalLogo(content) {
        this.modalService.open(content, { centered: true }).result.then((result) => {
            this.closeResult = 'Fechado: $result';
        }, (reason) => {
            this.closeResult = 'Fechado';
        });
    }
};
ManterInstituicaoComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_4__.NgbModal }
];
ManterInstituicaoComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-manter-instituicao',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manter_instituicao_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_manter_instituicao_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManterInstituicaoComponent);



/***/ }),

/***/ 3301:
/*!********************************************************************!*\
  !*** ./src/app/admin/manter-postagem/manter-postagem.component.ts ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManterPostagemComponent": function() { return /* binding */ ManterPostagemComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manter_postagem_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manter-postagem.component.html */ 93607);
/* harmony import */ var _manter_postagem_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manter-postagem.component.css */ 43563);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ 96443);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ManterPostagemComponent = class ManterPostagemComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(modalService) {
        super();
        this.modalService = modalService;
        this.categoria = null;
    }
    ngOnInit() {
    }
    salvar() { }
    openModal(content) {
        this.modalService.open(content, { centered: true }).result.then((result) => {
            this.closeResult = 'Fechado: $result';
        }, (reason) => {
            this.closeResult = 'Fechado';
        });
    }
};
ManterPostagemComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal }
];
ManterPostagemComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-manter-postagem',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manter_postagem_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_manter_postagem_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManterPostagemComponent);



/***/ }),

/***/ 59563:
/*!************************************************************************!*\
  !*** ./src/app/admin/manter-presencial/manter-presencial.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManterPresencialComponent": function() { return /* binding */ ManterPresencialComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manter_presencial_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manter-presencial.component.html */ 18453);
/* harmony import */ var _manter_presencial_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manter-presencial.component.css */ 33625);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var cep_promise__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! cep-promise */ 25440);
/* harmony import */ var cep_promise__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(cep_promise__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../base.component */ 96443);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ManterPresencialComponent = class ManterPresencialComponent extends _base_component__WEBPACK_IMPORTED_MODULE_3__.BaseComponent {
    constructor() {
        super();
        this.periodicidade = null;
        this.prazoIndefinido = false;
        this.repete = false;
        this.domingo = true;
        this.segunda = true;
        this.terca = true;
        this.quarta = true;
        this.quinta = true;
        this.sexta = true;
        this.sabado = true;
        this.endereco = null;
    }
    ngOnInit() {
    }
    voltar() {
        history.back();
    }
    salvar() { }
    buscarCep() {
        this.limparCamposCep();
        cep_promise__WEBPACK_IMPORTED_MODULE_2__(this.cepInformado).then(data => {
            this.logradouro = data.street;
            this.bairro = data.neighborhood;
            this.cidade = data.city;
        });
    }
    limparCamposCep() {
        this.logradouro = '';
        this.bairro = '';
        this.cidade = '';
    }
};
ManterPresencialComponent.ctorParameters = () => [];
ManterPresencialComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-manter-presencial',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manter_presencial_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_manter_presencial_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManterPresencialComponent);



/***/ }),

/***/ 64441:
/*!******************************************************************!*\
  !*** ./src/app/admin/manter-produto/manter-produto.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManterProdutoComponent": function() { return /* binding */ ManterProdutoComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manter_produto_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manter-produto.component.html */ 58546);
/* harmony import */ var _manter_produto_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manter-produto.component.css */ 19137);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ 96443);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ManterProdutoComponent = class ManterProdutoComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(modalService) {
        super();
        this.modalService = modalService;
    }
    ngOnInit() {
        this.afuConfig.multiple = true;
    }
    salvar() { }
    openModal(content) {
        this.modalService.open(content, { centered: true }).result.then((result) => {
            this.closeResult = 'Fechado: $result';
        }, (reason) => {
            this.closeResult = 'Fechado';
        });
    }
};
ManterProdutoComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal }
];
ManterProdutoComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-manter-produto',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manter_produto_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_manter_produto_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManterProdutoComponent);



/***/ }),

/***/ 50670:
/*!************************************************************************!*\
  !*** ./src/app/admin/manter-telefonico/manter-telefonico.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManterTelefonicoComponent": function() { return /* binding */ ManterTelefonicoComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manter_telefonico_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manter-telefonico.component.html */ 51036);
/* harmony import */ var _manter_telefonico_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manter-telefonico.component.css */ 83520);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ManterTelefonicoComponent = class ManterTelefonicoComponent {
    constructor() {
        this.domingo = false;
        this.segunda = false;
        this.terca = false;
        this.quarta = false;
        this.quinta = false;
        this.sexta = false;
        this.sabado = false;
    }
    ngOnInit() {
    }
    voltar() {
        history.back();
    }
    salvar() { }
};
ManterTelefonicoComponent.ctorParameters = () => [];
ManterTelefonicoComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-manter-telefonico',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manter_telefonico_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_manter_telefonico_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManterTelefonicoComponent);



/***/ }),

/***/ 1319:
/*!******************************************************************!*\
  !*** ./src/app/admin/manter-virtual/manter-virtual.component.ts ***!
  \******************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManterVirtualComponent": function() { return /* binding */ ManterVirtualComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manter_virtual_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manter-virtual.component.html */ 13050);
/* harmony import */ var _manter_virtual_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manter-virtual.component.css */ 96148);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ManterVirtualComponent = class ManterVirtualComponent {
    constructor() {
        this.periodicidade = null;
        this.prazoIndefinido = false;
        this.repete = false;
        this.domingo = true;
        this.segunda = true;
        this.terca = true;
        this.quarta = true;
        this.quinta = true;
        this.sexta = true;
        this.sabado = true;
    }
    ngOnInit() {
    }
    voltar() {
        history.back();
    }
    salvar() { }
};
ManterVirtualComponent.ctorParameters = () => [];
ManterVirtualComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-manter-virtual',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manter_virtual_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_manter_virtual_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManterVirtualComponent);



/***/ }),

/***/ 78610:
/*!************************************************************************!*\
  !*** ./src/app/admin/manter-voluntario/manter-voluntario.component.ts ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ManterVoluntarioComponent": function() { return /* binding */ ManterVoluntarioComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manter_voluntario_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./manter-voluntario.component.html */ 1010);
/* harmony import */ var _manter_voluntario_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./manter-voluntario.component.css */ 58472);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../base.component */ 96443);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let ManterVoluntarioComponent = class ManterVoluntarioComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
    constructor(modalService) {
        super();
        this.modalService = modalService;
    }
    ngOnInit() {
    }
    salvar() { }
    openModal(content) {
        this.modalService.open(content, { centered: true }).result.then((result) => {
            this.closeResult = 'Fechado: $result';
        }, (reason) => {
            this.closeResult = 'Fechado';
        });
    }
};
ManterVoluntarioComponent.ctorParameters = () => [
    { type: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__.NgbModal }
];
ManterVoluntarioComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-manter-voluntario',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_manter_voluntario_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_manter_voluntario_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ManterVoluntarioComponent);



/***/ }),

/***/ 55041:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppComponent": function() { return /* binding */ AppComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */ 75158);
/* harmony import */ var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component.scss */ 53040);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ 24846);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ 54364);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;
let AppComponent = class AppComponent {
    constructor(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    hasScrolled() {
        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        var navbar = document.getElementsByTagName('nav')[0];
        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        }
        else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }
        lastScrollTop = st;
    }
    ;
    ngOnInit() {
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(event => event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_3__.NavigationEnd).subscribe((event) => {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            this.renderer.listen('window', 'scroll', (event) => {
                const number = window.scrollY;
                if (number > 150 || window.pageYOffset > 150) {
                    // add logic
                    navbar.classList.add('headroom--not-top');
                }
                else {
                    // remove logic
                    navbar.classList.remove('headroom--not-top');
                }
            });
        });
        this.hasScrolled();
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Renderer2 },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router },
    { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.Inject, args: [_angular_common__WEBPACK_IMPORTED_MODULE_5__.DOCUMENT,] }] },
    { type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.ElementRef },
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_5__.Location }
];
AppComponent.propDecorators = {
    hasScrolled: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_4__.HostListener, args: ['window:scroll', ['$event'],] }]
};
AppComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-root',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], AppComponent);



/***/ }),

/***/ 36747:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppModule": function() { return /* binding */ AppModule; }
/* harmony export */ });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(/*! @angular/forms */ 1707);
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ 81288);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app.routing */ 76738);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 55041);
/* harmony import */ var _admin_listar_instituicao_listar_instituicao_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./admin/listar-instituicao/listar-instituicao.component */ 19053);
/* harmony import */ var _admin_listar_postagem_listar_postagem_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./admin/listar-postagem/listar-postagem.component */ 84110);
/* harmony import */ var _admin_listar_produto_listar_produto_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/listar-produto/listar-produto.component */ 13704);
/* harmony import */ var _admin_listar_voluntario_listar_voluntario_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/listar-voluntario/listar-voluntario.component */ 71327);
/* harmony import */ var _admin_manter_instituicao_manter_instituicao_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/manter-instituicao/manter-instituicao.component */ 39207);
/* harmony import */ var _admin_manter_postagem_manter_postagem_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/manter-postagem/manter-postagem.component */ 3301);
/* harmony import */ var _admin_manter_produto_manter_produto_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/manter-produto/manter-produto.component */ 64441);
/* harmony import */ var _admin_manter_voluntario_manter_voluntario_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/manter-voluntario/manter-voluntario.component */ 78610);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./auth/login/login.component */ 78146);
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./auth/signup/signup.component */ 64309);
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/footer/footer.component */ 45227);
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ 54696);
/* harmony import */ var _site_contato_contato_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./site/contato/contato.component */ 44835);
/* harmony import */ var _admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./admin/home-admin/home-admin.component */ 60608);
/* harmony import */ var _site_doacao_doacao_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./site/doacao/doacao.component */ 38009);
/* harmony import */ var _site_procuro_ajuda_procuro_ajuda_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./site/procuro-ajuda/procuro-ajuda.component */ 64272);
/* harmony import */ var _site_quero_ajudar_quero_ajudar_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./site/quero-ajudar/quero-ajudar.component */ 71787);
/* harmony import */ var _admin_listar_atendimentos_atividades_listar_atendimentos_atividades_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/listar-atendimentos-atividades/listar-atendimentos-atividades.component */ 39608);
/* harmony import */ var _admin_manter_evento_manter_evento_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/manter-evento/manter-evento.component */ 27048);
/* harmony import */ var _admin_manter_presencial_manter_presencial_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/manter-presencial/manter-presencial.component */ 59563);
/* harmony import */ var _admin_manter_telefonico_manter_telefonico_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/manter-telefonico/manter-telefonico.component */ 50670);
/* harmony import */ var _admin_manter_virtual_manter_virtual_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./admin/manter-virtual/manter-virtual.component */ 1319);
/* harmony import */ var ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(/*! ngx-material-timepicker */ 31261);
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(/*! @angular/platform-browser/animations */ 20718);
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! angular2-text-mask */ 29230);
/* harmony import */ var _site_veja_mais_veja_mais_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./site/veja-mais/veja-mais.component */ 97202);
/* harmony import */ var _site_faq_faq_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./site/faq/faq.component */ 80343);
/* harmony import */ var _site_cadastre_acao_cadastre_acao_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./site/cadastre-acao/cadastre-acao.component */ 30938);
/* harmony import */ var _site_quem_somos_quem_somos_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./site/quem-somos/quem-somos.component */ 98423);
/* harmony import */ var _site_home_home_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./site/home/home.component */ 59875);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































let AppModule = class AppModule {
};
AppModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_30__.NgModule)({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent,
            _site_home_home_component__WEBPACK_IMPORTED_MODULE_29__.HomeComponent,
            _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_11__.SignupComponent,
            _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_13__.NavbarComponent,
            _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_12__.FooterComponent,
            _auth_login_login_component__WEBPACK_IMPORTED_MODULE_10__.LoginComponent,
            _site_contato_contato_component__WEBPACK_IMPORTED_MODULE_14__.ContatoComponent,
            _admin_manter_instituicao_manter_instituicao_component__WEBPACK_IMPORTED_MODULE_6__.ManterInstituicaoComponent,
            _admin_manter_postagem_manter_postagem_component__WEBPACK_IMPORTED_MODULE_7__.ManterPostagemComponent,
            _admin_manter_voluntario_manter_voluntario_component__WEBPACK_IMPORTED_MODULE_9__.ManterVoluntarioComponent,
            _admin_manter_produto_manter_produto_component__WEBPACK_IMPORTED_MODULE_8__.ManterProdutoComponent,
            _admin_listar_produto_listar_produto_component__WEBPACK_IMPORTED_MODULE_4__.ListarProdutoComponent,
            _admin_listar_voluntario_listar_voluntario_component__WEBPACK_IMPORTED_MODULE_5__.ListarVoluntarioComponent,
            _admin_listar_postagem_listar_postagem_component__WEBPACK_IMPORTED_MODULE_3__.ListarPostagemComponent,
            _admin_listar_instituicao_listar_instituicao_component__WEBPACK_IMPORTED_MODULE_2__.ListarInstituicaoComponent,
            _admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_15__.HomeAdminComponent,
            _site_quero_ajudar_quero_ajudar_component__WEBPACK_IMPORTED_MODULE_18__.QueroAjudarComponent,
            _site_procuro_ajuda_procuro_ajuda_component__WEBPACK_IMPORTED_MODULE_17__.ProcuroAjudaComponent,
            _site_doacao_doacao_component__WEBPACK_IMPORTED_MODULE_16__.DoacaoComponent,
            _admin_listar_atendimentos_atividades_listar_atendimentos_atividades_component__WEBPACK_IMPORTED_MODULE_19__.ListarAtendimentosAtividadesComponent,
            _admin_manter_telefonico_manter_telefonico_component__WEBPACK_IMPORTED_MODULE_22__.ManterTelefonicoComponent,
            _admin_manter_presencial_manter_presencial_component__WEBPACK_IMPORTED_MODULE_21__.ManterPresencialComponent,
            _admin_manter_virtual_manter_virtual_component__WEBPACK_IMPORTED_MODULE_23__.ManterVirtualComponent,
            _admin_manter_evento_manter_evento_component__WEBPACK_IMPORTED_MODULE_20__.ManterEventoComponent,
            _site_veja_mais_veja_mais_component__WEBPACK_IMPORTED_MODULE_25__.VejaMaisComponent,
            _site_faq_faq_component__WEBPACK_IMPORTED_MODULE_26__.FaqComponent,
            _site_cadastre_acao_cadastre_acao_component__WEBPACK_IMPORTED_MODULE_27__.CadastreAcaoComponent,
            _site_quem_somos_quem_somos_component__WEBPACK_IMPORTED_MODULE_28__.QuemSomosComponent
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_31__.BrowserModule,
            _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_32__.NgbModule,
            _angular_forms__WEBPACK_IMPORTED_MODULE_33__.FormsModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_34__.RouterModule,
            _app_routing__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule,
            ngx_material_timepicker__WEBPACK_IMPORTED_MODULE_35__.NgxMaterialTimepickerModule,
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_36__.BrowserAnimationsModule,
            angular2_text_mask__WEBPACK_IMPORTED_MODULE_24__.TextMaskModule
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
    })
], AppModule);



/***/ }),

/***/ 76738:
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AppRoutingModule": function() { return /* binding */ AppRoutingModule; }
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 54364);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/platform-browser */ 71570);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./auth/login/login.component */ 78146);
/* harmony import */ var _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth/signup/signup.component */ 64309);
/* harmony import */ var _site_contato_contato_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./site/contato/contato.component */ 44835);
/* harmony import */ var _site_home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./site/home/home.component */ 59875);
/* harmony import */ var _admin_listar_instituicao_listar_instituicao_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./admin/listar-instituicao/listar-instituicao.component */ 19053);
/* harmony import */ var _admin_listar_postagem_listar_postagem_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./admin/listar-postagem/listar-postagem.component */ 84110);
/* harmony import */ var _admin_listar_produto_listar_produto_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./admin/listar-produto/listar-produto.component */ 13704);
/* harmony import */ var _admin_manter_instituicao_manter_instituicao_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./admin/manter-instituicao/manter-instituicao.component */ 39207);
/* harmony import */ var _admin_manter_postagem_manter_postagem_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./admin/manter-postagem/manter-postagem.component */ 3301);
/* harmony import */ var _admin_manter_produto_manter_produto_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./admin/manter-produto/manter-produto.component */ 64441);
/* harmony import */ var _admin_manter_voluntario_manter_voluntario_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./admin/manter-voluntario/manter-voluntario.component */ 78610);
/* harmony import */ var _admin_listar_voluntario_listar_voluntario_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./admin/listar-voluntario/listar-voluntario.component */ 71327);
/* harmony import */ var _admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./admin/home-admin/home-admin.component */ 60608);
/* harmony import */ var _site_procuro_ajuda_procuro_ajuda_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./site/procuro-ajuda/procuro-ajuda.component */ 64272);
/* harmony import */ var _site_quero_ajudar_quero_ajudar_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./site/quero-ajudar/quero-ajudar.component */ 71787);
/* harmony import */ var _site_doacao_doacao_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./site/doacao/doacao.component */ 38009);
/* harmony import */ var _site_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./site/produtos/produtos.component */ 3896);
/* harmony import */ var _blog_blog_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./blog/blog.component */ 38716);
/* harmony import */ var _admin_listar_atendimentos_atividades_listar_atendimentos_atividades_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./admin/listar-atendimentos-atividades/listar-atendimentos-atividades.component */ 39608);
/* harmony import */ var _admin_manter_evento_manter_evento_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./admin/manter-evento/manter-evento.component */ 27048);
/* harmony import */ var _admin_manter_presencial_manter_presencial_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./admin/manter-presencial/manter-presencial.component */ 59563);
/* harmony import */ var _admin_manter_telefonico_manter_telefonico_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./admin/manter-telefonico/manter-telefonico.component */ 50670);
/* harmony import */ var _admin_manter_virtual_manter_virtual_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./admin/manter-virtual/manter-virtual.component */ 1319);
/* harmony import */ var _site_veja_mais_veja_mais_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./site/veja-mais/veja-mais.component */ 97202);
/* harmony import */ var _site_faq_faq_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./site/faq/faq.component */ 80343);
/* harmony import */ var _site_cadastre_acao_cadastre_acao_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./site/cadastre-acao/cadastre-acao.component */ 30938);
/* harmony import */ var _site_quem_somos_quem_somos_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./site/quem-somos/quem-somos.component */ 98423);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};































const routes = [
    // Site
    { path: 'home', component: _site_home_home_component__WEBPACK_IMPORTED_MODULE_3__.HomeComponent },
    { path: 'registro', component: _auth_signup_signup_component__WEBPACK_IMPORTED_MODULE_1__.SignupComponent },
    { path: 'login', component: _auth_login_login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent },
    { path: 'contato', component: _site_contato_contato_component__WEBPACK_IMPORTED_MODULE_2__.ContatoComponent },
    { path: 'doacao', component: _site_doacao_doacao_component__WEBPACK_IMPORTED_MODULE_15__.DoacaoComponent },
    { path: 'produtos', component: _site_produtos_produtos_component__WEBPACK_IMPORTED_MODULE_16__.ProdutosComponent },
    { path: 'procuro-ajuda', component: _site_procuro_ajuda_procuro_ajuda_component__WEBPACK_IMPORTED_MODULE_13__.ProcuroAjudaComponent },
    { path: 'quero-ajudar', component: _site_quero_ajudar_quero_ajudar_component__WEBPACK_IMPORTED_MODULE_14__.QueroAjudarComponent },
    { path: 'veja-mais', component: _site_veja_mais_veja_mais_component__WEBPACK_IMPORTED_MODULE_23__.VejaMaisComponent },
    { path: 'faq', component: _site_faq_faq_component__WEBPACK_IMPORTED_MODULE_24__.FaqComponent },
    { path: 'cadastre-acao', component: _site_cadastre_acao_cadastre_acao_component__WEBPACK_IMPORTED_MODULE_25__.CadastreAcaoComponent },
    { path: 'quem-somos', component: _site_quem_somos_quem_somos_component__WEBPACK_IMPORTED_MODULE_26__.QuemSomosComponent },
    // Blog
    { path: 'blog', component: _blog_blog_component__WEBPACK_IMPORTED_MODULE_17__.BlogComponent },
    // Admin
    { path: 'home-admin', component: _admin_home_admin_home_admin_component__WEBPACK_IMPORTED_MODULE_12__.HomeAdminComponent },
    { path: 'listar-instituicao', component: _admin_listar_instituicao_listar_instituicao_component__WEBPACK_IMPORTED_MODULE_4__.ListarInstituicaoComponent },
    { path: 'listar-postagem', component: _admin_listar_postagem_listar_postagem_component__WEBPACK_IMPORTED_MODULE_5__.ListarPostagemComponent },
    { path: 'listar-produto', component: _admin_listar_produto_listar_produto_component__WEBPACK_IMPORTED_MODULE_6__.ListarProdutoComponent },
    { path: 'listar-voluntario', component: _admin_listar_voluntario_listar_voluntario_component__WEBPACK_IMPORTED_MODULE_11__.ListarVoluntarioComponent },
    { path: 'listar-atendimentos-atividades', component: _admin_listar_atendimentos_atividades_listar_atendimentos_atividades_component__WEBPACK_IMPORTED_MODULE_18__.ListarAtendimentosAtividadesComponent },
    { path: 'manter-instituicao', component: _admin_manter_instituicao_manter_instituicao_component__WEBPACK_IMPORTED_MODULE_7__.ManterInstituicaoComponent },
    { path: 'manter-postagem', component: _admin_manter_postagem_manter_postagem_component__WEBPACK_IMPORTED_MODULE_8__.ManterPostagemComponent },
    { path: 'manter-produto', component: _admin_manter_produto_manter_produto_component__WEBPACK_IMPORTED_MODULE_9__.ManterProdutoComponent },
    { path: 'manter-voluntario', component: _admin_manter_voluntario_manter_voluntario_component__WEBPACK_IMPORTED_MODULE_10__.ManterVoluntarioComponent },
    { path: 'manter-evento', component: _admin_manter_evento_manter_evento_component__WEBPACK_IMPORTED_MODULE_19__.ManterEventoComponent },
    { path: 'manter-presencial', component: _admin_manter_presencial_manter_presencial_component__WEBPACK_IMPORTED_MODULE_20__.ManterPresencialComponent },
    { path: 'manter-telefonico', component: _admin_manter_telefonico_manter_telefonico_component__WEBPACK_IMPORTED_MODULE_21__.ManterTelefonicoComponent },
    { path: 'manter-virtual', component: _admin_manter_virtual_manter_virtual_component__WEBPACK_IMPORTED_MODULE_22__.ManterVirtualComponent },
    { path: '', redirectTo: 'home', pathMatch: 'full' }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_27__.NgModule)({
        imports: [
            _angular_common__WEBPACK_IMPORTED_MODULE_28__.CommonModule,
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_29__.BrowserModule,
            _angular_router__WEBPACK_IMPORTED_MODULE_30__.RouterModule.forRoot(routes, {
                useHash: true,
                relativeLinkResolution: 'legacy'
            })
        ],
        exports: [],
    })
], AppRoutingModule);



/***/ }),

/***/ 78146:
/*!***********************************************!*\
  !*** ./src/app/auth/login/login.component.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "LoginComponent": function() { return /* binding */ LoginComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./login.component.html */ 29711);
/* harmony import */ var _login_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component.css */ 38097);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let LoginComponent = class LoginComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() {
    }
    login() {
        this.router.navigate(['home-admin']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
LoginComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-login',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_login_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_login_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], LoginComponent);



/***/ }),

/***/ 64309:
/*!*************************************************!*\
  !*** ./src/app/auth/signup/signup.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SignupComponent": function() { return /* binding */ SignupComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signup_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./signup.component.html */ 28562);
/* harmony import */ var _signup_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./signup.component.scss */ 14243);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let SignupComponent = class SignupComponent {
    constructor() {
        this.test = new Date();
    }
    ngOnInit() { }
};
SignupComponent.ctorParameters = () => [];
SignupComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-signup',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_signup_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_signup_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], SignupComponent);



/***/ }),

/***/ 38716:
/*!****************************************!*\
  !*** ./src/app/blog/blog.component.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "BlogComponent": function() { return /* binding */ BlogComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_blog_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./blog.component.html */ 67029);
/* harmony import */ var _blog_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blog.component.css */ 21928);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let BlogComponent = class BlogComponent {
    constructor() { }
    ngOnInit() {
    }
};
BlogComponent.ctorParameters = () => [];
BlogComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-blog',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_blog_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_blog_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], BlogComponent);



/***/ }),

/***/ 45227:
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FooterComponent": function() { return /* binding */ FooterComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./footer.component.html */ 66364);
/* harmony import */ var _footer_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./footer.component.scss */ 34663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let FooterComponent = class FooterComponent {
    constructor(router) {
        this.router = router;
        this.test = new Date();
    }
    ngOnInit() {
    }
    getPath() {
        return this.router.url;
    }
};
FooterComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
FooterComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-footer',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_footer_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_footer_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], FooterComponent);



/***/ }),

/***/ 54696:
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "NavbarComponent": function() { return /* binding */ NavbarComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./navbar.component.html */ 36642);
/* harmony import */ var _navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./navbar.component.scss */ 6046);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 54364);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





let NavbarComponent = class NavbarComponent {
    constructor(location, router) {
        this.location = location;
        this.router = router;
        this.isCollapsed = true;
        this.yScrollStack = [];
    }
    ngOnInit() {
        this.router.events.subscribe((event) => {
            this.isCollapsed = true;
            if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationStart) {
                if (event.url != this.lastPoppedUrl)
                    this.yScrollStack.push(window.scrollY);
            }
            else if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__.NavigationEnd) {
                if (event.url == this.lastPoppedUrl) {
                    this.lastPoppedUrl = undefined;
                    window.scrollTo(0, this.yScrollStack.pop());
                }
                else
                    window.scrollTo(0, 0);
            }
        });
        this.location.subscribe((ev) => {
            this.lastPoppedUrl = ev.url;
        });
    }
    isHome() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/home') {
            return true;
        }
        else {
            return false;
        }
    }
    isDocumentation() {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === '#/documentation') {
            return true;
        }
        else {
            return false;
        }
    }
};
NavbarComponent.ctorParameters = () => [
    { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__.Location },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
NavbarComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_4__.Component)({
        selector: 'app-navbar',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_navbar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_navbar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], NavbarComponent);



/***/ }),

/***/ 30938:
/*!***************************************************************!*\
  !*** ./src/app/site/cadastre-acao/cadastre-acao.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "CadastreAcaoComponent": function() { return /* binding */ CadastreAcaoComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cadastre_acao_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./cadastre-acao.component.html */ 89386);
/* harmony import */ var _cadastre_acao_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cadastre-acao.component.css */ 61466);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let CadastreAcaoComponent = class CadastreAcaoComponent {
    constructor() { }
    ngOnInit() {
    }
};
CadastreAcaoComponent.ctorParameters = () => [];
CadastreAcaoComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-cadastre-acao',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_cadastre_acao_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_cadastre_acao_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], CadastreAcaoComponent);



/***/ }),

/***/ 44835:
/*!***************************************************!*\
  !*** ./src/app/site/contato/contato.component.ts ***!
  \***************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ContatoComponent": function() { return /* binding */ ContatoComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contato_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./contato.component.html */ 66847);
/* harmony import */ var _contato_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contato.component.css */ 78458);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ContatoComponent = class ContatoComponent {
    constructor() { }
    ngOnInit() {
    }
};
ContatoComponent.ctorParameters = () => [];
ContatoComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-contato',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_contato_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_contato_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ContatoComponent);



/***/ }),

/***/ 38009:
/*!*************************************************!*\
  !*** ./src/app/site/doacao/doacao.component.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DoacaoComponent": function() { return /* binding */ DoacaoComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_doacao_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./doacao.component.html */ 7625);
/* harmony import */ var _doacao_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./doacao.component.css */ 41476);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let DoacaoComponent = class DoacaoComponent {
    constructor() { }
    ngOnInit() {
    }
};
DoacaoComponent.ctorParameters = () => [];
DoacaoComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-doacao',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_doacao_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_doacao_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], DoacaoComponent);



/***/ }),

/***/ 80343:
/*!*******************************************!*\
  !*** ./src/app/site/faq/faq.component.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "FaqComponent": function() { return /* binding */ FaqComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_faq_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./faq.component.html */ 10481);
/* harmony import */ var _faq_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./faq.component.css */ 16291);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let FaqComponent = class FaqComponent {
    constructor() { }
    ngOnInit() {
    }
};
FaqComponent.ctorParameters = () => [];
FaqComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-faq',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_faq_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_faq_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], FaqComponent);



/***/ }),

/***/ 59875:
/*!*********************************************!*\
  !*** ./src/app/site/home/home.component.ts ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "HomeComponent": function() { return /* binding */ HomeComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./home.component.html */ 96958);
/* harmony import */ var _home_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.component.scss */ 45879);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() { }
};
HomeComponent.ctorParameters = () => [];
HomeComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-home',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_home_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_home_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], HomeComponent);



/***/ }),

/***/ 64272:
/*!***************************************************************!*\
  !*** ./src/app/site/procuro-ajuda/procuro-ajuda.component.ts ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProcuroAjudaComponent": function() { return /* binding */ ProcuroAjudaComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_procuro_ajuda_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./procuro-ajuda.component.html */ 9549);
/* harmony import */ var _procuro_ajuda_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./procuro-ajuda.component.scss */ 93078);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let ProcuroAjudaComponent = class ProcuroAjudaComponent {
    constructor(router) {
        this.router = router;
        this.cidade = null;
        this.tipo = null;
    }
    ngOnInit() {
    }
    irParaVejaMais() {
        this.router.navigate(['./veja-mais']);
    }
};
ProcuroAjudaComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
ProcuroAjudaComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-procuro-ajuda',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_procuro_ajuda_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_procuro_ajuda_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProcuroAjudaComponent);



/***/ }),

/***/ 3896:
/*!*****************************************************!*\
  !*** ./src/app/site/produtos/produtos.component.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ProdutosComponent": function() { return /* binding */ ProdutosComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_produtos_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./produtos.component.html */ 55364);
/* harmony import */ var _produtos_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./produtos.component.css */ 1242);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let ProdutosComponent = class ProdutosComponent {
    constructor() { }
    ngOnInit() {
    }
};
ProdutosComponent.ctorParameters = () => [];
ProdutosComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-produtos',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_produtos_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_produtos_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], ProdutosComponent);



/***/ }),

/***/ 98423:
/*!*********************************************************!*\
  !*** ./src/app/site/quem-somos/quem-somos.component.ts ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QuemSomosComponent": function() { return /* binding */ QuemSomosComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quem_somos_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./quem-somos.component.html */ 35033);
/* harmony import */ var _quem_somos_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quem-somos.component.css */ 89178);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let QuemSomosComponent = class QuemSomosComponent {
    constructor() { }
    ngOnInit() {
    }
};
QuemSomosComponent.ctorParameters = () => [];
QuemSomosComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-quem-somos',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quem_somos_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_quem_somos_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], QuemSomosComponent);



/***/ }),

/***/ 71787:
/*!*************************************************************!*\
  !*** ./src/app/site/quero-ajudar/quero-ajudar.component.ts ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "QueroAjudarComponent": function() { return /* binding */ QueroAjudarComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quero_ajudar_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./quero-ajudar.component.html */ 75776);
/* harmony import */ var _quero_ajudar_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./quero-ajudar.component.scss */ 12161);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 71258);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




let QueroAjudarComponent = class QueroAjudarComponent {
    constructor(router) {
        this.router = router;
        this.cidade = null;
    }
    ngOnInit() {
    }
    irParaVejaMais() {
        this.router.navigate(['./veja-mais']);
    }
};
QueroAjudarComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__.Router }
];
QueroAjudarComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_3__.Component)({
        selector: 'app-quero-ajudar',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_quero_ajudar_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_quero_ajudar_component_scss__WEBPACK_IMPORTED_MODULE_1__]
    })
], QueroAjudarComponent);



/***/ }),

/***/ 97202:
/*!*******************************************************!*\
  !*** ./src/app/site/veja-mais/veja-mais.component.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VejaMaisComponent": function() { return /* binding */ VejaMaisComponent; }
/* harmony export */ });
/* harmony import */ var _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_veja_mais_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./veja-mais.component.html */ 22091);
/* harmony import */ var _veja_mais_component_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./veja-mais.component.css */ 25740);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



let VejaMaisComponent = class VejaMaisComponent {
    constructor() { }
    ngOnInit() {
    }
};
VejaMaisComponent.ctorParameters = () => [];
VejaMaisComponent = __decorate([
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-veja-mais',
        template: _C_Users_danic_Documents_Projetos_franco_amor_node_modules_ngtools_webpack_src_loaders_direct_resource_js_veja_mais_component_html__WEBPACK_IMPORTED_MODULE_0__.default,
        styles: [_veja_mais_component_css__WEBPACK_IMPORTED_MODULE_1__]
    })
], VejaMaisComponent);



/***/ }),

/***/ 92340:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "environment": function() { return /* binding */ environment; }
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ 14431:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 2316);
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ 61882);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 36747);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 92340);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
    (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
(0,_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)
    .catch(err => console.error(err));


/***/ }),

/***/ 23874:
/*!***************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/home-admin/home-admin.component.html ***!
  \***************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-admin\">\r\n    <section class=\"section section-shaped\"> </section>\r\n\r\n    <section class=\"section section-shaped bg-secondary\">\r\n        <div class=\"container\">\r\n            <ul ngbNav #nav=\"ngbNav\" [(activeId)]=\"active\" class=\"nav-tabs\">\r\n                <li [ngbNavItem]=\"1\">\r\n                    <a ngbNavLink>Instituições</a>\r\n                    <ng-template ngbNavContent>\r\n                        <app-listar-instituicao></app-listar-instituicao>\r\n                    </ng-template>\r\n                </li>\r\n                <li [ngbNavItem]=\"2\">\r\n                    <a ngbNavLink>Atendimentos/Atividades</a>\r\n                    <ng-template ngbNavContent>\r\n                        <app-listar-atendimentos-atividades></app-listar-atendimentos-atividades>\r\n                    </ng-template>\r\n                </li>\r\n                <li [ngbNavItem]=\"3\">\r\n                    <a ngbNavLink>Voluntários</a>\r\n                    <ng-template ngbNavContent>\r\n                        <app-listar-voluntario></app-listar-voluntario>\r\n                    </ng-template>\r\n                </li>\r\n                <li [ngbNavItem]=\"4\">\r\n                    <a ngbNavLink>Postagens</a>\r\n                    <ng-template ngbNavContent>\r\n                        <app-listar-postagem></app-listar-postagem>\r\n                    </ng-template>\r\n                </li>\r\n                <li [ngbNavItem]=\"5\">\r\n                    <a ngbNavLink>Produtos</a>\r\n                    <ng-template ngbNavContent>\r\n                        <app-listar-produto></app-listar-produto>\r\n                    </ng-template>\r\n                </li>\r\n            </ul>\r\n            <div [ngbNavOutlet]=\"nav\" class=\"mt-2\"></div>\r\n        </div>\r\n    </section>\r\n</main>");

/***/ }),

/***/ 37679:
/*!*******************************************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/listar-atendimentos-atividades/listar-atendimentos-atividades.component.html ***!
  \*******************************************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-shaped bg-secondary\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row\" style=\"display: flow-root;\">\r\n            <button type=\"button\" class=\"btn btn-outline-success btnNovo\" (click)=\"novoEvento()\">\r\n                <i class=\"ni ni-fat-add\"></i> Evento</button>\r\n            <button type=\"button\" class=\"btn btn-outline-success btnNovo\" (click)=\"novoTelefonico()\">\r\n                <i class=\"ni ni-fat-add\"></i> Telefônico</button>\r\n            <button type=\"button\" class=\"btn btn-outline-success btnNovo\" (click)=\"novoVirtual()\">\r\n                <i class=\"ni ni-fat-add\"></i> Virtual</button>\r\n            <button type=\"button\" class=\"btn btn-outline-success btnNovo\" (click)=\"novoPresencial()\">\r\n                <i class=\"ni ni-fat-add\"></i> Presencial</button>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label>Nome</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome da atividade/evento\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label>Instituição</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"cnpj\" placeholder=\"Instituição responsável\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label>Cidade</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"cidade\" placeholder=\"Cidade\" name=\"cidade\"\r\n                        [(ngModel)]=\"cidade\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-2\">\r\n                <div class=\"form-group\">\r\n                    <label>Tipo</label>\r\n                    <select class=\"form-control\" id=\"tipo\" name='tipo' [(ngModel)]=\"tipo\">\r\n                        <option value=null>Selecione</option>\r\n                        <option value='atividade'>Atividade</option>\r\n                        <option value='evento'>Evento</option>\r\n                        <option value='presencial'>Presencial</option>\r\n                        <option value='telefonico'>Telefônico</option>\r\n                        <option value='virtual'>Virtual</option>\r\n                    </select>\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-1\" style=\"padding-top: 2rem;\">\r\n                <button class=\"btn btn-icon btn-2 btn-outline-light\" type=\"button\">\r\n                    <span class=\"btn-inner--icon\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <table class=\"table table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Nome</th>\r\n                    <th scope=\"col\">Instituição</th>\r\n                    <th scope=\"col\">Cidade</th>\r\n                    <th scope=\"col\">Tipo</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of atividades\">\r\n                    <td>{{item?.nome}}</td>\r\n                    <td>{{item?.instituicao}}</td>\r\n                    <td>{{item?.cidade}}</td>\r\n                    <td>{{item?.tipo}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</section>");

/***/ }),

/***/ 71914:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/listar-instituicao/listar-instituicao.component.html ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-shaped bg-secondary\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row\" style=\"display: flow-root;\">\r\n            <button type=\"button\" class=\"btn btn-outline-success btnNovo\" (click)=\"novaInstituicao()\">\r\n                <i class=\"ni ni-fat-add\"></i> Instituição</button>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label>Nome</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"nome\" name=\"nome\"\r\n                    [(ngModel)]=\"filtro.nome\" placeholder=\"Nome da instituição\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label>CNPJ</label>\r\n                    <input type=\"text\" [textMask]=\"{mask: cnpjMask}\" class=\"form-control\" id=\"cnpj\" name=\"cnpj\"\r\n                    [(ngModel)]=\"filtro.cnpj\"\r\n                        placeholder=\"CNPJ da instituição\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label>Cidade</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"cidade\" placeholder=\"Cidade\" name=\"cidade\"\r\n                        [(ngModel)]=\"filtro.cidade\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-1\" style=\"padding-top: 2rem;\">\r\n                <button class=\"btn btn-icon btn-2 btn-outline-light\" type=\"button\">\r\n                    <span class=\"btn-inner--icon\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <table class=\"table table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Nome</th>\r\n                    <th scope=\"col\">CNPJ</th>\r\n                    <th scope=\"col\">Cidade</th>\r\n                    <th scope=\"col\">E-mail</th>\r\n                    <th scope=\"col\">Telefone</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of instituicoes\">\r\n                    <td>{{item?.nome}}</td>\r\n                    <td>{{item?.cnpj}}</td>\r\n                    <td>{{item?.cidade}}</td>\r\n                    <td>{{item?.email}}</td>\r\n                    <td>{{item?.telefone}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</section>");

/***/ }),

/***/ 9430:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/listar-postagem/listar-postagem.component.html ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-shaped bg-secondary\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row\" style=\"display: flow-root;\">\r\n            <button type=\"button\" class=\"btn btn-outline-success btnNovo\" (click)=\"novaPostagem()\">\r\n                <i class=\"ni ni-fat-add\"></i> Postagem</button>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label>Título</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Título da postagem\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label>Autor</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"cnpj\" placeholder=\"Autor da postagem\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-1\" style=\"padding-top: 2rem;\">\r\n                <button class=\"btn btn-icon btn-2 btn-outline-light\" type=\"button\">\r\n                    <span class=\"btn-inner--icon\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <table class=\"table table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Título</th>\r\n                    <th scope=\"col\">Autor</th>\r\n                    <th scope=\"col\">Data</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of postagens\">\r\n                    <td>{{item?.titulo}}</td>\r\n                    <td>{{item?.autor}}</td>\r\n                    <td>{{item?.data}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</section>");

/***/ }),

/***/ 5258:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/listar-produto/listar-produto.component.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-shaped bg-secondary\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row\" style=\"display: flow-root;\">\r\n            <button type=\"button\" class=\"btn btn-outline-success btnNovo\" (click)=\"novoProduto()\">\r\n                <i class=\"ni ni-fat-add\"></i> Produto</button>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label>Produto</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome do produto\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-1\" style=\"padding-top: 2rem;\">\r\n                <button class=\"btn btn-icon btn-2 btn-outline-light\" type=\"button\">\r\n                    <span class=\"btn-inner--icon\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <table class=\"table table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Produto</th>\r\n                    <th scope=\"col\">Valor</th>\r\n                    <th scope=\"col\">Estoque</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of produtos\">\r\n                    <td>{{item?.nome}}</td>\r\n                    <td>{{item?.valor}}</td>\r\n                    <td>{{item?.estoque}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</section>");

/***/ }),

/***/ 32573:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/listar-voluntario/listar-voluntario.component.html ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"section section-shaped bg-secondary\">\r\n    <div class=\"container\">\r\n\r\n        <div class=\"row\" style=\"display: flow-root;\">\r\n            <button type=\"button\" class=\"btn btn-outline-success btnNovo\" (click)=\"novoVoluntario()\">\r\n                <i class=\"ni ni-fat-add\"></i> Voluntário</button>\r\n        </div>\r\n\r\n        <div class=\"row\">\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label>Nome</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome do voluntário\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-3\">\r\n                <div class=\"form-group\">\r\n                    <label>CPF</label>\r\n                    <input type=\"text\" [textMask]=\"{mask: cpfMask}\" class=\"form-control\" id=\"cpf\"\r\n                        placeholder=\"CPF do voluntário\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-4\">\r\n                <div class=\"form-group\">\r\n                    <label>Cidade</label>\r\n                    <input type=\"text\" class=\"form-control\" id=\"cidade\" placeholder=\"Cidade\" name=\"cidade\"\r\n                        [(ngModel)]=\"cidade\">\r\n                </div>\r\n            </div>\r\n            <div class=\"col-md-1\" style=\"padding-top: 2rem;\">\r\n                <button class=\"btn btn-icon btn-2 btn-outline-light\" type=\"button\">\r\n                    <span class=\"btn-inner--icon\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span>\r\n                </button>\r\n            </div>\r\n        </div>\r\n\r\n        <table class=\"table table-hover\">\r\n            <thead>\r\n                <tr>\r\n                    <th scope=\"col\">Nome</th>\r\n                    <th scope=\"col\">CPF</th>\r\n                    <th scope=\"col\">E-mail</th>\r\n                    <th scope=\"col\">Whatsapp</th>\r\n                </tr>\r\n            </thead>\r\n            <tbody>\r\n                <tr *ngFor=\"let item of voluntarios\">\r\n                    <td>{{item?.nome}}</td>\r\n                    <td>{{item?.cpf}}</td>\r\n                    <td>{{item?.email}}</td>\r\n                    <td>{{item?.whatsapp}}</td>\r\n                </tr>\r\n            </tbody>\r\n        </table>\r\n    </div>\r\n</section>");

/***/ }),

/***/ 98882:
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/manter-evento/manter-evento.component.html ***!
  \*********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-admin\">\r\n    <section class=\"section section-shaped\"> </section>\r\n\r\n    <section class=\"section section-shaped bg-secondary\">\r\n        <div class=\"container pt-lg-md\">\r\n            <h3>Manter Evento</h3>\r\n            <hr>\r\n\r\n            <form>\r\n                <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                    <div class=\"col-md-6\">\r\n                        <label>Nome</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome do atendimento\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                    <div class=\"col-md-6\">\r\n                        <label>Instituição</label>\r\n                        <select class=\"form-control\" id=\"instituicao\">\r\n                            <option>ABC</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <label>Endereço</label>\r\n                        <select class=\"form-control\" id=\"endereco\" name='endereco' [(ngModel)]=\"endereco\">\r\n                            <option value=null>Endereço 1</option>\r\n                            <option value='outro'>Outro</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"endereco === 'outro'\">\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <label>CEP</label>\r\n                            <div class=\"input-group campoCep\">\r\n                                <input type=\"text\" [textMask]=\"{mask: cepMask}\" class=\"form-control\" name=\"cep\"\r\n                                    placeholder=\"CEP\" [(ngModel)]=\"cepInformado\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-primary\" type=\"button\"\r\n                                        (click)=\"buscarCep()\">Buscar</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Logradouro</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"logradouro\" placeholder=\"Rua ou Av\"\r\n                                    name=\"logradouro\" [(ngModel)]=\"logradouro\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Nº/Complemento</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"numComp\" placeholder=\"Nº/Bloco/Apto\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Bairro</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"bairro\" placeholder=\"Bairro\" name=\"bairro\"\r\n                                    [(ngModel)]=\"bairro\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Cidade</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"cidade\" placeholder=\"Cidade\" name=\"cidade\"\r\n                                    [(ngModel)]=\"cidade\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <hr>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Breve resumo</label>\r\n                            <textarea class=\"form-control\" id=\"resumo\" rows=\"3\"\r\n                                placeholder=\"Breve resumo da atividade\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <label>Participação</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"input-group\">\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"participacao\" class=\"custom-control-input\" id=\"livre\" type=\"radio\"\r\n                                    value=\"livre\" [(ngModel)]=\"participacao\">\r\n                                <label class=\"custom-control-label\" for=\"livre\">Livre</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"participacao\" class=\"custom-control-input\" id=\"agendar\" type=\"radio\"\r\n                                    value=\"agendar\" [(ngModel)]=\"participacao\">\r\n                                <label class=\"custom-control-label\" for=\"agendar\">Agendar</label>\r\n                            </div>\r\n                            <div class=\"col-md-4\" *ngIf=\"participacao === 'agendar'\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"valor\"\r\n                                    placeholder=\"Link, e-mail ou telefone\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Definição de datas e periodicidade -->\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label>Data</label>\r\n                            <div class=\"input-group input-group-alternative\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n                                </div>\r\n                                <input class=\"form-control datepicker\" placeholder=\"Data\" name=\"dp\"\r\n                                    [(ngModel)]=\"dataAtividade\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\"\r\n                                    type=\"text\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                        <div class=\"col-md-6\">\r\n                            <label>Horário de início</label>\r\n                            <input [ngxTimepicker]=\"picker15\" [format]=\"24\" class=\"form-control\" placeholder=\"00:00\"\r\n                                id=\"horarioinicio\" name=\"horarioinicio\" [(ngModel)]=\"dataAtividadeInicio\">\r\n                            <ngx-material-timepicker #picker15></ngx-material-timepicker>\r\n                        </div>\r\n                        -\r\n                        <div class=\"col-md-6\">\r\n                            <label>Horário de fim</label>\r\n                            <input [ngxTimepicker]=\"picker16\" [format]=\"24\" class=\"form-control\" placeholder=\"00:00\"\r\n                                id=\"horariofim\" name=\"horariofim\" [(ngModel)]=\"dataAtividadeFim\">\r\n                            <ngx-material-timepicker #picker16></ngx-material-timepicker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>&nbsp;</label>\r\n                        <div class=\"custom-control custom-checkbox mb-3 divRepete\">\r\n                            <input class=\"custom-control-input\" id=\"repete\" type=\"checkbox\" name=\"chkRepete\"\r\n                                [(ngModel)]=\"repete\"\r\n                                [disabled]=\"!dataAtividade || !dataAtividadeInicio || !dataAtividadeFim\">\r\n                            <label class=\"custom-control-label\" for=\"repete\">Se repete?</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" *ngIf=\"repete\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>Recorrência</label>\r\n                        <select class=\"form-control\" id=\"periodicidade\" name='periodicidade'\r\n                            [(ngModel)]=\"periodicidade\">\r\n                            <option value=null>Selecione</option>\r\n                            <option value='diaria'>Diária</option>\r\n                            <option value='semanal'>Semanal</option>\r\n                            <option value='bisemanal'>Bi-semanal</option>\r\n                            <option value='mensal'>Mensal</option>\r\n                            <option value='bimestral'>Bimestral</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label>Última data</label>\r\n                            <div class=\"input-group input-group-alternative\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n                                </div>\r\n                                <input class=\"form-control datepicker\" placeholder=\"Data\" name=\"dataPrazo\"\r\n                                    [(ngModel)]=\"dataPrazo\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\"\r\n                                    type=\"text\" [disabled]=\"prazoIndefinido\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <label>&nbsp;</label>\r\n                        <div class=\"custom-control custom-checkbox mb-3 divIndefinido\">\r\n                            <input class=\"custom-control-input\" id=\"prazoIndefinido\" type=\"checkbox\"\r\n                                name=\"chkIndefinido\" [(ngModel)]=\"prazoIndefinido\">\r\n                            <label class=\"custom-control-label\" for=\"prazoIndefinido\">Prazo indefinido</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" *ngIf=\"repete && periodicidade == 'diaria'\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>&nbsp;</label>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"domingo\" type=\"checkbox\"\r\n                                            name=\"chkDomingo\" [(ngModel)]=\"domingo\">\r\n                                        <label class=\"custom-control-label\" for=\"domingo\">Domingo</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker1\" [format]=\"24\" [disabled]=\"!domingo\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"domingoinicio\">\r\n                                        <ngx-material-timepicker #picker1></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker2\" [format]=\"24\" [disabled]=\"!domingo\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"domingofim\">\r\n                                        <ngx-material-timepicker #picker2></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"segunda\" type=\"checkbox\"\r\n                                            name=\"chkSegunda\" [(ngModel)]=\"segunda\">\r\n                                        <label class=\"custom-control-label\" for=\"segunda\">Segunda-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker3\" [format]=\"24\" [disabled]=\"!segunda\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"segundainicio\">\r\n                                        <ngx-material-timepicker #picker3></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker4\" [format]=\"24\" [disabled]=\"!segunda\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"segundafim\">\r\n                                        <ngx-material-timepicker #picker4></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"terca\" type=\"checkbox\" name=\"chkTerca\"\r\n                                            [(ngModel)]=\"terca\">\r\n                                        <label class=\"custom-control-label\" for=\"terca\">Terça-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker5\" [format]=\"24\" [disabled]=\"!terca\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"tercainicio\">\r\n                                        <ngx-material-timepicker #picker5></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker6\" [format]=\"24\" [disabled]=\"!terca\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"tercafim\">\r\n                                        <ngx-material-timepicker #picker6></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"quarta\" type=\"checkbox\" name=\"chkQuarta\"\r\n                                            [(ngModel)]=\"quarta\">\r\n                                        <label class=\"custom-control-label\" for=\"quarta\">Quarta-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker7\" [format]=\"24\" [disabled]=\"!quarta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"quartainicio\">\r\n                                        <ngx-material-timepicker #picker7></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker8\" [format]=\"24\" [disabled]=\"!quarta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"quartafim\">\r\n                                        <ngx-material-timepicker #picker8></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"quinta\" type=\"checkbox\" name=\"chkQuinta\"\r\n                                            [(ngModel)]=\"quinta\">\r\n                                        <label class=\"custom-control-label\" for=\"quinta\">Quinta-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker9\" [format]=\"24\" [disabled]=\"!quinta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"quintainicio\">\r\n                                        <ngx-material-timepicker #picker9></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker10\" [format]=\"24\" [disabled]=\"!quinta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"quintafim\">\r\n                                        <ngx-material-timepicker #picker10></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"sexta\" type=\"checkbox\" name=\"chkSexta\"\r\n                                            [(ngModel)]=\"sexta\">\r\n                                        <label class=\"custom-control-label\" for=\"sexta\">Sexta-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker11\" [format]=\"24\" [disabled]=\"!sexta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"sextainicio\">\r\n                                        <ngx-material-timepicker #picker11></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker12\" [format]=\"24\" [disabled]=\"!sexta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"sextafim\">\r\n                                        <ngx-material-timepicker #picker12></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"sabado\" type=\"checkbox\" name=\"chkSabado\"\r\n                                            [(ngModel)]=\"sabado\">\r\n                                        <label class=\"custom-control-label\" for=\"sabado\">Sábado</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker13\" [format]=\"24\" [disabled]=\"!sabado\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"sabadoinicio\">\r\n                                        <ngx-material-timepicker #picker13></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker14\" [format]=\"24\" [disabled]=\"!sabado\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"sabadofim\">\r\n                                        <ngx-material-timepicker #picker14></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Definição de datas e periodicidade -->\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <label>Valor</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"input-group\">\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"chkValor\" class=\"custom-control-input\" id=\"gratuito\" type=\"radio\"\r\n                                    value=\"gratuito\" [(ngModel)]=\"valor\">\r\n                                <label class=\"custom-control-label\" for=\"gratuito\">Gratuito</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"chkValor\" class=\"custom-control-input\" id=\"social\" type=\"radio\"\r\n                                    value=\"pago\" [(ngModel)]=\"valor\">\r\n                                <label class=\"custom-control-label\" for=\"social\">Pago</label>\r\n                            </div>\r\n                            <div class=\"col-md-4\" *ngIf=\"valor === 'pago'\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"valor\" placeholder=\"Valor (R$)\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                    <div class=\"col-md-6\">\r\n                        <label>Nº atendentes</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"qtdAtendentes\" placeholder=\"Nº de atendentes\">\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <label>Nº atendimentos mensais</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"qtdAtendimento\"\r\n                            placeholder=\"Nº de atendimentos/mês\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Observação</label>\r\n                            <textarea class=\"form-control\" id=\"obs\" rows=\"3\" placeholder=\"Observação\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <hr>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\" style=\"margin: 0 auto;\">\r\n                    <button class=\"btn btn-block btn-outline-primary mb-3\" (click)=\"openModal(classic)\">\r\n                        Selecionar imagens\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n            <hr>\r\n            <div class=\"rodape\">\r\n                <button type=\"button\" class=\"btn btn-outline-light btnVoltar\" (click)=\"voltar()\">Voltar</button>\r\n                <button type=\"button\" class=\"btn btn-outline-success btnSalvar\" (click)=\"salvar()\">Salvar</button>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>\r\n\r\n<!-- Modal Imagem -->\r\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" id=\"modal-title-default\">Selecionar imagens</h6>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <!-- <angular-file-uploader [config]=\"afuConfig\" [resetUpload]=resetVar (ApiResponse)=\"DocUpload($event)\">\r\n            </angular-file-uploader> -->\r\n        </div>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ 98247:
/*!*******************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/manter-instituicao/manter-instituicao.component.html ***!
  \*******************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-admin\">\r\n    <section class=\"section section-shaped\"> </section>\r\n\r\n    <section class=\"section section-shaped bg-secondary\">\r\n        <div class=\"container pt-lg-md\">\r\n            <h3>Manter Instituição</h3>\r\n            <hr>\r\n            <form>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-10\">\r\n                        <div class=\"form-group\">\r\n                            <label>Nome</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome da instituição\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"card-profile-image\" (click)=\"openModal(classicLogo)\">\r\n                            <a href=\"javascript:void(0)\">\r\n                                <img src=\"./assets/img/francoAmor/instituicao.png\" class=\"rounded-circle\"\r\n                                    style=\"width: 100px;\">\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Telefone</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"telefone\" placeholder=\"Telefone de contato\"\r\n                                [textMask]=\"{mask: phoneMask}\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>E-mail</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"E-mail de contato\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <label>Tipo de empresa</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"input-group\">\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"tipoEmpresa\" class=\"custom-control-input\" id=\"associacao\" type=\"radio\"\r\n                                    value=\"associacao\" name=\"associacao\" [(ngModel)]=\"tipoEmpresa\">\r\n                                <label class=\"custom-control-label\" for=\"associacao\" value=\"associacao\">Associação</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"tipoEmpresa\" class=\"custom-control-input\" id=\"mei\" type=\"radio\" value=\"mei\"\r\n                                    name=\"mei\" [(ngModel)]=\"tipoEmpresa\">\r\n                                <label class=\"custom-control-label\" for=\"mei\">MEI</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"tipoEmpresa\" class=\"custom-control-input\" id=\"eireli\" type=\"radio\"\r\n                                    name=\"tipoEmpresa\" value=\"eireli\" [(ngModel)]=\"tipoEmpresa\">\r\n                                <label class=\"custom-control-label\" for=\"eireli\">EIRELI</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"tipoEmpresa\" class=\"custom-control-input\" id=\"ltda\" type=\"radio\"\r\n                                    name=\"tipoEmpresa\" value=\"ltda\" [(ngModel)]=\"tipoEmpresa\">\r\n                                <label class=\"custom-control-label\" for=\"ltda\">Ltda</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"tipoEmpresa\" class=\"custom-control-input\" id=\"fundacao\" type=\"radio\"\r\n                                    name=\"tipoEmpresa\" value=\"fundacao\" [(ngModel)]=\"tipoEmpresa\">\r\n                                <label class=\"custom-control-label\" for=\"fundacao\">Fundação</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"tipoEmpresa\" class=\"custom-control-input\" id=\"outro\" type=\"radio\"\r\n                                    name=\"tipoEmpresa\" value=\"outro\" [(ngModel)]=\"tipoEmpresa\">\r\n                                <label class=\"custom-control-label\" for=\"outro\">Outro</label>\r\n                            </div>\r\n                            <div class=\"col-md-4\" *ngIf=\"tipoEmpresa=== 'outro'\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"valor\" placeholder=\"Outro\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>CNPJ</label>\r\n                            <input type=\"text\" [textMask]=\"{mask: cnpjMask}\" class=\"form-control\" id=\"cnpj\"\r\n                                placeholder=\"CNPJ da instituição\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Data de Fundação</label>\r\n                            <div class=\"input-group input-group-alternative\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n                                </div>\r\n                                <input class=\"form-control datepicker\" placeholder=\"Data de fundação\" name=\"dp\"\r\n                                    [(ngModel)]=\"dataFundacao\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\"\r\n                                    type=\"text\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>CRP</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"crp\" placeholder=\"CRP, caso possua\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Serviços que atende</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"servicos\" placeholder=\"Serviços que atende\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Especialidade de atendimento</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"especialidade\"\r\n                                placeholder=\"Especialidade de atendimento, caso possua\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Público alvo</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"especialidade\"\r\n                                placeholder=\"Público alvo, caso possua\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <label>CEP</label>\r\n                        <div class=\"input-group campoCep\">\r\n                            <input type=\"text\" [textMask]=\"{mask: cepMask}\" class=\"form-control\" name=\"cep\"\r\n                                placeholder=\"CEP\" [(ngModel)]=\"cepInformado\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-outline-primary\" type=\"button\"\r\n                                    (click)=\"buscarCep()\">Buscar</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Logradouro</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"logradouro\" placeholder=\"Rua ou Av\"\r\n                                name=\"logradouro\" [(ngModel)]=\"logradouro\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Nº/Complemento</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"numComp\" placeholder=\"Nº/Bloco/Apto\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Bairro</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"bairro\" placeholder=\"Bairro\" name=\"bairro\"\r\n                                [(ngModel)]=\"bairro\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Cidade</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"cidade\" placeholder=\"Cidade\" name=\"cidade\"\r\n                                [(ngModel)]=\"cidade\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label>Representante 1</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"nomerep1\" placeholder=\"Nome do representante\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label>CPF</label>\r\n                            <input type=\"text\" [textMask]=\"{mask: cpfMask}\" class=\"form-control\" id=\"cpfrep1\"\r\n                                placeholder=\"Cpf do representante\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label>Telefone</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"telefone\"\r\n                                placeholder=\"Telefone do representante\" [textMask]=\"{mask: phoneMask}\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label>Representante 2</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"nomerep2\" placeholder=\"Nome do representante\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label>CPF</label>\r\n                            <input type=\"text\" [textMask]=\"{mask: cpfMask}\" class=\"form-control\" id=\"cpfrep2\"\r\n                                placeholder=\"Cpf do representante\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label>Telefone</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"telefone\"\r\n                                placeholder=\"Telefone do representante\" [textMask]=\"{mask: phoneMask}\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Twitter</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"twitter\" placeholder=\"Twitter, caso possua\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Instagram</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"instagram\" placeholder=\"Instagram, caso possua\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Pinterest</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"pinterest\" placeholder=\"Pinterest, caso possua\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Facebook</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"facebook\" placeholder=\"Facebook, caso possua\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>LinkedIn</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"linkedIn\" placeholder=\"LinkedIn, caso possua\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Site</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"site\" placeholder=\"Site, caso possua\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Objetivo da fundação</label>\r\n                            <textarea class=\"form-control\" id=\"objetivo\" rows=\"3\"\r\n                                placeholder=\"Objetivo da fundação\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Breve história da fundação</label>\r\n                            <textarea class=\"form-control\" id=\"historia\" rows=\"3\"\r\n                                placeholder=\"Breve história da fundação\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\" style=\"margin: 0 auto;\">\r\n                        <button class=\"btn btn-block btn-outline-primary mb-3\" (click)=\"openModal(classic)\">\r\n                            Selecionar imagens\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n                <div class=\"rodape\">\r\n                    <button type=\"button\" class=\"btn btn-outline-light btnVoltar\" (click)=\"voltar()\">Voltar</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-success btnSalvar\" (click)=\"salvar()\">Salvar</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </section>\r\n</main>\r\n\r\n<!-- Modal Logo -->\r\n<ng-template #classicLogo let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" id=\"modal-title-default\">Selecionar logo</h6>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <!-- <angular-file-uploader [config]=\"afuConfig\" [resetUpload]=resetVar (ApiResponse)=\"DocUpload($event)\">\r\n            </angular-file-uploader> -->\r\n        </div>\r\n    </div>\r\n</ng-template>\r\n\r\n<!-- Modal Imagens -->\r\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" id=\"modal-title-default\">Selecionar imagens</h6>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <!-- <angular-file-uploader [config]=\"afuConfig\" [resetUpload]=resetVar (ApiResponse)=\"DocUpload($event)\">\r\n            </angular-file-uploader> -->\r\n        </div>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ 93607:
/*!*************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/manter-postagem/manter-postagem.component.html ***!
  \*************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-admin\">\r\n    <section class=\"section section-shaped\"> </section>\r\n\r\n    <section class=\"section section-shaped bg-secondary\">\r\n        <div class=\"container pt-lg-md\">\r\n            <h3>Manter Postagem</h3>\r\n            <hr>\r\n\r\n            <form>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Título</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"titulo\" placeholder=\"Título da postagem\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Autor</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"autor\" placeholder=\"Autor da postagem\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Link para Autor</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"link\"\r\n                                placeholder=\"Instagram, Facebook, LinkedIn ou outro\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Categoria</label>\r\n                            <select class=\"form-control\" id=\"categoria\" name='categoria' [(ngModel)]=\"categoria\">\r\n                                <option value=null>Selecione</option>\r\n                                <option value='autoconhecimenot'>Autoconhecimento</option>\r\n                                <option value='cultura'>Cultura</option>\r\n                                <option value='meioambiente'>Meio Ambiente</option>\r\n                            </select>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Conteúdo da postagem</label>\r\n                            <textarea class=\"form-control\" id=\"corpo\" rows=\"10\"\r\n                                placeholder=\"Conteúdo da postagem\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\" style=\"margin: 0 auto;\">\r\n                        <button class=\"btn btn-block btn-outline-primary mb-3\" (click)=\"openModal(classic)\">\r\n                            Selecionar imagem\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n                <div class=\"rodape\">\r\n                    <button type=\"button\" class=\"btn btn-outline-light btnVoltar\" (click)=\"voltar()\">Voltar</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-success btnSalvar\" (click)=\"salvar()\">Salvar</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </section>\r\n</main>\r\n\r\n<!-- Modal Imagem -->\r\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" id=\"modal-title-default\">Selecionar imagem</h6>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <!-- <angular-file-uploader [config]=\"afuConfig\" [resetUpload]=resetVar (ApiResponse)=\"DocUpload($event)\">\r\n            </angular-file-uploader> -->\r\n        </div>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ 18453:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/manter-presencial/manter-presencial.component.html ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-admin\">\r\n    <section class=\"section section-shaped\"> </section>\r\n\r\n    <section class=\"section section-shaped bg-secondary\">\r\n        <div class=\"container pt-lg-md\">\r\n            <h3>Manter Atendimento Presencial</h3>\r\n            <hr>\r\n\r\n            <form>\r\n                <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                    <div class=\"col-md-6\">\r\n                        <label>Nome</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome do atendimento\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                    <div class=\"col-md-6\">\r\n                        <label>Instituição</label>\r\n                        <select class=\"form-control\" id=\"instituicao\">\r\n                            <option>ABC</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <label>Endereço</label>\r\n                        <select class=\"form-control\" id=\"endereco\" name='endereco' [(ngModel)]=\"endereco\">\r\n                            <option value=null>Endereço 1</option>\r\n                            <option value='outro'>Outro</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n\r\n                <div *ngIf=\"endereco === 'outro'\">\r\n                    <hr>\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <label>CEP</label>\r\n                            <div class=\"input-group campoCep\">\r\n                                <input type=\"text\" [textMask]=\"{mask: cepMask}\" class=\"form-control\" name=\"cep\"\r\n                                    placeholder=\"CEP\" [(ngModel)]=\"cepInformado\">\r\n                                <div class=\"input-group-append\">\r\n                                    <button class=\"btn btn-outline-primary\" type=\"button\"\r\n                                        (click)=\"buscarCep()\">Buscar</button>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Logradouro</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"logradouro\" placeholder=\"Rua ou Av\"\r\n                                    name=\"logradouro\" [(ngModel)]=\"logradouro\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Nº/Complemento</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"numComp\" placeholder=\"Nº/Bloco/Apto\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"row\">\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Bairro</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"bairro\" placeholder=\"Bairro\" name=\"bairro\"\r\n                                    [(ngModel)]=\"bairro\">\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"col-md-6\">\r\n                            <div class=\"form-group\">\r\n                                <label>Cidade</label>\r\n                                <input type=\"text\" class=\"form-control\" id=\"cidade\" placeholder=\"Cidade\" name=\"cidade\"\r\n                                    [(ngModel)]=\"cidade\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <hr>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <label>Tipo</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"input-group\">\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"tipoEncontro\" class=\"custom-control-input\" id=\"reuniao\" type=\"radio\"\r\n                                    value=\"reuniao\" [(ngModel)]=\"tipoEncontro\">\r\n                                <label class=\"custom-control-label\" for=\"reuniao\">Reunião</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"tipoEncontro\" class=\"custom-control-input\" id=\"atendimento\" type=\"radio\"\r\n                                    value=\"atendimento\" [(ngModel)]=\"tipoEncontro\">\r\n                                <label class=\"custom-control-label\" for=\"atendimento\">Atendimento</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"tipoEncontro\" class=\"custom-control-input\" id=\"outro\" type=\"radio\"\r\n                                    value=\"outro\" [(ngModel)]=\"tipoEncontro\">\r\n                                <label class=\"custom-control-label\" for=\"outro\">Outro</label>\r\n                            </div>\r\n                            <div class=\"col-md-4\" *ngIf=\"tipoEncontro === 'outro'\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"valor\" placeholder=\"Outro tipo\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <label>Participação</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"input-group\">\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"participacao\" class=\"custom-control-input\" id=\"livre\" type=\"radio\"\r\n                                    value=\"livre\" [(ngModel)]=\"participacao\">\r\n                                <label class=\"custom-control-label\" for=\"livre\">Livre</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"participacao\" class=\"custom-control-input\" id=\"agendar\" type=\"radio\"\r\n                                    value=\"agendar\" [(ngModel)]=\"participacao\">\r\n                                <label class=\"custom-control-label\" for=\"agendar\">Agendar</label>\r\n                            </div>\r\n                            <div class=\"col-md-4\" *ngIf=\"participacao === 'agendar'\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"valor\"\r\n                                    placeholder=\"Link, e-mail ou telefone\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Definição de datas e periodicidade -->\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label>Data</label>\r\n                            <div class=\"input-group input-group-alternative\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n                                </div>\r\n                                <input class=\"form-control datepicker\" placeholder=\"Data\" name=\"dp\"\r\n                                    [(ngModel)]=\"dataAtividade\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\"\r\n                                    type=\"text\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                        <div class=\"col-md-6\">\r\n                            <label>Horário de início</label>\r\n                            <input [ngxTimepicker]=\"picker15\" [format]=\"24\" class=\"form-control\" placeholder=\"00:00\"\r\n                                id=\"horarioinicio\" name=\"horarioinicio\" [(ngModel)]=\"dataAtividadeInicio\">\r\n                            <ngx-material-timepicker #picker15></ngx-material-timepicker>\r\n                        </div>\r\n                        -\r\n                        <div class=\"col-md-6\">\r\n                            <label>Horário de fim</label>\r\n                            <input [ngxTimepicker]=\"picker16\" [format]=\"24\" class=\"form-control\" placeholder=\"00:00\"\r\n                                id=\"horariofim\" name=\"horariofim\" [(ngModel)]=\"dataAtividadeFim\">\r\n                            <ngx-material-timepicker #picker16></ngx-material-timepicker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>&nbsp;</label>\r\n                        <div class=\"custom-control custom-checkbox mb-3 divRepete\">\r\n                            <input class=\"custom-control-input\" id=\"repete\" type=\"checkbox\" name=\"chkRepete\"\r\n                                [(ngModel)]=\"repete\"\r\n                                [disabled]=\"!dataAtividade || !dataAtividadeInicio || !dataAtividadeFim\">\r\n                            <label class=\"custom-control-label\" for=\"repete\">Se repete?</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" *ngIf=\"repete\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>Recorrência</label>\r\n                        <select class=\"form-control\" id=\"periodicidade\" name='periodicidade'\r\n                            [(ngModel)]=\"periodicidade\">\r\n                            <option value=null>Selecione</option>\r\n                            <option value='diaria'>Diária</option>\r\n                            <option value='semanal'>Semanal</option>\r\n                            <option value='bisemanal'>Bi-semanal</option>\r\n                            <option value='mensal'>Mensal</option>\r\n                            <option value='bimestral'>Bimestral</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label>Última data</label>\r\n                            <div class=\"input-group input-group-alternative\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n                                </div>\r\n                                <input class=\"form-control datepicker\" placeholder=\"Data\" name=\"dataPrazo\"\r\n                                    [(ngModel)]=\"dataPrazo\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\"\r\n                                    type=\"text\" [disabled]=\"prazoIndefinido\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <label>&nbsp;</label>\r\n                        <div class=\"custom-control custom-checkbox mb-3 divIndefinido\">\r\n                            <input class=\"custom-control-input\" id=\"prazoIndefinido\" type=\"checkbox\"\r\n                                name=\"chkIndefinido\" [(ngModel)]=\"prazoIndefinido\">\r\n                            <label class=\"custom-control-label\" for=\"prazoIndefinido\">Prazo indefinido</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" *ngIf=\"repete && periodicidade == 'diaria'\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>&nbsp;</label>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"domingo\" type=\"checkbox\"\r\n                                            name=\"chkDomingo\" [(ngModel)]=\"domingo\">\r\n                                        <label class=\"custom-control-label\" for=\"domingo\">Domingo</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker1\" [format]=\"24\" [disabled]=\"!domingo\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"domingoinicio\">\r\n                                        <ngx-material-timepicker #picker1></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker2\" [format]=\"24\" [disabled]=\"!domingo\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"domingofim\">\r\n                                        <ngx-material-timepicker #picker2></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"segunda\" type=\"checkbox\"\r\n                                            name=\"chkSegunda\" [(ngModel)]=\"segunda\">\r\n                                        <label class=\"custom-control-label\" for=\"segunda\">Segunda-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker3\" [format]=\"24\" [disabled]=\"!segunda\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"segundainicio\">\r\n                                        <ngx-material-timepicker #picker3></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker4\" [format]=\"24\" [disabled]=\"!segunda\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"segundafim\">\r\n                                        <ngx-material-timepicker #picker4></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"terca\" type=\"checkbox\" name=\"chkTerca\"\r\n                                            [(ngModel)]=\"terca\">\r\n                                        <label class=\"custom-control-label\" for=\"terca\">Terça-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker5\" [format]=\"24\" [disabled]=\"!terca\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"tercainicio\">\r\n                                        <ngx-material-timepicker #picker5></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker6\" [format]=\"24\" [disabled]=\"!terca\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"tercafim\">\r\n                                        <ngx-material-timepicker #picker6></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"quarta\" type=\"checkbox\" name=\"chkQuarta\"\r\n                                            [(ngModel)]=\"quarta\">\r\n                                        <label class=\"custom-control-label\" for=\"quarta\">Quarta-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker7\" [format]=\"24\" [disabled]=\"!quarta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"quartainicio\">\r\n                                        <ngx-material-timepicker #picker7></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker8\" [format]=\"24\" [disabled]=\"!quarta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"quartafim\">\r\n                                        <ngx-material-timepicker #picker8></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"quinta\" type=\"checkbox\" name=\"chkQuinta\"\r\n                                            [(ngModel)]=\"quinta\">\r\n                                        <label class=\"custom-control-label\" for=\"quinta\">Quinta-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker9\" [format]=\"24\" [disabled]=\"!quinta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"quintainicio\">\r\n                                        <ngx-material-timepicker #picker9></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker10\" [format]=\"24\" [disabled]=\"!quinta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"quintafim\">\r\n                                        <ngx-material-timepicker #picker10></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"sexta\" type=\"checkbox\" name=\"chkSexta\"\r\n                                            [(ngModel)]=\"sexta\">\r\n                                        <label class=\"custom-control-label\" for=\"sexta\">Sexta-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker11\" [format]=\"24\" [disabled]=\"!sexta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"sextainicio\">\r\n                                        <ngx-material-timepicker #picker11></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker12\" [format]=\"24\" [disabled]=\"!sexta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"sextafim\">\r\n                                        <ngx-material-timepicker #picker12></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"sabado\" type=\"checkbox\" name=\"chkSabado\"\r\n                                            [(ngModel)]=\"sabado\">\r\n                                        <label class=\"custom-control-label\" for=\"sabado\">Sábado</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker13\" [format]=\"24\" [disabled]=\"!sabado\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"sabadoinicio\">\r\n                                        <ngx-material-timepicker #picker13></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker14\" [format]=\"24\" [disabled]=\"!sabado\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"sabadofim\">\r\n                                        <ngx-material-timepicker #picker14></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Definição de datas e periodicidade -->\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <label>Valor</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"input-group\">\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"chkValor\" class=\"custom-control-input\" id=\"gratuito\" type=\"radio\"\r\n                                    value=\"gratuito\" [(ngModel)]=\"valor\">\r\n                                <label class=\"custom-control-label\" for=\"gratuito\">Gratuito</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"chkValor\" class=\"custom-control-input\" id=\"social\" type=\"radio\"\r\n                                    value=\"social\" [(ngModel)]=\"valor\">\r\n                                <label class=\"custom-control-label\" for=\"social\">Social</label>\r\n                            </div>\r\n                            <div class=\"col-md-4\" *ngIf=\"valor === 'social'\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"valor\" placeholder=\"Valor (R$)\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                    <div class=\"col-md-6\">\r\n                        <label>Nº atendentes</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"qtdAtendentes\" placeholder=\"Nº de atendentes\">\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <label>Nº atendimentos mensais</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"qtdAtendimento\"\r\n                            placeholder=\"Nº de atendimentos/mês\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Observação</label>\r\n                            <textarea class=\"form-control\" id=\"obs\" rows=\"3\" placeholder=\"Observação\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <hr>\r\n            <div class=\"rodape\">\r\n                <button type=\"button\" class=\"btn btn-outline-light btnVoltar\" (click)=\"voltar()\">Voltar</button>\r\n                <button type=\"button\" class=\"btn btn-outline-success btnSalvar\" (click)=\"salvar()\">Salvar</button>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>");

/***/ }),

/***/ 58546:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/manter-produto/manter-produto.component.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-admin\">\r\n    <section class=\"section section-shaped\"> </section>\r\n\r\n    <section class=\"section section-shaped bg-secondary\">\r\n        <div class=\"container pt-lg-md\">\r\n            <h3>Manter Produto</h3>\r\n            <hr>\r\n\r\n            <form>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Nome</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome do produto\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Descrição</label>\r\n                            <textarea class=\"form-control\" id=\"descricao\" rows=\"3\"\r\n                                placeholder=\"Descrição do produto\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Valor</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"valor\" placeholder=\"Valor (R$)\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Estoque disponível</label>\r\n                            <input type=\"number\" class=\"form-control\" id=\"estoque\" placeholder=\"Estoque\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-3\" style=\"margin: 0 auto;\">\r\n                        <button class=\"btn btn-block btn-outline-primary mb-3\" (click)=\"openModal(classic)\">\r\n                            Selecionar imagens\r\n                        </button>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n                <div class=\"rodape\">\r\n                    <button type=\"button\" class=\"btn btn-outline-light btnVoltar\" (click)=\"voltar()\">Voltar</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-success btnSalvar\" (click)=\"salvar()\">Salvar</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </section>\r\n</main>\r\n\r\n<!-- Modal Imagens -->\r\n<ng-template #classic let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" id=\"modal-title-default\">Selecionar imagens</h6>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <!-- <angular-file-uploader [config]=\"afuConfig\" [resetUpload]=resetVar (ApiResponse)=\"DocUpload($event)\">\r\n            </angular-file-uploader> -->\r\n        </div>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ 51036:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/manter-telefonico/manter-telefonico.component.html ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-admin\">\r\n    <section class=\"section section-shaped\"> </section>\r\n\r\n    <section class=\"section section-shaped bg-secondary\">\r\n        <div class=\"container pt-lg-md\">\r\n            <h3>Manter Atendimento Telefônico</h3>\r\n            <hr>\r\n\r\n            <form>\r\n                <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                    <div class=\"col-md-6\">\r\n                        <label>Nome</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome do atendimento\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                    <div class=\"col-md-6\">\r\n                        <label>Instituição</label>\r\n                        <select class=\"form-control\" id=\"instituicao\">\r\n                            <option>ABC</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <label>Telefone</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"telefone\" placeholder=\"Telefone de atendimento\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <label>Abrangência</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"input-group\">\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"tipoTelefone\" class=\"custom-control-input\" id=\"nacional\" type=\"radio\">\r\n                                <label class=\"custom-control-label\" for=\"nacional\">Nacional</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"tipoTelefone\" class=\"custom-control-input\" id=\"local\" type=\"radio\">\r\n                                <label class=\"custom-control-label\" for=\"local\">Local</label>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Horário de Atendimento</label>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"domingo\" type=\"checkbox\"\r\n                                            name=\"chkDomingo\" [(ngModel)]=\"domingo\">\r\n                                        <label class=\"custom-control-label\" for=\"domingo\">Domingo</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker1\" [format]=\"24\" [disabled]=\"!domingo\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"domingoinicio\">\r\n                                        <ngx-material-timepicker #picker1></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker2\" [format]=\"24\" [disabled]=\"!domingo\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"domingofim\">\r\n                                        <ngx-material-timepicker #picker2></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"segunda\" type=\"checkbox\"\r\n                                            name=\"chkSegunda\" [(ngModel)]=\"segunda\">\r\n                                        <label class=\"custom-control-label\" for=\"segunda\">Segunda-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker3\" [format]=\"24\" [disabled]=\"!segunda\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"segundainicio\">\r\n                                        <ngx-material-timepicker #picker3></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker4\" [format]=\"24\" [disabled]=\"!segunda\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"segundafim\">\r\n                                        <ngx-material-timepicker #picker4></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"terca\" type=\"checkbox\" name=\"chkTerca\"\r\n                                            [(ngModel)]=\"terca\">\r\n                                        <label class=\"custom-control-label\" for=\"terca\">Terça-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker5\" [format]=\"24\" [disabled]=\"!terca\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"tercainicio\">\r\n                                        <ngx-material-timepicker #picker5></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker6\" [format]=\"24\" [disabled]=\"!terca\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"tercafim\">\r\n                                        <ngx-material-timepicker #picker6></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"quarta\" type=\"checkbox\" name=\"chkQuarta\"\r\n                                            [(ngModel)]=\"quarta\">\r\n                                        <label class=\"custom-control-label\" for=\"quarta\">Quarta-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker7\" [format]=\"24\" [disabled]=\"!quarta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"quartainicio\">\r\n                                        <ngx-material-timepicker #picker7></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker8\" [format]=\"24\" [disabled]=\"!quarta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"quartafim\">\r\n                                        <ngx-material-timepicker #picker8></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"quinta\" type=\"checkbox\" name=\"chkQuinta\"\r\n                                            [(ngModel)]=\"quinta\">\r\n                                        <label class=\"custom-control-label\" for=\"quinta\">Quinta-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker9\" [format]=\"24\" [disabled]=\"!quinta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"quintainicio\">\r\n                                        <ngx-material-timepicker #picker9></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker10\" [format]=\"24\" [disabled]=\"!quinta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"quintafim\">\r\n                                        <ngx-material-timepicker #picker10></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"sexta\" type=\"checkbox\" name=\"chkSexta\"\r\n                                            [(ngModel)]=\"sexta\">\r\n                                        <label class=\"custom-control-label\" for=\"sexta\">Sexta-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker11\" [format]=\"24\" [disabled]=\"!sexta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"sextainicio\">\r\n                                        <ngx-material-timepicker #picker11></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker12\" [format]=\"24\" [disabled]=\"!sexta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"sextafim\">\r\n                                        <ngx-material-timepicker #picker12></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"sabado\" type=\"checkbox\" name=\"chkSabado\"\r\n                                            [(ngModel)]=\"sabado\">\r\n                                        <label class=\"custom-control-label\" for=\"sabado\">Sábado</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker13\" [format]=\"24\" [disabled]=\"!sabado\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"sabadoinicio\">\r\n                                        <ngx-material-timepicker #picker13></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker14\" [format]=\"24\" [disabled]=\"!sabado\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"sabadofim\">\r\n                                        <ngx-material-timepicker #picker14></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                    <div class=\"col-md-6\">\r\n                        <label>Nº atendentes</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"qtdAtendentes\" placeholder=\"Nº de atendentes\">\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <label>Nº atendimentos mensais</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"qtdAtendimento\"\r\n                            placeholder=\"Nº de atendimentos/mês\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Observação</label>\r\n                            <textarea class=\"form-control\" id=\"obs\" rows=\"3\" placeholder=\"Observação\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <hr>\r\n            <div class=\"rodape\">\r\n                <button type=\"button\" class=\"btn btn-outline-light btnVoltar\" (click)=\"voltar()\">Voltar</button>\r\n                <button type=\"button\" class=\"btn btn-outline-success btnSalvar\" (click)=\"salvar()\">Salvar</button>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>");

/***/ }),

/***/ 13050:
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/manter-virtual/manter-virtual.component.html ***!
  \***********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-admin\">\r\n    <section class=\"section section-shaped\"> </section>\r\n\r\n    <section class=\"section section-shaped bg-secondary\">\r\n        <div class=\"container pt-lg-md\">\r\n            <h3>Manter Atendimento Virtual</h3>\r\n            <hr>\r\n\r\n            <form>\r\n                <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                    <div class=\"col-md-6\">\r\n                        <label>Nome</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome do atendimento\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                    <div class=\"col-md-6\">\r\n                        <label>Instituição</label>\r\n                        <select class=\"form-control\" id=\"instituicao\">\r\n                            <option>ABC</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <label>Endereço virtual</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"site\" placeholder=\"Site de atendimento\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <label>Tipo</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"input-group\">\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"tipoPlataforma\" class=\"custom-control-input\" id=\"aplicativo\" type=\"radio\"\r\n                                    value=\"aplicativo\" [(ngModel)]=\"tipoPlataforma\">\r\n                                <label class=\"custom-control-label\" for=\"aplicativo\">Aplicativo</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"tipoPlataforma\" class=\"custom-control-input\" id=\"chat\" type=\"radio\"\r\n                                    value=\"chat\" [(ngModel)]=\"tipoPlataforma\">\r\n                                <label class=\"custom-control-label\" for=\"chat\">Chat</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"tipoPlataforma\" class=\"custom-control-input\" id=\"site\" type=\"radio\"\r\n                                    value=\"site\" [(ngModel)]=\"tipoPlataforma\">\r\n                                <label class=\"custom-control-label\" for=\"site\">Site</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"tipoPlataforma\" class=\"custom-control-input\" id=\"outro\" type=\"radio\"\r\n                                    value=\"outro\" [(ngModel)]=\"tipoPlataforma\">\r\n                                <label class=\"custom-control-label\" for=\"outro\">Outro</label>\r\n                            </div>\r\n                            <div class=\"col-md-4\" *ngIf=\"tipoPlataforma === 'outro'\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"valor\" placeholder=\"Outro tipo\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <!-- Definição de datas e periodicidade -->\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label>Data</label>\r\n                            <div class=\"input-group input-group-alternative\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n                                </div>\r\n                                <input class=\"form-control datepicker\" placeholder=\"Data\" name=\"dp\"\r\n                                    [(ngModel)]=\"dataAtividade\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\"\r\n                                    type=\"text\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                        <div class=\"col-md-6\">\r\n                            <label>Horário de início</label>\r\n                            <input [ngxTimepicker]=\"picker15\" [format]=\"24\" class=\"form-control\" placeholder=\"00:00\"\r\n                                id=\"horarioinicio\" name=\"horarioinicio\" [(ngModel)]=\"dataAtividadeInicio\">\r\n                            <ngx-material-timepicker #picker15></ngx-material-timepicker>\r\n                        </div>\r\n                        -\r\n                        <div class=\"col-md-6\">\r\n                            <label>Horário de fim</label>\r\n                            <input [ngxTimepicker]=\"picker16\" [format]=\"24\" class=\"form-control\" placeholder=\"00:00\"\r\n                                id=\"horariofim\" name=\"horariofim\" [(ngModel)]=\"dataAtividadeFim\">\r\n                            <ngx-material-timepicker #picker16></ngx-material-timepicker>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>&nbsp;</label>\r\n                        <div class=\"custom-control custom-checkbox mb-3 divRepete\">\r\n                            <input class=\"custom-control-input\" id=\"repete\" type=\"checkbox\" name=\"chkRepete\"\r\n                                [(ngModel)]=\"repete\"\r\n                                [disabled]=\"!dataAtividade || !dataAtividadeInicio || !dataAtividadeFim\">\r\n                            <label class=\"custom-control-label\" for=\"repete\">Se repete?</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" *ngIf=\"repete\">\r\n                    <div class=\"col-md-4\">\r\n                        <label>Recorrência</label>\r\n                        <select class=\"form-control\" id=\"periodicidade\" name='periodicidade'\r\n                            [(ngModel)]=\"periodicidade\">\r\n                            <option value=null>Selecione</option>\r\n                            <option value='diaria'>Diária</option>\r\n                            <option value='semanal'>Semanal</option>\r\n                            <option value='bisemanal'>Bi-semanal</option>\r\n                            <option value='mensal'>Mensal</option>\r\n                            <option value='bimestral'>Bimestral</option>\r\n                        </select>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <div class=\"form-group\">\r\n                            <label>Última data</label>\r\n                            <div class=\"input-group input-group-alternative\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n                                </div>\r\n                                <input class=\"form-control datepicker\" placeholder=\"Data\" name=\"dataPrazo\"\r\n                                    [(ngModel)]=\"dataPrazo\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\"\r\n                                    type=\"text\" [disabled]=\"prazoIndefinido\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-4\">\r\n                        <label>&nbsp;</label>\r\n                        <div class=\"custom-control custom-checkbox mb-3 divIndefinido\">\r\n                            <input class=\"custom-control-input\" id=\"prazoIndefinido\" type=\"checkbox\"\r\n                                name=\"chkIndefinido\" [(ngModel)]=\"prazoIndefinido\">\r\n                            <label class=\"custom-control-label\" for=\"prazoIndefinido\">Prazo indefinido</label>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" *ngIf=\"repete && periodicidade == 'diaria'\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>&nbsp;</label>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"domingo\" type=\"checkbox\"\r\n                                            name=\"chkDomingo\" [(ngModel)]=\"domingo\">\r\n                                        <label class=\"custom-control-label\" for=\"domingo\">Domingo</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker1\" [format]=\"24\" [disabled]=\"!domingo\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"domingoinicio\">\r\n                                        <ngx-material-timepicker #picker1></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker2\" [format]=\"24\" [disabled]=\"!domingo\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"domingofim\">\r\n                                        <ngx-material-timepicker #picker2></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"segunda\" type=\"checkbox\"\r\n                                            name=\"chkSegunda\" [(ngModel)]=\"segunda\">\r\n                                        <label class=\"custom-control-label\" for=\"segunda\">Segunda-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker3\" [format]=\"24\" [disabled]=\"!segunda\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"segundainicio\">\r\n                                        <ngx-material-timepicker #picker3></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker4\" [format]=\"24\" [disabled]=\"!segunda\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"segundafim\">\r\n                                        <ngx-material-timepicker #picker4></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"terca\" type=\"checkbox\" name=\"chkTerca\"\r\n                                            [(ngModel)]=\"terca\">\r\n                                        <label class=\"custom-control-label\" for=\"terca\">Terça-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker5\" [format]=\"24\" [disabled]=\"!terca\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"tercainicio\">\r\n                                        <ngx-material-timepicker #picker5></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker6\" [format]=\"24\" [disabled]=\"!terca\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"tercafim\">\r\n                                        <ngx-material-timepicker #picker6></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"quarta\" type=\"checkbox\" name=\"chkQuarta\"\r\n                                            [(ngModel)]=\"quarta\">\r\n                                        <label class=\"custom-control-label\" for=\"quarta\">Quarta-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker7\" [format]=\"24\" [disabled]=\"!quarta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"quartainicio\">\r\n                                        <ngx-material-timepicker #picker7></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker8\" [format]=\"24\" [disabled]=\"!quarta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"quartafim\">\r\n                                        <ngx-material-timepicker #picker8></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"quinta\" type=\"checkbox\" name=\"chkQuinta\"\r\n                                            [(ngModel)]=\"quinta\">\r\n                                        <label class=\"custom-control-label\" for=\"quinta\">Quinta-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker9\" [format]=\"24\" [disabled]=\"!quinta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"quintainicio\">\r\n                                        <ngx-material-timepicker #picker9></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker10\" [format]=\"24\" [disabled]=\"!quinta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"quintafim\">\r\n                                        <ngx-material-timepicker #picker10></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"sexta\" type=\"checkbox\" name=\"chkSexta\"\r\n                                            [(ngModel)]=\"sexta\">\r\n                                        <label class=\"custom-control-label\" for=\"sexta\">Sexta-feira</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker11\" [format]=\"24\" [disabled]=\"!sexta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"sextainicio\">\r\n                                        <ngx-material-timepicker #picker11></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker12\" [format]=\"24\" [disabled]=\"!sexta\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"sextafim\">\r\n                                        <ngx-material-timepicker #picker12></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                                <div class=\"col-md-4\">\r\n                                    <div class=\"custom-control custom-checkbox mb-3\">\r\n                                        <input class=\"custom-control-input\" id=\"sabado\" type=\"checkbox\" name=\"chkSabado\"\r\n                                            [(ngModel)]=\"sabado\">\r\n                                        <label class=\"custom-control-label\" for=\"sabado\">Sábado</label>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-md-8\" style=\"display: inline-flex;\">\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker13\" [format]=\"24\" [disabled]=\"!sabado\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"sabadoinicio\">\r\n                                        <ngx-material-timepicker #picker13></ngx-material-timepicker>\r\n                                    </div>\r\n                                    -\r\n                                    <div class=\"col-md-6\">\r\n                                        <input [ngxTimepicker]=\"picker14\" [format]=\"24\" [disabled]=\"!sabado\"\r\n                                            class=\"form-control\" placeholder=\"00:00\" id=\"sabadofim\">\r\n                                        <ngx-material-timepicker #picker14></ngx-material-timepicker>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Definição de datas e periodicidade -->\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <label>Valor</label>\r\n                    </div>\r\n                </div>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"input-group\">\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"chkValor\" class=\"custom-control-input\" id=\"gratuito\" type=\"radio\"\r\n                                    value=\"gratuito\" [(ngModel)]=\"valor\">\r\n                                <label class=\"custom-control-label\" for=\"gratuito\">Gratuito</label>\r\n                            </div>\r\n                            <div class=\"custom-control custom-radio mb-3\">\r\n                                <input name=\"chkValor\" class=\"custom-control-input\" id=\"social\" type=\"radio\"\r\n                                    value=\"social\" [(ngModel)]=\"valor\">\r\n                                <label class=\"custom-control-label\" for=\"social\">Social</label>\r\n                            </div>\r\n                            <div class=\"col-md-4\" *ngIf=\"valor === 'social'\">\r\n                                <input type=\"text\" class=\"form-control\" id=\"valor\" placeholder=\"Valor (R$)\">\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\" style=\"margin-bottom: 1em;\">\r\n                    <div class=\"col-md-6\">\r\n                        <label>Nº atendentes</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"qtdAtendentes\" placeholder=\"Nº de atendentes\">\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <label>Nº atendimentos mensais</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"qtdAtendimento\"\r\n                            placeholder=\"Nº de atendimentos/mês\">\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-12\">\r\n                        <div class=\"form-group\">\r\n                            <label>Observação</label>\r\n                            <textarea class=\"form-control\" id=\"obs\" rows=\"3\" placeholder=\"Observação\"></textarea>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </form>\r\n\r\n            <hr>\r\n            <div class=\"rodape\">\r\n                <button type=\"button\" class=\"btn btn-outline-light btnVoltar\" (click)=\"voltar()\">Voltar</button>\r\n                <button type=\"button\" class=\"btn btn-outline-success btnSalvar\" (click)=\"salvar()\">Salvar</button>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>");

/***/ }),

/***/ 1010:
/*!*****************************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/admin/manter-voluntario/manter-voluntario.component.html ***!
  \*****************************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-admin\">\r\n    <section class=\"section section-shaped\"> </section>\r\n\r\n    <section class=\"section section-shaped bg-secondary\">\r\n        <div class=\"container pt-lg-md\">\r\n            <h3>Manter Voluntário</h3>\r\n            <hr>\r\n\r\n            <form>\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-10\">\r\n                        <div class=\"form-group\">\r\n                            <label>Nome</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome completo\">\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"col-md-2\">\r\n                        <div class=\"card-profile-image\" (click)=\"openModal(classicLogo)\">\r\n                            <a href=\"javascript:void(0)\">\r\n                                <img src=\"./assets/img/francoAmor/voluntario3.png\" class=\"rounded-circle\"\r\n                                    style=\"width: 100px;\">\r\n                            </a>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>CPF</label>\r\n                            <input type=\"text\" [textMask]=\"{mask: cpfMask}\" class=\"form-control\" id=\"cpf\"\r\n                                placeholder=\"Cpf\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Data de Nascimento</label>\r\n                            <div class=\"input-group input-group-alternative\">\r\n                                <div class=\"input-group-prepend\">\r\n                                    <span class=\"input-group-text\"><i class=\"ni ni-calendar-grid-58\"></i></span>\r\n                                </div>\r\n                                <input class=\"form-control datepicker\" placeholder=\"Data de nascimento\" name=\"dp\"\r\n                                    [(ngModel)]=\"dataNascimento\" ngbDatepicker #d=\"ngbDatepicker\" (click)=\"d.toggle()\"\r\n                                    type=\"text\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>E-mail</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"email\" placeholder=\"E-mail\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Telefone</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"telefone\" placeholder=\"Telefone\"\r\n                                [textMask]=\"{mask: phoneMask}\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <label>CEP</label>\r\n                        <div class=\"input-group campoCep\">\r\n                            <input type=\"text\" [textMask]=\"{mask: cepMask}\" class=\"form-control\" name=\"cep\"\r\n                                placeholder=\"CEP\" [(ngModel)]=\"cepInformado\">\r\n                            <div class=\"input-group-append\">\r\n                                <button class=\"btn btn-outline-primary\" type=\"button\"\r\n                                    (click)=\"buscarCep()\">Buscar</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Logradouro</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"logradouro\" placeholder=\"Rua ou Av\"\r\n                                name=\"logradouro\" [(ngModel)]=\"logradouro\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Nº/Complemento</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"numComp\" placeholder=\"Nº/Bloco/Apto\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <div class=\"row\">\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Bairro</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"bairro\" placeholder=\"Bairro\" name=\"bairro\"\r\n                                [(ngModel)]=\"bairro\">\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"col-md-6\">\r\n                        <div class=\"form-group\">\r\n                            <label>Cidade</label>\r\n                            <input type=\"text\" class=\"form-control\" id=\"cidade\" placeholder=\"Cidade\" name=\"cidade\"\r\n                                [(ngModel)]=\"cidade\">\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n\r\n                <hr>\r\n                <div class=\"rodape\">\r\n                    <button type=\"button\" class=\"btn btn-outline-light btnVoltar\" (click)=\"voltar()\">Voltar</button>\r\n                    <button type=\"button\" class=\"btn btn-outline-success btnSalvar\" (click)=\"salvar()\">Salvar</button>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </section>\r\n</main>\r\n\r\n<!-- Modal Foto -->\r\n<ng-template #classicLogo let-c=\"close\" let-d=\"dismiss\">\r\n    <div class=\"modal-content\">\r\n        <div class=\"modal-header\">\r\n            <h6 class=\"modal-title\" id=\"modal-title-default\">Selecionar foto</h6>\r\n            <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\" (click)=\"d('Cross click')\">\r\n                <span aria-hidden=\"true\">×</span>\r\n            </button>\r\n        </div>\r\n        <div class=\"modal-body\">\r\n            <!-- <angular-file-uploader [config]=\"afuConfig\" [resetUpload]=resetVar (ApiResponse)=\"DocUpload($event)\">\r\n            </angular-file-uploader> -->\r\n        </div>\r\n    </div>\r\n</ng-template>");

/***/ }),

/***/ 75158:
/*!***************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
  \***************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n<app-footer></app-footer>\r\n");

/***/ }),

/***/ 29711:
/*!****************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/auth/login/login.component.html ***!
  \****************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-site\">\r\n  <section class=\"section section-shaped section-lg\">\r\n\r\n    <div class=\"container pt-lg-md\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5\">\r\n          <div class=\"card bg-secondary shadow border-0 rounded-50px\">\r\n            <div class=\"card-body px-lg-5 py-lg-5\">\r\n              <form role=\"form\">\r\n                <div class=\"form-group mb-3\" [ngClass]=\"{'focused':focus===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Email\" type=\"email\" (focus)=\"focus=true\"\r\n                      (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Password\" type=\"password\" (focus)=\"focus1=true\"\r\n                      (blur)=\"focus1=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <button type=\"submit\" class=\"btn btn-primary my-4\" (click)=\"login()\">Entrar</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n          <div class=\"row mt-3\">\r\n            <div class=\"col-6\">\r\n              <a href=\"#\" class=\"text-light\">\r\n                <small>Esqueceu a senha?</small>\r\n              </a>\r\n            </div>\r\n            <div class=\"col-6 text-right\">\r\n              <a routerLink=\"../registro\" class=\"text-light\">\r\n                <small>Criar conta</small>\r\n              </a>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>");

/***/ }),

/***/ 28562:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/auth/signup/signup.component.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-site\">\r\n  <section class=\"section section-shaped section-lg\">\r\n    <div class=\"container pt-lg-md\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-lg-5\">\r\n          <div class=\"card bg-secondary shadow border-0\">\r\n            <div class=\"card-body px-lg-5 py-lg-5\">\r\n              <form role=\"form\">\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus===true}\">\r\n                  <div class=\"input-group input-group-alternative mb-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-hat-3\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Nome\" type=\"text\" (focus)=\"focus=true\"\r\n                      (blur)=\"focus=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus1===true}\">\r\n                  <div class=\"input-group input-group-alternative mb-3\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"E-mail\" type=\"email\" (focus)=\"focus1=true\"\r\n                      (blur)=\"focus1=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"form-group\" [ngClass]=\"{'focused':focus2===true}\">\r\n                  <div class=\"input-group input-group-alternative\">\r\n                    <div class=\"input-group-prepend\">\r\n                      <span class=\"input-group-text\"><i class=\"ni ni-lock-circle-open\"></i></span>\r\n                    </div>\r\n                    <input class=\"form-control\" placeholder=\"Senha\" type=\"password\" (focus)=\"focus2=true\"\r\n                      (blur)=\"focus2=false\">\r\n                  </div>\r\n                </div>\r\n                <div class=\"row my-4\">\r\n                  <div class=\"col-12\">\r\n                    <div class=\"custom-control custom-control-alternative custom-checkbox\">\r\n                      <input class=\"custom-control-input\" id=\"customCheckRegister\" type=\"checkbox\">\r\n                      <label class=\"custom-control-label\" for=\"customCheckRegister\">\r\n                        <span>Li e concordo com os\r\n                          <a href=\"javascript:void(0)\">Termos de Uso e Responsabilidade</a>.\r\n                        </span>\r\n                      </label>\r\n                    </div>\r\n                  </div>\r\n                </div>\r\n                <div class=\"text-center\">\r\n                  <button type=\"button\" class=\"btn btn-primary mt-4\">Criar conta</button>\r\n                </div>\r\n              </form>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </section>\r\n</main>");

/***/ }),

/***/ 67029:
/*!*********************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/blog/blog.component.html ***!
  \*********************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-site\">\r\n    <section class=\"section section-shaped\">\r\n\r\n    </section>\r\n\r\n    <section class=\"section section-shaped bg-secondary\">\r\n\r\n        <div class=\"container\">\r\n\r\n            <div class=\"nav-scroller py-1 mb-2\">\r\n                <nav class=\"nav d-flex justify-content-between\">\r\n                    <a class=\"p-2 text-muted\" href=\"#\">Autoconhecimento</a>\r\n                    <a class=\"p-2 text-muted\" href=\"#\">Meio Ambiente</a>\r\n                    <a class=\"p-2 text-muted\" href=\"#\">Cultura</a>\r\n                </nav>\r\n            </div>\r\n\r\n            <div class=\"row mb-2\">\r\n                <div class=\"col-md-6\">\r\n                    <div\r\n                        class=\"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative\">\r\n                        <div class=\"col p-4 d-flex flex-column position-static\">\r\n                            <strong class=\"d-inline-block mb-2 text-primary\">Autoconhecimento</strong>\r\n                            <h3 class=\"mb-0\">A importância da Psicologia</h3>\r\n                            <div class=\"mb-1 text-muted\">Setembro, 2020</div>\r\n                            <p class=\"card-text mb-auto\">Um profissional de psicologia consegue desenvolver diversas\r\n                                funções essenciais para ajudar as pessoas em tempos tão difíceis como este que estamos\r\n                                presenciando em nossa sociedade.</p>\r\n                            <a href=\"#\" class=\"stretched-link\">Continue lendo..</a>\r\n                        </div>\r\n                        <div class=\"col-auto d-none d-lg-block\">\r\n                            <img src=\"https://picsum.photos/200/300?random=1\" alt=\"\" width=\"200\" height=\"400\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div\r\n                        class=\"row no-gutters border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative\">\r\n                        <div class=\"col p-4 d-flex flex-column position-static\">\r\n                            <strong class=\"d-inline-block mb-2 text-success\">Meio Ambiente</strong>\r\n                            <h3 class=\"mb-0\">Ecologia, Epidemiologia e o valor da Ciência</h3>\r\n                            <div class=\"mb-1 text-muted\">Setembro, 2020</div>\r\n                            <p class=\"mb-auto\">Muitas informações começam a circular sobre a expansão da doença e muitos\r\n                                estão utilizando seus conhecimentos de estatística e computação na...</p>\r\n                            <a href=\"#\" class=\"stretched-link\">Continue lendo..</a>\r\n                        </div>\r\n                        <div class=\"col-auto d-none d-lg-block\">\r\n                            <img src=\"https://picsum.photos/200/300?random=2\" alt=\"\" width=\"200\" height=\"400\" />\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n\r\n        <main role=\"main\" class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-8 blog-main\">\r\n                    <h3 class=\"pb-4 mb-4 font-italic border-bottom\">\r\n                        Postagens\r\n                    </h3>\r\n\r\n                    <div class=\"blog-post\">\r\n                        <h2 class=\"blog-post-title\">Visão holística da saúde</h2>\r\n                        <p class=\"blog-post-meta\">03 de Agosto de 2020 por\r\n                            <a href=\"https://www.eusemfronteiras.com.br/autor/tereza-gurgel/\">Tereza Gurgel</a>\r\n                        </p>\r\n\r\n                        <p>\r\n                            ideia de saúde holística abrange uma diversidade de fatores que contribuem para o bom\r\n                            funcionamento do organismo. Sabemos que não temos apenas este corpo físico, mas somos\r\n                            compostos por várias “camadas” (ou aspectos), que constituem os “corpos sutis”: emocional,\r\n                            mental e espiritual.\r\n                        </p>\r\n                        <p>\r\n                            De modo bem resumido, a saúde também depende de outros aspectos, como a suscetibilidade\r\n                            genética e a exposição a agentes patogênicos e poluentes. Todos estes fatores devem ser\r\n                            levados em conta ao cuidarmos do nosso bem-estar, um complementa o outro. Bons hábitos,\r\n                            persistência e disciplina são pilares importantes para fortalecer nossa saúde. A dieta\r\n                            alimentar deve ser analisada com muito critério e cuidado, pois retiramos dos alimentos o\r\n                            nosso “combustível” para viver.\r\n                        </p>\r\n                        <p>\r\n                            Isto implica em uma profunda modificação de antigos hábitos, transformando completamente –\r\n                            com o adequado acompanhamento médico e nutricional – nosso estilo de vida.\r\n                        </p>\r\n\r\n                        <img src=\"https://picsum.photos/600/400?grayscale\" alt=\"\" />\r\n                    </div>\r\n\r\n                    <nav class=\"blog-pagination\">\r\n                        <a class=\"btn btn-outline-primary\" href=\"#\">Mais antigos</a>\r\n                        <a class=\"btn btn-outline-secondary disabled\" href=\"#\" tabindex=\"-1\" aria-disabled=\"true\">Mais\r\n                            novos</a>\r\n                    </nav>\r\n\r\n                </div><!-- /.blog-main -->\r\n\r\n                <aside class=\"col-md-4 blog-sidebar\">\r\n\r\n                    <div class=\"p-4\">\r\n                        <h4 class=\"font-italic\">Arquivo</h4>\r\n                        <ol class=\"list-unstyled mb-0\">\r\n                            <li><a href=\"#\">Setembro 2020</a></li>\r\n                            <li><a href=\"#\">Agosto 2020</a></li>\r\n                        </ol>\r\n                    </div>\r\n                </aside><!-- /.blog-sidebar -->\r\n\r\n            </div><!-- /.row -->\r\n\r\n        </main><!-- /.container -->\r\n    </section>\r\n</main>");

/***/ }),

/***/ 66364:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/footer/footer.component.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer\">\r\n  <div class=\"container\">\r\n    <div class=\"row align-items-center justify-content-md-between\">\r\n      <div class=\"col-md-2\">\r\n        <div class=\"copyright\">\r\n          &copy; {{test | date: 'yyyy'}}\r\n          <a routerLink=\"./contato\">Franco Amor</a>.\r\n        </div>\r\n      </div>\r\n      <div class=\"col-md-10\">\r\n        <ul class=\"nav nav-footer justify-content-end\">\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"./quem-somos\">Quem somos</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"./contato\">Contato</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"./cadastre-acao\">Cadastre sua ação social</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"./produtos\">Produtos</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"./doacao\">Doação</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"./blog\">Blog</a>\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" routerLink=\"./faq\">Ajuda</a>\r\n          </li>\r\n        </ul>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</footer>");

/***/ }),

/***/ 36642:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/shared/navbar/navbar.component.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"social-medias\">\r\n  <ul class=\"flex justify-content-end px-4\">\r\n    <li class=\"text-2xl mr-2\"><a class=\"social-medias-icon\"  target=\"__blank\" href=\"https://www.facebook.com/projetofrancoamor/\">\r\n        <i class=\"fa fa-facebook\"></i>\r\n      </a></li>\r\n\r\n    <li class=\"text-2xl mr-2\"><a class=\"social-medias-icon\" target=\"__blank\" href=\"https://www.instagram.com/projetofrancoamor/\">\r\n        <i class=\"fa fa-instagram\"></i>\r\n      </a>\r\n    </li>\r\n\r\n    <li class=\"text-2xl\"><a class=\"social-medias-icon\" target=\"__blank\" href=\"https://www.youtube.com/channel/UC2ZLTKtGh74ZBszfBnWwJKg\">\r\n        <i class=\"fa fa-youtube\"></i>\r\n      </a></li>\r\n  </ul>\r\n</div>\r\n\r\n<nav id=\"navbar-main\" class=\"navbar navbar-main navbar-expand-lg navbar-transparent\">\r\n  <div class=\"container\">\r\n    <a class=\"navbar-brand mr-lg-5 menu\" routerLink=\"./home\">\r\n      <img src=\"../../../assets/img/francoAmor/francoamorlogo.png\"> Franco Amor\r\n    </a>\r\n    <div class=\"navbar-collapse collapse\" id=\"navbar_global\" [ngbCollapse]=\"isCollapsed\">\r\n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret menu\" data-toggle=\"dropdown\" role=\"button\" routerLink=\"./quem-somos\">\r\n            Quem somos\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret menu\" data-toggle=\"dropdown\" role=\"button\" routerLink=\"./cadastre-acao\">\r\n            Cadastre sua ação social\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret menu\" data-toggle=\"dropdown\" role=\"button\" routerLink=\"./blog\">\r\n            Blog\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret menu\" data-toggle=\"dropdown\" role=\"button\" routerLink=\"./faq\">\r\n            Ajuda\r\n          </a>\r\n        </li>\r\n      </ul>\r\n\r\n      <ul class=\"navbar-nav navbar-nav-hover align-items-lg-center\">\r\n        <li class=\"nav-item dropdown\">\r\n          <a class=\"nav-link no-caret menu\" data-toggle=\"dropdown\" role=\"button\" routerLink=\"./login\">\r\n            | Entrar\r\n          </a>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </div>\r\n</nav>");

/***/ }),

/***/ 89386:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/site/cadastre-acao/cadastre-acao.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-site\">\n    <div class=\"position-relative\">\n\n        <section class=\"section section-shaped\">\n\n        </section>\n\n        <section class=\"section section-shaped bg-secondary\">\n            <div class=\"container\" style=\"text-align: left;\">\n\n                <h4>CADASTRE SUA AÇÃO SOCIAL DE APOIO À SAÚDE MENTAL, AUMENTANDO A CHANCE DE SER ENCONTRADO POR QUEM\n                    PRECISA DE AJUDA E ANUNCIE AS VAGAS DE VOLUNTÁRIOS PARA FORTALECER O SEU PROJETO!</h4><br>\n\n                <p>O Franco Amor tem como objetivo reunir e divulgar as ações que realizam algum tipo de atendimento\n                    social voltado para a saúde mental e qualidade de vida que acolhem emocionalmente pessoas que\n                    precisam de apoio em momentos de desafio na vida. E queremos apoiar seu projeto, anunciando as vagas\n                    de voluntariado que você precisa para aumentar a rede do bem e de afeto.</p>\n\n                <div style=\"text-align: center;\">\n                    <button class=\"btn btn-acao-verde\" routerLink=\"../registro\">CADASTRE AQUI SUA AÇÃO SOCIAL OU\n                        EVENTO</button>\n                </div><br>\n\n                <div class=\"row\">\n                    <div class=\"col-md-8\">\n                        <h4>PLATAFORMA GRATUITA</h4>\n                        <ul>\n                            <li>Cadastre seus projetos que são oferecidos gratuitamente ou a preço social*</li>\n                            <li>Anuncie seu evento**</li>\n                            <li>Cadastre suas vagas de voluntariado para ajudar seu projeto a auxiliar mais pessoas</li>\n                            <li>Cadastre sem limite todas as suas ações / atendimentos e vagas de voluntariado</li>\n                        </ul><br>\n                    </div>\n                    <div class=\"col-md-4\">\n                        <div class=\"col-md-4\"> <img src=\"./assets/img/francoAmor/anuncio.png\" class=\"rounded-circle\"\n                                style=\"width: 300px;\"></div>\n                    </div>\n                </div>\n\n\n\n                <h4>TIPOS DE CADASTRO</h4>\n                <p><b>Escolha a melhor forma de divulgar de acordo com o canal de atendimento utilizado</b></p>\n                <ul>\n                    <li><b>Atendimento Telefônico</b> - serviço de acolhimento emocional por telefone</li>\n                    <li><b>Atendimento/Atividade Presencial</b> - reuniões de apoio, atendimento terapêutico e\n                        atividades similares que acontecem de forma presencial em grupo ou individualmente</li>\n                    <li><b>Atendimento/Atividade Virtual</b> - apoio e atividades afins que acontecem virtualmente\n                        através de plataformas de videoconferência, chat, redes sociais, mensagens via aplicativo etc\n                    </li>\n                    <li><b>Evento**</b> anuncie seu evento e ajude a manter o projeto - cursos, workshops, seminários,\n                        aulas, palestras na área da saúde mental voltados para público em geral seja presencial ou\n                        virtual</li>\n                    <li><b>Vagas de Voluntariado</b> na área que o seu projeto precisa seja presencial ou virtual</li>\n                </ul><br>\n\n\n                <h4>QUEM PODE SE CADASTRAR</h4>\n                <ul>\n                    <li>Serviços do Setor Público, ONGs, psicólogos, terapeutas holísticos, demais profissionais e\n                        movimentos que realizam ações coordenadas para a saúde mental e qualidade de vida, que promovam\n                        trabalho de cunho social através de atendimentos de apoio emocional</li>\n                    <li>Ações sociais cujo atendimento é gratuito ou com valor social*</li>\n                    <li>\"Eventos\" podem ser gratuitos ou não. Caso o evento não seja gratuito e for adicionado um link\n                        externo para compra, uma taxa será cobrada pela veiculação da propaganda</li>\n                    <li>As vagas de voluntariado os projetos cadastrados na rede de ajuda do site Franco Amor,\n                        integrando o mapa de ajuda para a saúde mental</li>\n                    <li>Todos os cadastros serão submetidos a uma análise antes de ser divulgado no site</li>\n                </ul><br>\n\n\n\n\n                <div class=\"row\">\n                    <div class=\"col-md-4\"> <img src=\"./assets/img/francoAmor/maos.png\" class=\"rounded-circle\"\n                            style=\"width: 300px;\"></div>\n                    <div class=\"col-md-8\">\n                        <h4>VOLUNTARIADO</h4>\n                        <p><b>Cadastre suas vagas de voluntariado e fortaleça a rede do bem.</b></p>\n                        <ul>\n                            <li>Exclusivo para projetos de apoio à saúde mental e qualidade de vida cujos atendimentos\n                                ou\n                                atividades\n                                estão cadastrados na rede de ajuda do site Franco Amor.</li>\n                            <li>Trabalho voluntário está amparado pela <a\n                                    href=\"https://www.planalto.gov.br/ccivil_03/leis/l9608.htm\" target=\"_blank\">LEI Nº\n                                    9.608, DE 18 DE FEVEREIRO DE 1998</a>, para mais\n                                informações disponibilizamos alguns links para conhecimento do assunto.</li>\n                        </ul>\n\n                        <div style=\"text-align: center;\">\n                            <button class=\"btn btn-acao-verde\" routerLink=\"../registro\">CADASTRE AQUI VAGAS DE\n                                VOLUNTARIADO PARA\n                                SEU PROJETO</button>\n                        </div><br>\n                    </div>\n                </div>\n\n\n                <h4>EVENTO**</h4>\n                <p><b>Anuncie seu evento e ajude a manter o projeto</b></p>\n                <p>Divulgamos eventos que tenham afinidade com o propósito do Franco Amor gratuitamente desde que não\n                    apresente custo para a participação do interessado.\n                </p>\n                <p>Se não for gratuito, cobraremos uma taxa por esse serviço e assim você ajuda a manter nosso trabalho.\n                    Faça seu cadastro aqui, preencha as informações e entraremos em contato.</p>\n\n                <div style=\"text-align: center;\">\n                    <button class=\"btn btn-acao-verde\" routerLink=\"../registro\">CADASTRE AQUI SUA AÇÃO SOCIAL OU\n                        EVENTO</button>\n                </div><br>\n            </div>\n        </section>\n    </div>\n</main>");

/***/ }),

/***/ 66847:
/*!********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/site/contato/contato.component.html ***!
  \********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-site\">\r\n    <div class=\"position-relative\">\r\n        <section class=\"section section-shaped section-lg\">\r\n            <div class=\"container pt-lg-md\">\r\n                <div class=\"row justify-content-center\">\r\n                    <div class=\"col-lg-10\">\r\n                        <div class=\"card bg-secondary shadow border-0 rounded-50px\">\r\n                            <div class=\"card-body\">\r\n                                <h4 class=\"mb-1\">Contato</h4>\r\n                                <p class=\"mt-0\">Sugestões, reclamações, elogios e dúvidas.</p>\r\n                                <div class=\"form-group mt-5\">\r\n                                    <div class=\"input-group input-group-alternative\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\"><i class=\"ni ni-user-run\"></i></span>\r\n                                        </div>\r\n                                        <input class=\"form-control\" placeholder=\"Nome\" type=\"text\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group\">\r\n                                    <div class=\"input-group input-group-alternative\">\r\n                                        <div class=\"input-group-prepend\">\r\n                                            <span class=\"input-group-text\"><i class=\"ni ni-email-83\"></i></span>\r\n                                        </div>\r\n                                        <input class=\"form-control\" placeholder=\"E-mail\" type=\"email\">\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"form-group mb-4\">\r\n                                    <textarea class=\"form-control form-control-alternative\" name=\"name\" rows=\"4\"\r\n                                        cols=\"80\" placeholder=\"Mensagem\"></textarea>\r\n                                </div>\r\n                                <div>\r\n                                    <button type=\"button\" class=\"btn btn-success btn-round btn-block btn-lg\">Enviar\r\n                                        mensagem</button>\r\n                                </div>\r\n                                <div class=\"text-center\">\r\n                                    <br>\r\n                                    <p>OU</p>\r\n                                    <p>envie um e-mail para <b>eufrancoamor@gmail.com</b></p>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </section>\r\n    </div>\r\n</main>");

/***/ }),

/***/ 7625:
/*!******************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/site/doacao/doacao.component.html ***!
  \******************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-site\">\r\n    <section class=\"section section-shaped\">\r\n\r\n    </section>\r\n\r\n    <section class=\"section section-shaped bg-secondary\">\r\n        <div class=\"container\">\r\n            <div class=\"row row-grid align-items-center\">\r\n                <div class=\"col-md-6 order-md-1\">\r\n                    <div class=\"pr-md-5\">\r\n                        <h3>Doação</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>");

/***/ }),

/***/ 10481:
/*!************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/site/faq/faq.component.html ***!
  \************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-site\">\n    <section class=\"section section-shaped section-lg\">\n        <div class=\"container pt-lg-md\">\n            <div class=\"row justify-content-center\">\n                <div class=\"col-lg-12\">\n                    <div class=\"card bg-secondary shadow border-0 rounded-50px\">\n                        <div class=\"card-body px-lg-5 py-lg-5\">\n                            <h4 class=\"mb-1\">Faq</h4>\n                            <p>COMO FAÇO PARA CADASTRAR MAIS DE UMA AÇÃO SOCIAL?</p>\n                            <p>COMO FAÇO PARA CADASTRAR MAIS DE UMA ATIVIDADE OU ATENDIMENTO? </p>\n                            <p>ESTE SERVIÇO É PAGO?</p>\n                            <p>EU COBRO UM VALOR SOCIAL PARA A REALIZAÇÃO DO MEU ATENDIMENTO, ESSE VALOR VAI APARECER NA\n                                DIVULGAÇÃO?</p>\n                            <p>COMO FAÇO PARA EDITAR MEUS DADOS? </p>\n                            <p>PERDI MINHA SENHA, COMO FAÇO PARA RECUPERAR?</p>\n                            <p>O QUE É UM TRABALHO VOLUNTÁRIO?</p>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</main>");

/***/ }),

/***/ 96958:
/*!**************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/site/home/home.component.html ***!
  \**************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-site\">\r\n  <div class=\"position-relative\">\r\n    <section class=\"section section-lg section-hero section-shaped\">\r\n\r\n      <div class=\"container shape-container d-flex align-items-center\">\r\n        <div class=\"col px-0\">\r\n          <div class=\"row align-items-center justify-content-center\">\r\n            <div class=\"col-lg-12 text-center\">\r\n              <div class=\"btn-wrapper mt-10\">\r\n\r\n                <a routerLink=\"/procuro-ajuda\" class=\"btn btn-acao-verde mb-5 mb-sm-0 btn-card-home floating\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-phone icon-card-home\" aria-hidden=\"true\"></i></span>\r\n                  <br><br>\r\n                  <span class=\"btn-inner--text titulo-card-home\">PRECISO DE AJUDA</span><br>\r\n                  <span class=\"text-card-home\">Encontre uma forma de ser ajudado</span>\r\n                </a>\r\n\r\n                <a routerLink=\"/quero-ajudar\" class=\"btn btn-acao-azul mb-5 mb-sm-0 btn-card-home floating\">\r\n                  <span class=\"btn-inner--icon\"><i class=\"fa fa-calendar-check-o icon-card-home\"\r\n                      aria-hidden=\"true\"></i></span>\r\n                  <br><br>\r\n                  <span class=\"btn-inner--text titulo-card-home\">QUERO AJUDAR</span><br>\r\n                  <span class=\"text-card-home\">Quero ser um voluntário, auxiliando quem ajuda</span>\r\n                </a>\r\n\r\n              </div>\r\n            </div>\r\n            <div class=\"col-lg-12 text-center\">\r\n              <h1 class=\"slogan\">Somos uma rede de afeto, conte conosco!</h1>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </section>\r\n  </div>\r\n</main>");

/***/ }),

/***/ 9549:
/*!********************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/site/procuro-ajuda/procuro-ajuda.component.html ***!
  \********************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-site\">\r\n    <section class=\"section section-shaped\">\r\n\r\n    </section>\r\n\r\n    <section class=\"section section-shaped bg-secondary\">\r\n        <div class=\"container\">\r\n\r\n            <h4>PRECISO DE AJUDA</h4>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-2\">\r\n                    <div class=\"form-group\">\r\n                        <label>Tipo</label>\r\n                        <select class=\"form-control\" id=\"tipo\" name='tipo' [(ngModel)]=\"tipo\">\r\n                            <option value=null>Selecione</option>\r\n                            <option value='evento'>Evento</option>\r\n                            <option value='presencial'>Presencial</option>\r\n                            <option value='telefonico'>Telefônico</option>\r\n                            <option value='virtual'>Virtual</option>\r\n                        </select>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>Nome</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"nome\" placeholder=\"Nome da atividade/evento\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>Instituição</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"cnpj\" placeholder=\"Instituição responsável\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"form-group\">\r\n                        <label>Cidade</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"cidade\" placeholder=\"Cidade\" name=\"cidade\"\r\n                            [(ngModel)]=\"cidade\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-1\">\r\n                    <label>&nbsp;</label>\r\n                    <button class=\"btn btn-icon btn-2 btn-outline-light\" type=\"button\">\r\n                        <span class=\"btn-inner--icon\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"header\">\r\n                        ATENDIMENTO TELEFÔNICO\r\n                    </h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"flip-card\" (click)=\"irParaVejaMais()\">\r\n                        <div class=\"flip-card-inner\">\r\n                            <div class=\"flip-card-front\">\r\n                                <img class=\"card-img-top\" src=\"https://picsum.photos/200?random=1\">\r\n                                <h4>CVV</h4>\r\n                                <h5>188</h5>\r\n                            </div>\r\n                            <div class=\"flip-card-back\">\r\n                                <h5>Horario:</h5>\r\n                                <h6>Seg: 08:00 - 19:00</h6>\r\n                                <h6>Qua: 08:00 - 19:00</h6>\r\n                                <h6>Sex: 08:00 - 19:00</h6>\r\n                                <h6>Sab: 10:00 - 21:00</h6>\r\n                                <p class=\"resumo-card\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\r\n                                    aliquam nunc dui, ac\r\n                                    laoreet mauris ullamcorper eu. Pellentesque sagittis neque ac nisi pharetra, vitae\r\n                                    posuere augue malesuada. Nullam id sapien in lacus placerat porttitor nec at nibh.\r\n                                    Suspendisse eget nunc auctor, accumsan nisi a, condimentum lectus.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"flip-card\" (click)=\"irParaVejaMais()\">\r\n                        <div class=\"flip-card-inner\">\r\n                            <div class=\"flip-card-front\">\r\n                                <img class=\"card-img-top\" src=\"https://picsum.photos/200?random=2\">\r\n                                <h4>CVV</h4>\r\n                                <h5>188</h5>\r\n                            </div>\r\n                            <div class=\"flip-card-back\">\r\n                                <h5>Horario:</h5>\r\n                                <h6>Seg: 08:00 - 19:00</h6>\r\n                                <h6>Qua: 08:00 - 19:00</h6>\r\n                                <p class=\"resumo-card\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\r\n                                    aliquam nunc dui, ac\r\n                                    laoreet mauris ullamcorper eu. Pellentesque sagittis neque ac nisi pharetra, vitae\r\n                                    posuere augue malesuada. Nullam id sapien in lacus placerat porttitor nec at nibh.\r\n                                    Suspendisse eget nunc auctor, accumsan nisi a, condimentum lectus.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"flip-card\" (click)=\"irParaVejaMais()\">\r\n                        <div class=\"flip-card-inner\">\r\n                            <div class=\"flip-card-front\">\r\n                                <img class=\"card-img-top\" src=\"https://picsum.photos/200?random=3\">\r\n                                <h4>CVV</h4>\r\n                                <h5>188</h5>\r\n                            </div>\r\n                            <div class=\"flip-card-back\">\r\n                                <h5>Horario:</h5>\r\n                                <h6>Sex: 08:00 - 19:00</h6>\r\n                                <h6>Sab: 10:00 - 21:00</h6>\r\n                                <p class=\"resumo-card\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\r\n                                    aliquam nunc dui, ac\r\n                                    laoreet mauris ullamcorper eu. Pellentesque sagittis neque ac nisi pharetra, vitae\r\n                                    posuere augue malesuada. Nullam id sapien in lacus placerat porttitor nec at nibh.\r\n                                    Suspendisse eget nunc auctor, accumsan nisi a, condimentum lectus.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-3\">\r\n                    <div class=\"flip-card\" (click)=\"irParaVejaMais()\">\r\n                        <div class=\"flip-card-inner\">\r\n                            <div class=\"flip-card-front\">\r\n                                <img class=\"card-img-top\" src=\"https://picsum.photos/200?random=4\">\r\n                                <h4>CVV</h4>\r\n                                <h5>188</h5>\r\n                            </div>\r\n                            <div class=\"flip-card-back\">\r\n                                <h5>Horario:</h5>\r\n                                <h6>Seg: 08:00 - 19:00</h6>\r\n                                <h6>Qua: 08:00 - 19:00</h6>\r\n                                <h6>Sex: 08:00 - 19:00</h6>\r\n                                <h6>Sab: 10:00 - 21:00</h6>\r\n                                <p class=\"resumo-card\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\r\n                                    aliquam nunc dui, ac\r\n                                    laoreet mauris ullamcorper eu. Pellentesque sagittis neque ac nisi pharetra, vitae\r\n                                    posuere augue malesuada. Nullam id sapien in lacus placerat porttitor nec at nibh.\r\n                                    Suspendisse eget nunc auctor, accumsan nisi a, condimentum lectus.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"header\">\r\n                        ATENDIMENTO PRESENCIAL\r\n                    </h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"flip-card\" (click)=\"irParaVejaMais()\">\r\n                        <div class=\"flip-card-inner\">\r\n                            <div class=\"flip-card-front\">\r\n                                <img class=\"card-img-top\" src=\"https://picsum.photos/200?random=5\">\r\n                                <!-- <span class=\"badge badge-primary\" routerLink=\"../quero-ajudar\">Vaga para\r\n                                    voluntários</span> -->\r\n                                    <h4>Caçadores do Leão</h4>\r\n                                    <h5>Juiz de Fora</h5> \r\n                            </div>\r\n                            <div class=\"flip-card-back\">\r\n                                <h5>Horario:</h5>\r\n                                <h6>Seg: 08:00 - 19:00</h6>\r\n                                <h6>Qua: 08:00 - 19:00</h6>\r\n                                <h6>Sex: 08:00 - 19:00</h6>\r\n                                <h6>Sab: 10:00 - 21:00</h6>\r\n                                <p class=\"resumo-card\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\r\n                                    aliquam nunc dui, ac\r\n                                    laoreet mauris ullamcorper eu. Pellentesque sagittis neque ac nisi pharetra, vitae\r\n                                    posuere augue malesuada. Nullam id sapien in lacus placerat porttitor nec at nibh.\r\n                                    Suspendisse eget nunc auctor, accumsan nisi a, condimentum lectus.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"flip-card\" (click)=\"irParaVejaMais()\">\r\n                        <div class=\"flip-card-inner\">\r\n                            <div class=\"flip-card-front\">\r\n                                <img class=\"card-img-top\" src=\"https://picsum.photos/200?random=6\">\r\n                                <h4>Caçadores do Leão</h4>\r\n                                <h5>São Paulo</h5> \r\n                            </div>\r\n                            <div class=\"flip-card-back\">\r\n                                <h5>Horario:</h5>\r\n                                <h6>Seg: 08:00 - 19:00</h6>\r\n                                <h6>Qua: 08:00 - 19:00</h6>\r\n                                <h6>Sex: 08:00 - 19:00</h6>\r\n                                <h6>Sab: 10:00 - 21:00</h6>\r\n                                <p class=\"resumo-card\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\r\n                                    aliquam nunc dui, ac\r\n                                    laoreet mauris ullamcorper eu. Pellentesque sagittis neque ac nisi pharetra, vitae\r\n                                    posuere augue malesuada. Nullam id sapien in lacus placerat porttitor nec at nibh.\r\n                                    Suspendisse eget nunc auctor, accumsan nisi a, condimentum lectus.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"flip-card\" (click)=\"irParaVejaMais()\">\r\n                        <div class=\"flip-card-inner\">\r\n                            <div class=\"flip-card-front\">\r\n                                <img class=\"card-img-top\" src=\"https://picsum.photos/200?random=7\">\r\n                                <h4>Caçadores do Leão</h4>\r\n                                <h5>São Paulo</h5> \r\n                            </div>\r\n                            <div class=\"flip-card-back\">\r\n                                <h5>Horario:</h5>\r\n                                <h6>Seg: 08:00 - 19:00</h6>\r\n                                <h6>Qua: 08:00 - 19:00</h6>\r\n                                <h6>Sex: 08:00 - 19:00</h6>\r\n                                <h6>Sab: 10:00 - 21:00</h6>\r\n                                <p class=\"resumo-card\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\r\n                                    aliquam nunc dui, ac\r\n                                    laoreet mauris ullamcorper eu. Pellentesque sagittis neque ac nisi pharetra, vitae\r\n                                    posuere augue malesuada. Nullam id sapien in lacus placerat porttitor nec at nibh.\r\n                                    Suspendisse eget nunc auctor, accumsan nisi a, condimentum lectus.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"header\">\r\n                        ATENDIMENTO VIRTUAL\r\n                    </h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"flip-card\" (click)=\"irParaVejaMais()\">\r\n                        <div class=\"flip-card-inner\">\r\n                            <div class=\"flip-card-front\">\r\n                                <img class=\"card-img-top\" src=\"https://picsum.photos/200?random=8\">\r\n                                <h4>Caçadores do Leão</h4>\r\n                                <h5>ASCOMSER</h5>\r\n                            </div>\r\n                            <div class=\"flip-card-back\">\r\n                                <h5>Horario:</h5>\r\n                                <h6>Seg: 08:00 - 19:00</h6>\r\n                                <h6>Qua: 08:00 - 19:00</h6>\r\n                                <h6>Sex: 08:00 - 19:00</h6>\r\n                                <h6>Sab: 10:00 - 21:00</h6>\r\n                                <p class=\"resumo-card\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\r\n                                    aliquam nunc dui, ac\r\n                                    laoreet mauris ullamcorper eu. Pellentesque sagittis neque ac nisi pharetra, vitae\r\n                                    posuere augue malesuada. Nullam id sapien in lacus placerat porttitor nec at nibh.\r\n                                    Suspendisse eget nunc auctor, accumsan nisi a, condimentum lectus.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"flip-card\" (click)=\"irParaVejaMais()\">\r\n                        <div class=\"flip-card-inner\">\r\n                            <div class=\"flip-card-front\">\r\n                                <img class=\"card-img-top\" src=\"https://picsum.photos/200?random=9\">\r\n                                <h4>Caçadores do Leão</h4>\r\n                                <h5>ASCOMSER</h5>\r\n                            </div>\r\n                            <div class=\"flip-card-back\">\r\n                                <h5>Horario:</h5>\r\n                                <h6>Seg: 08:00 - 19:00</h6>\r\n                                <h6>Qua: 08:00 - 19:00</h6>\r\n                                <h6>Sex: 08:00 - 19:00</h6>\r\n                                <h6>Sab: 10:00 - 21:00</h6>\r\n                                <p class=\"resumo-card\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\r\n                                    aliquam nunc dui, ac\r\n                                    laoreet mauris ullamcorper eu. Pellentesque sagittis neque ac nisi pharetra, vitae\r\n                                    posuere augue malesuada. Nullam id sapien in lacus placerat porttitor nec at nibh.\r\n                                    Suspendisse eget nunc auctor, accumsan nisi a, condimentum lectus.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"flip-card\" (click)=\"irParaVejaMais()\">\r\n                        <div class=\"flip-card-inner\">\r\n                            <div class=\"flip-card-front\">\r\n                                <img class=\"card-img-top\" src=\"https://picsum.photos/200?random=10\">\r\n                                <!-- <span class=\"badge badge-primary\" routerLink=\"../quero-ajudar\">Vaga para\r\n                                    voluntários</span> -->\r\n                                <h4>Caçadores do Leão</h4>\r\n                                <h5>ASCOMSER</h5>\r\n                            </div>\r\n                            <div class=\"flip-card-back\">\r\n                                <h5>Horario:</h5>\r\n                                <h6>Seg: 08:00 - 19:00</h6>\r\n                                <h6>Qua: 08:00 - 19:00</h6>\r\n                                <h6>Sex: 08:00 - 19:00</h6>\r\n                                <h6>Sab: 10:00 - 21:00</h6>\r\n                                <p class=\"resumo-card\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\r\n                                    aliquam nunc dui, ac\r\n                                    laoreet mauris ullamcorper eu. Pellentesque sagittis neque ac nisi pharetra, vitae\r\n                                    posuere augue malesuada. Nullam id sapien in lacus placerat porttitor nec at nibh.\r\n                                    Suspendisse eget nunc auctor, accumsan nisi a, condimentum lectus.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"header\">\r\n                        EVENTOS\r\n                    </h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"flip-card\" (click)=\"irParaVejaMais()\">\r\n                        <div class=\"flip-card-inner\">\r\n                            <div class=\"flip-card-front\">\r\n                                <img class=\"card-img-top\" src=\"https://picsum.photos/200?random=11\">\r\n                                <h4>Caçadores do Leão</h4>\r\n                                <h5>São Paulo</h5> \r\n                                <h6>10/11/2021 - 19:00</h6>\r\n                            </div>\r\n                            <div class=\"flip-card-back\">                                                          \r\n                                <p class=\"resumo-card\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\r\n                                    aliquam nunc dui, ac\r\n                                    laoreet mauris ullamcorper eu. Pellentesque sagittis neque ac nisi pharetra, vitae\r\n                                    posuere augue malesuada. Nullam id sapien in lacus placerat porttitor nec at nibh.\r\n                                    Suspendisse eget nunc auctor, accumsan nisi a, condimentum lectus.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"flip-card\" (click)=\"irParaVejaMais()\">\r\n                        <div class=\"flip-card-inner\">\r\n                            <div class=\"flip-card-front\">\r\n                                <img class=\"card-img-top\" src=\"https://picsum.photos/200?random=12\">\r\n                                <!-- <span class=\"badge badge-primary\" routerLink=\"../quero-ajudar\">Vaga para\r\n                                    voluntários</span> -->\r\n                                <h4>Caçadores do Leão</h4>\r\n                                <h5>Juiz de Fora</h5>\r\n                                <h6>13/12/2021 - 10:00</h6>\r\n                            </div>\r\n                            <div class=\"flip-card-back\">\r\n                                \r\n                                <p class=\"resumo-card\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\r\n                                    aliquam nunc dui, ac\r\n                                    laoreet mauris ullamcorper eu. Pellentesque sagittis neque ac nisi pharetra, vitae\r\n                                    posuere augue malesuada. Nullam id sapien in lacus placerat porttitor nec at nibh.\r\n                                    Suspendisse eget nunc auctor, accumsan nisi a, condimentum lectus.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"flip-card\" (click)=\"irParaVejaMais()\">\r\n                        <div class=\"flip-card-inner\">\r\n                            <div class=\"flip-card-front\">\r\n                                <img class=\"card-img-top\" src=\"https://picsum.photos/200?random=13\">\r\n                                <h4>Caçadores do Leão</h4>\r\n                                <h5>Juiz de Fora</h5>\r\n                                <h6>13/12/2021 - 10:00</h6>\r\n                            </div>\r\n                            <div class=\"flip-card-back\">                                \r\n                                <p class=\"resumo-card\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\r\n                                    aliquam nunc dui, ac\r\n                                    laoreet mauris ullamcorper eu. Pellentesque sagittis neque ac nisi pharetra, vitae\r\n                                    posuere augue malesuada. Nullam id sapien in lacus placerat porttitor nec at nibh.\r\n                                    Suspendisse eget nunc auctor, accumsan nisi a, condimentum lectus.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </section>\r\n</main>");

/***/ }),

/***/ 55364:
/*!**********************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/site/produtos/produtos.component.html ***!
  \**********************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-site\">\r\n    <section class=\"section section-shaped\">\r\n\r\n    </section>\r\n\r\n    <section class=\"section section-shaped bg-secondary\">\r\n        <div class=\"container\">\r\n            <div class=\"row row-grid align-items-center\">\r\n                <div class=\"col-md-6 order-md-1\">\r\n                    <div class=\"pr-md-5\">\r\n                        <h3>Produtos</h3>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>");

/***/ }),

/***/ 35033:
/*!**************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/site/quem-somos/quem-somos.component.html ***!
  \**************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-site\">\n  <div class=\"position-relative\">\n\n    <section class=\"section section-shaped\">\n\n    </section>\n\n    <section class=\"section section-shaped bg-secondary\">\n      <div class=\"container\">\n        <div class=\"row row-grid align-items-center\">\n          <div class=\"col-md-4 order-md-2\">\n            <img src=\"./assets/img/francoAmor/francoamorlogo.png\" class=\"img-fluid floating\">\n          </div>\n          <div class=\"col-md-8 order-md-1\">\n            <div class=\"pr-md-5\">\n              <h4>SOBRE NÓS</h4>\n\n              <p>O Franco Amor é uma plataforma voltada para a saúde mental e qualidade de vida. Divulgamos os canais de\n                apoio e acolhimento emocional para quem precisa de ajuda e anunciamos as vagas de voluntariado nesses\n                mesmos projetos.\n              </p>\n\n              <ul class=\"list-unstyled mt-5\">\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div>\n                      <div class=\"badge badge-circle badge-success mr-3\">\n                        <i class=\"fa fa-phone\" aria-hidden=\"true\"></i>\n                      </div>\n                    </div>\n                    <div>\n                      <h4 class=\"mb-0\">BUSCANDO AJUDA</h4>\n                      <p>Se você está <a routerLink=\"/procuro-ajuda\">PRECISANDO DE AJUDA</a>, temos aqui uma lista dos\n                        canais de suporte que\n                        oferecem apoio emocional gratuitamente ou à preço social.</p>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div>\n                      <div class=\"badge badge-circle badge-warning mr-3\">\n                        <i class=\"fa fa-users\" aria-hidden=\"true\"></i>\n                      </div>\n                    </div>\n                    <div>\n                      <h4 class=\"mb-0\">VOLUNTARIADO</h4>\n                      <p>Se você <a routerLink=\"/quero-ajudar\">QUER AJUDAR</a>, se engajando em uma ação social que faz\n                        parte da rede de ajuda\n                        do site Franco Amor, pode escolher uma opção de voluntariado com o seu perfil.</p>\n                    </div>\n                  </div>\n                </li>\n\n                <li class=\"py-2\">\n                  <div class=\"d-flex align-items-center\">\n                    <div>\n                      <div class=\"badge badge-circle badge-primary mr-3\">\n                        <i class=\"fa fa-briefcase\" aria-hidden=\"true\"></i>\n                      </div>\n                    </div>\n                    <div>\n                      <h4 class=\"mb-0\">INSTITUIÇÃO</h4>\n                      <p>Organizações, movimentos sociais e indivíduos que realizam ações sociais voltadas para o apoio\n                        emocional, saúde mental e qualidade de vida poderão divulgar, gratuitamente, <a\n                          routerLink=\"/quero-ajudar\">VAGAS DE\n                          VOLUNTARIADO</a> para contribuir e fortalecer com o seu projeto</p>\n                    </div>\n                  </div>\n                </li>\n\n              </ul>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n\n    <section class=\"section\">\n      <div class=\"container\">\n        <div class=\"card bg-gradient-success shadow-lg border-0\">\n          <div class=\"p-5\">\n            <div class=\"row align-items-center\">\n              <div class=\"col-lg-8\">\n                <h3 class=\"text-white\">Panfleto de divulgação</h3>\n                <p class=\"lead text-white mt-3\">Baixe aqui o pdf para divulgação.</p>\n              </div>\n              <div class=\"col-lg-3 ml-lg-auto\">\n                <a class=\"btn btn-lg btn-block btn-white\">Download PDF</a>\n              </div>\n            </div>\n          </div>\n        </div>\n      </div>\n    </section>\n  </div>\n</main>");

/***/ }),

/***/ 75776:
/*!******************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/site/quero-ajudar/quero-ajudar.component.html ***!
  \******************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-site\">\r\n    <section class=\"section section-shaped\">\r\n\r\n    </section>\r\n\r\n    <section class=\"section section-shaped bg-secondary\">\r\n        <div class=\"container\">\r\n\r\n            <h4>QUERO AJUDAR</h4>\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label>Instituição</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"cnpj\" placeholder=\"Instituição responsável\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"form-group\">\r\n                        <label>Cidade</label>\r\n                        <input type=\"text\" class=\"form-control\" id=\"cidade\" placeholder=\"Cidade\" name=\"cidade\"\r\n                            [(ngModel)]=\"cidade\">\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-1\">\r\n                    <label>&nbsp;</label>\r\n                    <button class=\"btn btn-icon btn-2 btn-outline-light\" type=\"button\">\r\n                        <span class=\"btn-inner--icon\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></span>\r\n                    </button>\r\n                </div>\r\n            </div>\r\n\r\n\r\n            <div class=\"row\">\r\n                <div class=\"col-md-12\">\r\n                    <h4 class=\"header\">\r\n                        VAGAS PARA VOLUNTÁRIOS\r\n                    </h4>\r\n                </div>\r\n            </div>\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"flip-card\" (click)=\"irParaVejaMais()\">\r\n                        <div class=\"flip-card-inner\">\r\n                            <div class=\"flip-card-front\">\r\n                                <img class=\"card-img-top\" src=\"https://picsum.photos/200?random=5\">\r\n                                <!-- <span class=\"badge badge-primary\" routerLink=\"../quero-ajudar\">Vaga para\r\n                                    voluntários</span> -->\r\n                                <h4>Caçadores do Leão</h4>\r\n                                <h5>Juiz de Fora</h5>\r\n                            </div>\r\n                            <div class=\"flip-card-back\">\r\n                                <h5>Horario:</h5>\r\n                                <h6>Seg: 08:00 - 19:00</h6>\r\n                                <h6>Qua: 08:00 - 19:00</h6>\r\n                                <h6>Sex: 08:00 - 19:00</h6>\r\n                                <h6>Sab: 10:00 - 21:00</h6>\r\n                                <p class=\"resumo-card\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\r\n                                    aliquam nunc dui, ac\r\n                                    laoreet mauris ullamcorper eu. Pellentesque sagittis neque ac nisi pharetra, vitae\r\n                                    posuere augue malesuada. Nullam id sapien in lacus placerat porttitor nec at nibh.\r\n                                    Suspendisse eget nunc auctor, accumsan nisi a, condimentum lectus.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"flip-card\" (click)=\"irParaVejaMais()\">\r\n                        <div class=\"flip-card-inner\">\r\n                            <div class=\"flip-card-front\">\r\n                                <img class=\"card-img-top\" src=\"https://picsum.photos/200?random=6\">\r\n                                <h4>Caçadores do Leão</h4>\r\n                                <h5>São Paulo</h5>\r\n                            </div>\r\n                            <div class=\"flip-card-back\">\r\n                                <h5>Horario:</h5>\r\n                                <h6>Seg: 08:00 - 19:00</h6>\r\n                                <h6>Qua: 08:00 - 19:00</h6>\r\n                                <h6>Sex: 08:00 - 19:00</h6>\r\n                                <h6>Sab: 10:00 - 21:00</h6>\r\n                                <p class=\"resumo-card\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\r\n                                    aliquam nunc dui, ac\r\n                                    laoreet mauris ullamcorper eu. Pellentesque sagittis neque ac nisi pharetra, vitae\r\n                                    posuere augue malesuada. Nullam id sapien in lacus placerat porttitor nec at nibh.\r\n                                    Suspendisse eget nunc auctor, accumsan nisi a, condimentum lectus.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"flip-card\" (click)=\"irParaVejaMais()\">\r\n                        <div class=\"flip-card-inner\">\r\n                            <div class=\"flip-card-front\">\r\n                                <img class=\"card-img-top\" src=\"https://picsum.photos/200?random=7\">\r\n                                <h4>Caçadores do Leão</h4>\r\n                                <h5>São Paulo</h5>\r\n                            </div>\r\n                            <div class=\"flip-card-back\">\r\n                                <h5>Horario:</h5>\r\n                                <h6>Seg: 08:00 - 19:00</h6>\r\n                                <h6>Qua: 08:00 - 19:00</h6>\r\n                                <h6>Sex: 08:00 - 19:00</h6>\r\n                                <h6>Sab: 10:00 - 21:00</h6>\r\n                                <p class=\"resumo-card\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam\r\n                                    aliquam nunc dui, ac\r\n                                    laoreet mauris ullamcorper eu. Pellentesque sagittis neque ac nisi pharetra, vitae\r\n                                    posuere augue malesuada. Nullam id sapien in lacus placerat porttitor nec at nibh.\r\n                                    Suspendisse eget nunc auctor, accumsan nisi a, condimentum lectus.</p>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>");

/***/ }),

/***/ 22091:
/*!************************************************************************************************************************!*\
  !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/site/veja-mais/veja-mais.component.html ***!
  \************************************************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<main class=\"main-site\">\r\n    <section class=\"section section-shaped\">\r\n    </section>\r\n\r\n    <section class=\"section section-shaped bg-secondary\">\r\n        <div class=\"container\">\r\n            <div class=\"card card-profile shadow\">\r\n                <div class=\"px-4\">\r\n                    <div class=\"row justify-content-center\">\r\n                        <div class=\"col-lg-12\">\r\n                            <div class=\"card-profile-image\">\r\n                                <a href=\"javascript:void(0)\">\r\n                                    <img src=\"https://picsum.photos/200\" width=\"300\" class=\"rounded-circle\">\r\n                                </a>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n                    <div class=\"text-center\">\r\n                        <h3>Caçadores do Leão </h3>\r\n                        <h5>Associação de Promoção e Desenvolvimento Social Novo Mundo</h5>\r\n                        <div class=\"h6 font-weight-300\"><i class=\"ni location_pin mr-2\"></i>Rua Santa Rita - Santa Rita,\r\n                            Curvelo - MG, Brasil</div>\r\n                        <div class=\"h6 mt-4\"><i class=\"ni business_briefcase-24 mr-2\"></i>01/12/2020</div>\r\n                        <div><i class=\"ni education_hat mr-2\"></i>Valor: Gratuito</div>\r\n                        <div><i class=\"ni education_hat mr-2\"></i>Participação: Livre</div>\r\n                    </div>\r\n                    <div class=\"py-5 text-center\">\r\n                        <div class=\"row justify-content-center\">\r\n                            <div class=\"col-lg-9\">\r\n                                <p>\r\n                                    Esta atividade é de extrema importância, pois ela melhorará nossa saúde financeira e\r\n                                    assim podemos continuar cumprindo nosso propósito. Você pode apoiar realizando\r\n                                    ligações, reuniões, e-mails com possíveis doadores. Queremos ampliar nossos contatos\r\n                                    e nossas fontes de captação de renda.\r\n                                </p>\r\n                                <div class=\"card-profile-actions py-4 mt-lg-0\">\r\n                                    <a href=\"javascript:void(0)\" class=\"btn btn-sm mr-4 btn-candidatar\">Candidatar como\r\n                                        voluntário</a>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                    <div class=\"border-top py-5 text-center\">\r\n                        <div class=\"row justify-content-center\">\r\n                            <div class=\"col-lg-9\">\r\n                                <h5>Sobre a Instituição</h5>\r\n\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-md-2\">\r\n                                        <div>\r\n                                            <a href=\"javascript:void(0)\">\r\n                                                <img src=\"./assets/img/francoAmor/instituicao.png\"\r\n                                                    class=\"rounded-circle\" style=\"width: 100px;\">\r\n                                            </a>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-md-10\">\r\n                                        <p><b>Associação de Promoção e desenvolvimento Social Novo Mundo</b></p>\r\n                                        <p>\r\n                                            A Associação de Promoção e desenvolvimento Social Novo Mundo fundada em 29\r\n                                            dezembro de 2015, CNPJ – 24.038.615/0001-75, e reconhecida de utilidade\r\n                                            Pública Municipal (lei nº 2.729/2016), CMDCA- Sob o nº063/2016, e CAGEC nº\r\n                                            CRC 19009.\r\n                                        </p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>");

/***/ }),

/***/ 67097:
/*!***********************************************************!*\
  !*** ./src/app/admin/home-admin/home-admin.component.css ***!
  \***********************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJob21lLWFkbWluLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 50682:
/*!***************************************************************************************************!*\
  !*** ./src/app/admin/listar-atendimentos-atividades/listar-atendimentos-atividades.component.css ***!
  \***************************************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YXItYXRlbmRpbWVudG9zLWF0aXZpZGFkZXMuY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 94981:
/*!***************************************************************************!*\
  !*** ./src/app/admin/listar-instituicao/listar-instituicao.component.css ***!
  \***************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YXItaW5zdGl0dWljYW8uY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 5471:
/*!*********************************************************************!*\
  !*** ./src/app/admin/listar-postagem/listar-postagem.component.css ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YXItcG9zdGFnZW0uY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 15889:
/*!*******************************************************************!*\
  !*** ./src/app/admin/listar-produto/listar-produto.component.css ***!
  \*******************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YXItcHJvZHV0by5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 58365:
/*!*************************************************************************!*\
  !*** ./src/app/admin/listar-voluntario/listar-voluntario.component.css ***!
  \*************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJsaXN0YXItdm9sdW50YXJpby5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 10210:
/*!*****************************************************************!*\
  !*** ./src/app/admin/manter-evento/manter-evento.component.css ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW50ZXItZXZlbnRvLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 58210:
/*!***************************************************************************!*\
  !*** ./src/app/admin/manter-instituicao/manter-instituicao.component.css ***!
  \***************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW50ZXItaW5zdGl0dWljYW8uY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 43563:
/*!*********************************************************************!*\
  !*** ./src/app/admin/manter-postagem/manter-postagem.component.css ***!
  \*********************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW50ZXItcG9zdGFnZW0uY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 33625:
/*!*************************************************************************!*\
  !*** ./src/app/admin/manter-presencial/manter-presencial.component.css ***!
  \*************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW50ZXItcHJlc2VuY2lhbC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 19137:
/*!*******************************************************************!*\
  !*** ./src/app/admin/manter-produto/manter-produto.component.css ***!
  \*******************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW50ZXItcHJvZHV0by5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 83520:
/*!*************************************************************************!*\
  !*** ./src/app/admin/manter-telefonico/manter-telefonico.component.css ***!
  \*************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW50ZXItdGVsZWZvbmljby5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 96148:
/*!*******************************************************************!*\
  !*** ./src/app/admin/manter-virtual/manter-virtual.component.css ***!
  \*******************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW50ZXItdmlydHVhbC5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 58472:
/*!*************************************************************************!*\
  !*** ./src/app/admin/manter-voluntario/manter-voluntario.component.css ***!
  \*************************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJtYW50ZXItdm9sdW50YXJpby5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 38097:
/*!************************************************!*\
  !*** ./src/app/auth/login/login.component.css ***!
  \************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".main-site{\r\n    /* Full height */\r\n    height: calc(100% - 80px);\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImxvZ2luLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxnQkFBZ0I7SUFHaEIseUJBQXlCO0VBQzNCIiwiZmlsZSI6ImxvZ2luLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubWFpbi1zaXRle1xyXG4gICAgLyogRnVsbCBoZWlnaHQgKi9cclxuICAgIGhlaWdodDogLW1vei1jYWxjKDEwMCUgLSA4MHB4KTtcclxuICAgIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSA4MHB4KTtcclxuICAgIGhlaWdodDogY2FsYygxMDAlIC0gODBweCk7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 21928:
/*!*****************************************!*\
  !*** ./src/app/blog/blog.component.css ***!
  \*****************************************/
/***/ (function(module) {

"use strict";
module.exports = "/* stylelint-disable selector-list-comma-newline-after */\r\n\r\n.blog-header {\r\n    line-height: 1;\r\n    border-bottom: 1px solid #e5e5e5;\r\n  }\r\n\r\n.blog-header-logo {\r\n    font-family: \"Playfair Display\", Georgia, \"Times New Roman\", serif;\r\n    font-size: 2.25rem;\r\n  }\r\n\r\n.blog-header-logo:hover {\r\n    text-decoration: none;\r\n  }\r\n\r\nh1, h2, h3, h4, h5, h6 {\r\n    font-family: \"Playfair Display\", Georgia, \"Times New Roman\", serif;\r\n  }\r\n\r\n.display-4 {\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n@media (min-width: 768px) {\r\n    .display-4 {\r\n      font-size: 3rem;\r\n    }\r\n  }\r\n\r\n.nav-scroller {\r\n    position: relative;\r\n    z-index: 2;\r\n    height: 2.75rem;\r\n    overflow-y: hidden;\r\n  }\r\n\r\n.nav-scroller .nav {\r\n    display: flex;\r\n    flex-wrap: nowrap;\r\n    padding-bottom: 1rem;\r\n    margin-top: -1px;\r\n    overflow-x: auto;\r\n    text-align: center;\r\n    white-space: nowrap;\r\n    -webkit-overflow-scrolling: touch;\r\n  }\r\n\r\n.nav-scroller .nav-link {\r\n    padding-top: .75rem;\r\n    padding-bottom: .75rem;\r\n    font-size: .875rem;\r\n  }\r\n\r\n.card-img-right {\r\n    height: 100%;\r\n    border-radius: 0 3px 3px 0;\r\n  }\r\n\r\n.flex-auto {\r\n    flex: 0 0 auto;\r\n  }\r\n\r\n.h-250 { height: 400px; }\r\n\r\n@media (min-width: 768px) {\r\n    .h-md-250 { height: 400px; }\r\n  }\r\n\r\n/* Pagination */\r\n\r\n.blog-pagination {\r\n    margin-bottom: 4rem;\r\n  }\r\n\r\n.blog-pagination > .btn {\r\n    border-radius: 2rem;\r\n  }\r\n\r\n/*\r\n   * Blog posts\r\n   */\r\n\r\n.blog-post {\r\n    margin-bottom: 4rem;\r\n  }\r\n\r\n.blog-post-title {\r\n    margin-bottom: .25rem;\r\n    font-size: 2.5rem;\r\n  }\r\n\r\n.blog-post-meta {\r\n    margin-bottom: 1.25rem;\r\n    color: #999;\r\n  }\r\n\r\n.blog-post p{\r\n    text-align: justify;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImJsb2cuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx3REFBd0Q7O0FBRXhEO0lBQ0ksY0FBYztJQUNkLGdDQUFnQztFQUNsQzs7QUFFQTtJQUNFLGtFQUFrRTtJQUNsRSxrQkFBa0I7RUFDcEI7O0FBRUE7SUFDRSxxQkFBcUI7RUFDdkI7O0FBRUE7SUFDRSxrRUFBa0U7RUFDcEU7O0FBRUE7SUFDRSxpQkFBaUI7RUFDbkI7O0FBQ0E7SUFDRTtNQUNFLGVBQWU7SUFDakI7RUFDRjs7QUFFQTtJQUNFLGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUVFLGFBQWE7SUFFYixpQkFBaUI7SUFDakIsb0JBQW9CO0lBQ3BCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLG1CQUFtQjtJQUNuQixpQ0FBaUM7RUFDbkM7O0FBRUE7SUFDRSxtQkFBbUI7SUFDbkIsc0JBQXNCO0lBQ3RCLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLFlBQVk7SUFDWiwwQkFBMEI7RUFDNUI7O0FBRUE7SUFFRSxjQUFjO0VBQ2hCOztBQUVBLFNBQVMsYUFBYSxFQUFFOztBQUN4QjtJQUNFLFlBQVksYUFBYSxFQUFFO0VBQzdCOztBQUVBLGVBQWU7O0FBQ2Y7SUFDRSxtQkFBbUI7RUFDckI7O0FBQ0E7SUFDRSxtQkFBbUI7RUFDckI7O0FBRUE7O0lBRUU7O0FBQ0Y7SUFDRSxtQkFBbUI7RUFDckI7O0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsaUJBQWlCO0VBQ25COztBQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLFdBQVc7RUFDYjs7QUFDQTtJQUNFLG1CQUFtQjtFQUNyQiIsImZpbGUiOiJibG9nLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBzdHlsZWxpbnQtZGlzYWJsZSBzZWxlY3Rvci1saXN0LWNvbW1hLW5ld2xpbmUtYWZ0ZXIgKi9cclxuXHJcbi5ibG9nLWhlYWRlciB7XHJcbiAgICBsaW5lLWhlaWdodDogMTtcclxuICAgIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCAjZTVlNWU1O1xyXG4gIH1cclxuICBcclxuICAuYmxvZy1oZWFkZXItbG9nbyB7XHJcbiAgICBmb250LWZhbWlseTogXCJQbGF5ZmFpciBEaXNwbGF5XCIsIEdlb3JnaWEsIFwiVGltZXMgTmV3IFJvbWFuXCIsIHNlcmlmO1xyXG4gICAgZm9udC1zaXplOiAyLjI1cmVtO1xyXG4gIH1cclxuICBcclxuICAuYmxvZy1oZWFkZXItbG9nbzpob3ZlciB7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgfVxyXG4gIFxyXG4gIGgxLCBoMiwgaDMsIGg0LCBoNSwgaDYge1xyXG4gICAgZm9udC1mYW1pbHk6IFwiUGxheWZhaXIgRGlzcGxheVwiLCBHZW9yZ2lhLCBcIlRpbWVzIE5ldyBSb21hblwiLCBzZXJpZjtcclxuICB9XHJcbiAgXHJcbiAgLmRpc3BsYXktNCB7XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuZGlzcGxheS00IHtcclxuICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICAubmF2LXNjcm9sbGVyIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHotaW5kZXg6IDI7XHJcbiAgICBoZWlnaHQ6IDIuNzVyZW07XHJcbiAgICBvdmVyZmxvdy15OiBoaWRkZW47XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXYtc2Nyb2xsZXIgLm5hdiB7XHJcbiAgICBkaXNwbGF5OiAtbXMtZmxleGJveDtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAtbXMtZmxleC13cmFwOiBub3dyYXA7XHJcbiAgICBmbGV4LXdyYXA6IG5vd3JhcDtcclxuICAgIHBhZGRpbmctYm90dG9tOiAxcmVtO1xyXG4gICAgbWFyZ2luLXRvcDogLTFweDtcclxuICAgIG92ZXJmbG93LXg6IGF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB3aGl0ZS1zcGFjZTogbm93cmFwO1xyXG4gICAgLXdlYmtpdC1vdmVyZmxvdy1zY3JvbGxpbmc6IHRvdWNoO1xyXG4gIH1cclxuICBcclxuICAubmF2LXNjcm9sbGVyIC5uYXYtbGluayB7XHJcbiAgICBwYWRkaW5nLXRvcDogLjc1cmVtO1xyXG4gICAgcGFkZGluZy1ib3R0b206IC43NXJlbTtcclxuICAgIGZvbnQtc2l6ZTogLjg3NXJlbTtcclxuICB9XHJcbiAgXHJcbiAgLmNhcmQtaW1nLXJpZ2h0IHtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDAgM3B4IDNweCAwO1xyXG4gIH1cclxuICBcclxuICAuZmxleC1hdXRvIHtcclxuICAgIC1tcy1mbGV4OiAwIDAgYXV0bztcclxuICAgIGZsZXg6IDAgMCBhdXRvO1xyXG4gIH1cclxuICBcclxuICAuaC0yNTAgeyBoZWlnaHQ6IDQwMHB4OyB9XHJcbiAgQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XHJcbiAgICAuaC1tZC0yNTAgeyBoZWlnaHQ6IDQwMHB4OyB9XHJcbiAgfVxyXG4gIFxyXG4gIC8qIFBhZ2luYXRpb24gKi9cclxuICAuYmxvZy1wYWdpbmF0aW9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDRyZW07XHJcbiAgfVxyXG4gIC5ibG9nLXBhZ2luYXRpb24gPiAuYnRuIHtcclxuICAgIGJvcmRlci1yYWRpdXM6IDJyZW07XHJcbiAgfVxyXG4gIFxyXG4gIC8qXHJcbiAgICogQmxvZyBwb3N0c1xyXG4gICAqL1xyXG4gIC5ibG9nLXBvc3Qge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogNHJlbTtcclxuICB9XHJcbiAgLmJsb2ctcG9zdC10aXRsZSB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAuMjVyZW07XHJcbiAgICBmb250LXNpemU6IDIuNXJlbTtcclxuICB9XHJcbiAgLmJsb2ctcG9zdC1tZXRhIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDEuMjVyZW07XHJcbiAgICBjb2xvcjogIzk5OTtcclxuICB9ICBcclxuICAuYmxvZy1wb3N0IHB7XHJcbiAgICB0ZXh0LWFsaWduOiBqdXN0aWZ5O1xyXG4gIH0iXX0= */";

/***/ }),

/***/ 61466:
/*!****************************************************************!*\
  !*** ./src/app/site/cadastre-acao/cadastre-acao.component.css ***!
  \****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "p,\r\nli {\r\n    font-size: 1.2rem;\r\n}\r\n\r\nh4 {\r\n    color: #3b5999;\r\n}\r\n\r\na{\r\n    color: #009688;\r\n    font-weight: 400;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImNhZGFzdHJlLWFjYW8uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQiIsImZpbGUiOiJjYWRhc3RyZS1hY2FvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLFxyXG5saSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuaDQge1xyXG4gICAgY29sb3I6ICMzYjU5OTk7XHJcbn1cclxuXHJcbmF7XHJcbiAgICBjb2xvcjogIzAwOTY4ODtcclxuICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 78458:
/*!****************************************************!*\
  !*** ./src/app/site/contato/contato.component.css ***!
  \****************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJjb250YXRvLmNvbXBvbmVudC5jc3MifQ== */";

/***/ }),

/***/ 41476:
/*!**************************************************!*\
  !*** ./src/app/site/doacao/doacao.component.css ***!
  \**************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJkb2FjYW8uY29tcG9uZW50LmNzcyJ9 */";

/***/ }),

/***/ 16291:
/*!********************************************!*\
  !*** ./src/app/site/faq/faq.component.css ***!
  \********************************************/
/***/ (function(module) {

"use strict";
module.exports = ".main-site {\r\n  /* Full height */\r\n  height: calc(100% - 120px);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZ0JBQWdCO0VBR2hCLDBCQUEwQjtBQUM1QiIsImZpbGUiOiJmYXEuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tYWluLXNpdGUge1xyXG4gIC8qIEZ1bGwgaGVpZ2h0ICovXHJcbiAgaGVpZ2h0OiAtbW96LWNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gIGhlaWdodDogLXdlYmtpdC1jYWxjKDEwMCUgLSA4MHB4KTtcclxuICBoZWlnaHQ6IGNhbGMoMTAwJSAtIDEyMHB4KTtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 1242:
/*!******************************************************!*\
  !*** ./src/app/site/produtos/produtos.component.css ***!
  \******************************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJwcm9kdXRvcy5jb21wb25lbnQuY3NzIn0= */";

/***/ }),

/***/ 89178:
/*!**********************************************************!*\
  !*** ./src/app/site/quem-somos/quem-somos.component.css ***!
  \**********************************************************/
/***/ (function(module) {

"use strict";
module.exports = "p,\r\nli {\r\n    font-size: 1.2rem;\r\n}\r\n\r\nh4 {\r\n    color: #3b5999;\r\n}\r\n\r\na {\r\n    color: #009688;\r\n    font-weight: 400;\r\n}\r\n\r\n.bg-gradient-success {\r\n    background: linear-gradient(87deg, #2dce89 0, #2dcecc 100%) !important;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZW0tc29tb3MuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7SUFFSSxpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztJQUNkLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLHNFQUFzRTtBQUMxRSIsImZpbGUiOiJxdWVtLXNvbW9zLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLFxyXG5saSB7XHJcbiAgICBmb250LXNpemU6IDEuMnJlbTtcclxufVxyXG5cclxuaDQge1xyXG4gICAgY29sb3I6ICMzYjU5OTk7XHJcbn1cclxuXHJcbmEge1xyXG4gICAgY29sb3I6ICMwMDk2ODg7XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4uYmctZ3JhZGllbnQtc3VjY2VzcyB7XHJcbiAgICBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQoODdkZWcsICMyZGNlODkgMCwgIzJkY2VjYyAxMDAlKSAhaW1wb3J0YW50O1xyXG59Il19 */";

/***/ }),

/***/ 25740:
/*!********************************************************!*\
  !*** ./src/app/site/veja-mais/veja-mais.component.css ***!
  \********************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".card-profile-image{\r\n    text-align: center;\r\n    margin: 2em;\r\n}\r\n\r\n.card-profile-actions{\r\n    text-align: center;\r\n}\r\n\r\n.btn-candidatar{\r\n    background-color: darkred;\r\n    color: white;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInZlamEtbWFpcy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCIiwiZmlsZSI6InZlamEtbWFpcy5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNhcmQtcHJvZmlsZS1pbWFnZXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMmVtO1xyXG59XHJcblxyXG4uY2FyZC1wcm9maWxlLWFjdGlvbnN7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5idG4tY2FuZGlkYXRhcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGRhcmtyZWQ7XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbn0iXX0= */";

/***/ }),

/***/ 53040:
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/***/ (function(module) {

"use strict";
module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";

/***/ }),

/***/ 14243:
/*!***************************************************!*\
  !*** ./src/app/auth/signup/signup.component.scss ***!
  \***************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".main-site {\n  /* Full height */\n  height: calc(100% - 120px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpZ251cC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFDQTtFQUNJLGdCQUFBO0VBR0EsMEJBQUE7QUFBSiIsImZpbGUiOiJzaWdudXAuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJcclxuLm1haW4tc2l0ZSB7XHJcbiAgICAvKiBGdWxsIGhlaWdodCAqL1xyXG4gICAgaGVpZ2h0OiAtbW96LWNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gICAgaGVpZ2h0OiAtd2Via2l0LWNhbGMoMTAwJSAtIDgwcHgpO1xyXG4gICAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMjBweCk7XHJcbiAgfSJdfQ== */";

/***/ }),

/***/ 34663:
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".footer {\n  height: 80px;\n  padding-bottom: 0 !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZvb3Rlci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLFlBQUE7RUFDQSw0QkFBQTtBQUNKIiwiZmlsZSI6ImZvb3Rlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb290ZXJ7XHJcbiAgICBoZWlnaHQ6IDgwcHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMCAhaW1wb3J0YW50O1xyXG59Il19 */";

/***/ }),

/***/ 6046:
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/***/ (function(module) {

"use strict";
module.exports = ".social-medias {\n  background-color: #3b5999;\n}\n\n.social-medias-icon {\n  color: white !important;\n}\n\nnav {\n  font-family: \"Quicksand\", sans-serif !important;\n}\n\na.menu {\n  color: #3b5999 !important;\n}\n\n.flex {\n  display: flex !important;\n}\n\nol,\nul {\n  list-style: none;\n  margin: 0;\n  padding: 0;\n}\n\n.mr-2 {\n  margin-right: 8px;\n}\n\n.text-2xl {\n  font-size: 1.5rem !important;\n}\n\nnavbar_global {\n  padding-top: 18px;\n}\n\n.navbar-main {\n  margin-top: 30px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5hdmJhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFDSSx1QkFBQTtBQUNKOztBQUVBO0VBQ0ksK0NBQUE7QUFDSjs7QUFFQTtFQUNJLHlCQUFBO0FBQ0o7O0FBRUE7RUFFSSx3QkFBQTtBQUNKOztBQUNBOztFQUVJLGdCQUFBO0VBQ0EsU0FBQTtFQUNBLFVBQUE7QUFFSjs7QUFDQTtFQUNJLGlCQUFBO0FBRUo7O0FBQ0E7RUFDSSw0QkFBQTtBQUVKOztBQUNBO0VBQ0ksaUJBQUE7QUFFSjs7QUFDQTtFQUNJLGdCQUFBO0FBRUoiLCJmaWxlIjoibmF2YmFyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNvY2lhbC1tZWRpYXMge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNiNTk5OTtcclxufVxyXG5cclxuLnNvY2lhbC1tZWRpYXMtaWNvbntcclxuICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5uYXZ7XHJcbiAgICBmb250LWZhbWlseTogJ1F1aWNrc2FuZCcsIHNhbnMtc2VyaWYgIWltcG9ydGFudDtcclxufVxyXG5cclxuYS5tZW51e1xyXG4gICAgY29sb3I6IzNiNTk5OSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4uZmxleCB7XHJcbiAgICBkaXNwbGF5OiAtd2Via2l0LWJveCAhaW1wb3J0YW50O1xyXG4gICAgZGlzcGxheTogZmxleCAhaW1wb3J0YW50O1xyXG59XHJcbm9sLFxyXG51bCB7XHJcbiAgICBsaXN0LXN0eWxlOiBub25lO1xyXG4gICAgbWFyZ2luOiAwO1xyXG4gICAgcGFkZGluZzogMDtcclxufVxyXG5cclxuLm1yLTIge1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA4cHg7XHJcbn1cclxuXHJcbi50ZXh0LTJ4bCB7XHJcbiAgICBmb250LXNpemU6IDEuNXJlbSAhaW1wb3J0YW50O1xyXG59XHJcblxyXG5uYXZiYXJfZ2xvYmFse1xyXG4gICAgcGFkZGluZy10b3A6IDE4cHg7XHJcbn1cclxuXHJcbi5uYXZiYXItbWFpbntcclxuICAgIG1hcmdpbi10b3A6IDMwcHg7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 45879:
/*!***********************************************!*\
  !*** ./src/app/site/home/home.component.scss ***!
  \***********************************************/
/***/ (function(module) {

"use strict";
module.exports = ".icon-card-home {\n  font-size: 40px;\n}\n\n.titulo-card-home {\n  font-size: 18px;\n}\n\n.btn-card-home {\n  border-radius: 100%;\n  width: 25rem;\n  height: 25rem;\n  padding-top: 6.5em;\n  font-size: larger;\n}\n\n.btn-card-home:not(:last-child) {\n  margin-right: 3rem;\n}\n\n.text-card-home {\n  white-space: break-spaces;\n  word-break: break-word;\n  font-feature-settings: \"smcp\", \"c2sc\";\n  font-variant-caps: all-small-caps;\n}\n\n.section-shaped {\n  margin-top: 50px;\n}\n\n.slogan {\n  margin-top: 50px;\n  text-align: center;\n  font-family: \"Dancing Script\", cursive;\n}\n\n.main-site {\n  /* Full height */\n  height: calc(100% - 120px);\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxlQUFBO0FBQ0Y7O0FBRUE7RUFDRSxtQkFBQTtFQUNBLFlBQUE7RUFDQSxhQUFBO0VBQ0Esa0JBQUE7RUFDQSxpQkFBQTtBQUNGOztBQUNFO0VBQ0Usa0JBQUE7QUFDSjs7QUFHQTtFQUNFLHlCQUFBO0VBQ0Esc0JBQUE7RUFDQSxxQ0FBQTtFQUFBLGlDQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtBQUFGOztBQUdBO0VBQ0UsZ0JBQUE7RUFDQSxrQkFBQTtFQUNBLHNDQUFBO0FBQUY7O0FBR0E7RUFDRSxnQkFBQTtFQUdBLDBCQUFBO0FBQUYiLCJmaWxlIjoiaG9tZS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5pY29uLWNhcmQtaG9tZSB7XHJcbiAgZm9udC1zaXplOiA0MHB4O1xyXG59XHJcblxyXG4udGl0dWxvLWNhcmQtaG9tZSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG59XHJcblxyXG4uYnRuLWNhcmQtaG9tZSB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTAwJTtcclxuICB3aWR0aDogMjVyZW07XHJcbiAgaGVpZ2h0OiAyNXJlbTtcclxuICBwYWRkaW5nLXRvcDogNi41ZW07XHJcbiAgZm9udC1zaXplOiBsYXJnZXI7XHJcblxyXG4gICY6bm90KDpsYXN0LWNoaWxkKSB7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDNyZW07XHJcbiAgfVxyXG59XHJcblxyXG4udGV4dC1jYXJkLWhvbWUge1xyXG4gIHdoaXRlLXNwYWNlOiBicmVhay1zcGFjZXM7XHJcbiAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICBmb250LXZhcmlhbnQtY2FwczogYWxsLXNtYWxsLWNhcHM7XHJcbn1cclxuXHJcbi5zZWN0aW9uLXNoYXBlZHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG59XHJcblxyXG4uc2xvZ2FuIHtcclxuICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICBmb250LWZhbWlseTogXCJEYW5jaW5nIFNjcmlwdFwiLCBjdXJzaXZlO1xyXG59XHJcblxyXG4ubWFpbi1zaXRlIHtcclxuICAvKiBGdWxsIGhlaWdodCAqL1xyXG4gIGhlaWdodDogLW1vei1jYWxjKDEwMCUgLSA4MHB4KTtcclxuICBoZWlnaHQ6IC13ZWJraXQtY2FsYygxMDAlIC0gODBweCk7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMCUgLSAxMjBweCk7XHJcbn1cclxuIl19 */";

/***/ }),

/***/ 93078:
/*!*****************************************************************!*\
  !*** ./src/app/site/procuro-ajuda/procuro-ajuda.component.scss ***!
  \*****************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "p,\nli,\nlabel {\n  font-size: 1.2rem;\n}\n\nh4 {\n  color: #3b5999;\n}\n\na {\n  color: #009688;\n  font-weight: 400;\n}\n\n.card {\n  position: relative;\n  text-align: center;\n  margin: 5px;\n}\n\n.card:hover {\n  cursor: pointer;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.row .header {\n  margin-bottom: 10px;\n  margin-top: 20px;\n}\n\n.header {\n  background-color: #b6f1ec;\n  font-size: larger;\n  border-radius: 10px;\n  color: #009688;\n  text-align: center;\n  padding: 6px;\n}\n\n.badge-primary {\n  color: white;\n  background-color: darkred;\n  cursor: pointer;\n  top: -25px;\n  position: relative;\n  width: 100%;\n}\n\n.btn-outline-info {\n  margin: 0 auto;\n}\n\n/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */\n\n.flip-card {\n  background-color: transparent;\n  width: 100%;\n  height: 300px;\n  perspective: 1000px;\n  /* Remove this if you don't want the 3D effect */\n  cursor: pointer;\n}\n\n/* This container is needed to position the front and back side */\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n\n/* Do an horizontal flip when you move the mouse over the flip box container */\n\n.flip-card:hover .flip-card-inner {\n  transform: rotateY(180deg);\n}\n\n/* Position the front and back side */\n\n.flip-card-front,\n.flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  /* Safari */\n  backface-visibility: hidden;\n}\n\n/* Style the front side (fallback if image is missing) */\n\n.flip-card-front {\n  background-color: white;\n  color: black;\n  border-radius: 10px;\n}\n\n/* Style the back side */\n\n.flip-card-back {\n  background-color: #009688;\n  color: white;\n  transform: rotateY(180deg);\n  border-radius: 10px;\n}\n\n.card-img-top {\n  border-radius: 10px 10px 0 0;\n  width: 100%;\n  height: 200px;\n}\n\n.resumo-card {\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.card-title {\n  margin-top: -25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInByb2N1cm8tYWp1ZGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztFQUdFLGlCQUFBO0FBQ0Y7O0FBS0E7RUFDRSxjQUFBO0FBRkY7O0FBS0E7RUFDRSxjQUFBO0VBQ0EsZ0JBQUE7QUFGRjs7QUFPQTtFQUNFLGtCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxlQUFBO0VBQ0EsMkVBQUE7QUFKRjs7QUFPQTtFQUNFLG1CQUFBO0VBQ0EsZ0JBQUE7QUFKRjs7QUFPQTtFQUNFLHlCQUFBO0VBQ0EsaUJBQUE7RUFDQSxtQkFBQTtFQUNBLGNBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUFKRjs7QUFPQTtFQUNFLFlBQUE7RUFDQSx5QkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0FBSkY7O0FBT0E7RUFDRSxjQUFBO0FBSkY7O0FBT0Esb09BQUE7O0FBQ0E7RUFDRSw2QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFBcUIsZ0RBQUE7RUFDckIsZUFBQTtBQUhGOztBQU1BLGlFQUFBOztBQUNBO0VBQ0Usa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsMEJBQUE7RUFDQSw0QkFBQTtBQUhGOztBQU1BLDhFQUFBOztBQUNBO0VBQ0UsMEJBQUE7QUFIRjs7QUFNQSxxQ0FBQTs7QUFDQTs7RUFFRSxrQkFBQTtFQUNBLFdBQUE7RUFDQSxZQUFBO0VBQ0EsbUNBQUE7RUFBcUMsV0FBQTtFQUNyQywyQkFBQTtBQUZGOztBQUtBLHdEQUFBOztBQUNBO0VBQ0UsdUJBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQSx3QkFBQTs7QUFDQTtFQUNFLHlCQUFBO0VBQ0EsWUFBQTtFQUNBLDBCQUFBO0VBQ0EsbUJBQUE7QUFGRjs7QUFLQTtFQUNFLDRCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7QUFGRjs7QUFLQTtFQUNFLG9CQUFBO0VBQ0EscUJBQUE7RUFDQSw0QkFBQTtFQUNBLGdCQUFBO0FBRkY7O0FBS0E7RUFDRSxpQkFBQTtBQUZGIiwiZmlsZSI6InByb2N1cm8tYWp1ZGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLFxyXG5saSxcclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG5wIHtcclxufVxyXG5cclxuaDQge1xyXG4gIGNvbG9yOiAjM2I1OTk5O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzAwOTY4ODtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4vLyBDYXJkc1xyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYig1MCA1MCA5MyAvIDExJSksIDAgMXB4IDNweCByZ2IoMCAwIDAgLyA4JSk7XHJcbn1cclxuXHJcbi5yb3cgLmhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZmMWVjO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6ICMwMDk2ODg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDZweDtcclxufVxyXG5cclxuLmJhZGdlLXByaW1hcnkge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0b3A6IC0yNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWluZm8ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4vKiBUaGUgZmxpcCBjYXJkIGNvbnRhaW5lciAtIHNldCB0aGUgd2lkdGggYW5kIGhlaWdodCB0byB3aGF0ZXZlciB5b3Ugd2FudC4gV2UgaGF2ZSBhZGRlZCB0aGUgYm9yZGVyIHByb3BlcnR5IHRvIGRlbW9uc3RyYXRlIHRoYXQgdGhlIGZsaXAgaXRzZWxmIGdvZXMgb3V0IG9mIHRoZSBib3ggb24gaG92ZXIgKHJlbW92ZSBwZXJzcGVjdGl2ZSBpZiB5b3UgZG9uJ3Qgd2FudCB0aGUgM0QgZWZmZWN0ICovXHJcbi5mbGlwLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDsgLyogUmVtb3ZlIHRoaXMgaWYgeW91IGRvbid0IHdhbnQgdGhlIDNEIGVmZmVjdCAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLyogVGhpcyBjb250YWluZXIgaXMgbmVlZGVkIHRvIHBvc2l0aW9uIHRoZSBmcm9udCBhbmQgYmFjayBzaWRlICovXHJcbi5mbGlwLWNhcmQtaW5uZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSAwLjhzO1xyXG4gIHRyYW5zZm9ybS1zdHlsZTogcHJlc2VydmUtM2Q7XHJcbn1cclxuXHJcbi8qIERvIGFuIGhvcml6b250YWwgZmxpcCB3aGVuIHlvdSBtb3ZlIHRoZSBtb3VzZSBvdmVyIHRoZSBmbGlwIGJveCBjb250YWluZXIgKi9cclxuLmZsaXAtY2FyZDpob3ZlciAuZmxpcC1jYXJkLWlubmVyIHtcclxuICB0cmFuc2Zvcm06IHJvdGF0ZVkoMTgwZGVnKTtcclxufVxyXG5cclxuLyogUG9zaXRpb24gdGhlIGZyb250IGFuZCBiYWNrIHNpZGUgKi9cclxuLmZsaXAtY2FyZC1mcm9udCxcclxuLmZsaXAtY2FyZC1iYWNrIHtcclxuICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIC13ZWJraXQtYmFja2ZhY2UtdmlzaWJpbGl0eTogaGlkZGVuOyAvKiBTYWZhcmkgKi9cclxuICBiYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47XHJcbn1cclxuXHJcbi8qIFN0eWxlIHRoZSBmcm9udCBzaWRlIChmYWxsYmFjayBpZiBpbWFnZSBpcyBtaXNzaW5nKSAqL1xyXG4uZmxpcC1jYXJkLWZyb250IHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICBjb2xvcjogYmxhY2s7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGJhY2sgc2lkZSAqL1xyXG4uZmxpcC1jYXJkLWJhY2sge1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICMwMDk2ODg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbn1cclxuXHJcbi5jYXJkLWltZy10b3Age1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHggMTBweCAwIDA7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAyMDBweDtcclxufVxyXG5cclxuLnJlc3Vtby1jYXJkIHtcclxuICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAtd2Via2l0LWxpbmUtY2xhbXA6IDQ7XHJcbiAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICBvdmVyZmxvdzogaGlkZGVuO1xyXG59XHJcblxyXG4uY2FyZC10aXRsZXtcclxuICBtYXJnaW4tdG9wOiAtMjVweDtcclxufVxyXG4iXX0= */";

/***/ }),

/***/ 12161:
/*!***************************************************************!*\
  !*** ./src/app/site/quero-ajudar/quero-ajudar.component.scss ***!
  \***************************************************************/
/***/ (function(module) {

"use strict";
module.exports = "p,\nli,\nlabel {\n  font-size: 1.2rem;\n}\n\nh4 {\n  color: #3b5999;\n}\n\na {\n  color: #009688;\n  font-weight: 400;\n}\n\n.card {\n  position: relative;\n  text-align: center;\n  margin: 5px;\n}\n\n.card:hover {\n  cursor: pointer;\n  box-shadow: 0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08);\n}\n\n.row .header {\n  margin-bottom: 10px;\n  margin-top: 20px;\n}\n\n.header {\n  background-color: #b6f1ec;\n  font-size: larger;\n  border-radius: 10px;\n  color: #009688;\n  text-align: center;\n  padding: 6px;\n}\n\n.badge-primary {\n  color: white;\n  background-color: darkred;\n  cursor: pointer;\n  top: -25px;\n  position: relative;\n  width: 100%;\n}\n\n.btn-outline-info {\n  margin: 0 auto;\n}\n\n/* The flip card container - set the width and height to whatever you want. We have added the border property to demonstrate that the flip itself goes out of the box on hover (remove perspective if you don't want the 3D effect */\n\n.flip-card {\n  background-color: transparent;\n  width: 100%;\n  height: 300px;\n  perspective: 1000px;\n  /* Remove this if you don't want the 3D effect */\n}\n\n/* This container is needed to position the front and back side */\n\n.flip-card-inner {\n  position: relative;\n  width: 100%;\n  height: 100%;\n  text-align: center;\n  transition: transform 0.8s;\n  transform-style: preserve-3d;\n}\n\n/* Do an horizontal flip when you move the mouse over the flip box container */\n\n.flip-card:hover .flip-card-inner {\n  transform: rotateY(180deg);\n}\n\n/* Position the front and back side */\n\n.flip-card-front,\n.flip-card-back {\n  position: absolute;\n  width: 100%;\n  height: 100%;\n  -webkit-backface-visibility: hidden;\n  /* Safari */\n  backface-visibility: hidden;\n}\n\n/* Style the front side (fallback if image is missing) */\n\n.flip-card-front {\n  background-color: white;\n  color: black;\n  border-radius: 10px;\n}\n\n/* Style the back side */\n\n.flip-card-back {\n  background-color: #009688;\n  color: white;\n  transform: rotateY(180deg);\n  border-radius: 10px;\n}\n\n.card-img-top {\n  border-radius: 10px 10px 0 0;\n  width: 100%;\n  height: 200px;\n}\n\n.resumo-card {\n  display: -webkit-box;\n  -webkit-line-clamp: 4;\n  -webkit-box-orient: vertical;\n  overflow: hidden;\n}\n\n.card-title {\n  margin-top: -25px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInF1ZXJvLWFqdWRhci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0VBR0UsaUJBQUE7QUFDRjs7QUFLQTtFQUNFLGNBQUE7QUFGRjs7QUFLQTtFQUNFLGNBQUE7RUFDQSxnQkFBQTtBQUZGOztBQU9BO0VBQ0Usa0JBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFKRjs7QUFPQTtFQUNFLGVBQUE7RUFDQSwyRUFBQTtBQUpGOztBQU9BO0VBQ0UsbUJBQUE7RUFDQSxnQkFBQTtBQUpGOztBQU9BO0VBQ0UseUJBQUE7RUFDQSxpQkFBQTtFQUNBLG1CQUFBO0VBQ0EsY0FBQTtFQUNBLGtCQUFBO0VBQ0EsWUFBQTtBQUpGOztBQU9BO0VBQ0UsWUFBQTtFQUNBLHlCQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7QUFKRjs7QUFPQTtFQUNFLGNBQUE7QUFKRjs7QUFPQSxvT0FBQTs7QUFDQTtFQUNFLDZCQUFBO0VBQ0EsV0FBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUFxQixnREFBQTtBQUh2Qjs7QUFNQSxpRUFBQTs7QUFDQTtFQUNFLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLDBCQUFBO0VBQ0EsNEJBQUE7QUFIRjs7QUFNQSw4RUFBQTs7QUFDQTtFQUNFLDBCQUFBO0FBSEY7O0FBTUEscUNBQUE7O0FBQ0E7O0VBRUUsa0JBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLG1DQUFBO0VBQXFDLFdBQUE7RUFDckMsMkJBQUE7QUFGRjs7QUFLQSx3REFBQTs7QUFDQTtFQUNFLHVCQUFBO0VBQ0EsWUFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0Esd0JBQUE7O0FBQ0E7RUFDRSx5QkFBQTtFQUNBLFlBQUE7RUFDQSwwQkFBQTtFQUNBLG1CQUFBO0FBRkY7O0FBS0E7RUFDRSw0QkFBQTtFQUNBLFdBQUE7RUFDQSxhQUFBO0FBRkY7O0FBS0E7RUFDRSxvQkFBQTtFQUNBLHFCQUFBO0VBQ0EsNEJBQUE7RUFDQSxnQkFBQTtBQUZGOztBQUtBO0VBQ0UsaUJBQUE7QUFGRiIsImZpbGUiOiJxdWVyby1hanVkYXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJwLFxyXG5saSxcclxubGFiZWwge1xyXG4gIGZvbnQtc2l6ZTogMS4ycmVtO1xyXG59XHJcblxyXG5wIHtcclxufVxyXG5cclxuaDQge1xyXG4gIGNvbG9yOiAjM2I1OTk5O1xyXG59XHJcblxyXG5hIHtcclxuICBjb2xvcjogIzAwOTY4ODtcclxuICBmb250LXdlaWdodDogNDAwO1xyXG59XHJcblxyXG4vLyBDYXJkc1xyXG5cclxuLmNhcmQge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgbWFyZ2luOiA1cHg7XHJcbn1cclxuXHJcbi5jYXJkOmhvdmVyIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgYm94LXNoYWRvdzogMCA0cHggNnB4IHJnYig1MCA1MCA5MyAvIDExJSksIDAgMXB4IDNweCByZ2IoMCAwIDAgLyA4JSk7XHJcbn1cclxuXHJcbi5yb3cgLmhlYWRlciB7XHJcbiAgbWFyZ2luLWJvdHRvbTogMTBweDtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG59XHJcblxyXG4uaGVhZGVyIHtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjYjZmMWVjO1xyXG4gIGZvbnQtc2l6ZTogbGFyZ2VyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgY29sb3I6ICMwMDk2ODg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIHBhZGRpbmc6IDZweDtcclxufVxyXG5cclxuLmJhZGdlLXByaW1hcnkge1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiBkYXJrcmVkO1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICB0b3A6IC0yNXB4O1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB3aWR0aDogMTAwJTtcclxufVxyXG5cclxuLmJ0bi1vdXRsaW5lLWluZm8ge1xyXG4gIG1hcmdpbjogMCBhdXRvO1xyXG59XHJcblxyXG4vKiBUaGUgZmxpcCBjYXJkIGNvbnRhaW5lciAtIHNldCB0aGUgd2lkdGggYW5kIGhlaWdodCB0byB3aGF0ZXZlciB5b3Ugd2FudC4gV2UgaGF2ZSBhZGRlZCB0aGUgYm9yZGVyIHByb3BlcnR5IHRvIGRlbW9uc3RyYXRlIHRoYXQgdGhlIGZsaXAgaXRzZWxmIGdvZXMgb3V0IG9mIHRoZSBib3ggb24gaG92ZXIgKHJlbW92ZSBwZXJzcGVjdGl2ZSBpZiB5b3UgZG9uJ3Qgd2FudCB0aGUgM0QgZWZmZWN0ICovXHJcbi5mbGlwLWNhcmQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMzAwcHg7XHJcbiAgcGVyc3BlY3RpdmU6IDEwMDBweDsgLyogUmVtb3ZlIHRoaXMgaWYgeW91IGRvbid0IHdhbnQgdGhlIDNEIGVmZmVjdCAqL1xyXG59XHJcblxyXG4vKiBUaGlzIGNvbnRhaW5lciBpcyBuZWVkZWQgdG8gcG9zaXRpb24gdGhlIGZyb250IGFuZCBiYWNrIHNpZGUgKi9cclxuLmZsaXAtY2FyZC1pbm5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwJTtcclxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIDAuOHM7XHJcbiAgdHJhbnNmb3JtLXN0eWxlOiBwcmVzZXJ2ZS0zZDtcclxufVxyXG5cclxuLyogRG8gYW4gaG9yaXpvbnRhbCBmbGlwIHdoZW4geW91IG1vdmUgdGhlIG1vdXNlIG92ZXIgdGhlIGZsaXAgYm94IGNvbnRhaW5lciAqL1xyXG4uZmxpcC1jYXJkOmhvdmVyIC5mbGlwLWNhcmQtaW5uZXIge1xyXG4gIHRyYW5zZm9ybTogcm90YXRlWSgxODBkZWcpO1xyXG59XHJcblxyXG4vKiBQb3NpdGlvbiB0aGUgZnJvbnQgYW5kIGJhY2sgc2lkZSAqL1xyXG4uZmxpcC1jYXJkLWZyb250LFxyXG4uZmxpcC1jYXJkLWJhY2sge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbiAgLXdlYmtpdC1iYWNrZmFjZS12aXNpYmlsaXR5OiBoaWRkZW47IC8qIFNhZmFyaSAqL1xyXG4gIGJhY2tmYWNlLXZpc2liaWxpdHk6IGhpZGRlbjtcclxufVxyXG5cclxuLyogU3R5bGUgdGhlIGZyb250IHNpZGUgKGZhbGxiYWNrIGlmIGltYWdlIGlzIG1pc3NpbmcpICovXHJcbi5mbGlwLWNhcmQtZnJvbnQge1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gIGNvbG9yOiBibGFjaztcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG59XHJcblxyXG4vKiBTdHlsZSB0aGUgYmFjayBzaWRlICovXHJcbi5mbGlwLWNhcmQtYmFjayB7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogIzAwOTY4ODtcclxuICBjb2xvcjogd2hpdGU7XHJcbiAgdHJhbnNmb3JtOiByb3RhdGVZKDE4MGRlZyk7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuLmNhcmQtaW1nLXRvcCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMTBweCAxMHB4IDAgMDtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IDIwMHB4O1xyXG59XHJcblxyXG4ucmVzdW1vLWNhcmQge1xyXG4gIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gIC13ZWJraXQtbGluZS1jbGFtcDogNDtcclxuICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxle1xyXG4gIG1hcmdpbi10b3A6IC0yNXB4O1xyXG59XHJcbiJdfQ== */";

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendor"], function() { return __webpack_exec__(14431); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main-es2015.js.map