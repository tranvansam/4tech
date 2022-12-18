<script lang="ts">
export default {
  name: 'TitleAndDescription'
}
</script>

<script setup lang="ts">
interface PropTypes {
  title?: string
  description?: string
}

const props = withDefaults(defineProps<PropTypes>(), {})
</script>

<template>
  <div class="title-and-description">
    <h3 v-if="props.title" class="title">{{ props.title }}</h3>
    <p v-if="props.description" class="description">{{ props.description }}</p>
  </div>
</template>
