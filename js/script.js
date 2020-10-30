let grades = ["grade1", "grade2", "grade3", "grade4", "grade5"];
let allColors = [
  "Aqua",
  "Aquamarine",
  "Bisque",
  "Black",
  "BlanchedAlmond",
  "Blue",
  "BlueViolet",
  "Brown",
  "BurlyWood",
  "CadetBlue",
  "Chartreuse",
  "Chocolate",
  "Coral",
  "CornflowerBlue",
  "Cornsilk",
  "Crimson",
  "Cyan",
  "DarkBlue",
  "DarkCyan",
  "DarkGoldenRod",
  "DarkGray",
  "DarkGrey",
  "DarkGreen",
  "DarkKhaki",
  "DarkMagenta",
  "DarkOliveGreen",
  "DarkOrange",
  "DarkOrchid",
  "DarkRed",
  "DarkSalmon",
  "DarkSeaGreen",
  "DarkSlateBlue",
  "DarkSlateGray",
  "DarkSlateGrey",
  "DarkTurquoise",
  "DarkViolet",
  "DeepPink",
  "DeepSkyBlue",
  "DimGray",
  "DimGrey",
  "DodgerBlue",
  "FireBrick",
  "ForestGreen",
  "Fuchsia",
  "Gold",
  "GoldenRod",
  "Gray",
  "Grey",
  "Green",
  "GreenYellow",
  "HotPink",
  "IndianRed",
  "Indigo",
  "Khaki",
  "Lavender",
  "LawnGreen",
  "LightBlue",
  "LightCoral",
  "LightCyan",
  "LightGray",
  "LightGrey",
  "LightGreen",
  "LightPink",
  "LightSalmon",
  "LightSeaGreen",
  "LightSkyBlue",
  "LightSlateGray",
  "LightSlateGrey",
  "Lime",
  "LimeGreen",
  "Magenta",
  "Maroon",
  "MediumAquaMarine",
  "MediumBlue",
  "MediumOrchid",
  "MediumPurple",
  "MediumSeaGreen",
  "MediumSlateBlue",
  "MediumSpringGreen",
  "MediumTurquoise",
  "MediumVioletRed",
  "MidnightBlue",
  "Navy",
  "Olive",
  "OliveDrab",
  "Orange",
  "OrangeRed",
  "Orchid",
  "PaleGoldenRod",
  "PaleGreen",
  "PaleTurquoise",
  "PaleVioletRed",
  "PapayaWhip",
  "PeachPuff",
  "Peru",
  "Pink",
  "Plum",
  "PowderBlue",
  "Purple",
  "RebeccaPurple",
  "Red",
  "RosyBrown",
  "RoyalBlue",
  "SaddleBrown",
  "Salmon",
  "SandyBrown",
  "SeaGreen",
  "Sienna",
  "Silver",
  "SkyBlue",
  "SlateBlue",
  "SlateGray",
  "SlateGrey",
  "SpringGreen",
  "SteelBlue",
  "Tan",
  "Teal",
  "Thistle",
  "Tomato",
  "Turquoise",
  "Violet",
  "Wheat",
  "Yellow",
  "YellowGreen",
];
let students = [];

let students2 = [
  "Bryan Stewart",
  "Dylan McFarlin",
  "Ken Martinez",
  "Leo Manzo",
  "Joseph Racca",
  "Trevor Womack",
  "Alex Ato",
  "Tyler Rose",
  "Ann Chansy",
  "Hugo Mejia",
  "Demitri Ovro",
  "Juan Morales",
  "Matthew Mendoza",
  "John Shamoon",
  "AJ Olmos",
  "Christy Eang",
  "Adrian Segura",
  "Jorge Lopez",
  "Sean Chandler",
  "Carlos Gonzalez",
  "Victor Maldonado",
  "Zach Davis, TA",
  "Angel Pantoja, TA",
  "Joseph Perez, TA",
  "The Jateen Bhakta",
];

let randomNameDisplay = document.getElementById("name");
let backgroundGrade = document.getElementById("bodyOdyOdy");
let clickToGenerate = document.getElementById("clickable");
let justEntered = document.getElementById("justEntered");

//we need to edit it so that the whole area isn't clickable, but just isoalte it to the name

let generateButton = document
  .getElementById("clickable")
  .addEventListener("click", function () {
    changeEverything();
  });

// let fillStudents = document.getElementById("fillStudents").addEventListener("click", function() {
//   //for loop to add initial array back to new array
//   //but first clear array for sure...
//   students2=[];
  
//   for( let i =0; i<students2.length; i++){
//     students2.push(student[i]);
//   }
  
//   // students2 = [];
//   // console.log(students2);
//   // students2 = students2;
//   // console.log(students2);
// })

// let clearList = document.getElementById("clearList").addEventListener("click", function() {
//   students2 = [];
//   localStorage.clear();
//   NFO == "";

// })

// function useCohortList(){
//   students2 = students;
// }

function changeEverything() {
  if (students2 == null || students2 == "") {
    randomNameDisplay.innerText =
      "You haven't entered anything. Add a name below...";
  } else {
    let randomNumber = Math.floor(Math.random() * students2.length);
    let randomName = students2[randomNumber];
    // students2.splice(randomNumber, 1);
    randomNameDisplay.innerText = randomName;
    // console.log(students2);
  }

  //   let randomColor = allColors[Math.floor(Math.random() * allColors.length)];
  //   randomNameDisplay.style.color = randomColor;

  let randomColorBG =
    allColors[Math.floor(Math.random() * allColors.length) + 1];
  backgroundGrade.style.backgroundColor = randomColorBG;

  let randomGrade = grades[Math.floor(Math.random() * grades.length)];
  backgroundGrade.className = randomGrade;
}

// ADDITION TO THE RANDOM NAME GENERATOR

// ------------------- JSON && LOCAL STORAGE -------------------
//this is getting the element that we need, which we will use later to pul the value from
let inputText = document.getElementById("inputText");

//from the line of code, I want to say that we are parsing all of the information so that we can store it locally
let NFO = JSON.parse(localStorage.getItem("Roster"));

//this part above above still confuses me...

inputText.addEventListener("keypress", function (e) {
  if (e.code == "Enter") {
    appendElements(inputText.value);
  } else {
  }
});

function appendElements(studentList) {
  justEntered.innerText = studentList + "...saved!";
  inputText.value = "";

  students2.push(studentList);
  localStorage.setItem("Roster", JSON.stringify(students2));
}

if (NFO == "" || NFO == null) {
  for (let i = 0; i < NFO.length; i++) {
    students2.push(NFO[i]);
    localStorage.setItem("Roster", JSON.stringify(students2));
  }
} else {
}
