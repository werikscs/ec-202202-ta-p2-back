import { Projeto } from './projeto'

export default class PacoteTrabalho {
  constructor(
    readonly id: string,
    readonly projeto: Projeto,
    readonly titulo: string,
    readonly descricao: string,
    readonly valorBeneficioEstimado: number,
  ) {}
}
