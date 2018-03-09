# rangr-mapbox

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

For detailed explanation on how things work, consult the [docs for vue-loader](http://vuejs.github.io/vue-loader).

## Get Tile Sets

`curl "https://api.mapbox.com/tilesets/v1/jdcasta?access_token=<YOURKEY>" | jq '.[] | del(.type,.center,.created,.modified,.visibility,.description,.filesize,.status)' > src/util/tile_sets.json``
