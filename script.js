const data = [
  {
    name: 'Mercury',
    overview: {
      content:
        "Mercury is the smallest planet in the Solar System and the closest to the Sun. Its orbit around the Sun takes 87.97 Earth days, the shortest of all the Sun's planets. Mercury is one of four terrestrial planets in the Solar System, and is a rocky body like Earth.",
      source: 'https://en.wikipedia.org/wiki/Mercury_(planet)',
    },
    structure: {
      content:
        "Mercury appears to have a solid silicate crust and mantle overlying a solid, iron sulfide outer core layer, a deeper liquid core layer, and a solid inner core. The planet's density is the second highest in the Solar System at 5.427 g/cm3 , only slightly less than Earth's density.",
      source:
        'https://en.wikipedia.org/wiki/Mercury_(planet)#Internal_structure',
    },
    geology: {
      content:
        "Mercury's surface is similar in appearance to that of the Moon, showing extensive mare-like plains and heavy cratering, indicating that it has been geologically inactive for billions of years. It is more heterogeneous than either Mars's or the Moon’s.",
      source: 'https://en.wikipedia.org/wiki/Mercury_(planet)#Surface_geology',
    },
    rotation: '58.6 Days',
    revolution: '87.97 Days',
    radius: '2,439.7 KM',
    temperature: '430°c',
    images: {
      planet:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000292/The%20Planets/planet-mercury_ktgmit.svg',
      internal:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000291/The%20Planets/planet-mercury-internal_qqqwao.svg',
      geology:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000288/The%20Planets/geology-mercury_hv30bc.png',
    },
  },
  {
    name: 'Venus',
    overview: {
      content:
        "Venus is the second planet from the Sun. It is named after the Roman goddess of love and beauty. As the brightest natural object in Earth's night sky after the Moon, Venus can cast shadows and can be, on rare occasions, visible to the naked eye in broad daylight.",
      source: 'https://en.wikipedia.org/wiki/Venus',
    },
    structure: {
      content:
        'The similarity in size and density between Venus and Earth suggests they share a similar internal structure: a core, mantle, and crust. Like that of Earth, Venusian core is most likely at least partially liquid because the two planets have been cooling at about the same rate.',
      source: 'https://en.wikipedia.org/wiki/Venus#Internal_structure',
    },
    geology: {
      content:
        'Much of the Venusian surface appears to have been shaped by volcanic activity. Venus has several times as many volcanoes as Earth, and it has 167 large volcanoes that are over 100 km (60 mi) across. The only volcanic complex of this size on Earth is the Big Island of Hawaii.',
      source: 'https://en.wikipedia.org/wiki/Venus#Surface_geology',
    },
    rotation: '243 Days',
    revolution: '224.7 Days',
    radius: '6,051.8 KM',
    temperature: '471°c',
    images: {
      planet:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000294/The%20Planets/planet-venus_bljvft.svg',
      internal:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000294/The%20Planets/planet-venus-internal_kpag55.svg',
      geology:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000288/The%20Planets/geology-venus_wxbaqn.png',
    },
  },
  {
    name: 'Earth',
    overview: {
      content:
        "Third planet from the Sun and the only known planet to harbor life. About 29.2% of Earth's surface is land with remaining 70.8% is covered with water. Earth's distance from the Sun, physical properties and geological history have allowed life to evolve and thrive.",
      source: 'https://en.wikipedia.org/wiki/Earth',
    },
    structure: {
      content:
        "Earth's interior, like that of the other terrestrial planets, is divided into layers by their chemical or physical (rheological) properties. The outer layer is a chemically distinct silicate solid crust, which is underlain by a highly viscous solid mantle.",
      source: 'https://en.wikipedia.org/wiki/Earth#Internal_structure',
    },
    geology: {
      content:
        'The total surface area of Earth is about 510 million km2. The continental crust consists of lower density material such as the igneous rocks granite and andesite. Less common is basalt, a denser volcanic rock that is the primary constituent of the ocean floors.',
      source: 'https://en.wikipedia.org/wiki/Earth#Surface',
    },
    rotation: '0.99 Days',
    revolution: '365.26 Days',
    radius: '6,371 KM',
    temperature: '16°c',
    images: {
      planet:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000290/The%20Planets/planet-earth_bc5xyv.svg',
      internal:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000289/The%20Planets/planet-earth-internal_childy.svg',
      geology:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000288/The%20Planets/geology-earth_uoft5r.png',
    },
  },
  {
    name: 'Mars',
    overview: {
      content:
        'Mars is the fourth planet from the Sun and the second-smallest planet in the Solar System, being larger than only Mercury. In English, Mars carries the name of the Roman god of war and is often referred to as the "Red Planet".',
      source: 'https://en.wikipedia.org/wiki/Mars',
    },
    structure: {
      content:
        'Like Earth, Mars has differentiated into a dense metallic core overlaid by less dense materials. Scientists initially determined that the core is at least partially liquid. Current models of its interior imply a core consisting primarily of iron and nickel with about 16–17% sulfur.',
      source: 'https://en.wikipedia.org/wiki/Mars#Internal_structure',
    },
    geology: {
      content:
        'Mars is a terrestrial planet whose surface consists of minerals containing silicon and oxygen, metals, and other elements that typically make up rock. The surface is primarily composed of tholeiitic basalt, although parts are more silica-rich than typical basalt.',
      source: 'https://en.wikipedia.org/wiki/Mars#Surface_geology',
    },
    rotation: '1.03 Days',
    revolution: '1.88 Years',
    radius: '3,389.5 KM',
    temperature: '-28°c',
    images: {
      planet:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000290/The%20Planets/planet-mars_oiswyc.svg',
      internal:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000290/The%20Planets/planet-mars-internal_trrfuj.svg',
      geology:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000288/The%20Planets/geology-mars_qvhc9j.png',
    },
  },
  {
    name: 'Jupiter',
    overview: {
      content:
        'Jupiter is the fifth planet from the Sun and the largest in the Solar System. It is a gas giant with a mass two and a half times that of all the other planets in the Solar System combined, but less than one-thousandth the mass of the Sun.',
      source: 'https://en.wikipedia.org/wiki/Jupiter',
    },
    structure: {
      content:
        "When the Juno arrived in 2016, it found that Jupiter has a very diffuse core that mixes into its mantle. A possible cause is an impact from a planet of about ten Earth masses a few million years after Jupiter's formation, which would have disrupted an originally solid Jovian core.",
      source: 'https://en.wikipedia.org/wiki/Jupiter#Internal_structure',
    },
    geology: {
      content:
        'The best known feature of Jupiter is the Great Red Spot, a persistent anticyclonic storm located 22° south of the equator. It is known to have existed since at least 1831, and possibly since 1665.',
      source:
        'https://en.wikipedia.org/wiki/Jupiter#Great_Red_Spot_and_other_vortices',
    },
    rotation: '9.93 Hours',
    revolution: '11.86 Years',
    radius: '69,911 KM',
    temperature: '-108°c',
    images: {
      planet:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000290/The%20Planets/planet-jupiter_ulpbxy.svg',
      internal:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000290/The%20Planets/planet-jupiter-internal_ksajjb.svg',
      geology:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000288/The%20Planets/geology-jupiter_bhk4yq.png',
    },
  },
  {
    name: 'Saturn',
    overview: {
      content:
        'Saturn is the sixth planet from the Sun and the second-largest in the Solar System, after Jupiter. It is a gas giant with an average radius of about nine and a half times that of Earth. It only has one-eighth the average density of Earth.',
      source: 'https://en.wikipedia.org/wiki/Saturn',
    },
    structure: {
      content:
        "Despite consisting mostly of hydrogen and helium, most of Saturn's mass is not in the gas phase, because hydrogen becomes a non-ideal liquid when the density is above 0.01 g/cm3, which is reached at a radius containing 99.9% of Saturn's mass.",
      source: 'https://en.wikipedia.org/wiki/Saturn#Internal_structure',
    },
    geology: {
      content:
        "The outer atmosphere of Saturn contains 96.3% molecular hydrogen and 3.25% helium by volume. The planet's most famous feature is its prominent ring system, which is composed mostly of ice particles with a smaller amount of rocky debris and dust.",
      source: 'https://en.wikipedia.org/wiki/Saturn#Atmosphere',
    },
    rotation: '10.8 Hours',
    revolution: '29.46 Years',
    radius: '58,232 KM',
    temperature: '-138°c',
    images: {
      planet:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000293/The%20Planets/planet-saturn_upbndd.svg',
      internal:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000292/The%20Planets/planet-saturn-internal_h0o8ni.svg',
      geology:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000288/The%20Planets/geology-saturn_qzkvkx.png',
    },
  },
  {
    name: 'Uranus',
    overview: {
      content:
        'Uranus is the seventh planet from the Sun. Its name is a reference to the Greek god of the sky, Uranus according to Greek mythology, was the great-grandfather of Ares. It has the third-largest planetary radius and fourth-largest planetary mass in the Solar System.',
      source: 'https://en.wikipedia.org/wiki/Uranus',
    },
    structure: {
      content:
        "The standard model of Uranus's structure is that it consists of three layers: a rocky (silicate/iron–nickel) core in the centre, an icy mantle in the middle and an outer gaseous hydrogen/helium envelope. The core is relatively small, with a mass of only 0.55 Earth masses.",
      source: 'https://en.wikipedia.org/wiki/Uranus#Internal_structure',
    },
    geology: {
      content:
        "The composition of Uranus's atmosphere is different from its bulk, consisting mainly of molecular hydrogen and helium. The helium molar fraction, i.e. the number of helium atoms per molecule of gas, is 0.15±0.03 in the upper troposphere.",
      source: 'https://en.wikipedia.org/wiki/Uranus#Atmosphere',
    },
    rotation: '17.2 Hours',
    revolution: '84 Years',
    radius: '25,362 KM',
    temperature: '-195°c',
    images: {
      planet:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000294/The%20Planets/planet-uranus_g6parr.svg',
      internal:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000293/The%20Planets/planet-uranus-internal_vzpn2g.svg',
      geology:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000288/The%20Planets/geology-uranus_y9dftn.png',
    },
  },
  {
    name: 'Neptune',
    overview: {
      content:
        'Neptune is the eighth and farthest-known Solar planet from the Sun. In the Solar System, it is the fourth-largest planet by diameter, the third-most-massive planet, and the densest giant planet. It is 17 times the mass of Earth, more massive than its near-twin Uranus.',
      source: 'https://en.wikipedia.org/wiki/Neptune',
    },
    structure: {
      content:
        "Neptune's internal structure resembles that of Uranus. Its atmosphere forms about 5% to 10% of its mass and extends perhaps 10% to 20% of the way towards the core. Increasing concentrations of methane, ammonia and water are found in the lower regions.",
      source: 'https://en.wikipedia.org/wiki/Neptune#Internal_structure',
    },
    geology: {
      content:
        "Neptune's atmosphere is 80% hydrogen and 19% helium. A trace amount of methane is also present. Prominent absorption bands of methane exist at wavelengths above 600 nm, in the red and infrared portion of the spectrum.",
      source: 'https://en.wikipedia.org/wiki/Neptune#Atmosphere',
    },
    rotation: '16.08 Hours',
    revolution: '164.79 Years',
    radius: '24,622 KM',
    temperature: '-201°c',
    images: {
      planet:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000292/The%20Planets/planet-neptune_xrfb6u.svg',
      internal:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000292/The%20Planets/planet-neptune-internal_h8ielo.svg',
      geology:
        'https://res.cloudinary.com/rjsmedia/image/upload/v1639000288/The%20Planets/geology-neptune_lrq5rc.png',
    },
  },
];

