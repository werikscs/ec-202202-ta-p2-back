import Atividade from './atividade'
import Recurso from './recurso'

export default class AtividadeRecurso {
  constructor(
    readonly id: string,
    readonly atividade: Atividade,
    readonly recurso: Recurso,
    readonly obs: string,
  ) {}
}
