<template>
  <div id="txt">
    <ul>
      <li v-for="item in jpgList" :key="item.sid">
        <p class="header">
          <img :src="item.header" alt="" />
          <span>{{ item.name }}</span>
        </p>
        <div class="content">
          <p>{{ item.text }}</p>
          <img :src="item.images" alt="" />
        </div>

        <div class="kamikata">
          <img src="../../../public/image/shenping.jpg" alt="" />
          <p class="commentcontent">
            {{ item.top_comments_content }}
          </p>
        </div>
        <div class="attitude">
          <span class="up">
            <img src="../../../public/image/up.png" alt="" />
            <em>{{ item.up }}</em>
          </span>
          <span class="down">
            <img src="../../../public/image/down.png" alt="" />
            <em>{{ item.down }}</em>
          </span>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
import { get } from '../../utils/ajax';
export default {
  name: 'Jpg',
  data() {
    return {
      jpgList: []
    };
  },
  created() {
    get('https://api.apiopen.top/getJoke?count=50&type=image').then(res => {
      this.jpgList = res.data.result;
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
  border-bottom: 10px solid #efeff7;
}
* {
  margin: 0;
  padding: 0;
}
em {
  font-style: normal;
}
#txt {
  width: 100%;
  height: 100%;
}
.header,
.attitude,
.content {
  width: 100%;
}
.header {
  display: flex;
  flex-direction: row;
}
.header img {
  margin: 10px 0 0 20px;
  width: 45px;
  height: 45px;
  border-radius: 50%;
}
.header span {
  margin: 19px 0 0 10px;
  font-size: 14px;
  color: #7b7e87;
}

.content p {
  color: #242529;
  font-size: 16px;
  margin: 10px 20px;
}
.content img {
  width: 90%;
  /* margin: 10px auto; */
  margin-left: 20px;
}

.kamikata {
  background: #f5f5f7;
  border-radius: 5px;
  width: 90%;
  margin: 0 auto;
  padding: 10px 10px;
}
.kamikata img {
  width: 60px;
  height: 20px;
}
.commentcontent {
  margin-top: 10px;
  color: #242529;
  font-size: 16px;
}
.attitude {
  margin: 10px;
}
.attitude img {
  width: 20px;
  height: 20px;
}
.up {
  margin-left: 240px;
}
.up em {
  margin-left: 5px;
}
.down {
  margin-left: 20px;
}
.down em {
  margin-left: 5px;
}
</style>
