<template>
  <div>
    <div>
      <van-nav-bar right-text="登录" @click-right="onClickRight" />
    </div>
    <div class="sweiper">
      <van-swipe :autoplay="10000">
        <van-swipe-item v-for="(image, index) in images" :key="index">
          <img v-lazy="image" />
        </van-swipe-item>
      </van-swipe>
    </div>
    <div class="contain">
      <div class="list-item" v-for="(image, index) in images" :key="index">
        <div class="item">
          <img v-lazy='image'>
          <div class="text">描述</div>
        </div>
      </div>
    </div>
    <tabBar></tabBar>
  </div>
</template>
<script>
import tabBar from "../common/tabBar";
import navBar from "../common/navBar";
import Vue from "vue";
import { Grid, GridItem, Image } from "vant";
import { Lazyload } from "vant";
import { Swipe, SwipeItem } from "vant";
Vue.use(Grid)
  .use(GridItem)
  .use(Image);
Vue.use(Lazyload);
Vue.use(Swipe).use(SwipeItem);
export default {
  name: "",
  props: [""],
  data() {
    return {
      images: [
        "https://img.yzcdn.cn/vant/apple-1.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
        "https://img.yzcdn.cn/vant/apple-2.jpg",
      ]
    };
  },
  methods: {
    onClickRight() {}
  },
  created() {},
  components: {
    tabBar
  },

  computed: {},

  beforeMount() {},

  mounted() {},

  watch: {}
};
</script>
<style lang='scss' scoped>
.van-nav-bar{
  background-color: #24ABF2;
}
.sweiper {
  width: 100%;
   .van-image {
      width: 100%;
    }
  .van-swipe-item {
    box-sizing: border-box;
    padding: 10px;
   
    img {
      width: 100%;
      border-radius: 10px;
      height: 180px;
    }
  }
}
.contain {
  display: flex;
  padding: 10px;
  box-sizing: border-box;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  .list-item {
    width: 10%;
    box-sizing: border-box;
    &:nth-child(1) {
      margin-left: 0px;
    }
    .item{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      img{
        width: 100%;
      }
      div{
      margin-top: 5px;
    }
    }
  }
}
</style>