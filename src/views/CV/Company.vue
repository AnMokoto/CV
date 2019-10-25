<template>
  <section class="el-container container-vertical">
    <h3>社会阅历：</h3>
    <el-timeline :reverse="true">
      <template v-for="(item,index) in data">
        <el-timeline-item :key="item.timestamp" placement="top" :timestamp="item.timestamp || '--'">

          <el-link :underline="false" @click="current === index ? current = -1 : current = index">
            {{item.name}}
          </el-link>

          <el-collapse-transition>
            <div v-show="current === index" class="c-company-content">
              <!--              <el-divider/>-->
              <el-row :gutter="15">
                <el-col :span="18" :xs="24" :sm="18" :md="18">
                  <div>
                    <span>职务：{{item.duties}}</span>
                  </div>
                  <el-divider/>
                  <article>
                    <h3>工作内容：</h3>
                    <section v-html="item.introduction"></section>
                  </article>
                </el-col>
                <el-col :span="6" :xs="24" :sm="6" :md="6">
                  <el-row :gutter="15" class="c-company-cover">
                    <template v-for="(pro,index) in (item.product||[]) ">
                      <el-col :key="index" :span="12" :sm="24" :md="12" align="center">
                        <el-tooltip placement="top" effect="dark" :content="pro.name">
                          <el-link :href="pro.href" :underline="false" target="_blank" :disabled="!pro.enable">
                            <el-image :alt="pro.name" :src="pro.image"></el-image>
                            <el-tag size="small" type="success">{{pro.name}}</el-tag>
                          </el-link>
                        </el-tooltip>
                      </el-col>
                    </template>
                  </el-row>
                </el-col>
              </el-row>


              <!--              <el-button icon="el-icon-arrow-up" circle @click="current = -1"></el-button>-->
            </div>
          </el-collapse-transition>

        </el-timeline-item>
      </template>
    </el-timeline>
  </section>
</template>

<script>
export default {
  name: 'Company',
  props: {
    data: Array
  },
  data () {
    return {
      current: -1
    }
  }
}
</script>

<style scoped lang="stylus">
  .c-company-content
    padding 1rem
    box-sizing border-box

  @media print
    .c-company-content
      display block !important

    .c-company-cover
      display block !important;

  >>> .el-button
    border-color transparent

  >>> .el-timeline
    width inherit
    box-sizing border-box

  >>> .el-image
    width 100%
    height 100%
    max-width 100px
    overflow hidden
    object-fit contain

  >>> .el-col
    margin-top 5px

</style>

<style media="print" scoped lang="stylus">

</style>
