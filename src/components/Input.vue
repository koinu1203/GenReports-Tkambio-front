<script>
export default {
  props: {
    label: String,
  },
  emits:['input'],
  methods:{
    handleInput(e){
      this.$emit('input',e.target.value);
    }
  }
};
</script>

<template>
  <div class="input-text">
    <div class="input-text-content">
      <input type="text" 
       @input="handleInput"
      />
    </div>
    <span>{{ label }}</span>
  </div>

</template>

<style lang="scss"></style>
