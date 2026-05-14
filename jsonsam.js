// import d from './sample.json' with {
//     type: "json"
// }
// console.log(d.Name)
// console.log (d)
let employee = {
    FirstName: "Amrita",
    LastName: "Ajay",
    empId: "MI2134",
    Department: "MiSACWIS",


FullName : function() { 
   
console.log("Employee Name is: " + this.FirstName + " " + this.LastName);
console.log("Employee ID is: " + this.empId);
  }

}
employee.FullName();   

