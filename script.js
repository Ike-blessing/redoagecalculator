// OUTPUT ELEMENT
const output_year = document.querySelector('.output-year');
const output_month = document.querySelector('.output-month');
const output_day = document.querySelector('.output-day');
const submit_btn = document.querySelector('.submit-btn');

// INPUT 
let isvalid = false;
const input_year = document.querySelector('#year');
const input_month = document.querySelector('#month');
const input_day = document.querySelector('#day');

// ERROR ELEMENT
const error_year = document.querySelector('.error-year');
const error_month = document.querySelector('.error-month');
const error_day = document.querySelector('.error-day');
submit_btn.addEventListener('click', calculatedate)

input_day.addEventListener('input', e =>{
    if(+input_day.value < 1 ){
        error_day.textContent = "must be a valid day";
        isvalid = false;
        return;
    }else if(+input_day.value > 31 ){
        error_day.textContent = "must be a valid day";
        isvalid = false;
        return;
    }else {
        isvalid = true;
        error_day.textContent = "this feild is required";
    }
    if (+input_day.value === 0 ){

        isvalid = false;
    }else{
        error_day.textContent ="";
    }
});

input_month.addEventListener('input', e =>{
    if(+input_month.value > 12){
        error_month.textContent = "must be a valid date";
        isvalid = false;
        return;
    }else {
        isvalid = true;
        error_month.textContent = "this feild is required";
    }
    if (+input_month.value === 0 ){
        isvalid = false;
        return;
    }else{
        error_month.textContent ="";
    }
});

input_year.addEventListener('input', e =>{
    if(+input_year.value > 2023){
        error_year.textContent = "must be a valid date";
        isvalid = false;
        return;
    }else {
        isvalid = true;
        error_year.textContent = "this feild is required";
    }
    if (+input_year.value < 1 ){
        isvalid = false;
        return;
    }else{
        error_year.textContent ="";
    }
});

function calculatedate(e){

    if (isvalid){
        let ageDate = new Date ();
        let ageyears = ageDate.getUTCFullYear();
        let ageMonth = ageDate.getUTCMonth() + 1;
        let ageDay = ageDate.getUTCDay() ;

        if (input_month.value === ageMonth){
            dayotp =(input_day.value -  ageDay) - 30;
            monthotp = (ageMonth - input_month.value) + 1 ;
            yearotp = (ageyears - input_year.value);
        };
        
        if(input_day.value > ageDay){
            dayotp =(input_day.value -  ageDay) + 30;
            monthotp = (ageMonth - input_month.value) -1;
            yearotp = (ageyears - input_year.value);
        };
         
        if (input_month.value > ageMonth){
            dayotp =(input_day.value -  ageDay) ;
            monthotp = (ageMonth - input_month.value) + 12 ;
            yearotp = (ageyears - input_year.value) - 1;
        };

        output_day.textContent = dayotp;
        output_month.textContent = monthotp;
        output_year.textContent = yearotp;

        dayotp = localStorage.setItem('dayotp', dayotp);
        monthotp = localStorage.setItem('monthotp', monthotp);
        yearotp = localStorage.setItem('yearotp', yearotp);
    }else{
        alert('error');
    }
}

