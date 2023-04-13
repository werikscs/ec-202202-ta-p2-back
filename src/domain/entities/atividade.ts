import PacoteTrabalho from './pacote-trabalho'
import Projeto from './projeto'

export default class Atividade {
  constructor(
    readonly id: string,
    readonly projeto: Projeto,
    readonly pacoteTrabalho: PacoteTrabalho,
    readonly title: string,
    readonly tempoHorasUteis: number,
    readonly inicio: Date,
    readonly orientacoes: string,
  ) {}
}
