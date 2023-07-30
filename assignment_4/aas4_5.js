const students = [
    { name: 'John', marks: [70, 85, 90] },
    { name: 'Jane', marks: [60, 75, 80] },
    { name: 'David', marks: [50, 55, 65] }
  ];
  
  function checkAllStudentsPassed(studentsArr) {
    // Your code here
    // for (student in studentsArr){
    //   var tot = 0;
    //   for (m in student.marks){
    //     tot += m;
    //     var avg = tot/3;
    //   }
    //   if (avg < 40){
    //     return false;
    //   }
    // }
    // return true;
    function findtot(tot,num){
      return tot+num;
    }
    function find_avg(stobJ){
      //console.log(stobJ);
      var markarr = stobJ.marks;
      var total = markarr.reduce(findtot);
      var avg = total/3;
      //console.log(avg);
      return avg;
    }
    var avg_array = studentsArr.map(find_avg);
    console.log(avg_array);
    //avg_array.
    
  }
  
  const allStudentsPassed = checkAllStudentsPassed(students);
  
  console.log(allStudentsPassed); // Output: true
  