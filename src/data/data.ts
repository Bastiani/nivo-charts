import { BarDatum } from '@nivo/bar'

const TEXTS = {
  commissionReceived: 'Recebida',
  commissionToReceive: 'A receber'
}

export const COMMISSION_CHART_MOCKED_DATA: BarDatum[] = [
  {
    month: 'Jun/23',
    [TEXTS.commissionReceived]: 134000,
    [TEXTS.commissionToReceive]: 0
  },
  {
    month: 'Jul/23',
    [TEXTS.commissionReceived]: 98000,
    [TEXTS.commissionToReceive]: 0
  },
  {
    month: 'Ago/23',
    [TEXTS.commissionReceived]: 171000,
    [TEXTS.commissionToReceive]: 0
  },
  {
    month: 'Set/23',
    [TEXTS.commissionReceived]: 134000,
    [TEXTS.commissionToReceive]: 0
  },
  {
    month: 'Out/23',
    [TEXTS.commissionReceived]: 134000,
    [TEXTS.commissionToReceive]: 0
  },
  {
    month: 'Nov/23',
    [TEXTS.commissionReceived]: 98000,
    [TEXTS.commissionToReceive]: 0
  },
  {
    month: 'Dez/23',
    [TEXTS.commissionReceived]: 33000,
    [TEXTS.commissionToReceive]: 25000
  },
  {
    month: 'Jan/24',
    [TEXTS.commissionReceived]: 0,
    [TEXTS.commissionToReceive]: 20000
  }
]