const hamburger = document.querySelector('.hamburger');
const mobileNavigationPlanets = document.querySelector(
  '.mobile-navigation-planets'
);
const mobilePlanetLinkContainer = document.querySelectorAll(
  '.mobile-planet-link-container'
);
const btnInfoTab = document.querySelectorAll('.btn-info-tab');
const planetImage = document.querySelector('.planet-image');
const planetName = document.querySelector('.planet-name');
const planetInfoText = document.querySelector('.planet-info-text');
const planetLinkMaster = document.querySelectorAll('.planet-link-master-1');
const mobilePlanetLinks = document.querySelectorAll('.planet-link-master')
const wikiLink = document.querySelector('.planet-wiki-link');
const underline = document.querySelector('.tracer');
const btnMobileStats = document.querySelectorAll('.btn-mobile-stats');
const planetLink = document.querySelectorAll('.planet-link')
const rotation = document.querySelector('.stat-rotation')
const revolution = document.querySelector('.stat-revolution')
const radius = document.querySelector('.stat-radius')
const temp = document.querySelector('.stat-temp')


const appState = {
  selectedPlanet: data[0],
  selectedPlanetName: data[0].name,
  selectedInfoTab: 'overview',
  planets: []
};



const loadPlanetInfo = (planet) => {
  planetName.textContent = planet.name;
  planetInfoText.textContent = planet.overview.content;
  rotation.textContent = planet.rotation
  revolution.textContent = planet.revolution
  radius.textContent = planet.radius
  temp.textContent = planet.temperature
  planetImage.src = planet.images.planet;
  btnInfoTab[0].classList.add(appState.selectedPlanet.name.toLowerCase());

  wikiLink.setAttribute('href', planet.overview.source);
};

