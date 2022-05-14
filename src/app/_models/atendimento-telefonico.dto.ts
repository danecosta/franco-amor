import { BaseDTO } from "./base.dto";
import { HoraAtendimentoDTO } from "./horario-atendimento.dto";
import { InstituicaoDTO } from "./instituicao.dto";

export class AtendimentoTelefonicoDTO extends BaseDTO {
    nome: string;
    telefone: string;
    abrangencia: string;
    quantidadeAtendentes: number;
    quantidadeAtendimentosMensais: number;
    observacao: string;
    instituicao: InstituicaoDTO = new InstituicaoDTO();
    horaAtendimento: HoraAtendimentoDTO[] = [];
}