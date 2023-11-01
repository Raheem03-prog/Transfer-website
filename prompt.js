// using prompt to collect user details.//

const firstName = prompt ('Type your firstname');

const lastName = prompt ('Type your lastname');

const middleName = prompt ('Type your middlename');

const dateOfBirth = prompt ('Type your D.O.B');

const maritalStatus = prompt ('Type your marital status');

const weight = prompt ('Type your weight');

const height = prompt ('Type your height');

const highestQualification = prompt ('Type your qualification');

const idNumber = prompt ('Type your ID number');

// mapped all the details to an object.//

let userdetails = {
   firstName,
   lastName,
   middleName,
    dateOfBirth,
    maritalStatus,
    weight,
    height,
    highestQualification,
    idNumber,
}

// The object Having a extra parameters of Ageclassification.//

let ageClassification =   dateOfBirth;

if (ageClassification <= 7 ){
    console.log('Toddler');
}
else{
    console.log('adolescent')
}

if(ageClassification > 13 || ageClassification === 19 ){
    console.log('teenager')
}
else{
    console.log('babyAdult')
}
if (ageClassification > 26  ||  ageClassification === 35){
    console.log('adult')
}
else{
    console.log('midLifeCrisis')
}
if(ageClassification > 56 ){
    console.log('ancestor')
}

userdetails.ageClassification =   dateOfBirth;


console.log(userdetails);