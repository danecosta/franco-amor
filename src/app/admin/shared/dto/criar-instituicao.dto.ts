import { CriarRepresentanteDTO } from './criar-representante.dto';
import { CriarEnderecoDTO } from './criar-endereco.dto';
export class CriarInstituicaoDTO {

    nome: string;
    telefone: number;
    email: string;
    cnpj: string;
    dtFundacao: Date;
    crp: string;
    servico: string;
    especialidade: string;
    publicoAlvo: string;
    twitter: string;
    pinterest: string;
    linkedin: string;
    site: string;
    facebook: string;
    instagram: string;
    objetivo: string;
    historia: string;
    endereco = new CriarEnderecoDTO();
    representantes: CriarRepresentanteDTO[] = [];
    tipoEmpresa: string;

}