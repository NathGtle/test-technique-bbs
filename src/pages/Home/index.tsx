import React, { useEffect, useMemo } from 'react'
import { useTranslation } from 'react-i18next'
import { useDispatch } from 'react-redux'
import { RouteComponentProps } from 'react-router-dom'

import { fetchPlanets } from '../../redux/app/redux'
import { useTypedSelector } from '../../redux/store'
import HomeTemplate, { HomeTemplateProps } from '../../templates/Home'

const HomePage: React.FC<RouteComponentProps> = () => {
  const { t } = useTranslation()
  const planets = useTypedSelector((state) => state.app.planets)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPlanets())
  }, [dispatch])

  const templateProps: HomeTemplateProps = useMemo(
    () => ({
      title: t('title'),
      filterTitle: t('filterTitle'),
      data: planets,
    }),
    [t, planets]
  )

  return <HomeTemplate {...templateProps} />
}

export default HomePage
