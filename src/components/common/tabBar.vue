<template>
  <div>
    <van-tabbar v-model="active" inactive-color="#777777" active-color="#000000">
      <van-tabbar-item icon="home-o" to="/Home">主页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/search">搜索</van-tabbar-item>
      <van-tabbar-item icon="cart-o" to="/cart">购物车</van-tabbar-item>
      <van-tabbar-item icon="user-o" to="/user">个人中心</van-tabbar-item>
    </van-tabbar>
  </div>
</template>
<script>
import Vue from "vue";
import { Tabbar, TabbarItem } from "vant";
Vue.use(Tabbar).use(TabbarItem);
export default {
  name: "",
  props: [""],
  data() {
    return {
      active: 0
    };
  },

  methods: {},

  created() {
    if (this.$route.path == "/Home") {
      this.active = 0;
    }
    if (this.$route.path == "/search") {
      this.active = 1;
    }
    if (this.$route.path == "/cart") {
      this.active = 2;
    }
    if (this.$route.path == "/user") {
      this.active = 3;
    }
  },

  components: {},

  computed: {},

  beforeMount() {},

  mounted() {},

  watch: {}
};
</script>
<style lang="scss" scoped >
</style>