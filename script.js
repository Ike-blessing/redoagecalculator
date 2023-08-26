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
    if(+input_day.value > 31){
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
    if (+input_year.value === 0 ){
        isvalid = false;
        return;
    }else{
        error_year.textContent ="";
    }
});

function calculatedate(){
    if (isvalid){
        let birthday = (input_month.value)/(input_day.value)/(input_year.value);
        console.log(birthday);
        let birthdateobj = new Date(birthday);
        let ageDiffMill = Date.now() - birthdateobj;
        let ageDate = new Date (ageDiffMill);
        let ageyears = ageDate.getFullYear() - 1970;
        let ageMonth = ageDate.getMonth();
        let ageDay = ageDate.getDay() - 1;

        output_day.textContent = ageDay;
        output_month.textContent = ageMonth;
        output_year.textContent = ageyears;
    }else{
        alert('error');
    }
}

