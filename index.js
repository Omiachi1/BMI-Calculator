const submitBtn = document.getElementById("submitBtn");
const userName = document.getElementById("name");
const userWeight = document.getElementById("weight");
const userAge = document.getElementById("age");
const userHeight = document.getElementById("height");


function calculateBmi(userData) {
   
    return (userData.weight/Math.pow(userData.height/100,2)*1000/1000).toFixed(3);

}

function displayResult(userData, bmi) {
    const output = document.getElementById("output");

    //2-12 years
    if (userData.age >=2 && userData.age <= 12) {
        if(bmi <15){
        output.innerHTML = `Name: <i>${userData.name}</i> <br> 
        Age: <i>${userData.age}</i> years old. <br> 
        BMI: <i>${bmi}kg/m²</i> <br> 
        BMI Status: Puting into consideration your age and BMI value, You are <i>Underweight.</i>`
        } if (bmi >15 && bmi <=20){
        output.innerHTML = `Name: <i>${userData.name}</i> <br> 
        Age: <i>${userData.age}</i> <br> 
        BMI: <i>${bmi}kg/m²</i> <br> 
        BMI Status: Puting into consideration your age and  BMI value, You are <i>Normal Weight.</i>`
        } if (bmi >= 21 && bmi <= 23){
        output.innerHTML = `Name: <i>${userData.name}</i> <br> 
        Age: <i>${userData.age}</i> <br> 
        BMI: <i>${bmi}kg/m²</i> <br> 
        BMI Status: Puting into consideration your age and  BMI value, You are <i>Overweight.</i>`
        } if (bmi >= 24) {
        output.innerHTML = `Name: <i>${userData.name}</i> <br> 
        Age: <i>${userData.age}</i> <br> 
        BMI: <i>${bmi}kg/m²</i> <br> 
        BMI Status: Puting into consideration your age and BMI value, You are <i>Obese.</i>`
        }
     }  
     
// 13 - 17 years 
    else if (userData.age >=13 && userData.age <= 17) {
        if(bmi <16){
        output.innerHTML = `Name: <i>${userData.name}</i> <br> 
        Age: <i>${userData.age}</i> years old. <br> 
        BMI: <i>${bmi}kg/m²</i> <br> 
        BMI Status: Puting into consideration your age and BMI value, You are <i>Underweight.</i>`
        } if (bmi >= 16 && bmi <= 22){
        output.innerHTML = `Name: <i>${userData.name}</i> <br> 
        Age: <i>${userData.age}</i> <br> 
        BMI: <i>${bmi}kg/m²</i> <br> 
        BMI Status: Puting into consideration your age and  BMI value, You are <i>Normal Weight.</i>`
        } if (bmi >= 23 && bmi <= 25){
        output.innerHTML = `Name: <i>${userData.name}</i> <br> 
        Age: <i>${userData.age}</i> <br> 
        BMI: <i>${bmi}kg/m²</i> <br> 
        BMI Status: Puting into consideration your age and  BMI value, You are <i>Overweight.</i>`
        } if (bmi >= 26) {
        output.innerHTML = `Name: <i>${userData.name}</i> <br> 
        Age: <i>${userData.age}</i> <br> 
        BMI: <i>${bmi}kg/m²</i> <br> 
        BMI Status: Puting into consideration your age and BMI value, You are <i>Obese.</i>`
        }
    } 


// 18 years and older 
    else if (userData.age >=18) {
        if(bmi <18.5){
        output.innerHTML = `Name: <i>${userData.name}</i> <br> 
        Age: <i>${userData.age}</i> years old. <br> 
        BMI: <i>${bmi}kg/m²</i> <br> 
        BMI Status: Puting into consideration your age and BMI value, You are <i>Underweight.</i>`
        } if (bmi >= 18.5 && bmi <= 24.9){
        output.innerHTML = `Name: <i>${userData.name}</i> <br> 
        Age: <i>${userData.age}</i> <br> 
        BMI: <i>${bmi}kg/m²</i> <br> 
        BMI Status: Puting into consideration your age and  BMI value, You are <i>Normal Weight.</i>`
        } if (bmi >= 25 && bmi <= 29.9){
        output.innerHTML = `Name: <i>${userData.name}</i> <br> 
        Age: <i>${userData.age}</i> <br> 
        BMI: <i>${bmi}kg/m²</i> <br> 
        BMI Status: Puting into consideration your age and  BMI value, You are <i>Overweight.</i>`
        } if (bmi >= 30) {
        output.innerHTML = `Name: <i>${userData.name}</i> <br> 
        Age: <i>${userData.age}</i> <br> 
        BMI: <i>${bmi}kg/m²</i> <br> 
        BMI Status: Puting into consideration your age and BMI value, You are <i>Obese.</i>`
        }
    }  
         
    else {
        output.innerHTML = NaN;
 }
}

submitBtn.addEventListener('click', () => {

    document.querySelector(".bmi-result").style.display = "block";

    const userData = { 
        name: userName.value.charAt(0).toUpperCase() + userName.value.slice(1).toLowerCase(),
        weight: parseFloat(userWeight.value), 
        age: parseInt(userAge.value), 
        height: parseFloat(userHeight.value) 
    }

    const bmi = calculateBmi(userData);
    displayResult(userData, bmi); 
    userName.value = ""; 
    userWeight.value = "";
    userAge.value = "";
    userHeight.value = "";

});


