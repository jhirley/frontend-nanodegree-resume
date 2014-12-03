$("#main").append(["Jhirley Fonte"]);

var skills=["english","code", "Data Network Design"];
var bio = {
	"name":"Jhirley Fonte",
	"age":39,
	"skills":skills,
	"role":"Code Warrior",
	"Contactinfo":{
		"Phone":"305.582.1269",
		"email":"Jhirley.Fonte@gmaill.com",
		"github":"Jhirley",
		"twitter":"@jhirleyFonte",
		"Location":"Miami Florida"
		},
	"Pictureurl":"images/photo-Small.jpg",
	"welcomemessage":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum numquam maxime, repellat non saepe suscipit! Fugit tempore quia adipisci dolores, similique sequi exercitationem, nisi dolor cupiditate non, est tempora? Dolor!"
	} ;
var formatedName = HTMLheaderName.replace("%data%",bio.name); 
var formatedRole = HTMLheaderRole.replace("%data%",bio.role);


var work ={};
work.position = "Technical Sales Consultant Wireline 2";
work.employers= "AT&T";
work.year=15;


var education ={
	"schools":[
		{
			"name": "Miami Dade College",
			"years":"1993-2014",
			"city":"Miami Florida",
			"major":["Asossiate of Arts"]
		},
		{
			"name": "Northern Virgina Community College",
			"years":"1994-1997",
			"city":"Woodbridge Virgina",
			"major":["Asossiate of Arts"]	
		},
		{
			"name": "Udacity",
			"years":"2014-2015",
			"city":"the interwebz",
			"major":["Front-End Web Developer Nanodegree"]	
		}
	]
}
/*
$("#header").prepend(formatedRole);
$("#header").prepend(formatedName);

$("#header").append(bio.name);
$("#header").append(bio.age);
$("#header").append(bio.skills);
$("#header").append(bio.role);
$("#header").append(bio.contactinfo);
$("#header").append(bio.welcomemessage);
$("#header").append("<img src=\"bio.Pictureurl\" alt=\"a photo of me\">");

var firstName = "Jhirley Fonte";

console.log(firstName);

var awsomeThoughts = "I am Jhirley and I am awsome!";

console.log(awsomeThoughts);

var funThoughts = awsomeThoughts.replace("awsome","FUN");

console.log(awsomeThoughts);
$("#main").append([funThoughts]);

var orginalstring = "audacity";
var cutstring = orginalstring.slice(1);
console.log(cutstring);
console.log(cutstring.charAt(0).toUpperCase() + cutstring.slice(1));

$("#header").append(work["position"]);
$("#header").append(education.name);
*/