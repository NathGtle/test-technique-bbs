import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'

import { THEMES } from '../../constants'
import type { RootState } from '../store'

import { actionTypes } from './types'
import { Planet, imgPlanet } from './types/actions'

type AppState = {
  isInit: boolean
  theme: string
  loading: boolean
  planets: Planet[]
  error: string
  savePlanets: Planet[]
  planet: Planet | undefined
}

//
// Initial state
//

const Image_Planet: imgPlanet = {
  uranus: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Uranus2.jpg/280px-uranus.jpg',
  neptune:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/0/06/Neptune.jpg/280px-Neptune.jpg',
  saturne:
    'https://static.nationalgeographic.fr/files/styles/image_3200/public/0101-cassini-gallery-crash_0.jpg?w=280&h=280',
  jupiter:
    'https://cdn.futura-sciences.com/buildsv6/images/largeoriginal/7/8/6/786ac067fe_50034570_jovian-160307a-02.jpg',
  terre:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/The_Blue_Marble_%28remastered%29.jpg/280px-The_Blue_Marble_%28remastered%29.jpg',
  mars:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Mars_Valles_Marineris_EDIT.jpg/280px-Mars_Valles_Marineris_EDIT.jpg',
  venus: 'https://upload.wikimedia.org/wikipedia/commons/e/e5/Venus-real_color.jpg',
  mercure:
    'https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Mercury_in_color_-_Prockter07_centered.jpg/280px-Mercury_in_color_-_Prockter07_centered.jpg',
}

const initialState: AppState = {
  isInit: false,
  theme: THEMES.DEFAULT,
  loading: false,
  planets: [],
  error: '',
  savePlanets: [],
  planet: {} as Planet,
}

//
// Slice (Actions & Reducers)
//

export const fetchPlanets = createAsyncThunk('planets/fetchPlanets', () => {
  return fetch('https://api.le-systeme-solaire.net/rest/bodies').then((res) => res.json())
})

const slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    init: () => undefined,
    setIsInit: (state, action: actionTypes.setIsInit) => {
      const { isInit } = action.payload
      state.isInit = isInit
    },
    setTheme: (state, { payload }: actionTypes.setTheme) => {
      const { theme } = payload
      state.theme = theme
    },

    searchPlanet: (state, action: actionTypes.searchPlanet) => {
      state.planets = state.savePlanets.filter((planet: Planet) =>
        planet.name.toLowerCase().includes(action.payload)
      )
    },
    setPlanet: (state, action: actionTypes.setPlanet) => {
      // search planet by id
      state.planet = state.planets.find((planet: Planet) => planet.id === action.payload)
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPlanets.pending, (state) => {
      state.loading = true
    })
    builder.addCase(fetchPlanets.fulfilled, (state, action) => {
      state.loading = false

      state.planets = action.payload.bodies
        .filter((planet: Planet) => planet.isPlanet)
        .map((planet: Planet) => ({ ...planet, image: Image_Planet[planet.id] }))
      state.savePlanets = state.planets
      state.error = ''
    })
    builder.addCase(fetchPlanets.rejected, (state) => {
      state.loading = false
      state.error = 'Something went wrong'
    })
  },
})

export const { reducer, actions } = slice

//
// Selectors
//

const root = (state: RootState) => state[slice.name]
const isInit = (state: RootState) => root(state).isInit
const theme = (state: RootState) => root(state).theme
const planets = (state: RootState) => root(state).planets

export const selectors = {
  isInit,
  theme,
  planets,
}
