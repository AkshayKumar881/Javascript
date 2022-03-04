var employees = [
    {"name": "Akshay", "age": 22, "DOB": new Date(1999, 09, 02), "salary": 8000},
    {"name": "Paul", "age": 40, "DOB": new Date(1980, 8, 27), "salary": 6000},
    {"name": "George", "age": 50, "DOB": new Date(1970, 6, 2), "salary": 4000},
    {"name": "Ringo", "age": 40, "DOB": new Date(1980, 5, 13), "salary": 3000}
  ];
  
  console.log(employees);
  
  var richEmployees = employees.filter(function (emp) {
    return emp.salary > 5000;
  });
  
  console.log(richEmployees);
  
  for (let i = 0; i < employees.length; i++) {
    if (employees[i].salary < 1000 && employees[i].age > 20) {
      employees[i].salary *= 5;
    }
  }
  
  console.log(employees);