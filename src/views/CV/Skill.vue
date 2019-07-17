<template>
  <section class="el-container container-vertical">
    <h3>技术范畴：</h3>
    <el-row :gutter="10">

      <el-col :sm="chartSpan" :xs="24" :md="24">
        <div id="skill"></div>
      </el-col>
      <el-col :sm="detailSpan" :xs="24" :md="24">
        <transition name="el-fade-in">
          <div v-show="detail" v-html="detail" class="skill-box"></div>
        </transition>
      </el-col>
    </el-row>

  </section>
</template>

<script>
import G2 from '@antv/g2'

export default {
  name: 'Skill',
  props: {
    data: {
      type: Array
    }
  },
  watch: {
    data: function () {
      this.invalidateChart()
    },
    detail: function () {
      this.event.initEvent('resize', true, true)
      window.dispatchEvent(this.event)
    }
  },
  data () {
    return {
      detail: '',
      chart: null,
      event: document.createEvent('Event')
    }
  },

  computed: {
    chartSpan () {
      if (this.detail) {
        return {
          span: 12
        }
      }
      return {
        span: 24
      }
    },
    detailSpan () {
      if (this.detail) {
        return {
          span: 12
        }
      }
      return {
        span: 1
      }
    }

  },
  mounted () {
    this.chart = new G2.Chart({
      container: 'skill',
      forceFit: true,
      padding: [10, 50, 100, 50] // 上右下左
    })

    this.chart.tooltip({
      showTitle: false,
      itemTpl: '<li><span style="background-color:{color};" class="g2-tooltip-marker"></span>{name}: {value}</li>'
    })
    this.chart.intervalStack()
      .position('percent')
      .color('name')
      .label('name', {
        formatter: (val) => val//item.point.item + ': ' + val
      })
      .tooltip('name*scope', (name, scope) => {
        return {
          name: name,
          value: scope + '%'
        }
      })
      .style({
        lineWidth: 5,
        stroke: '#FFF'
      })

    this.chart.coord('theta', {
      radius: 0.75
    })

    this.chart.on('interval:click', v => {
      // let name = v.shape._id
      // let suffix = name.substring(name.lastIndexOf('-') + 1, name.length)
      // let reg = this.data.filter(v => v.name === suffix)
      // if (reg.length > 0) {
      //   this.detail = reg[0].detail || ''
      // }
      this.detail = v.data._origin.detail || ''
    })
  },
  methods: {
    invalidateChart () {
      this.chart.source(this.data, {
        percent: {
          formatter: (val) => val
        }
      })
      this.chart.render()
    }
  }
}
</script>

<style scoped lang="stylus">
  #skill
    box-sizing border-box

  .skill-box
    max-height 100%
    height 15rem
    overflow scroll

    >>> li
      font-size 0.85rem
</style>
