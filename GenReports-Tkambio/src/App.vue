<script setup>
import Header from './components/Header.vue';
import ReportTable from './components/Table.vue';
import ReportModal from './modals/ReportModal.vue';
</script>

<template>
  <ReportModal/>
  <Header/>
  <h1>Generador de reportes</h1>
  <ReportTable/>
  <button> Crear reporte</button>

</template>

<style lang="scss">
  @import './styles/_main.scss';
  h1{
    margin-top: 55px;
    margin-bottom: 96px;
  }
  button{
    margin-top: 30px;
  }
  // @import './styles/_fonts.scss';

</style>