import React, { FC } from 'react'

import { Icons } from '../../components/Icon/types'
import { Planet } from '../../redux/app/types/actions'

import * as SC from './styled'

export type PlanetDetailTemplateProps = {
  className?: string
  title?: string
  filterTitle?: string
  data?: Planet
  semimajorAxis?: string
  perihelion?: string
  aphelion?: string
  eccentricity?: string
  inclination?: string
  meanRadius?: string
  flattening?: string
  mass?: string
  volume?: string
  density?: string
  gravity?: string
  avgTemp?: string
  englishName?: string
  lunes?: string
  backToHome?: string
}

const PlanetDetailTemplate: FC<PlanetDetailTemplateProps> = (props) => {
  const {
    title,
    data,
    semimajorAxis,
    perihelion,
    aphelion,
    eccentricity,
    inclination,
    meanRadius,
    flattening,
    mass,
    volume,
    density,
    gravity,
    avgTemp,
    englishName,
    lunes,
    backToHome,
  } = props

  return (
    <SC.Content>
      <SC.Title>{title}</SC.Title>
      <SC.MuiLink href="/">
        <SC.IconContainer icon={Icons.longArrowLeft} />
        <SC.Text>{backToHome}</SC.Text>
      </SC.MuiLink>
      <SC.Container>
        <SC.Image src={data?.image} alt={data?.name} width={400} />
        <SC.ListContainer width={'300px'}>
          <tbody>
            <tr>
              <SC.ListItem>{semimajorAxis}</SC.ListItem>
              <SC.ListItem>{data?.semimajorAxis} km</SC.ListItem>
            </tr>
            <tr>
              <SC.ListItem>{perihelion}</SC.ListItem>
              <SC.ListItem>{data?.perihelion} km</SC.ListItem>
            </tr>
            <tr>
              <SC.ListItem>{aphelion}</SC.ListItem>
              <SC.ListItem>{data?.aphelion} km</SC.ListItem>
            </tr>
            <tr>
              <SC.ListItem>{eccentricity}</SC.ListItem>
              <SC.ListItem>{data?.eccentricity}</SC.ListItem>
            </tr>
            <tr>
              <SC.ListItem>{inclination}</SC.ListItem>
              <SC.ListItem>{data?.inclination}°</SC.ListItem>
            </tr>
            <tr>
              <SC.ListItem>{meanRadius}</SC.ListItem>
              <SC.ListItem>{data?.meanRadius} km</SC.ListItem>
            </tr>
            <tr>
              <SC.ListItem>{flattening}</SC.ListItem>
              <SC.ListItem>{data?.flattening}</SC.ListItem>
            </tr>
            <tr>
              <SC.ListItem>{mass}</SC.ListItem>
              <SC.ListItem>
                {data?.mass.massValue}x10<sup>{data?.mass.massExponent}</sup>
              </SC.ListItem>
            </tr>
            <tr>
              <SC.ListItem>{volume}</SC.ListItem>
              <SC.ListItem>
                {data?.vol.volValue}x10<sup>{data?.vol.volExponent}</sup>
                &nbsp;km<sup>3</sup>
              </SC.ListItem>
            </tr>
            <tr>
              <SC.ListItem>{density}</SC.ListItem>
              <SC.ListItem>
                {data?.density} g/cm<sup>3</sup>
              </SC.ListItem>
            </tr>
            <tr>
              <SC.ListItem>{gravity}</SC.ListItem>
              <SC.ListItem>
                {data?.gravity} m/s<sup>2</sup>
              </SC.ListItem>
            </tr>
            <tr>
              <SC.ListItem>{avgTemp}</SC.ListItem>
              <SC.ListItem>{data?.avgTemp} °C</SC.ListItem>
            </tr>
            <tr>
              <SC.ListItem>{englishName}</SC.ListItem>
              <SC.ListItem>{data?.englishName}</SC.ListItem>
            </tr>
          </tbody>
        </SC.ListContainer>
        {data?.moons && (
          <SC.ListContainer width={'200px'}>
            <SC.CaptionItem>
              <SC.Text style={{ color: 'white' }}>{lunes}</SC.Text>
            </SC.CaptionItem>
            <tbody>
              {data?.moons.map((moon) => (
                <tr key={moon.moon}>
                  <SC.ListItem>{moon.moon}</SC.ListItem>
                </tr>
              ))}
            </tbody>
          </SC.ListContainer>
        )}
      </SC.Container>
    </SC.Content>
  )
}

export default PlanetDetailTemplate
