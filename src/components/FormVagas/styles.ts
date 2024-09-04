import styled from 'styled-components'

import TemaCores from '../../theme'

export const Formulario = styled.form`
  display: grid;
  grid-template-columns: 1fr auto;
  background-color: ${TemaCores.corSec};
  padding: 32px;
  border-radius: 12px;
  margin-top: 40px;
`

export const BotaoPesq = styled.button`
  background-color: ${TemaCores.corPrincipal};
  border: 1px solid ${TemaCores.corPrincipal};
  height: 40px;
  padding: 0 16px;
  font-size: 18px;
  color: ${TemaCores.corSec};
  margin-left: 8px;
  cursor: pointer;
`

export const Fields = styled.input`
  padding: 0 16px;
  outline-color: ${TemaCores.corPrincipal};
`
