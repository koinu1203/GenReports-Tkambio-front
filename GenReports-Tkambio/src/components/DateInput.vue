<script>
export default {
  name: "DateInput",
  props: {
    label: String,
  },

};
const onDatePick = ()=>{
  console.log('hola');
}
</script>

<template>
  <div class="input-date-text">
    <div class="input-date-text-content">
      <input type="text" readonly/>
      <a :on-click="onDatePick"><img class= "icon" src="../assets/svgs/calendar-icon.svg" alt="calendar icon" /></a>
    </div>
    <span>{{ label }}</span>
  </div>

</template>

<style lang="scss"></style>
