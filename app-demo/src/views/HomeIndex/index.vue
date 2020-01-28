<template>
  <div id="home">
    <van-tabs v-model="activeName" sticky>
      <van-tab title="幽默段子" :to="{ name: 'Txt' }"></van-tab>
      <van-tab title="搞笑图片" :to="{ name: 'Jpg' }"></van-tab>
      <van-tab title="滑稽动图" :to="{ name: 'Gif' }"></van-tab>
    </van-tabs>
    <keep-alive>
      <router-view />
    </keep-alive>
  </div>
</template>
<script>
export default {
  name: 'HomeIndex',
  data() {
    return { activeName: 'Txt' };
  }
};
</script>
