import { PlanetDetailTemplateProps } from './index'

export const homeArgs: PlanetDetailTemplateProps = {
  title: 'Detail Planet',
  data: {
    id: 'lune',
    name: 'La Lune',
    englishName: 'Moon',
    isPlanet: false,
    moons: null,
    semimajorAxis: 384400,
    perihelion: 363300,
    aphelion: 405500,
    eccentricity: 0.0549,
    inclination: 5.145,
    mass: {
      massValue: 7.346,
      massExponent: 22,
    },
    vol: {
      volValue: 2.1968,
      volExponent: 10,
    },
    density: 3.344,
    gravity: 1.62,
    escape: 2380.0,
    meanRadius: 1737.0,
    equaRadius: 1738.1,
    polarRadius: 1736.0,
    flattening: 0.0012,
    dimension: '',
    sideralOrbit: 27.3217,
    sideralRotation: 655.728,
    aroundPlanet: {
      planet: 'terre',
      rel: 'https://api.le-systeme-solaire.net/rest/bodies/terre',
    },
    discoveredBy: '',
    discoveryDate: '',
    alternativeName: '',
    axialTilt: 6.68,
    avgTemp: 0,
    mainAnomaly: 0.0,
    argPeriapsis: 0.0,
    longAscNode: 0.0,
    bodyType: 'Moon',
    rel: 'https://api.le-systeme-solaire.net/rest/bodies/lune',
    image: '',
  },
}
