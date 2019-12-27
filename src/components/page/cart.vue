<template>
  <div>
    <div>
      <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="按钮"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    </div>
    <tabBar></tabBar>
  </div>
</template>
<script>
import tabBar from "../common/tabBar";
import navBar from "../common/navBar";
export default {
  name: "",
  props: [""],
  data() {
    return {};
  },
  methods: {
      onClickLeft(){
          this.$router.go(-1);
      }
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
    background-color: rgb(116, 25, 25);
}
</style>