//this is the data structure we used (array)
const studentDatabase = ['prashant','erick','amey','rishika'];

//this is the algorithm we used to find the answer
const findStudent = (allStudent , student_name) => {
  for(let i=1; i<=allStudent.length; i++){
    if(allStudent[i] === student_name){
      console.log(`found ${student_name} at position ${i}`);
    }
  } 

}

findStudent(studentDatabase,"rishika")
