<template>
  <b-container fluid>
    <b-row>
      <b-col><Headder></Headder></b-col>
    </b-row>
    <b-row>
      <b-col cols="2"><Manu></Manu></b-col>
      <b-col><router-view></router-view></b-col>
    </b-row>
  </b-container>
</template>

<script>
import Headder from './Header.vue'
import Manu from './Manu.vue'
export default {
  components: {
    Headder,
    Manu
  }
}
</script>
