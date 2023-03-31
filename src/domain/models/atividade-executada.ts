import Atividade from './atividade'

export default class AtividadExecutada {
  constructor(
    readonly id: string,
    readonly atividade: Atividade,
    readonly dataHoraInicio: Date,
    readonly dataHoraTermino: Date,
    readonly percentualAgregado: number,
    readonly estado: EstadoAtividadeExecutada,
    readonly obs: string,
  ) {}
}

enum EstadoAtividadeExecutada {
  NAO_INICIADA,
  INICIADA,
  EM_EXECUCAO,
  FINALIZADA,
  CANCELADA,
}
