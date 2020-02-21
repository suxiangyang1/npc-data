<template>
  <div class="nav-rumors">
    <div class="card1">
      <h2>
        疫情回复
      </h2>
      <div
        class="card2"
        v-for="(rumors,index) in dxyrumorsList"
        :key="index"
      >
        <div class="title">
          {{rumors.title}}
        </div>
        <div class="body-conent">
          {{rumors.body}}
        </div>
        <div class="mainSummary">
          {{rumors.mainSummary}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "rumors",
  data() {
    return {
      dxyrumorsList: []
    };
  },
  created() {
    this.axios.get("/api/rumors").then(res => {
      this.dxyrumorsList = res.data.data.results;
      console.log(res.data.data);
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
//等分留白对齐
$space-evenly: space-evenly;

.nav-rumors {
  display: block;
  margin-top: 60px;
  .card1 {
    padding: 1rem;
    margin: 10px 0;
    h2 {
      padding: 3px 10px;
      border-bottom: $border-bottom;
      border-left: $border-left;
    }
    .card2 {
      border-bottom: $border-bottom;
      padding: 10px 0;
      justify-content: $space-evenly;
      .title {
        font-size: 24px;
      }
      .body-conent {
        font-size: 16px;
        color: #fa512a;
        margin: 5px 0;
      }
      .mainSunmmary {
        color: #fa512a;
        font-weight: 400;
      }
    }
  }
}
</style>