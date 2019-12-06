<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">Shopping</div></nav-bar>
      <home-swiper :banners="banners"></home-swiper>
      <home-recommend :recommends="recommends"></home-recommend>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'

import {getHomeMultiData} from 'network/home'


export default {
    name: 'Home',
    components: {
        NavBar,
        HomeSwiper,
        HomeRecommend
    },
    data() {
        return {
            banners: [],
            recommends: []
        }
    },
    created() {
        getHomeMultiData().then(res => {
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
        })
    }
}
</script>
<style scoped>
    .home-nav {
        background-color: var(--color-tint);
        color: #fff;
    }
</style>