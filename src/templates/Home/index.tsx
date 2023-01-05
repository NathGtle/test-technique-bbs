import React, { FC } from 'react'
import { useDispatch } from 'react-redux'

import * as SC from './styled'

export type HomeTemplateProps = {
  className?: string
  title?: string
  filterTitle?: string
  data?: any
}

const HomeTemplate: FC<HomeTemplateProps> = (props) => {
  const { title, data, filterTitle } = props

  const dispatch = useDispatch()

  const search = (value: string) =>
    dispatch({ type: 'app/searchPlanet', payload: value.toLowerCase() })

  return (
    <SC.Content>
      <SC.Title>{title}</SC.Title>
      {data.loading && (
        <SC.ContainerLoading>
          <SC.Loading />
        </SC.ContainerLoading>
      )}
      <SC.Container>
        <SC.ContainerFilter>
          <SC.Text>{filterTitle}</SC.Text>
          <SC.InputSearch
            type="text"
            placeholder="Search"
            onChange={(e) => search(e.target.value)}
          />
        </SC.ContainerFilter>

        {!data.loading && data.length
          ? data.map((planet: any) => (
              <SC.MuiLink href={`/planet/${planet.id}`} key={planet.id}>
                <SC.Card>
                  <SC.Image src={planet.image} alt={planet.name} />
                  <SC.Text>{planet.name}</SC.Text>
                </SC.Card>
              </SC.MuiLink>
            ))
          : null}
      </SC.Container>
    </SC.Content>
  )
}

export default HomeTemplate
