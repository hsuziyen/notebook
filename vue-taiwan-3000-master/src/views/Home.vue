<template>
  <div class="home">
    <el-row gutter="10">
      <div class="asidemenu">
        <el-row>
          <el-col :span="24">
            <el-select
              v-model="select.city"
              placeholder="請選擇縣市"
              size="mini"
            >
              <el-option
                v-for="item in cityName"
                :key="item.CityName"
                :label="item.CityName"
                :value="item.CityName"
              ></el-option>
            </el-select>

            <el-select
              v-model="select.area"
              placeholder="請選擇地區"
              v-if="select.city"
              size="mini"
            >
              <el-option
                v-for="item in cityName.find(
                  (city) => city.CityName === select.city
                ).AreaList"
                :key="item.AreaName"
                :label="item.AreaName"
                :value="item.AreaName"
              ></el-option>
            </el-select>
          </el-col>
        </el-row>
      </div>
      <div class="showmap">
        <el-row>
          <el-col id="map" :span="24"></el-col>
        </el-row>
      </div>
      <div class="footer">
        <el-col :span="24">
          <a href="https://github.com/llovvoll/vue-taiwan-3000">Source Code</a>
          | Data API from
          <a href="https://data.gov.tw/dataset/127751">Data.gov.tw</a>
        </el-col>
      </div>
    </el-row>
  </div>
</template>

<script>
import L from "leaflet";
import axios from "axios";
import cityName from "@/assets/CityCountyData.json";

let openStreetMap = {};

export default {
  name: "Home",
  data() {
    return {
      cityName,
      postData: [],
      select: {},
      userData: {},
    };
  },
  computed: {
    postOffice() {
      return this.postData.filter((post) => {
        if (!this.select.area) {
          return post.hsnNm === this.select.city;
        }
        return post.townNm === this.select.area;
      });
    },
  },
  watch: {
    postOffice(val) {
      this.updateMap();
    },
  },
  mounted() {
    this.getPostData();
    this.getCurrent();
  },

  methods: {
    async getPostData() {
      await axios
        .get("https://3000.gov.tw/hpgapi-openmap/api/getPostData")
        .then((response) => {
          this.postData = response.data;
          // console.log(this.postData);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getCurrent() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          //locationSuccess
          (position) => {
            this.userData.longitude = position.coords.longitude;
            this.userData.latitude = position.coords.latitude;
            this.createMap();
          },
          //locationError
          (error) => {
            this.userData.latitude = 25.042474;
            this.userData.longitude = 121.513729;
            this.createMap();
          }
        );
      }
    },
    createMap() {
      openStreetMap = L.map("map", {
        center: [this.userData.latitude, this.userData.longitude],
        zoom: 13,
      });

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 20,
      }).addTo(openStreetMap);
    },
    updateMap() {
      openStreetMap.eachLayer((layer) => {
        if (layer instanceof L.Marker) {
          openStreetMap.removeLayer(layer);
        }
      });
      this.postOffice.forEach((post) => {
        L.marker([post.latitude, post.longitude]).addTo(openStreetMap)
          .bindPopup(`<p><strong style="font-size: 20px;">${
          post.storeNm
        }</strong></p>
          <strong style="font-size: 16px; color: #d45345;">三倍券剩餘：${
            post.total ? `${post.total} 張` : "未取得資料"
          }</strong><br>
          地址: ${post.addr}<br>
          電話: ${post.tel}<br>
          <small>最後更新時間: ${post.updateTime}</small>`);
      });
    },
  },
};
</script>
<style lang="scss">
.asidemenu {
  display: flex;
  justify-content: center;
  margin: 30px 0;
}
#map {
  width: 100%;
  height: 500px;
}
.footer {
  text-align: center;
  a {
    text-decoration: none;
  }
}
</style>
