<script>
import Calendar from "./Calendar.vue";
export default {
  name: "DateInput",
  props: {
    label: String,
    inputDate: {
      type: Date,
      default: null,
    },
    minDate: {
      type: Date,
      default: null,
    },
    errorMinDate: {
      type: String,
      default: "La fecha no puede ser menor a la minima permitida",
    },
    maxDate: {
      type: Date,
      default: null,
    },
    errorMaxDate: {
      type: String,
      default: "La fecha supera la maxima permitida",
    },
  },
  update() {
    if (!this.inputDate) {
      return;
    }
    this.errorText = "";
    if (this.maxDate && Date.parse(this.maxDate) < Date.parse(this.inputDate)) {
      this.errorText = this.errorMaxDate;
    }
    if (this.minDate && Date.parse(this.minDate) > Date.parse(this.inputDate)) {
      this.errorText = this.errorMinDate;
    }
  },
  components: {
    Calendar,
  },
  methods: {
    showDatePick() {
      this.showCalendar = !this.showCalendar;
    },
    updateDate(event) {
      if (event) {
        this.dateText = this.formatDate(event);
        this.showCalendar = false;
        this.$emit("update-date", event);
      }
      this.errorText = "";
      if (this.maxDate && Date.parse(this.maxDate) < Date.parse(event)) {
        this.errorText = this.errorMaxDate;
      }
      if (this.minDate && Date.parse(this.minDate) > Date.parse(event)) {
        this.errorText = this.errorMinDate;
      }
    },
    formatDate(date) {
      const month = date.getMonth() + 1;
      const day = date.getDate();
      return `${day < 10 ? "0" : ""}${day}/${
        month < 10 ? "0" : ""
      }${month}/${date.getFullYear()}`;
    },
  },
  data() {
    return {
      showCalendar: false,
      dateText: "",
      errorText: "",
    };
  },
};
</script>

<template>
  <div class="input-date-picker">
    <div class="input-date-text">
      <div class="input-date-text-content" :class="{ 'error-date': errorText }">
        <input type="text" v-model="dateText" readonly />
        <a @click="showDatePick()"
          ><img
            class="icon"
            src="../assets/svgs/calendar-icon.svg"
            alt="calendar icon"
        /></a>
      </div>
      <span>{{ label }}</span>
    </div>
    <span v-if="errorText" class="input-date-error">{{ errorText }}</span>
    <Transition name="calendar">
      <div v-if="showCalendar">
        <Calendar :inputDate="inputDate" @update-date="updateDate($event)" />
      </div>
    </Transition>
  </div>
</template>

<style lang="scss"></style>
