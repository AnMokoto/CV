<template>
  <div class="container">
    <mine></mine>
    <skill :data="data.skill || []"></skill>
    <company :data="data.company || []"></company>
  </div>
</template>

<script>

import skill from './Skill'
import mine from './Mine'
import company from './Company'
import factory from '../../common/api'

export default {
  name: 'CV',
  components: {
    mine,
    skill,
    company
  },
  data () {
    return {
      data: [],
    }
  },
  created () {
    factory.cv()
      .then(v => {
        this.data = v.data || []
      })
  }
}
</script>

<style scoped>

</style>
