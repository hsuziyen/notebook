<template>
  <div id="app">
    <div class="mask-map" id="map"></div>
    <div class="map-overlay top">
      <div class="map-overlay-inner goto-my-location" @click.prevent="gotoMyLocation">
        <img class="cat-icon" src="./assets/cat.png" width="24" height="24" alt="Cat">
        <span>定位我的位置</span>
      </div>
      <div class="map-overlay-inner fill-mask" @click.prevent="fillMask">
        <img class="cat-icon" src="./assets/cat.png" width="24" height="24" alt="Cat">
        <span v-if="fillMaskToggle">停下來！</span>
        <span v-else>口罩炫富</span>
      </div>
    </div>
    <div class="modal fade" id="drugStoreModal" tabindex="-1" role="dialog" aria-labelledby="drugStoreModalTitle" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="drugStoreModalTitle" v-text="drugStore.name"></h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="d-flex justify-content-center align-items-center">
              <div class="mask mask-adult mr-2">
                <i class="fas fa-male"></i>
              </div>
              <div class="mask mask-count mr-4">
                <span v-text="drugStore.maskAdult"></span>
              </div>
              <div class="mask mask-child mr-2">
                <i class="fas fa-child"></i>
              </div>
              <div class="mask mask-count">
                <span v-text="drugStore.maskChild"></span>
              </div>
            </div>
            <div class="d-flex flex-column">
              <p class="my-1 text-center">
                <i class="fas fa-sync-alt mr-2"></i>
                <span v-text="drugStore.updated"></span>
              </p>
              <p class="my-1 text-center">
                <i class="fas fa-map-marker-alt mr-2"></i>
                <span v-text="drugStore.address"></span>
              </p>
              <div class="my-1 text-center">
                <p class="m-0 phone-number">
                  <i class="fas fa-phone-alt mr-2"></i>
                  <a :href="'tel:' + drugStore.phone" v-text="drugStore.phone"></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="loading" class="justify-content-center align-items-center" v-show="isLoading">
      <div class="text-center">
        <img class="cat-icon" src="./assets/cat.png" width="128" height="128" alt="Cat">
        <h3>Loading...</h3>
        <h5>若地圖無法顯示，表示超出用量(單日 20 萬次請求 QQ)</h5>
      </div>
    </div>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import { MapboxLayer } from '@deck.gl/mapbox'
import { ColumnLayer, IconLayer } from '@deck.gl/layers'
import { HexagonLayer } from '@deck.gl/aggregation-layers'

import CatIcon from '@/assets/cat.png'

// const MASK_DATA_URL = '/mask_map/data/maskdata.php'
const MASK_DATA_URL = 'data/maskdata.php'

const INITIAL_VIEW_STATE = {
  longitude: 121.51764,
  latitude: 25.03865,
  zoom: 15,
  minZoom: 8,
  maxZoom: 22,
  pitch: 40.5,
  bearing: -27.396674584323023
}

const COLOR_RANGE = [
  [209, 55, 78, 150],
  [254, 173, 84, 150],
  [254, 237, 177, 150],
  [216, 254, 181, 150],
  [73, 227, 206, 150],
  [1, 152, 189, 150]
]

let DRUG_STORES = {}

