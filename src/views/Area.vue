<template>
  <div class="nav-area">
    <div class="card">
      <h2>
        <div>全国疫情</div>
        <div><button @click="prev">返回</button></div>
      </h2>
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
        v-for="(item,index) in dxyareaallList"
        :key="index"
        v-show="item.countryName ===country || item.cityName!=null"
      >
        <div
          class="cell1"
          v-show="current"
          @click="change(index)"
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
  </div>
</template>

<script>
export default {
  name: "areaall",
  data() {
    return {
      dxyareaallList: [],
      country: "中国",
      current: true
    };
  },
  created() {
    this.axios.get("/api/area").then(res => {
      this.dxyareaallList = res.data.data.results;
      console.log(res.data.data.results);
    });
  },
  methods: {
    change(index) {
      console.log(index);
      this.dxyareaallList = this.dxyareaallList[index].cities;
      console.log(this.dxyareaallList);
    },
    prev() {
      this.$router.back(-1);
    }
  }
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

.nav-area {
  display: block;
  margin-top: 60px;
  .card {
    padding: 1rem;
    margin: 10px 0;
    h2 {
      border-bottom: $border-bottom;
      border-left: $border-left;
      padding: 3px 10px;
      display: $row;
      justify-content: $space-between;
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
  }
}
</style>