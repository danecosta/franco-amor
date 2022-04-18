import { CriarHoraAtendimentoDTO } from './criar-horario-atendimento.dto';
import { CriarEnderecoDTO } from './criar-endereco.dto';

export class CriarEventoDTO {
  nome: string;

  resumo: string;

  valor: number;

  qtdAtendentes: number;

  qtdAtendentimentosMensais: number;

  observacao: string;

  dtInicio: Date;

  dtFim: Date;

  endereco: CriarEnderecoDTO = new CriarEnderecoDTO();

  instituicaoId: number;

  enderecoId: number;

  agendar: string;

  participacao: string;

  horariosAtendimento: CriarHoraAtendimentoDTO[] = [];

}