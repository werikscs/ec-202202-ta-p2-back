export class Projeto {
  constructor(
    readonly id: string,
    readonly titulo: string,
    readonly dataInicio: Date,
    readonly dataTermino: Date,
    readonly centroCusto: number,
    readonly planejado: number,
    readonly realizado: number,
    readonly reservaGerencial: number,
    readonly reservaRiscos: number,
    readonly valorBeneficio: number,
    readonly justificativa: string,
    readonly estado: EstadoProjeto,
  ) {}
}

export enum EstadoProjeto {
  NAO_INICIADO,
  INICIADO,
  CANCELADO,
  ENCERRADO,
}
