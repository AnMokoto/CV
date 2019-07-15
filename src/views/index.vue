<template>
  <div class="c-home">
    <el-image src="images/8bb75851eb1532b19b56e8ac9aaf1ca9.jpg" fit="fill"></el-image>
    <div class="c-home-text">
      <div class="c-home-text-round"></div>
      <span>When the life gives you lemons,<br/>Make lemonade.</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'index',
  data () {
    return {
      isMounted: false,
    }
  },
  mounted () {
    this.isMounted = true
    this.invalidateFooter()
  },
  methods: {
    invalidateFooter () {
      if (!this.isMounted) return
      document.getElementsByTagName('footer')[0]
        .setAttribute('style', 'position:absolute !important;bottom:0;color: white !important;width:100%;z-index:1;')
    }
  },
  beforeRouteLeave (from, to, next) {
    document.getElementsByTagName('footer')[0].removeAttribute('style')
    next()
  },
}
</script>

<style scoped lang="stylus">
  .c-home
    width 100%
    height 100%
    overflow hidden
    position absolute
    top 0
    z-index -1

  >>> .el-image
    width inherit !important


  .c-home-text
    color #AE9646
    text-shadow 1px 1px 1px #F5A623
    font-weight 800
    font-size: 2.5rem
    position absolute
    left: 12%
    top: 25%
    display flex
    flex-direction row
    align-items center
    text-transform none
    line-height 3.5rem

    span
      padding-left 1.5rem

  .c-home-text-round
    height 8rem
    width 4px
    background linear-gradient(45deg, #F5A623, #AE9646)
    border-radius 0.3rem
</style>

<!--<style scoped lang="stylus">-->
<!--  footer-->
<!--    bottom: 0;-->
<!--    position: absolute !important-->
<!--    /* text-align: center; */-->
<!--    width: 100%;-->
<!--    color: white !important-->
<!--</style>-->
