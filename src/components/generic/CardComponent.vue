<template>
  <div class="mx-4 bg-black/[.05] p-4 rounded-md mb-4 md:mb-0">
    <h3 class="text-2xl mb-4">{{ props.title }}</h3>
    <div v-if="props.list">
      <ul v-for="(item, index) in props.list" :key="index" class="list-disc list-inside">
        <li>{{ item }}</li>
      </ul>
    </div>

    <div v-if="props.listWithTitles">
      <div v-for="(console, index) in props.listWithTitles" :key="index">
        <h4 class="text-xl">{{ console.key }}</h4>
        <ul v-for="(item, index) in console.value" :key="index" class="list-disc list-inside">
          <li>{{ item }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
export interface Props {
  title: string,
  list?: string[],
  listWithTitles?: {
    key: string,
    value: string[]
  }[]
}

const props = defineProps<Props>()
</script>