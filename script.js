function handlesubmitform(){
const student = {}
student.fName = document.querySelector("#fName").value;
student.lName = document.querySelector("#lName").value;
student.email = document.querySelector("#email").value;
student.adress = document.querySelector("#adress").value;

const tableRow=document.createElement("tr");
Object.values(student).forEach((value) => {
const tableData=document.createElement("td");

const textNode=document.createTextNode(value);//const textNode=document.createTextNode(student[value]xs )
tableData.appendChild(textNode);
tableRow.appendChild(tableData)});

const table=document.querySelector("#student-table");
table.appendChild(tableRow);
Object.keys(student).forEach(key=>{
    document.querySelector("#"+key).value=" "//just when id and key are equal
})
}