export default {
  name: 'app',
  data () {
    return {
      currentPosition: [
        INITIAL_VIEW_STATE.longitude,
        INITIAL_VIEW_STATE.latitude
      ],
      map: null,
      hexagonLayer: null,
      maskData: [],
      isLoading: true,
      currentZoom: 15,
      fillMaskToggle: false,
      fillMaskRender: null,
      drugStore: {
        name: '',
        phone: '',
        address: '',
        maskChild: 0,
        maskAdult: 0,
        updated: ''
      }
    }
  },
  methods: {
    fillMask () {
      if (this.fillMaskToggle) {
        this.fillMaskToggle = false
        window.Negi.stop(this.fillMaskRender)
        return
      }
      this.fillMaskToggle = true
      this.fillMaskRender = window.Negi.start()
    },
    gotoMyLocation () {
      navigator.geolocation.getCurrentPosition(position => {
        this.currentPosition = [
          position.coords.longitude,
          position.coords.latitude
        ]

        this.map.flyTo(
          {
            center: this.currentPosition,
            zoom: 15,
            speed: 0.5,
            curve: 1,
            easing: function (t) {
              return t
            },
            essential: true
          }
        )
      })
    },
    dragStoreModal (data) {
      const store = data.properties
      this.drugStore = {
        name: store.name,
        phone: store.phone,
        address: store.address,
        maskChild: store.mask_child,
        maskAdult: store.mask_adult,
        updated: store.updated
      }
      window.jQuery('#drugStoreModal').modal({
        backdrop: false
      })

      this.currentPosition = data.geometry.coordinates
      this.map.setCenter(this.currentPosition)
      this.map.flyTo(
        {
          center: this.currentPosition,
          zoom: 15,
          speed: 0.5,
          curve: 1,
          easing: function (t) {
            return t
          },
          essential: true
        }
      )
    },
    mapLoaded () {
      this.map.setCenter(this.currentPosition)
      this.map.addControl(new mapboxgl.NavigationControl())

      const CatIconLayer = new MapboxLayer(
        {
          id: 'icon-layer',
          type: IconLayer,
          data: DRUG_STORES.features,
          pickable: true,
          wrapLongitude: true,
          sizeUnits: 'meters',
          sizeScale: 2,
          sizeMinPixels: 16,
          getSize: 32,
          getIcon: d => ({
            url: CatIcon,
            x: 0,
            y: 0,
            width: 128,
            height: 128,
            anchorY: 128
          }),
          getPosition: d => d.geometry.coordinates,
          onClick: info => {
            this.dragStoreModal(info.object)
          }
        }
      )

      this.map.addLayer(CatIconLayer)

      this.map.addLayer(
        new MapboxLayer(
          {
            id: 'column-layer',
            type: ColumnLayer,
            data: DRUG_STORES.features,
            diskResolution: 12,
            radius: 35,
            elevationScale: 2500,
            pickable: true,
            getPosition: d => d.geometry.coordinates,
            getFillColor: d => {
              if (d.properties.total >= 250) {
                return COLOR_RANGE[5]
              }
              if (d.properties.total >= 200) {
                return COLOR_RANGE[4]
              }
              if (d.properties.total >= 100) {
                return COLOR_RANGE[3]
              }
              if (d.properties.total >= 50) {
                return COLOR_RANGE[2]
              }
              if (d.properties.total >= 10) {
                return COLOR_RANGE[1]
              }
              return COLOR_RANGE[0]
            },
            getElevation: d => {
              return (d.properties.total / 1000)
            },
            onClick: info => {
              this.dragStoreModal(info.object)
            }
          }
        ),
        'icon-layer'
      )

      this.hexagonLayer = new MapboxLayer(
        {
          id: 'heatmap-layer',
          type: HexagonLayer,
          data: DRUG_STORES.features,
          colorRange: COLOR_RANGE,
          elevationRange: [0, 100],
          elevationScale: 500,
          extruded: true,
          getPosition: d => d.geometry.coordinates
        }
      )

      this.isLoading = false
    }
  },
  async mounted () {
    navigator.geolocation.getCurrentPosition(position => {
      this.currentPosition = [
        position.coords.longitude,
        position.coords.latitude
      ]
    })

    await fetch(MASK_DATA_URL, {
      mode: 'cors',
      cache: 'default'
    }).then(response => {
      return response.json()
    }).then(data => {
      DRUG_STORES = data
      this.map = new mapboxgl.Map({
        container: 'map',
        style: require('@/assets/data/mapstyle.json'),
        center: this.currentPosition,
        zoom: INITIAL_VIEW_STATE.zoom,
        bearing: INITIAL_VIEW_STATE.bearing,
        pitch: INITIAL_VIEW_STATE.pitch
      })

      this.map.on('load', this.mapLoaded)
      this.map.on('zoom', () => {
        this.currentZoom = this.map.getZoom()
        if (this.map.getZoom() > 11) {
          if (this.map.getLayer('heatmap-layer')) {
            this.map.removeLayer('heatmap-layer')
          }
        } else {
          if (typeof this.map.getLayer('heatmap-layer') === 'undefined') {
            this.map.addLayer(this.hexagonLayer)
          }
        }
      })
    }).catch(err => {
      throw err
    })
  }
}
</script>

<style>
body {
  width: 100vw;
  height: 100vh;
  margin: 0;
  overflow: hidden;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  position: fixed;
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.mask-map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
.mapboxgl-popup {
  max-width: 400px !important;
}
.mapboxgl-popup-close-button {
  font-size: 24px;
}
.mapboxgl-popup-content table {
  width: 100%;
}
.mapboxgl-popup-content table td, th {
  font-size: 1rem;
  padding: 0.2rem;
}

.map-overlay {
  font: 12px/20px 'Helvetica Neue', Arial, Helvetica, sans-serif;
  position: absolute;
  width: auto;
  top: 0;
  left: 0;
  padding: 10px;
  z-index: 1000;
}

.goto-my-location,
.fill-mask {
  cursor: pointer;
  user-select: none;
}

.goto-my-location .cat-icon,
.fill-mask .cat-icon {
  display: inline-block;
  vertical-align: -6px;
  margin-right: 5px;
}

.map-overlay .map-overlay-inner {
  background-color: #fff;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.2);
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
}
.drugstore-table .label {
  min-width: 5rem;
}

#loading {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.7);
  display: flex;
}
#loading .cat-icon {
  display: block;
  margin: 1rem auto;
}
.mask {
  font-weight: 700;
  color: #17b8a2;
}
.mask.mask-adult {
  font-size: 4rem;
  line-height: 4rem;
}
.mask.mask-child {
  font-size: 3rem;
  line-height: 4rem;
}
.mask.mask-count {
  font-size: 4rem;
  line-height: 4rem;
}
.phone-number {
  background-color: #17b8a2;
  padding: 0.4rem 1rem;
  border-radius: 1rem;
  font-weight: 900;
  color: white;
  display: inline-block;
}
.phone-number a,
.phone-number a:hover,
.phone-number a:active,
.phone-number a:visited {
  color: white;
  text-decoration: none;
}
</style>
