export default class Recurso {
  constructor(
    readonly id: string,
    readonly nome: string,
    readonly custo: number,
    readonly tipo: string,
    readonly unidade: UnidadeRecurso,
  ) {}
}

enum UnidadeRecurso {
  HORA,
  DIA,
  MES,
  USO,
}
