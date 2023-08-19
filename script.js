const students = [
    {
      ID: 1,
      name: 'Alice',
      age: 21,
      grade: 'A',
      degree: 'Btech',
      email: 'alice@example.com'
    },
    {
      ID: 2,
      name: 'Bob',
      age: 22,
      grade: 'B',
      degree: 'MBA',
      email: 'bob@example.com'
    },
    {
      ID: 3,
      name: 'Charlie',
      age: 20,
      grade: 'C',
      degree:'Arts',
      email: 'charlie@example.com'
    }
  ]; 
  const formElement = document.getElementById("studentForm");


const tableElement = document.getElementById("studentTable");
const btn = document.getElementById("addBtn");

index = 0; 
btn.addEventListener("click",(event) => {
    event.preventDefault();
    
    if(index >= students.length )
     {
        
    }
     const tableRow = document.createElement("tr");
     

     const idCell= document.createElement("td");
     idCell.innerText = students[index].ID;

     const nameCell= document.createElement("td");
     nameCell.innerText = students[index].name;

     const emailCell= document.createElement("td");
     emailCell.innerText = students[index].email;

     const ageCell= document.createElement("td");
     ageCell.innerText = students[index].age;

     const gradeCell= document.createElement("td");
     gradeCell.innerText = students[index].grade;

     const degreeCell= document.createElement("td");
     degreeCell.innerText = students[index].degree;

      
     tableRow.append(idCell, nameCell, emailCell, ageCell, gradeCell, degreeCell)
     tableElement.appendChild(tableRow)
     index++;
});
