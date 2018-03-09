import Vue from 'vue'
import Buefy from 'buefy'
import mapboxgl from 'mapbox-gl';
import 'buefy/lib/buefy.css'

import App from './App.vue'

mapboxgl.accessToken = 'pk.eyJ1IjoiamRjYXN0YSIsImEiOiJjajUwNzZlbmowMXN1MnlwY3kxM3BqYnMzIn0.I4Aj5sCOPcAfze-71evNIQ'
Vue.use(Buefy)

new Vue({
  el: '#app',
  render: h => h(App)
})
