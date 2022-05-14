import { BaseDTO } from "./base.dto";
import { EnderecoDTO } from "./endereco.dto";
import { HoraAtendimentoDTO } from "./horario-atendimento.dto";
import { InstituicaoDTO } from "./instituicao.dto";

export class AtendimentoPresencialDTO extends BaseDTO {
    nome: string;
    tipo: string;
    participacao: string;
    valor: number;
    quantidadeAtendentes: number;
    quantidadeAtendimentosMensais: number;
    observacao: string;
    instituicao: InstituicaoDTO = new InstituicaoDTO();
    horaAtendimento: HoraAtendimentoDTO[] = [];
    endereco: EnderecoDTO = new EnderecoDTO();
}