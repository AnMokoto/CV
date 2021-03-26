<template>
  <section class="el-container container-vertical">
    <el-tooltip placement="left" :content="data.name" class="mine-print-dis">
      <el-image :src="data.avatar" :alt="data.name" v-show="true"></el-image>
    </el-tooltip>
    <span class="mine-print" v-show="false">{{data.realName}}</span>
    <el-divider></el-divider>
    <el-row type="flex" justify="space-around">
      <el-col :span="6" align="center">
        <el-tooltip placement="top" effect="dark" :content="data.phone">
          <el-link :underline="false" :href="`tel:${data.phone}`">
            <el-icon class="el-icon-mobile-phone"></el-icon>
            <span class="mine-print" v-show="false">{{data.phone}}</span>
          </el-link>
        </el-tooltip>
      </el-col>
      <el-col :span="6" align="center">
        <el-tooltip placement="top" effect="dark" :content="data.email">
          <el-link :underline="false" :href="`mailto:${data.email}`">
            <el-icon class="el-icon-message"></el-icon>
            <span class="mine-print" v-show="false">{{data.email}}</span>
          </el-link>
        </el-tooltip>
      </el-col>

      <el-col :span="6"  align="center">
        <el-tooltip placement="top" effect="dark" :content="data.github">
          <el-link :underline="false" :href="data.github">
            <el-icon class="el-icon-cpu"></el-icon>
            <span class="mine-print" v-show="false">{{data.github}}</span>
          </el-link>
        </el-tooltip>
      </el-col>

      <el-col :span="6" align="center" class="mine-print-dis">
        <el-tooltip placement="top" effect="dark" :content="data.college">
          <el-link :underline="false" :disabled="true">
            <el-icon class="el-icon-reading"></el-icon>
            <span class="mine-print" v-show="false">{{data.college}}</span>
          </el-link>
        </el-tooltip>
      </el-col>
    </el-row>
  </section>
</template>

<script>
export default {
  name: 'Mine',
  props: {
    data: {
      type: Object,
      required: false,
      default: () => {
        return {
          name: 'Mr.Xu',
          realName: '许石苗',
          avatar: 'images/2691563168619_.pic.jpg',
          email: 'chinaume@163.com',
          github: 'https://github.com/AnMokoto',
          phone: '+8613265779495',
          college: '华南理工大学 大专'
        }
      }
    },

  }
}
</script>

<style scoped lang="stylus">

  >>> .el-image
    max-width 4rem
    max-height 4rem
    margin 0 auto !important

  >>> .el-link
    white-space: nowrap;
    color: #606266 !important

  >>> .el-divider--horizontal
    width 58% !important
    margin 1rem auto !important


  @media print
    .mine-print
      font-size 0.8rem !important
      text-align center
      display inline-block !important
      overflow visible
      white-space nowrap

    .mine-print-dis
      display none

</style>