const updatePlanetStats = (selectedTab) => {
  let tabinfo = selectedTab.dataset.id;
  let img = selectedTab.dataset.img;
  let planetInfoData = appState.selectedPlanet[tabinfo].content;
  let imgLink = appState.selectedPlanet.images[img];
  planetInfoText.textContent = planetInfoData;
  planetImage.src = imgLink;
};

mobilePlanetLinkContainer.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    setTimeout(() => {
      mobileNavigationPlanets.classList.remove('active');
    }, 50);
  });
});


btnInfoTab.forEach((btn) => {
  btn.addEventListener('mouseenter', (e) => {
    btnInfoTab.forEach((singleBtn) => {
      singleBtn.classList.remove('hover');
    });
    e.target.classList.add('hover');
  });
});



btnInfoTab.forEach((btn) => {
  btn.addEventListener('mouseleave', (e) => {
    btnInfoTab.forEach((singleBtn) => {
      singleBtn.classList.remove('hover');
    });
  });
});


btnInfoTab.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    btnInfoTab.forEach((singleBtn) => {
      singleBtn.classList.remove(appState.selectedPlanetName.toLowerCase());
    });
    e.target.classList.add(appState.selectedPlanetName.toLowerCase());
    updatePlanetStats(e.target);
  });
});


btnMobileStats.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let planetText = appState.selectedPlanetName.toLowerCase();
    let planetColor = appState.planets.filter(planet => planet.planetName === planetText)[0].color
    btnMobileStats.forEach(singleBtn => {
      singleBtn.style.borderBottom = "3px solid rgba(0,0,0,0)"
    })
    btn.style.borderBottom = "3px solid " + planetColor
    updatePlanetStats(e.target);
  });
});



