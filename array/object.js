let student = {
    name: "Alice",
    age: 20,
    grade: "A",
  };
 console.log( student.age);
 student.grade="B";
 console.log( student.grade);
 for (let key in student) {
    console.log(key + ': ' + student[key]);
  }

 let calculator = {
    add: function(a, b) {
      return a + b;
    },
    subtract: function(a, b) {
      return a - b;
    },
  };
  console.log(calculator.subtract(5,3));