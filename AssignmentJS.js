var click = document.getElementsByClassName("click");
var solution = document.getElementsByClassName("Solution");
var Per1 = document.getElementsByClassName("Per1");
var Per2 = document.getElementsByClassName("Per2");
var Per3 = document.getElementsByClassName("Per3");
var Note = document.getElementsByClassName("note");
var testing = document.getElementsByClassName("testing");


var Person1 = {
    FirstName : "Rajeev",
    LastName : "Ranjan",
    OfficeAddress : "National Institute of Technology, Patna, Ashok Rajpath."
};

var Person2 = {
    FirstName : "Prashant",
    LastName : "Kumar",
    OfficeAddress : "National Institute of Technology, Patna, Ashok Rajpath."
};

var Person3 = {
    FirstName : "Aditya",
    LastName : "Singh",
    OfficeAddress : "National Institute of Technology, Patna, Ashok Rajpath."
};

console.log(`
${Person1.FirstName} ${Person1.LastName}
Office Adress: ${Person1.OfficeAddress}
`);

console.log(`
${Person2.FirstName} ${Person2.LastName}
Office Adress: ${Person2.OfficeAddress}
`);

console.log(`
${Person3.FirstName} ${Person3.LastName}
Office Adress: ${Person3.OfficeAddress}
`);




