<script>
export default {
  name: "Input",
  props: {
    label: String,
  },
};
</script>

<template>
  <div class="input-text">
    <div class="input-text-content">
      <input type="text" />
    </div>
    <span>{{ label }}</span>
  </div>

</template>

<style lang="scss"></style>
