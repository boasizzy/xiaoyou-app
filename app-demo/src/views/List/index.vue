<template>
  <div id="list">
    <h3>电子专场</h3>

    <hr />
    <ul>
      <li v-for="item in productList" :key="item.skuId">
        <div class="image">
          <img :src="item.image" alt />
        </div>
        <div class="right">
          <div class="name">{{ item.name }}</div>
          <div class="praise">
            <span>好评:</span>
            <span>{{ item.goodRate }}</span>
          </div>
          <div class="staging">
            <span>分期付款</span>
            <span>顺丰包邮</span>
            <span>退货包运费</span>
          </div>
          <div class="sell">
            <span>¥</span>
            <span>3699</span>
            <span>已售</span>
            <span>583件</span>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { get } from '../../utils/ajax';
export default {
  name: 'List',
  data() {
    return {
      productList: []
    };
  },
  created() {
    get(
      'https://o2api.jd.com/data?body=%7B%22query%22%3A%22query%20getCommodities(%24ids%3A%20String)%7Bcommodities(ids%3A%20%24ids)%7BgroupId%2C%20groupName%2C%20productList%7BcanSell%20skuId%20name%20image%20commentCount%20goodRate%20jdPrice%20pcpPrice%20plusPrice%20tag%20copyWriting%20copyWritingDown%20backUpWords%7D%7D%7D%22%2C%22operationName%22%3A%22getCommodities%22%2C%22variables%22%3A%7B%22ids%22%3A%22%5B03504985%2C03505081%5D%22%7D%2C%22config%22%3A%7B%22cache%22%3Afalse%2C%22trim%22%3Atrue%2C%22map%22%3A%7B%22keyBy%22%3A%22groupId%22%2C%22valueField%22%3A%22productList%22%7D%7D%7D&_=1568689310891'
    ).then(res => {
      this.productList = res.data.data['03505081'];
      console.log(this.productList);
    });
  }
};
</script>
<style scoped>
html,
body,
ul {
  width: 100%;
  height: 100%;
}
li {
  width: 100%;
  margin-top: 15px;
  height: 150px;
}
* {
  margin: 0;
  padding: 0;
}
em {
  font-style: normal;
}
h3 {
  font-size: 16px;
  color: #242529;
  margin: 10px;
}

.image {
  float: left;
  width: 30%;
  height: 150px;
}
.image img {
  width: 100%;
  height: 150px;
}
.right {
  width: 66%;
  float: right;
  border-bottom: 1px solid #ededed;
  padding: 2%;
}
.name,
.praise,
.sell,
.staging {
  width: 100%;
}
.name {
  color: #9c9c9c;
  font-size: 13px;
  float: right;
}
.praise {
  font-size: 12px;
  color: #9c9c9c;
  text-align: right;
}
.praise :nth-child(2) {
  color: #ff6f23;
  margin-right: 10px;
}
.staging {
  color: #ff6f23;
  font-size: 12px;
  overflow: hidden;
}
.staging span {
  display: block;
  float: left;
  background: #fff2ea;
  padding: 2px;
  border-radius: 2px;
  margin-left: 10px;
}
.sell {
  font-size: 13px;
  color: hsl(228, 6%, 15%);
  margin: 8% 0 0 3px;
}
.sell :nth-child(1) {
  color: #e12f25;
  font-size: 15px;
}
.sell :nth-child(2) {
  color: #e12f25;
  font-size: 15px;
}
.sell :nth-child(3) {
  color: #9c9c9c;
  margin-left: 50%;
}
.sell :nth-child(4) {
  color: #9c9c9c;
}
</style>
