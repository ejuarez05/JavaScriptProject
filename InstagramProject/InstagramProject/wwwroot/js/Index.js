var span = document.createElement("span");
span.innerHTML = "My Gram ";

var div =
    document.getElementById("MyInstagramContainer");

div.appendChild(span);

var loginButton =
    document.createElement("button");
loginButton.innerHTML = "Log In";

div.appendChild(loginButton);

var signUpButton =
    document.createElement("button");
signUpButton.innerHTML = "Sign Up";

div.appendChild(signUpButton);

var lineBreak =
    document.createElement("br");

div.appendChild(lineBreak);

var table = document.createElement("table");
var tbody = document.createElement("tbody");
var trow = document.createElement("tr");
var td = null;
var imageSpan = null;
var counter = 0;

var imageList = [];

var image = new Image();
for (var i = 0; i < 25; i++) {
    image = new Image();
    image.imageName = "Image " + (i + 1);
    image.imageId = (i + 1);
    image.imagePath = "Any Path";

    imageList.push(image);
}

for (var i = 0; i < 25; i++) {
    image = imageList[i];
    if (counter == 5) {
        tbody.appendChild(trow);
        trow = document.createElement("tr");
        counter = 0;

    }
    td = document.createElement("td");
    imageSpan = document.createElement("span");
    imageSpan.innerHTML = image.imageName;

    td.appendChild(imageSpan);
    trow.appendChild(td);
    counter++;
}

tbody.appendChild(trow)
table.appendChild(tbody);
div.appendChild(table);


var lineBreak2 =
    document.createElement("br");

div.appendChild(lineBreak2);

var aboutSpan =
    document.createElement("span");
aboutSpan.innerHTML = "About ";

div.appendChild(aboutSpan);

var blogSpan =
    document.createElement("span");
blogSpan.innerHTML = "Blog ";

div.appendChild(blogSpan);

var jobsSpan =
    document.createElement("span");
jobsSpan.innerHTML = "Jobs ";

div.appendChild(jobsSpan);

var helpSpan =
    document.createElement("span");
helpSpan.innerHTML = "Help ";

div.appendChild(helpSpan);

var lineBreak3 =
    document.createElement("br");

div.appendChild(lineBreak3);

var englishSpan =
    document.createElement("span");
englishSpan.innerHTML = "English ";

div.appendChild(englishSpan);

var yearSpan =
    document.createElement("span");
yearSpan.innerHTML = "2021 ";

div.appendChild(yearSpan);

var gramSpan =
    document.createElement("span");
gramSpan.innerHTML = "My Gram  ";

div.appendChild(gramSpan);

var myNumber = 10;
var myString = "A string"
var myBoolean = false;

console.log(myNumber);
console.log(myString);
console.log(myBoolean);

function SumOfNumbers(x, y) {
    var result = x + y;
    console.log(result);
}

SumOfNumbers(10, 20);

var myString = " Hello, this is a string ";
var result = myString.substring(0, 3);

console.log(result.trim());

var date = new Date(1996, 11, 5, 6, 30);

document.write(date);

document.write(date.toLocaleString("ar-SA"));

var x = moment().subtract("1,day").calendar();

document.write(x);