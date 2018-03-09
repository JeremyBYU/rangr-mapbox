<template>
  <div id='map' style='height: 600px;'></div>
</template>

<script>
import mapboxgl from "mapbox-gl";
import {
  OSM_MAPS,
  MAPBOX_INIT,
  LAYER_TEMPLATE,
  SOURCE_TEMPLATE
} from "./util/maps";

const MAP_URLS = require("./util/tile_sets.json");
const LANDUSE_LAYER = "landuse_risk_layer";
const CENSUS_LAYER = "census_risk_layer";
const LANDUSE_SOURCE = "landuse_risk";
const CENSUS_SOURCE = "census_risk";
const MAX_OPACITY = 0.75;

function getMapURL(mapName, rasterType = "census_risk") {
  map = MAP_URLS.find(map => map.name == mapName);
  if (map) {
    return `mapbox://${map.id}`;
  } else {
    return MAPBOX_INIT.style.sources[rasterType].url;
  }
}

export default {
  name: "my-map",
  props: {
    weight: Number,
    landuseRiskUrl: String,
    censusRiskUrl: String
  },
  data() {
    return {
      msg: "Welcome to Your Vue.js App",
      map: undefined,
      censusLayerOpacity: 1,
      landuseLayerOpacity: 1
    };
  },
  watch: {
    weight: function(val) {
      this.censusLayerOpacity = (1 - val) * MAX_OPACITY;
      this.landuseLayerOpacity = val * MAX_OPACITY;
      this.map.setPaintProperty(
        CENSUS_LAYER,
        "raster-opacity",
        this.censusLayerOpacity
      );
      this.map.setPaintProperty(
        LANDUSE_LAYER,
        "raster-opacity",
        this.landuseLayerOpacity
      );
    },
    censusRiskUrl: function(mapName) {
      let new_url = getMapURL(mapName);
      console.log(`Map: ${mapName}, URL: ${new_url}`);
      this.updateSource(CENSUS_LAYER, CENSUS_SOURCE, new_url);
    },
    landuseRiskUrl: function(mapName) {
      let new_url = getMapURL(mapName);
      const source = this.map.getSource(LANDUSE_SOURCE);
      console.log(`Map: ${mapName}, URL: ${new_url}`);
      this.updateSource(LANDUSE_LAYER, LANDUSE_SOURCE, new_url);
      // source.url = new_url
    }
  },
  mounted() {
    this.map = new mapboxgl.Map(MAPBOX_INIT);
    window.map = this.map;
  },
  methods: {
    updateSource(layerName, sourceName, newUrl) {
      let opacity =
        layerName === CENSUS_LAYER
          ? this.censusLayerOpacity
          : this.landuseLayerOpacity;
      // Remove Layer and Source
      this.map.removeLayer(layerName);
      this.map.removeSource(sourceName);
      // Add Layer with updated Source
      this.map.addSource(sourceName, { ...SOURCE_TEMPLATE, url: newUrl });
      this.map.addLayer({
        ...LAYER_TEMPLATE,
        id: layerName,
        source: sourceName,
        paint: { 'raster-opacity': opacity }
      })
    }
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
  border: 1px solid rgba(0, 0, 0, 0.4);
  font-family: "Open Sans", sans-serif;
}

#menu a {
  font-size: 13px;
  color: #404040;
  display: block;
  margin: 0;
  padding: 0;
  padding: 10px;
  text-decoration: none;
  border-bottom: 1px solid rgba(0, 0, 0, 0.25);
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
