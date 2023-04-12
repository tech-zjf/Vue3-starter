<template>
  <!-- <div @click="handleclick">首页 - {{ state.name }} - {{ count }}</div> -->
  <p>首页</p>
</template>
<script setup lang="ts">
import { reactive, getCurrentInstance, ComponentInternalInstance } from "vue";
import { useCounterStore } from "@/stores/counter";
const { proxy } = getCurrentInstance() as ComponentInternalInstance;
const { count, increment } = useCounterStore();

const state = reactive<{ name: string; age: number }>({
  name: "张三",
  age: 123,
});

async function handleclick() {
  // const data = await proxy.$Api.getArticleList({ page: 1, pageSize: 20 });
  // console.log(data);
  state.name = "李四";
  increment();
}
</script>
