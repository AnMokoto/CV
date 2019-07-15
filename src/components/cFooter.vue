<template>
  <footer>
    <p>Copyright &copy;{{year}} -
      <el-link href="https://github.com/anmokoto" :underline="false" target="_blank">Mr.Xu</el-link>
      .All Rights Reserved.
    </p>
  </footer>
</template>

<script>
export default {
  name: 'cFooter',
  computed: {
    year () {
      return new Date().getFullYear()
    }
  }
}
</script>


<style scoped lang="stylus">
  footer
    background transparent
    text-align center
    font-size 0.75rem !important
    color #606266
    outline 0
    padding 0
    *
      vertical-align text-bottom !important

</style>
