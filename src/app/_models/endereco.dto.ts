import { BaseDTO } from "./base.dto";

export class EnderecoDTO extends BaseDTO {
    logradouro: string;
    bairro: string;
    cidade: string;
    complemento: string;
    cep: string;
}