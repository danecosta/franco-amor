import { BaseDTO } from "./base.dto";
import { HoraAtendimentoDTO } from "./horario-atendimento.dto";
import { InstituicaoDTO } from "./instituicao.dto";

export class AtendimentoVirtualDTO extends BaseDTO{
    nome: string;
    enderecoVirtual: string;
    tipo: string;
    valor: string;
    quantidadeAtendentes: number;
    quantidadeAtendimentosMensais: number;
    observacao: string;
    instituicao: InstituicaoDTO = new InstituicaoDTO();
    horaAtendimento: HoraAtendimentoDTO[] = [];
}