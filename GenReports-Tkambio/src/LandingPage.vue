<script>
import Header from './components/Header.vue';
import ReportTable from './components/Table.vue';
import ReportModal from './modals/ReportModal.vue';
import Calendar from './components/Calendar.vue';
export default{
    name:'LandingPage',
    components:{
        ReportModal,
        Header,
        ReportTable,
    },
    data(){
        return {
            showModal:false
        }
    }
}
</script>

<template>
  <ReportModal v-if="showModal" @closeModal="()=> showModal = false"/>
  <Header/>
  <section>
    <h1>Generador de reportes</h1>
    <ReportTable/>
    <button id="open-report-modal" @click="showModal=true"> Crear reporte</button>
  </section>
</template>

<style lang="scss">
  section h1{
    margin-top: 55px;
    margin-bottom: 96px;
  }
  button{
    margin-top: 30px;
  }

</style>