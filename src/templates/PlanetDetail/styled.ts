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

export const IconContainer = styled(Icon)`
  width: 24px;
`

export const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  flex-wrap: wrap;
  margin: 0;
`

export const Image = styled.img`
  ${(props) => props.theme.breakpoints.down('xs')} {
    width: 100%;
  }
  width: ${(props) => props.width}px;
  height: 100%;
  object-fit: cover;
  margin-top: 3vh;
`

export const ListContainer = styled.table`
  ${(props) => props.theme.breakpoints.down('xs')} {
    width: 100%;
  }
  height: 100%;
  width: ${(props) => props.width};
  border-collapse: collapse;
  margin-top: 3vh;
`
export const ListItem = styled.td`
  border: 1px solid black;
  padding: 5px;
  vertical-align: top;
`
export const CaptionItem = styled.caption`
  height: 30px;
  background-color: ${(props) => props.theme.palette.colors.midnightBlue};
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid ${(props) => props.theme.palette.colors.midnightBlue};
  color: ${(props) => props.theme.palette.colors.whiteSmoke};
`

export const MuiLink = styled(Link)`
  text-decoration: none;
  width: 150px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
  color: ${(props) => props.theme.palette.colors.midnightBlue};
  &:hover {
    text-decoration: underline;
  }
  flex-grow: initial;
  margin: 0;
`
