let ageTable=document.getElementById("age-table")
console.log(ageTable);

let labels=ageTable.getElementsByTagName("label");
console.log(labels);

let first_td=ageTable.querySelector("td");
console.log(first_td);

let form_name=document.querySelector('[name="search"]');
console.log(form_name);

let firstInput=form_name.querySelectorAll("input")[0];
console.log(firstInput);

let lastInput=form_name.getElementsByTagName("input");
lastIndex=lastInput.length;
lastInput[lastIndex-1]
console.log(lastInput);