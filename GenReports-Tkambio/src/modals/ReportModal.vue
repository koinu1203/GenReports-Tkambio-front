<script>
import Input from "../components/Input.vue";
import DateInput from "../components/DateInput.vue"
export default {
  name: "ReportModal",
  components: {
    Input,
    DateInput
  },
};
</script>

<template>
  <div class="modal">
    <div class="modal-body">
      <h2 class="modal-title">Reporte por fecha de nacimiento</h2>
      <h3 class="modal-subtitle">Ingresa los siguientes datos para generar tu reporte</h3>
      <div class="modal-content">
        <Input label="Descripcion del reporte" />
        <span class="date-label">Fecha de nacimiento</span>
        <div class="input-date">
          <DateInput label="Inicio" />
          <DateInput label="Fin" />
        </div>
        <button>Generar reporte</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss">

.modal-title {
  padding-inline: 32.5px;
  margin-bottom: 18px;
}
.modal-subtitle{
    // padding-bottom: 22.5px;
  margin-bottom: 38.5px;

}
.modal-content {
  padding-inline: 11.5px;
  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
.date-label{
    margin-bottom: 14.5px;
}
.input-date{
    display: flex;
    gap: 15px;
}
</style>
