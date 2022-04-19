import { CriarHoraAtendimentoDTO } from './criar-horario-atendimento.dto';
import { EnderecoDTO } from './criar-endereco.dto';

export class CriarEventoDTO {
  nome: string;

  resumo: string;

  valor: number;

  qtdAtendentes: number;

  qtdAtendentimentosMensais: number;

  observacao: string;

  dtInicio: Date;

  dtFim: Date;

  endereco: EnderecoDTO = new EnderecoDTO();

  instituicaoId: number;

  enderecoId: number;

  agendar: string;

  participacao: string;

  horariosAtendimento: CriarHoraAtendimentoDTO[] = [];

}