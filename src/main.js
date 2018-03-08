import Vue from 'vue'
import Buefy from 'buefy'
import App from './App.vue'

import mapboxgl from 'mapbox-gl';
mapboxgl.accessToken = 'pk.eyJ1IjoiamRjYXN0YSIsImEiOiJjajUwNzZlbmowMXN1MnlwY3kxM3BqYnMzIn0.I4Aj5sCOPcAfze-71evNIQ'

import 'buefy/lib/buefy.css'

Vue.use(Buefy)

new Vue({
  el: '#app',
  render: h => h(App)
})
