<template>
  <div id="app">

    <nav class="navbar">
      <div class="container">
        <div class="navbar-brand">
          <a class="navbar-item" href="../">
            <img src="./assets/logo.png" alt="Logo">
          </a>
          <span class="navbar-burger burger" data-target="navbarMenu">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </div>
        <div id="navbarMenu" class="navbar-menu">
          <div class="navbar-end">
            <a class="navbar-item is-active">
              Home
            </a>
            <a class="navbar-item">
              About
            </a>
          </div>
        </div>
      </div>
    </nav>

  <section class=section>
    <div class="container">
      <div class="columns">
        <div class="column is-one-third">
          <form>
            <b-field label="Time">
                <b-select placeholder="Select a name" v-model="time">
                    <option
                        v-for="option in available_times"
                        :label="option[1]"
                        :value="option[0]"
                        :key="option[0]">
                        {{ option[1] }}
                    </option>
                </b-select>
            </b-field>
            <b-field label="Glide Ratio">
                <b-select placeholder="Select UAS glide ratio" v-model="glide_ratio">
                    <option
                        v-for="option in available_gilde_ratios"
                        :label="option"
                        :value="option"
                        :key="option">
                        {{ option }}
                    </option>
                </b-select>
            </b-field>
            <b-field label="Altitude">
                <b-select placeholder="Select UAS altitude" v-model="altitude">
                    <option
                        v-for="option in available_altitudes"
                        :label="option"
                        :value="option"
                        :key="option">
                        {{ option }}
                    </option>
                </b-select>
            </b-field>
            <b-field label="Weighting">
              <vue-slider ref="slider" v-model="weight" tooltip-dir="bottom" :min="0" :max="1" :interval="0.01"></vue-slider>
            </b-field>
          </form>
        </div>
        <div class="column is-two-thirds">
          <my-map :weight="weight" :landuse-risk-url="landuseRiskUrl" :census-risk-url="censusRiskUrl"></my-map>
        </div>
      </div>
    </div>

  </section>


  </div>
</template>

<script>
import Map from "./Map.vue";
import vueSlider from "vue-slider-component";
export default {
  name: "app",
  components: {
    "my-map": Map,
    vueSlider
  },
  data() {
    return {
      available_times: [
        [6, "Sunday 6 AM"],
        [12, "Sunday 12 PM"],
        [20, "Sunday 8 PM"],
        [30, "Monday 6 AM"],
        [36, "Monday 12 PM"],
        [44, "Monay 8 PM"]
      ],
      available_gilde_ratios: [1, 5, 10],
      available_altitudes: [100, 200, 300],
      time: 6,
      glide_ratio: 1,
      altitude: 100,
      weight: 0.5
    };
  },
  computed: {
    censusRiskUrl: function() {
      let beggining = 'census_risk'
      let url_string = `${beggining}_rg_${this.glide_ratio}_a_${this.altitude}`
      return url_string
    },
    landuseRiskUrl: function() {
      // this.glide_ratio.toFixed(0).padStart(2, 0)
      let beggining = 'landuse_risk'
      let url_string = `${beggining}_rg_${this.glide_ratio}_a_${this.altitude}_t_${this.time.toFixed(0).padStart(2, 0)}`
      return url_string
    }
  }
};
</script>

<style>
html,
body {
  font-family: "Open Sans";
}
</style>
