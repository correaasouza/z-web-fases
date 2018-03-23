import { Processo } from "./Processo";

export class GrupoProcesso {
  id: number;
  grupofasespadroesId: number;
  origemTipo: number;
  origemId: number;
  descricao: string;
  processos: Processo[];
}
