export function formatState(name: string) {
  const states: { [key: string]: string } = {
    'Rio Grande do Sul': 'RS',
    'Santa Catarina': 'SC',
    'São Paulo': 'SP',
    'Rio de Janeiro': 'RJ',
    'Espírito Santo': 'ES',
    'Minas Gerais': 'MG',
  }

  return states[name]
}
