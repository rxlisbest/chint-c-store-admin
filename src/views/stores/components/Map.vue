<template>
  <div class="map-container">
    <div id="id" class="amap-wrapper" />
    <div class="range-edit">
      <div
        class="range-edit-button"
        style="margin-bottom: 5px"
        @click="polyEditor.open()"
      >{{ $t('messages.stores.input.range_edit') }}</div>
      <div
        class="range-save-button"
        @click="polyEditor.close()"
      >{{ $t('messages.stores.input.range_save') }}</div>
    </div>
  </div>
</template>

<script>
import { lazyAMapApiLoaderInstance } from "vue-amap";
import { Decimal } from "decimal.js";

const mapData = {
  lat: "",
  lng: "",
  range: []
};

export default {
  name: "Map",
  props: {
    value: {
      type: Object,
      default: () => {
        return mapData;
      }
    },
    id: {
      type: String,
      default: undefined
    },
    isEdit: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      map: undefined,
    };
  },
  computed: {},
  created() {},
  mounted() {
    const _this = this;
    setTimeout(function() {
      lazyAMapApiLoaderInstance.load().then(() => {
        if (_this.isEdit) {
          this.map = new AMap.Map(this.id, {
            center: [_this.value.lng, _this.value.lat],
            zoom: 16
          });
        } else {
          this.map = new AMap.Map(this.id, {
            resizeEnable: true,
            zoom: 16
          });
          AMap.plugin("AMap.Geolocation", function() {
            var geolocation = new AMap.Geolocation({
              enableHighAccuracy: true, // 是否使用高精度定位，默认:true
              timeout: 10000, // 超过10秒后停止定位，默认：5s
              buttonPosition: "RB", // 定位按钮的停靠位置
              buttonOffset: new AMap.Pixel(10, 20), // 定位按钮与设置的停靠位置的偏移量，默认：Pixel(10, 20)
              zoomToAccuracy: true // 定位成功后是否自动调整地图视野到定位点
            });
            setTimeout(() => {
              map.addControl(geolocation);
            }, 0);
            geolocation.getCurrentPosition(function(status, result) {
              if (status == "complete") {
                onComplete(result);
              } else {
                onError(result);
              }
            });
          });
        }
        // this.map = new AMap.Map('amap-demo2', {
        //   center: [121.59996, 31.197646],
        //   zoom: 16
        // })
        // 解析定位结果
        function onComplete(data) {}
        // 解析定位错误信息
        function onError(data) {
          Message(data.message);
        }

        const map = (_this.map = this.map);

        if (_this.isEdit) {
          var marker = new AMap.Marker({
            icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            position: [_this.value.lng, _this.value.lat]
          });
          map.add(marker);
          _this.setRange(
            _this.map,
            _this.value.lng,
            _this.value.lat,
            _this.value.range
          );
        }

        this.map.on("click", function(e) {
          var marker = new AMap.Marker({
            icon: "https://webapi.amap.com/theme/v1.3/markers/n/mark_b.png",
            position: [e.lnglat.getLng(), e.lnglat.getLat()]
          });
          map.clearMap();
          map.add(marker);
          const lng = e.lnglat.getLng();
          const lat = e.lnglat.getLat();
          _this.value.lng = lng;
          _this.value.lat = lat;
          console.log(_this.value)
          _this.setRange(map, lng, lat);
        });
      });
    }, 1000);
  },
  watch: {},
  methods: {
    emitInput(val) {
      this.$emit("input", val);
    },
    resetMap(address) {
      lazyAMapApiLoaderInstance.load().then(() => {
        AMap.plugin("AMap.Geocoder", () => {
          const geocoder = new AMap.Geocoder();
          const marker = new AMap.Marker();
          geocoder.getLocation(address, (status, result) => {
            if (status === "complete" && result.geocodes.length) {
              const lnglat = result.geocodes[0].location;
              // this.map.add(marker)
              marker.setPosition(lnglat);
              this.map.setFitView(marker);
            } else {
              // log.error('根据地址查询位置失败')
            }
          });
        });
      });
    },
    setRange(map, lng, lat, range) {
      const _this = this;
      let newValue = Object.assign({}, this.value);
      lng = new Decimal(lng);
      lat = new Decimal(lat);
      if (!range) {
        range = [
          [lng.minus(0.0002).toFixed(6), lat.minus(0.0002).toFixed(6)],
          [lng.minus(0.0002).toFixed(6), lat.add(0.0002).toFixed(6)],
          [lng.add(0.0002).toFixed(6), lat.add(0.0002).toFixed(6)],
          [lng.add(0.0002).toFixed(6), lat.minus(0.0002).toFixed(6)]
        ];
      }

      newValue.range = range;
      _this.emitInput(newValue);
      // 画范围
      var path = Object.assign([], range);

      var polygon = new AMap.Polygon({
        path: path,
        strokeColor: "#FF33FF",
        strokeWeight: 6,
        strokeOpacity: 0.2,
        fillOpacity: 0.4,
        fillColor: "#1791fc",
        zIndex: 50
      });

      map.add(polygon);
      map.setFitView([polygon]);
      var polyEditor = new AMap.PolyEditor(map, polygon);

      polyEditor.on("addnode", function(event) {
        console.log("触发事件：addnode");
      });

      polyEditor.on("adjust", function(event) {
        console.log("触发事件：adjust");
      });

      polyEditor.on("removenode", function(event) {
        console.log("触发事件：removenode");
      });

      polyEditor.on("end", function(event) {
        console.log("触发事件： end");
        // event.target 即为编辑后的多边形对象
        const rangeArr = event.target.toString().split(";");
        const range = new Array();
        rangeArr.forEach((v, k) => {
          range.push(v.split(","));
        });
        newValue.range = range;
        _this.emitInput(newValue);
      });
      this.polyEditor = polyEditor;
    }
  }
};
</script>

<style lang="scss" scoped>
@import "~@/styles/mixin.scss";
.map-container {
  width: 100%;
  position: relative;
  @include clearfix;
  .amap-wrapper {
    height: 300px;
    margin-bottom: 40px;
  }

  .range-edit {
    margin-top: -30px;
    width: 150px;
  }

  .range-edit-button {
    width: 150px;
    text-align: center;
    border: 1px solid #888;
  }

  .range-save-button {
    text-align: center;
    border: 1px solid #888;
  }
}
</style>
