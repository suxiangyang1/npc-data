<template>
  <div>
    <div class="nav-bar">
      <ul>
        <li>
          <router-link to="/home">首页</router-link>
        </li>
        <li>
          <router-link to="/area">疫情地区</router-link>
        </li>
        <li>
          <router-link to="/news">疫情新闻</router-link>
        </li>
        <li>
          <router-link to="/overall">疫情统计</router-link>
        </li>
        <li>
          <router-link to="/rumors">疫情回复</router-link>
        </li>
      </ul>
    </div>

    <router-view />
  </div>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {};
  },
  created() {},

  methods: {}
};
</script>

<style lang="scss" scoped>
// 定义变量
$row: flex !global;
$none: none !global;
/*下边框 */
$border-bottom: 1px solid #f0f2f7 !global;
/*左边框 */
$border-left: 1px solid #fa512a !global;

.nav-bar {
  position: fixed;
  background-color: GhostWhite;
  border: 1px solid Gainsboro;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1000;
  ul {
    display: $row;
    list-style: $none;
    li {
      margin-right: 20px;
    }
  }
}
.nav-count {
  margin-top: 30px;
  border-left: $border-left;
  border-bottom: $border-bottom;
  display: $row;
  .row {
    display: $row;
  }
}
</style>