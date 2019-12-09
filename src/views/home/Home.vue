<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">Shopping</div></nav-bar>

      <scroll class="content">
        <home-swiper :banners="banners"></home-swiper>
        <home-recommend :recommends="recommends"></home-recommend>
        <home-feature></home-feature>
        <tab-control class="tab-control" 
        :titles="['流行', '新款', '精选']" @tabClick="tabClick"></tab-control>
        <goods-list :goods="showGoods"></goods-list>
      </scroll>
  </div>
</template>
<script>
//子组件
import HomeSwiper from './childComps/HomeSwiper'
import HomeRecommend from './childComps/HomeRecommend'
import HomeFeature from './childComps/HomeFeature'
//公共组件
import NavBar from 'components/common/navbar/NavBar'
import TabControl from 'components/content/tabControl/TabControl'
import GoodsList from 'components/content/goods/GoodsList'
import Scroll from 'components/common/scroll/Scroll'
//一些方法
import {
    getHomeMultiData, 
    getHomeGoods
} from 'network/home'


export default {
    name: 'Home',
    components: {
        HomeSwiper,
        HomeRecommend,
        HomeFeature,
        NavBar,
        TabControl,
        GoodsList,
        Scroll
    },
    data() {
        return {
            banners: [],
            recommends: [],
            goods: {
                'pop': {pape: 0, list: []},
                'new': {pape: 0, list: []},
                'sell': {pape: 0, list: []}
            },
            currentType: 'pop'
        }
    },
    computed: {
        showGoods() {
            return this.goods[this.currentType].list
        }
    },
    created() {
        this.getHomeMultiData()

        this.getHomeGoods('pop')
    },
    methods: {
        //事件监听方法
        tabClick(index) {
            switch(index) {
                case 0: 
                    this.currentType = 'pop'
                    break
                case 1:
                    this.currentType = 'new'
                    break
                case 2:
                    this.currentType = 'sell'
                    break
            }
        },
        //网络请求方法
        getHomeMultiData() {
            getHomeMultiData().then(res => {
            this.banners = res.data.banner.list
            this.recommends = res.data.recommend.list
            })
        },
        getHomeGoods(type) {
            const page = this.goods[type].page + 1
            getHomeGoods(type, page).then(res => {
                console.log(res);
            this.goods[type].list.push(...res.data.list)
            this.goods[type].page += 1
        })
        }
    }
}
</script>
<style scoped>
    #home {
        padding-top: 44px;
        position: relative;
    }
    .home-nav {
        background-color: var(--color-tint);
        color: #fff;

        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        z-index: 0;
    }
    .tab-control {
        position: sticky;
        top: 44px;
        z-index: 9;
    }

    .content {
        /* overflow: hidden; */
        position: absolute;
        top: 44px;
        bottom: 49px;
        left: 0;
        right: 0;
    }
</style>