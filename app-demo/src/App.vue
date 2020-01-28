<template>
  <div id="App">
    <keep-alive>
      <router-view />
    </keep-alive>
    <van-tabbar route>
      <van-tabbar-item replace :to="{ name: 'HomeIndex' }" icon="home-o"
        >首页</van-tabbar-item
      >

      <van-tabbar-item replace :to="{ name: 'Video' }" icon="play-circle-o"
        >视频</van-tabbar-item
      >

      <van-tabbar-item replace :to="{ name: 'List' }" icon="gift-o"
        >列表</van-tabbar-item
      >

      <van-tabbar-item replace :to="{ name: 'Cart' }" icon="shopping-cart-o"
        >购物车</van-tabbar-item
      >

      <van-tabbar-item replace :to="{ name: 'Me' }" icon="user-circle-o"
        >我的</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0
    };
  }
};
</script>
