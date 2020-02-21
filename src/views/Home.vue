<template>
  <div class="nav-counts">
    <div
      class="crad"
      v-for="(item,index) in dxyoverallList"
      :key="index"
    >
      <h2>
        统计
        <span class="due">
          截至时间:
          {{item.updateTime | formatDate}}
        </span>
      </h2>
      <div class="row">
        <div class="tag">
          {{item.currentConfirmedCount}}
          <div class="number">
            确诊
          </div>
        </div>
        <div class="tag">
          {{item.suspectedCount}}
          <div class="number">
            疑似
          </div>
        </div>
        <div class="tag">
          {{item.deadCount}}
          <div class="number">
            死亡
          </div>
        </div>
        <div class="tag">
          {{item.curedCount}}
          <div class="number">
            治愈
          </div>
        </div>
      </div>
      <div>
        <img
          width="100%"
          src="../assets/image/1.png"
          alt="疫情图片1"
        >
      </div>
      <div>
        <img
          width="100%"
          src="../assets/image/2.png"
          alt="疫情图片2"
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "home",
  data() {
    return {
      dxyoverallList: []
    };
  },
  created() {
    this.axios.get("/api/overall").then(res => {
      this.dxyoverallList = res.data.data.results;
      console.log(res.data.data);
    });
  },
  methods: {},
  filters: {
    formatDate: function(value) {
      let date = new Date(value);
      let y = date.getFullYear();
      let MM = date.getMonth() + 1;
      MM = MM < 10 ? "0" + MM : MM;
      let d = date.getDate();
      d = d < 10 ? "0" + d : d;
      let h = date.getHours();
      h = h < 10 ? "0" + h : h;
      let m = date.getMinutes();
      m = m < 10 ? "0" + m : m;
      let s = date.getSeconds();
      s = s < 10 ? "0" + s : s;
      return y + "-" + MM + "-" + d + " " + h + ":" + m + ":" + s;
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

.nav-counts {
  display: block;
  margin-top: 60px;
  .crad {
    padding: 1rem;
    margin: 10px 0;
    h2 {
      border-bottom: $border-bottom;
      border-left: $border-left;
      padding: 3px 10px;
      .due {
        color: #888;
        font-size: 0.9rem;
        font-weight: 400;
        padding-left: 10px;
      }
    }
    .row {
      display: $row;
      padding: 3px 0;
      justify-content: $space-between;
      .tag {
        border-radius: 4px;
        background-color: #f3f3f3;
        color: #888;
        padding: 5px 10px;
        text-align: $center;
        flex: 1 1;
        margin: 5px;
        .number {
          color: #f60;
          font-size: 1.2rem;
          font-weight: 600;
        }
      }
    }
  }
}
</style>

