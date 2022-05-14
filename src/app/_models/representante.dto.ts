import { InstituicaoDTO } from "./instituicao.dto";

export class RepresentanteDTO {
    nome: string;
    cpf: string;
    telefone: string;
    instituicao: InstituicaoDTO = new InstituicaoDTO();
}