planetLinkMaster.forEach((planet, i) => {
  planet.addEventListener('click', (e) => {
    e.preventDefault();
    planetLinkMaster.forEach(planet1 => {
      planet1.nextElementSibling.style.backgroundColor = 'rgba(0,0,0,0)'
    })
    btnInfoTab.forEach((singleBtn) => {
      singleBtn.classList.remove(appState.selectedPlanetName.toLowerCase());
    });
    const selectedPlanet = data.filter(
      (planet) =>
        planet.name.toLowerCase() === e.target.textContent.toLowerCase()
    );
    appState.selectedPlanet = selectedPlanet[0];
    appState.selectedPlanetName = selectedPlanet[0].name;
    let breadCrumb = planet.nextElementSibling
    let breadPlanet = appState.selectedPlanetName = selectedPlanet[0].name.toLowerCase()
    let breadColor = appState.planets.filter(single => single.planetName === breadPlanet)[0].color
    breadCrumb.style.backgroundColor = breadColor
    loadPlanetInfo(appState.selectedPlanet);
  });
});

mobilePlanetLinks.forEach(planet => {
  planet.addEventListener('click', (e) => {
    console.log(planet.textContent)
    const selectedPlanet = data.filter(
      (planet) =>
        planet.name.toLowerCase() === e.target.textContent.toLowerCase()
    );
    planetLinkMaster.forEach(planet1 => {
      planet1.nextElementSibling.style.backgroundColor = 'rgba(0,0,0,0)'
    })
    console.log(selectedPlanet)
    appState.selectedPlanet = selectedPlanet[0]
    loadPlanetInfo(appState.selectedPlanet);
  })
})


hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  mobileNavigationPlanets.classList.toggle('active');
});


window.addEventListener('DOMContentLoaded', () => {
  planetLink.forEach(btn => {
    let planetName = btn.textContent.toLowerCase()
    let color = getComputedStyle(document.documentElement)
      .getPropertyValue(`--${planetName}`);
    let planetObj = {
      planetName,
      color
    }
    appState.planets.push(planetObj)
  })
  loadPlanetInfo(appState.selectedPlanet);
});



