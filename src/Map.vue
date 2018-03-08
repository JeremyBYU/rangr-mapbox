<template>
  <div id='map' style='height: 600px;'></div>
</template>

<script>
import mapboxgl from 'mapbox-gl';
import {OSM_MAPS, MAPBOX_INIT} from './maps'

const LANDUSE_LAYER = 'landuse_risk_layer'
const CENSUS_LAYER = 'census_risk_layer'
const MAX_OPACITY = .75

export default {
  name: "my-map",
  props: {
    weight: Number,
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      map: undefined
    };
  },
  watch: {
    weight: function (val) {
      this.map.setPaintProperty(CENSUS_LAYER, 'raster-opacity', (1 - val) * MAX_OPACITY);
      this.map.setPaintProperty(LANDUSE_LAYER, 'raster-opacity', val * MAX_OPACITY);
      console.log((1 - val) * MAX_OPACITY, val * MAX_OPACITY)
    },
  },
  mounted() {
    this.map = new mapboxgl.Map(MAPBOX_INIT);
    // this.map.addSource('osm-tiles', OSM_MAPS)
    window.map = this.map
  }
};
</script>

<style>
    #menu {
        background: #fff;
        position: absolute;
        z-index: 1;
        top: 10px;
        right: 10px;
        border-radius: 3px;
        width: 120px;
        border: 1px solid rgba(0,0,0,0.4);
        font-family: 'Open Sans', sans-serif;
    }

    #menu a {
        font-size: 13px;
        color: #404040;
        display: block;
        margin: 0;
        padding: 0;
        padding: 10px;
        text-decoration: none;
        border-bottom: 1px solid rgba(0,0,0,0.25);
        text-align: center;
    }

    #menu a:last-child {
        border: none;
    }

    #menu a:hover {
        background-color: #f8f8f8;
        color: #404040;
    }

    #menu a.active {
        background-color: #3887be;
        color: #ffffff;
    }

    #menu a.active:hover {
        background: #3074a4;
    }
</style>
