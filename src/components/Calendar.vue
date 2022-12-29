<script>
function getFirstDay(date) {
  const initialDate = new Date(date.getFullYear(), date.getMonth(), 1)
    .toDateString()
    .split(" ")[0];
  switch (initialDate) {
    case "Mon":
      return 1;
    case "Tue":
      return 2;
    case "Wed":
      return 3;
    case "Thu":
      return 4;
    case "Fri":
      return 5;
    case "Sat":
      return 6;
    case "Sun":
      return 0;
  }
}
function getLastDay(date) {
  return new Date(date.getFullYear(), date.getMonth()+1, 0).getDate();
}

export default {
  props: {
    inputDate: {
      type: Date,
      default: null,
    },
  },
  data() {
    return {
      calendar: [],
      daySelected: new Date().getDate(),
      months: [
        "Janury",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "Octubre",
        "Novembre",
        "December",
      ],
      years: [...Array(new Date().getFullYear()-1899).keys()].map((el) => { return el + 1923}),
      selectedMonth: new Date().getMonth(),
      selectedYear: new Date().getFullYear()
    };
  },
  created(){

    if(this.inputDate){
      this.selectedMonth = this.inputDate.getMonth();
      this.selectedYear = this.inputDate.getFullYear();
      this.daySelected = this.inputDate.getDate();
      this.setDefaultCal(getFirstDay( this.inputDate),getLastDay( this.inputDate));
    }else{
      this.setDefaultCal(getFirstDay( new Date()),getLastDay( new Date()))
    }
  },
  methods: {
    setDefaultCal(startDay, numDays) {
      if(startDay===null && numDays){
        throw console.error("Need start Day and numDays to set a calendar");
      }
      if(numDays>32){
        throw console.error("numDays mayor al limite");
      }
      this.calendar=[];
      let i = 0;
      this.calendar=[...Array(6)].map(()=>{
        return [...Array(7)].map(()=>{
          if(startDay<1 && i<startDay+numDays){
            i++;
            return i;
          }else{
            startDay-=1;
            return ' ';
          }
        });
      });
    },
    onSelectDate(event) {
      if (event != "") {
        this.daySelected = event;
        const newDate= new Date(this.selectedYear,this.selectedMonth,event);
        this.$emit("update-date",newDate);
      }
    },
    updateCalendar(){
      const year= this.selectedYear;
      const month = this.selectedMonth;
      const newDate = new Date(year,month,1);
      const firstDay=getFirstDay(newDate);
      const numDays=getLastDay(newDate);
      this.daySelected = 1;
      this.setDefaultCal(firstDay,numDays);
    },
    onNextMonth(){
      if(this.selectedMonth===11){
        this.selectedMonth=0;
        this.selectedYear+=1;
      }else{
        this.selectedMonth+=1;
      }
      this.updateCalendar();

    },
    onBackMonth(){
      if(this.selectedMonth===0){
        this.selectedMonth=11;
        this.selectedYear-=1;
      }else{
        this.selectedMonth-=1;
      }
      this.updateCalendar();
    }
  },
  watch:{
    selectedMonth(){
      this.updateCalendar();
    },
    selectedYear(){
      this.updateCalendar();
    }
  }
};
</script>

<template>
  <div class="calendar">
    <div class="calendar-options">
      <div class="calendar-selector">
        <select v-model="selectedMonth">
          <option v-for="(month, index) in months" 
            :value="index">
            {{ month }}
          </option>
        </select>
        <select v-model="selectedYear">
          <option v-for="year in years" 
            :value="year"
            :key="year">
            {{ year }}
          </option>
        </select>
      </div>

      <div class="calendar-arrows-container">
        <a class="calendar-icon" @click="onBackMonth()">
          <i class="fa-solid fa-angle-left"></i>
        </a>
        <a class="calendar-icon" @click="onNextMonth() ">
          <i class="fa-solid fa-angle-right"></i>
        </a>
      </div>
    </div>
    <table class="calendar-content">
      <thead class="calendar-header">
        <tr>
          <th>S</th>
          <th>M</th>
          <th>T</th>
          <th>W</th>
          <th>T</th>
          <th>F</th>
          <th>S</th>
        </tr>
      </thead>
      <tbody class="calendar-body">
        <tr v-for="week,index in calendar" :key="index">
          <td v-for="val,indexVal in week" :key="indexVal.toString()+index.toString()" @click="onSelectDate(val)">
            <span :class="{ selected: daySelected === val }">{{ val }}</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
