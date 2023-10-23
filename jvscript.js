// INPUTS
const day = document.querySelector("#day");
const month = document.querySelector("#month");
const year = document.querySelector("#year");
submit_btn = document.querySelector(".submit-btn")
let isvalid = false;

// OUTPUT
const output_day = document.querySelector(".output-day");
const output_month = document.querySelector(".output-month");
const output_year = document.querySelector(".output-year");

// ERROR OUTPUT
const error_day = document.querySelector(".error-day");
const error_month = document.querySelector(".error-month");
const error_year = document.querySelector(".error-year");

// INPUT ERROR
day.addEventListener('input', (e) => {
  if(+day.value > 31){
      isvalid = false;
      error_day.textContent = "must be a valid day";
      return;
  }else if(+day.value < 1){
      isvalid = false;
      error_day.textContent = "this field is required";
      return;
  }else{
      isvalid = true;
      error_day.textContent = " ";
  };
});

month.addEventListener('input', (e) => {
    if(+month.value > 12){
        isvalid = false;
        error_month.textContent = "must be a valid month";
        return;
    }else if(+month.value < 1){
        isvalid = false;
        error_month.textContent = "this field is required";
        return;
    }else{
        isvalid = true;
        error_month.textContent = " ";
    };
  });

  year.addEventListener('input', (e) => {
    if(+year.value > 2023){
        isvalid = false;
        error_year.textContent = "must be a valid year";
        return;
    }else if(+year.value === 0){
        isvalid = false;
        error_year.textContent = "this field is required";
        return;
    }else if(+year.value < 1600){
        isvalid = false;
        error_year.textContent = "invalid year";
        return;
    }else{
        isvalid = true;
        error_year.textContent = " ";
    };
  });

//CALCULATE AGE

function calculatedate(){
   valid = true;
   const d = new Date();
   let recentDay = d.getDate();
   let recentMonth = d.getMonth();    // remember to add + 1
   let recentYear = d.getFullYear(); 

   //SET ITEM
      localStorage.setItem("day", day.value);
      localStorage.setItem("month", month.value);
      localStorage.setItem("year", year.value);
   
   //RETRIEVE
      input1 = localStorage.getItem("day");
      input2 = localStorage.getItem("month");
      input3 = localStorage.getItem("year");
      
  //CALCULATION

  input_day = recentDay - input1;
  input_month = recentMonth - input2 + 1;
  input_year = recentYear - input3;


    if(input1 > recentDay){
        input_day = (recentDay + 30) - input1;
        input_month = recentMonth - input2 ;
      };

    if(input2 > recentMonth){
        input_month = 13 - (input2 - recentMonth);
        input_year = (recentYear - input3) - 1;
    };

    if(input1 > recentDay, input2 > recentMonth){
        input_day = (recentDay + 30) - input1;
        input_month = 12 - (input2 - recentMonth);
        input_year = (recentYear - input3) - 1;
    }
    

      output_day.textContent = input_day;
      output_month.textContent = input_month;
      output_year.textContent = input_year;
 
};