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
  


console.log(students)


index = 0; 
btn.addEventListener("click",(event) => {
    event.preventDefault();
    
    if(index >= students.length )
     {
        let i = students.length;
        btn.addEventListener("click", (event) => {
               
          const newStudent = {};
        event.preventDefault();
       
        newStudent.ID = i+1;
        newStudent.name = formElement["name"].value;
        newStudent.email = formElement["email"].value;
        newStudent.grade = formElement["grade"].value;
        newStudent.age = formElement["age"].value;
        newStudent.degree = formElement["degree"].value;
        console.log(formElement["name"].value)
        
        students.push(newStudent);
        i++
      });
    }else
    {
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

     const editCell= document.createElement("td");

     const editElement = document.createElement("img");
     editElement.src = "./assets/edit 1.svg";
     editElement.alt = "no image";
     editElement.className = "image"
     
     const deleteElement = document.createElement("img"); 
     deleteElement.src = "./assets/trash-2 1.svg";
     deleteElement.alt = "no image";
     deleteElement.className = "image"

    deleteElement.addEventListener("click", () => {
        tableRow.remove();
    }) 
    editElement.addEventListener("click", () => {
        btn.className = "edit";
        btn.innerText = "Edit Student";
    }) 
    
    editCell.append(editElement, deleteElement) 
    //  console.log(degreeCell);

     tableRow.append(idCell, nameCell, emailCell, ageCell, gradeCell, degreeCell, editCell)
     tableElement.appendChild(tableRow)
     index++;}
});

