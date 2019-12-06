<template>
  <div class="goods">
      <goods-list-item v-for="item in goods" :goods-item="item"></goods-list-item>
      <ul>
          <li>1</li>
          <li>2</li>
          <li>3</li>
          <li>4</li>
          <li>5</li>
      </ul>
  </div>
</template>
<script>
import GoodsListItem from './GoodsListItem'
export default {
    name: 'GoodsList',
    components: {
        GoodsListItem
    },
    props: {
        goods: {
            type: Array,
            default() {
                return []
            }
        }
    }
}
</script>
<style scoped>
    .good-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        background-color: var(--color-background);
        padding: 2px;
  }
</style>