import React, { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { RouteComponentProps, useParams } from 'react-router-dom'

import { useTypedSelector } from '../../redux/store'
import PlanetDetailTemplate, { PlanetDetailTemplateProps } from '../../templates/PlanetDetail'

const DetailPage: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation('planetDetail')
  const planet = useTypedSelector((state) => state.app.planet)
  const dispatch = useDispatch()

  const { id } = useParams<{ id: string }>()

  useEffect(() => {
    dispatch({ type: 'app/setPlanet', payload: id })
  }, [dispatch, id])

  const templateProps: PlanetDetailTemplateProps = useMemo(
    () => ({
      title: t('title', { planetName: `${planet?.name}` }),
      semimajorAxis: t('semimajorAxis'),
      perihelion: t('perihelion'),
      aphelion: t('aphelion'),
      eccentricity: t('eccentricity'),
      inclination: t('inclination'),
      meanRadius: t('meanRadius'),
      flattening: t('flattening'),
      mass: t('mass'),
      volume: t('volume'),
      density: t('density'),
      gravity: t('gravity'),
      avgTemp: t('avgTemp'),
      englishName: t('englishName'),
      lunes: t('lunes'),
      backToHome: t('backToHome'),
      data: planet,
    }),
    [t, planet]
  )

  return <PlanetDetailTemplate {...templateProps} />
}

export default DetailPage
