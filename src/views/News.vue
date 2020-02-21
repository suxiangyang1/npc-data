<template>
  <div class="nav-news">
    <div class="card">
      <h2>
        疫情新闻
      </h2>
      <div class="row">
        <div
          class="tag"
          v-for="(news,index) in dxynewsList"
          :key="index"
        >
          <div class="title">
            <a href=""></a>{{news.title}}
          </div>
          <div class="summary-content">
            {{news.summary}}
          </div>
          <div class="bottom-content">
            <span class="word-colr">来源于{{news.infoSource}}&nbsp;&nbsp;</span>
            <span class="due">
              &nbsp;{{news.pubDate | formatDate}}
            </span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "news",
  data() {
    return {
      dxynewsList: []
    };
  },
  created() {
    this.axios.get("/api/news").then(res => {
      this.dxynewsList = res.data.data.results;
      console.log(res.data.data.ressults);
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

<style lang="scss">
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

.nav-news {
  display: block;
  margin-top: 60px;
  .card {
    padding: 1rem;
    margin: 10px 0;
    h2 {
      border-left: $border-left;
      border-bottom: $border-bottom;
      padding: 3px 10px;
    }
    .row {
      display: $row;
      padding: 3px 0;
      justify-content: $space-between;
      flex-wrap: wrap;
      .tag {
        display: $row;
        width: 400px;
        padding: 5px 0px;
        padding-right: 10px;
        margin: 5px;
        flex: 0 0 40%;
        flex-wrap: wrap;
        .title {
          font-size: 17px;
          font-weight: 600;
        }
        .summary-content {
          font-size: 13px;
          font-weight: 300;
          margin: 7px 0;
        }
        .bottom-content {
          font-weight: 200;
          display: $row;
          font-size: 10px;
          flex-direction: row-reverse;
          margin-left: auto;
          .word-colr {
            color: #fa512a;
          }
        }
      }
    }
  }
}
</style>