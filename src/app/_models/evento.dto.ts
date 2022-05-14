import { BaseDTO } from './base.dto';
import { EnderecoDTO } from './endereco.dto';
import { HoraAtendimentoDTO } from './horario-atendimento.dto';
import { InstituicaoDTO } from './instituicao.dto';

export class EventoDTO extends BaseDTO {
  nome: string;
  resumo: string;
  valor: number;
  qtdAtendentes: number;
  qtdAtendentimentosMensais: number;
  observacao: string;
  dtInicio: Date;
  dtFim: Date;
  endereco: EnderecoDTO = new EnderecoDTO();
  instituicao: InstituicaoDTO = new InstituicaoDTO();
  horaAtendimento: HoraAtendimentoDTO[] = [];

  participacao: string;//
}