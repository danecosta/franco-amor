import { BaseDTO } from "./base.dto";

export class PostagemDTO extends BaseDTO {

    titulo: string;
    autor: string;
    linkAutor: string;
    categoriaID: number;
    conteudo: string;
}