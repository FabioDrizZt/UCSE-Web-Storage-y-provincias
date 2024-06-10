// obtenemos el id de la provincia que necesitamos mostrar el detalle
const urlParams = new URLSearchParams(location.search)

const id = urlParams.has('id') ? urlParams.get('id') : 0

const datosProvincias = JSON.parse(localStorage.getItem('provincias'))
const datosProvincia = datosProvincias.find((provincia) => provincia.id === id)

const provincia = document.querySelector('#detalle-provincia')

const detallesProvincia = document.createElement('div')
detallesProvincia.innerHTML = `<h2>${datosProvincia.nombre}</h2>
<p> ID: ${datosProvincia.id} <p>
<p> Latitud: ${datosProvincia.centroide.lat} <p>
<p> Longitud: ${datosProvincia.centroide.lon} <p>
`
provincia.appendChild(detallesProvincia)
