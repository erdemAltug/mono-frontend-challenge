<template>
   <v-app-bar :elevation="2">
  <template v-slot:prepend>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>
  </template>

  <v-app-bar-title>Application Bar</v-app-bar-title>

</v-app-bar>


<v-card
style="margin-top: 10rem;"
      width="400"
      title="This is a title"
      subtitle="This is a subtitle"
      :text="input"
    ></v-card>
 </template>


<script lang="ts" setup>
import { ref, onMounted } from 'vue'
const input = ref("bzzt")
</script>

<style scoped="scss"></style>