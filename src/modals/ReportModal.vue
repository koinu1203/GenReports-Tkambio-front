<script>
import Input from "../components/Input.vue";
import DateInput from "../components/DateInput.vue";

export default {
  name: "ReportModal",
  components: {
    Input,
    DateInput,
  },
  methods: {
    generateReport() {
      this.closeModal();
    },
    submitEvent() {
      // console.log("Descripcion",this.description);
      // console.log("Inicio",this.initDate);
      // console.log("Fin",this.finishDate);
      this.$emit("closeModal");
    },
    closeModal() {
      this.$emit("closeModal");
    },
    validCheck() {
      if (
        this.description &&
        this.initDate &&
        this.finishDate &&
        Date.parse(this.initDate) <= Date.parse(this.finishDate)
      ) {
        this.isValidData = true;
      } else {
        this.isValidData = false;
      }
    },
    updateInitDate(event) {
      this.initDate = event;
      this.validCheck();
    },
    updateFinishDate(event) {
      this.finishDate = event;
      this.validCheck();
    },
  },
  data() {
    return {
      description: "",
      initDate: null,
      finishDate: null,
      isValidData: false,
    };
  },
};
</script>

<template>
  <div class="modal" @click="closeModal()">
      <div
        class="modal-body"
        
        @click.stop
      >
        <h2 class="modal-title">Reporte por fecha de nacimiento</h2>
        <h3 class="modal-subtitle">
          Ingresa los siguientes datos para generar tu reporte
        </h3>
        <form class="modal-content" @submit.prevent="submitEvent()">
          <Input
            label="Descripcion del reporte"
            @input="
              (event) => {
                description = event;
                this.validCheck();
              }
            "
            required
          />
          <span class="date-label">Fecha de nacimiento</span>
          <div class="input-date">
            <DateInput
              label="Inicio"
              :inputDate="initDate"
              :maxDate="finishDate"
              :errorMaxDate="'La fecha inicial es mayor a la final'"
              @update-date="updateInitDate($event)"
              required
            />
            <DateInput
              label="Fin"
              :inputDate="finishDate"
              :minDate="initDate"
              :errorMinDate="'La fecha final es menor a la inicial'"
              @update-date="updateFinishDate($event)"
              required
            />
          </div>
          <button :disabled="!isValidData">Generar reporte</button>
        </form>
      </div>
  </div>
</template>

<style lang="scss">
.date-label {
  margin-bottom: 14.5px;
}
</style>
