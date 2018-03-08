export const OSM_MAPS = {
  type: "raster",
  tiles: [
    "http://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
    "http://b.tile.openstreetmap.org/{z}/{x}/{y}.png"
  ],
  tileSize: 256
};

export const MAPBOX_INIT = {
  container: "map",
  center: [-117.04479558846435, 32.74894947579389],
  zoom: 10.471043167851036,
  bearing: 1.102829899100243,
  pitch: 0,
  style: {
    version: 8,
    name: "RANGR",
    sources: {
      osm_tiles: {
        type: "raster",
        tiles: [
          "http://a.tile.openstreetmap.org/{z}/{x}/{y}.png",
          "http://b.tile.openstreetmap.org/{z}/{x}/{y}.png"
        ],
        tileSize: 256
      },
      census_risk: {
        url: "mapbox://jdcasta.8d3f27ccfeea445486d167338c4ab758",
        type: "raster",
        tileSize: 256
      },
      landuse_risk: {
        url: "mapbox://jdcasta.dc2bb53623274d96998e22e88117da9a",
        type: "raster",
        tileSize: 256
      }
    },
    layers: [
      {
        id: "osm_tiles_layer",
        type: "raster",
        source: "osm_tiles",
        layout: {
          visibility: "visible"
        },
        paint: {
          "raster-opacity": 1
        }
      },
      {
        id: "census_risk_layer",
        type: "raster",
        source: "census_risk",
        layout: {
          visibility: "visible"
        },
        paint: {
          "raster-opacity": 0.33
        }
      },
      {
        id: "landuse_risk_layer",
        type: "raster",
        source: "landuse_risk",
        layout: {
          visibility: "visible"
        },
        paint: {
          "raster-opacity": 0.39
        }
      }
    ]
  },
  sprite: "mapbox://sprites/jdcasta/cje720uu68x1c2rmpfr0878u7",
  glyphs: "mapbox://fonts/jdcasta/{fontstack}/{range}.pbf"
};
