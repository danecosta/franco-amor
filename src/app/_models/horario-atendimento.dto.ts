import { AtendimentoPresencialDTO } from "./atendimento-presencial.dto";
import { AtendimentoTelefonicoDTO } from "./atendimento-telefonico.dto";
import { AtendimentoVirtualDTO } from "./atendimento-virtual.dto";
import { BaseDTO } from "./base.dto";
import { EventoDTO } from "./evento.dto";

export class HoraAtendimentoDTO extends BaseDTO {
    dataInicio: Date;
    dataFim: Date;
    diaSemana: string;
    horaInicio: string;
    horaFim: string;
    atendimentoPresencial: AtendimentoPresencialDTO;
    atendimentoVirtual: AtendimentoVirtualDTO;
    atendimentoTelefonico: AtendimentoTelefonicoDTO;
    evento: EventoDTO;
}