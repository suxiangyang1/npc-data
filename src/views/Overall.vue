<template>
  <div>
    <div id="chart_example"></div>
    <div class="titleHeader">
      <div class="cell1">
        地区
      </div>
      <div class="cell2">
        确诊
      </div>
      <div class="cell3">
        死亡
      </div>
      <div class="cell4">
        治愈
      </div>
    </div>
    <div
      class="body-content"
      v-for="(item,index) in dxyList"
      :key="index"
      v-show="item.countryName ===country || item.cityName!=null"
    >
      <div
        class="cell1"
        v-show="current"
      >
        {{item.provinceShortName}} {{item.cityName}}
      </div>
      <div
        class="cell2"
        v-show="current"
      >
        {{item.currentConfirmedCount}}
      </div>
      <div
        class="cell3"
        v-show="current"
      >
        {{item.deadCount}}
      </div>
      <div
        class="cell4"
        v-show="current"
      >
        {{item.curedCount}}
      </div>

    </div>
  </div>
</template>
 
<script>
// 首先要 cnpm install echarts
import echarts from "echarts";
import "../../node_modules/echarts/map/js/china";
import "../../node_modules/echarts/map/js/province/xinjiang.js";

//定义全国省份的数组
var provinces = [
  "shanghai",
  "hebei",
  "shanxi",
  "neimenggu",
  "liaoning",
  "jilin",
  "heilongjiang",
  "jiangsu",
  "zhejiang",
  "anhui",
  "fujian",
  "jiangxi",
  "shandong",
  "henan",
  "hubei",
  "hunan",
  "guangdong",
  "guangxi",
  "hainan",
  "sichuan",
  "guizhou",
  "yunnan",
  "xizang",
  "shanxi1",
  "gansu",
  "qinghai",
  "ningxia",
  "xinjiang",
  "beijing",
  "tianjin",
  "chongqing",
  "xianggang",
  "aomen",
  "taiwan"
];

var provincesText = [
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "四川",
  "河南",
  "",
  "",
  "黑龙江",
  "",
  "江苏",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "",
  "广东",
  "内蒙古",
  "陕西",
  "北京",
  "福建",
  "新疆",
  "辽宁",
  "河北",
  "浙江",
  "安徽",
  "重庆",
  "山东",
  "贵州",
  "山西",
  "江西",
  "吉林",
  "云南",
  "广西",
  "上海",
  "湖南",
  "湖北",
  "西藏",
  "天津",
  "甘肃",
  "海南",
  "青海",
  "宁夏",
  "香港",
  "台湾",
  "澳门"
];

export default {
  data() {
    name: "all";
    return {
      dxyList: [],
      country: "中国",
      current: true
    };
  },
  created() {
    this.axios.get("/api/area").then(res => {
      this.dxyList = res.data.data.results;
      console.log(res.data.data.results);
    });
  },
  mounted() {
    let this_ = this;
    let myChart = echarts.init(document.getElementById("chart_example"));
    console.log(myChart);

    /**
     * 中国地图
     * 必须引入china.js
     * https://www.cnblogs.com/ldlx-mars/p/9242250.html
     * map配置
     * https://echarts.baidu.com/option.html#series-map.map
     * 高亮颜色
     * https://www.cnblogs.com/xianwen/p/6045454.html
     */
    let option = {
      series: [
        {
          type: "map",
          // mapType: 'china'// mapType或者map都可以
          map: "china"
        }
      ]
    };

    myChart.setOption(option);

    myChart.on("click", function(param) {
      this.city = param.name;
      console.log(this.city);
      var a = provincesText.indexOf(this.city);
      console.log(this.dxyList[a]);
      this.dxyList = this.dxyList[this.index].cities;
    });
  },

  methods: {}
};
</script>
 
<style lang="scss" scoped>
//定义变量
$row: flex;
$none: none;
/*下边框 */
$border-bottom: 1px solid #f0f2f7;
/*左边框 */
$border-left: 3px solid #fa512a;
// 等间距留白方式
$space-between: space-between;
// 居中对齐
$center: center;

#chart_example {
  width: 60%;
  height: 600px;
  margin: 0 auto;
}
.titleHeader {
  display: $row;
  text-align: center;
  .cell1 {
    flex: 1.5 0 30%;
    background-color: #fa512a;
    color: #f0f2f7;
    padding: 0.3rem 0;
    border: 1px solid #fff;
  }
  .cell2 {
    flex: 1 0 20%;
    background-color: #fa512a;
    color: #f0f2f7;
    padding: 0.3rem 0;
    border: 1px solid #fff;
  }
  .cell3 {
    flex: 1 0 20%;
    background-color: #fa512a;
    color: #f0f2f7;
    padding: 0.3rem 0;
    border: 1px solid #fff;
  }
  .cell4 {
    flex: 0 20%;
    background-color: #fa512a;
    color: #f0f2f7;
    padding: 0.3rem 0;
    border: 1px solid #fff;
  }
}
.body-content {
  display: $row;
  text-align: center;
  display: $row;
  .cell1 {
    flex: 1.5 0 30%;
    background-color: #f8f8f8;
    font-weight: 500;
    padding: 0.3rem 0;
    border: 1px solid #fff;
  }
  .cell2 {
    flex: 1 0 20%;
    background-color: #f8f8f8;
    font-weight: 300;
    padding: 0.3rem 0;
    border: 1px solid #fff;
  }
  .cell3 {
    flex: 1 0 20%;
    background-color: #f8f8f8;
    font-weight: 300;
    padding: 0.3rem 0;
    border: 1px solid #fff;
  }
  .cell4 {
    flex: 0 20%;
    background-color: #f8f8f8;
    font-weight: 300;
    padding: 0.3rem 0;
    border: 1px solid #fff;
  }
}
</style>