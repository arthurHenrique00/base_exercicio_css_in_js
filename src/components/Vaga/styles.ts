import styled from 'styled-components'

import TemaCores from '../../theme'

export const Vaga2 = styled.li`
  border: 1px solid ${TemaCores.corPrincipal};
  background-color: ${TemaCores.corSec};
  color: ${TemaCores.corPrincipal};
  padding: 16px;
  transition: background-color 0.3s;
  border-radius: 8px;
`

export const VagaTit = styled.h3`
  font-weight: bold;
  margin-bottom: 16px;
`

export const VagaLink = styled.a`
   {
    border-color: ${TemaCores.corSec};
    background-color: ${TemaCores.corPrincipal};
    color: ${TemaCores.corSec};
    display: inline-block;
    padding: 8px 16px;
    text-decoration: none;
    margin-top: 16px;
    font-weight: bold;
    font-size: 14px;
    border-radius: 8px;
    text-align: center;
    transition: background-color 0.3s;

    @media (max-width: 768px) {
      display: block;
    }
  }

  &:hover {
    background-color: ${TemaCores.corPrincipal};
    color: ${TemaCores.corSec};
  }

  &:hover a {
    border-color: ${TemaCores.corPrincipal};
    background-color: ${TemaCores.corSec};
    color: ${TemaCores.corPrincipal};
  }
`
