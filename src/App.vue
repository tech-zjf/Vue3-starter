<template>
  <h4 class="bg-gray-100 text-teal-300 text-center">哈喽哇！</h4>
  <Test />
  <RouterView />
</template>
<script setup lang="ts">
import { RouterView } from "vue-router";
import Test from "@/components/test-component/index.vue";
</script>
<style scoped></style>
