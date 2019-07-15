<template>
  <footer>
    <span>Copyright &copy;{{year}} -
      <el-link href="https://github.com/anmokoto" :underline="false" target="_blank">Mr.Xu</el-link>
      . All Rights Reserved .
    </span>
    <div>
      <el-link rel="license" :underline="false" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"
               target="_blank">
        <img alt="Creative Commons License" style="border-width:0"
             src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png"/></el-link>
      <br/>License By
      <el-link rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/" target="_blank">
        Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License
      </el-link>
      .
    </div>
    <!--    <el-link rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License" style="border-width:0" src="https://i.creativecommons.org/l/by-nc-nd/4.0/88x31.png" /></el-link><br />This work is licensed under a <el-link rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License</el-link>.-->
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
