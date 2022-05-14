import { BaseDTO } from "./base.dto";

export class ProdutoDTO extends BaseDTO {
  nome: string;
  descricao: string;
  valor: number;
  estoque: number;
}