import { Link } from '@material-ui/core'
import styled from 'styled-components'

import Icon from '../../components/Icon'

export const Content = styled.div`
  flex-grow: 1;
  margin: 0 auto;
  ${(props) => props.theme.breakpoints.up('xs')} {
    flex-grow: initial;
    width: calc(100% - 32px);
    margin: 0 auto;
  }
  ${(props) => props.theme.breakpoints.up('sm')} {
    flex-grow: initial;
    width: calc(100% - 64px);
    margin: 0 auto;
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    flex-grow: initial;
    width: calc(100% - 128px);
    margin: 0 auto;
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    flex-grow: initial;
    width: 1248px;
    margin: 0 auto;
  }
`

export const Title = styled.h1`
  ${(props) => ({ ...props.theme.typography.h1 })}
  color: ${(props) => props.theme.palette.colors.midnightBlue};
  margin: 5vh 0 0.5rem 0;
  text-align: center;
`

export const Text = styled.p`
  ${(props) => ({ ...props.theme.typography.mediumRegular })}
  color: ${(props) => props.theme.palette.colors.chambray};
  margin: 1rem 0 1rem 0;
`

export const IconContainer = styled(Icon)``

export const ContainerFilter = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  gap: 2rem;
  align-items: center;
`

export const InputSearch = styled.input`
  width: 280px;
  height: 40px;
  border: 1px solid ${(props) => props.theme.palette.colors.whiteSmoke};
  border-radius: 4px;
  padding: 0 1rem;
  ${(props) => ({ ...props.theme.typography.mediumRegular })}
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: flex-start;
  flex-wrap: wrap;
  gap: 1rem;
  margin: 5vh 0;
`
export const ContainerLoading = styled.div`
  display: flex;
  width: 100%;
  height: 90vh;
  justify-content: center;
  align-items: center;
`

export const Loading = styled.div`
  :before {
    content: '';
    display: block;
    height: 50px;
    width: 50px;
    -webkit-animation: spin 0.5s infinite linear;
    animation: spin 0.5s infinite linear;
    border: 6px ${(props) => props.theme.palette.colors.whiteSmoke} solid;
    border-left-color: ${(props) => props.theme.palette.colors.midnightBlue};
    border-radius: 100%;
  }
  @-webkit-keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
  @keyframes spin {
    to {
      -webkit-transform: rotate(360deg);
      transform: rotate(360deg);
    }
  }
`
export const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  cursor: pointer;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
`

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`

export const MuiLink = styled(Link)`
  text-decoration: none;
  height: 100%;
  color: ${(props) => props.theme.palette.colors.midnightBlue};
  &:hover {
    text-decoration: underline;
  }
  ${(props) => props.theme.breakpoints.up('xs')} {
    width: calc((100% / 2) - 1rem);
  }
  ${(props) => props.theme.breakpoints.up('sm')} {
    width: calc((100% / 2) - 1rem);
  }
  ${(props) => props.theme.breakpoints.up('md')} {
    width: calc((100% / 3) - 1rem);
  }
  ${(props) => props.theme.breakpoints.up('lg')} {
    width: calc((100% / 4) - 1rem);
  }
  ${(props) => props.theme.breakpoints.up('xl')} {
    width: calc((100% / 4) - 1rem);
  }
  flex-grow: initial;
  margin: 0;
`
