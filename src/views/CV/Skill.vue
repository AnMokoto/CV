<template>
  <section class="el-container container-vertical">
    <h3>技术范畴：</h3>
    <div id="skill"></div>
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
    }
  },
  data () {
    return {
      chart: null
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
</style>
