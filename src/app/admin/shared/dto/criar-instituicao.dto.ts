import { RepresentanteDTO } from './criar-representante.dto';
import { EnderecoDTO } from './criar-endereco.dto';
export class InstituicaoDTO {

    nome: string;
    telefone: number;
    email: string;
    tipoEmpresa:string; //
    cnpj: string;
    dtFundacao: Date;
    crp: string;
    servico: string;
    especialidade: string;
    publicoAlvo: string;
    twitter: string;
    instagram: string;
    pinterest: string;
    facebook: string;
    linkedin: string;
    site: string;
    objetivo: string;
    historia: string;
    endereco: EnderecoDTO = new EnderecoDTO();
    representantes: RepresentanteDTO[] = [];

    //Checks de confirmacao
    check1:boolean;
    check2:boolean;
    check3:boolean;
    check4:boolean;

    //Imagens
    logo:any;
    imagens:any[];

    /**
     *
     */
    constructor() {
        //Inicializa instituicao com 2 representantes
        this.representantes.push(new RepresentanteDTO());
        this.representantes.push(new RepresentanteDTO());        
    }
}