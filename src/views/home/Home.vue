<template>
  <div id="home">
      <nav-bar class="home-nav"><div slot="center">Shopping</div></nav-bar>
  </div>
</template>
<script>
import NavBar from 'components/common/navbar/NavBar'
import {getHomeMultiData} from 'network/home'

export default {
    name: 'Home',
    components: {
        NavBar
    },
    data(){
        return {
            result: null
        }
    },
    created() {
        getHomeMultiData().then(res => {
            console.log(res);
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