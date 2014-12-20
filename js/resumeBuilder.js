function errorHandler(message, url, line)
{
out = "Sorry, an error was encountered.\n\n";
out += "Error: " + message + "\n";
out += "URL: " + url + "\n";
out += "Line: " + line + "\n\n";
out += "Click OK to continue.\n\n";
alert(out);
return true;
}


var skillsdata;

skillsdata = {
  "Skills": {
    "Juggling": {
      "Protocol": {
        "Propose": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
        "USSD": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 60, 50, 40, 30],
        "UAP": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 60, 70, 50, 30],
        "Socket Raw": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 50, 50, 50, 70, 80]
      },
      "Optimization": {
        "Performance": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 40, 40, 50, 50, 50],
        "Distribute": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 40, 50, 50],
        "Stability": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 50, 60, 70, 80, 90]
      },
      "UI": {
        "WinForm": [0, 0, 20, 40, 50, 50, 50, 50, 60, 80, 90, 95, 95, 95, 95],
        "WPF": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 50],
        "GDI": [0, 0, 0, 0, 0, 40, 50, 40, 40, 30, 30, 20, 20, 10, 5],
        "DX": [0, 0, 0, 0, 0, 10, 50, 50, 40, 40, 30, 20, 10, 10, 5],
        "Flash": [0, 0, 10, 30, 40, 50, 50, 40, 30, 20, 10, 5, 5, 5, 5]
      },
      "Algorithm": {
        "Image Processing": [0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50, 45, 45, 40],
        "Face recognition": [0, 0, 0, 0, 0, 0, 0, 10, 40, 70, 60, 50, 40, 40, 40]
      }
    },

    "Language": {
      "Inglish": {
        "I want a taco": [0, 0, 0, 0, 0, 0, 20, 50, 70, 80, 90, 95, 95, 95, 95],
        "fluency": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 50]
      },
      "Spanish": {
        "yo quiero uno taco": [0, 0, 10, 30, 50, 50, 60, 60, 60, 80, 80, 60, 50, 50, 60],
        "Que": [0, 0, 0, 0, 20, 20, 30, 30, 40, 30, 20, 20, 20, 20, 20]
      }
    },
    "Chewing gum and walking": {
      "Chewing gum": {
        "Protues": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 25, 20, 20, 25],
        "Keil": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 25, 20, 20, 25],
        "Code Warrior": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 15, 15, 10, 10, 20],
        "Protel": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 15, 10, 10, 5],
        "Multisim": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 30, 25, 20, 15],
        "Lego": [0, 0, 0, 0, 10, 40, 50, 45, 40, 35, 30, 25, 20, 15, 10]
      },
      "Walking": {
        "Vim": [0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 40, 45, 50, 55],
        "AHK": [0, 0, 0, 0, 0, 0, 0, 0, 10, 20, 30, 30, 30, 35, 40],
        "Office": [0, 10, 20, 50, 60, 60, 70, 70, 80, 90, 90, 90, 90, 90, 90],
        "Photoshop": [0, 10, 20, 30, 35, 40, 45, 50, 60, 65, 60, 60, 55, 60, 60],
        "Batch": [40, 45, 50, 50, 50, 60, 65, 70, 75, 75, 80, 80, 80, 80, 80],
        "Shell": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 30, 35, 40],
        "Linux": [0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10, 40, 50, 55],
        "Marked Text": [10, 20, 20, 30, 40, 40, 40, 40, 40, 50, 60, 70, 80, 80, 80]
      },
      "Project": {
        "Agile": [0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 40, 50, 60, 70, 80],
        "CI": [0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 70, 70, 80, 80],
        "Repos": {
          "Git": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 30, 50],
          "SVN": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 50, 50],
          "Clearcase": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30]
        },
        "Track": {
          "Redmine": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30],
          "Trello": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 20]
        },
        "Wiki": [0, 0, 0, 0, 0, 0, 0, 0, 10, 40, 50, 40, 40, 40, 40],
        "Quality Assurance": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 30, 50, 60, 60]
      },
      "Cloud": {
        "IaaS": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 15],
        "PaaS": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 15, 30, 30],
        "SaaS": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 10, 10, 10]
      },
      "Test": {
        "TDD": [0, 0, 0, 0, 0, 0, 0, 0, 5, 10, 5, 5, 15, 5, 5],
        "cucumber": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 5, 0, 10, 30],
        "Load test": [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 40, 30, 25, 20, 15]
      }
    }
  }
};


var skills = [
	"Juggling",
	"Firefighting",
	"Chewing gum and walking"
	];



var bio = {
	"name":"Jhirley Fonte",
	"skills":skills,
	"role":"Code Warrior",
	"contacts":{
		"mobile":"305.555.1234",
		"email":"Jhirley.Fonte@.com",
		"github":"Jhirley",
		"twitter":"@jhirleyFonte",
		"location":"Miami Florida"
		},
	"biopic":"images/photo-Small.jpg",
	"welcomeMessage":"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laborum numquam maxime, repellat non saepe suscipit! Fugit tempore quia adipisci dolores, similique sequi exercitationem, nisi dolor cupiditate non, est tempora? Dolor!",
	display : function(){ 
		$("#header").prepend(HTMLheaderRole.replace("%data%",bio.role));
		$("#header").prepend(HTMLheaderName.replace("%data%",bio.name));
		$("#header").append(HTMLmobile.replace("%data%",bio.contacts.mobile));  
		$("#header").append(HTMLemail.replace("%data%",bio.contacts.email));
		$("#header").append(HTMLgithub.replace("%data%",bio.contacts.github));
		$("#header").append(HTMLtwitter.replace("%data%",bio.contacts.twitter));
		$("#header").append(HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage));
		$("#header").append(HTMLbioPic.replace("%data%",bio.biopic));
		if (typeof(bio.skills) !== "undefined" ) 
		    {
		      $("#header").append(HTMLskillsStart);
		      for ( i in bio.skills)
		        {
		          $("#skills").append(HTMLskills.replace("%data%",bio.skills[i]));
		          //console.log(bio.skills[i]);
		          //console.log(JSON.stringify(bio.skills,null, 0));
		          var _skilltodisplay =bio.skills[i].value; 
		          console.log(_skilltodisplay);
		        }
    		}		
		}//function display(){}	
	} 

var projects ={
	"project":[
		{
			"title": "Project # 1",
			"dates":2014 ,
			"description": "Duplicate a design MOCK provided by Udacity into html/css with less than 8% variance.",
			"images": "images/p1-mock-small.png"
			},
		{
			"title": "Project # 2",
			"dates":2014 ,
			"description": "Created an online resume using JavaScript.",
			"images": "images/p2-small.png"
		}
	]
}
projects.display = function(){  

  if (typeof(projects.project) !== "undefined" ) 
    {
      $("#projects").append(HTMLprojectStart);
      for ( i in projects.project)
        {
          $(".project-entry:last").append(HTMLprojectTitle.replace("%data%",projects.project[i]["title"]));
          $(".project-entry:last").append(HTMLprojectDates.replace("%data%",projects.project[i].dates));
          $(".project-entry:last").append(HTMLprojectDescription.replace("%data%",projects.project[i].description));
          $(".project-entry:last").append(HTMLprojectImage.replace("%data%",projects.project[i]["images"]));
        }
    }
  }


var work ={
	"jobs":[
		{
			"employer": "AT&T",
			"title": "Technical Sales Consultant Wireline 2",
			"location": "Dallas, TX",
			"dates":"2011-Present",
			"description": "Design customer networks voice and data."
		},
		{
			"employer": "Avaya",
			"title": "Systems Engineer",
			"location": "Santa Clara,CA",
			"dates":"2011",
			"description": "Design customer networks voice and data."
		},
		{
			"employer": "Bellsouth - AT&T",
			"title": "Applications Specialist-(GEM)",
			"location": "Atlanta, GA",
			"dates":"2001-2009",
			"description": "Applications and business process consulting (IBM Websphere, Oracle, SAP, others)\nAT&T Managed Hosting Services (Enterprise, Synaptic Hosting, Vmware Virtualization). Conducted customer data center tours for the AT&T Miami Data Center.\nManaged Network Service (AT&T Connect, Router and Lan/WLan Services)\nConsulting, AT&T Security and Managed Security Services.\nCPE Sales Specialist-(BBS LBS) (03 –07)\n	Buisness relationship management at various customer organizations.\nSell and deploy data/voice network systems and designs.\nDesign Engineer (01 – 03)\n	Presales customer presentation as part of the sales team.\nDetailed Meridian PBX design and complex system upgrade planning.\nDetailed Data CPE Network design and configuration.\n	Designed and aided in the deployment of converged voice network using multi-vendor products.\nParticipated in customer RFP/RFQ responses."
		},
		{
			"employer": "Cisco Systems",
			"title": "Systems Engineer",
			"location": "San Jose,CA",
			"dates":"2000",
			"description": "Supported the Service Provider line of business as a Pre-Sales Systems Engineer.  Delivered customer presentations, CxO technology overviews, business case summaries. Worked in the Network Service Provider marketplace for ASPs, Greenfields, IXCs, CLECs, VOIP ILDs.Responsible for high level and detailed customer presentations on network infrastructure solutions. Detailed network design and configuration. Designed and aided in the deployment of enhanced Voice Services, i.e. Unified Messaging and SS7.Built proof of concepts testing for new customer infrastructure. Participated in customer RFP/RFQ responses."
		}

	],
	display : function(){ 
	    if (typeof(work.jobs) !== "undefined" ) 
	      	{
	        $("#workExperience").append(HTMLworkStart);
	        for ( i in work.jobs)
	          	{
	            $(".work-entry:last").append(HTMLworkEmployer.replace("%data%",work.jobs[i]["employer"]));
	            $(".work-entry:last").append(HTMLworkTitle.replace("%data%",work.jobs[i].title));
	            $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[i].dates));
	            $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[i]["location"]));
	            $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[i]["description"]));
	        } 
	    }
	}
}

var education ={
	"schools":[
		{
			"name": "Miami Dade College",
			"location":"Miami Florida",
			"degree":"None",
			"major":["Associate of Arts"],
			"dates":"2014",
			"url" : "http://www.mdc.edu"
		},
		{
			"name": "Northern Virgina Community College",
			"location":"Woodbridge, Virginia",
			"degree":"None",
			"major":["Associate of Arts"],
			"dates":"1997",
			"url" : "http://www.nvcc.edu"	
		}
	],
	"onlineCourses" : [
		{
			"title": "Front-End Web Developer",
			"school" : "Udacity",
			"dates":"2015",
			"url" : "http://www.udacity.com"	
		}
	],
	display : function(){ 
			if (typeof(education.schools) !== "undefined" ) 
	      	{
	        $("#education").append(HTMLschoolStart);
	        for ( i in education.schools)
	          	{
	          	var _formatedschool = HTMLschoolName.replace("%data%",education.schools[i]["name"]); 	
	          	$(".education-entry:last").append(_formatedschool.replace("#",education.schools[i]["url"]));

//	            $(".education-entry:last").append(HTMLschoolName.replace("%data%",education.schools[i]["name"]));
//	            $(".education-entry:last").append(HTMLschoolName.replace("#",education.schools[i]["url"]));
	            $(".education-entry:last").append(HTMLschoolDegree.replace("%data%",education.schools[i].degree));
	            $(".education-entry:last").append(HTMLschoolDates.replace("%data%",education.schools[i].dates));
	            $(".education-entry:last").append(HTMLschoolLocation.replace("%data%",education.schools[i]["location"]));
	            $(".education-entry:last").append(HTMLschoolMajor.replace("%data%",education.schools[i]["major"]));
	        } 
	    }
	    	if (typeof(education.onlineCourses) !== "undefined" )
	      	{
	        $(".education-entry:last").append(HTMLonlineClasses);
	        for ( i in education.onlineCourses)
	          	{
	          	var _onlineCourse = HTMLonlineTitle.replace("%data%",education.onlineCourses[i]["title"]);
	          	var _onlineUrl =  HTMLonlineURL.replace("%data%",education.onlineCourses[i]["url"]);	
	          	$(".education-entry:last").append(_onlineCourse.replace("#",education.onlineCourses[i]["url"]));
	            


//	            $(".education-entry:last").append(HTMLonlineTitle.replace("%data%",education.onlineCourses[i]["title"]));
	            $(".education-entry:last").append(HTMLonlineSchool.replace("%data%",education.onlineCourses[i].school));
	            $(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[i].dates));
	          //  $(".education-entry:last").append(HTMLonlineDates.replace("%data%",education.onlineCourses[i]["location"]));
	            $(".education-entry:last").append(_onlineUrl.replace("#",education.onlineCourses[i]["url"]));
	        } 
	    }
	}
}




/// -------------------------




bio.display();
work.display();
projects.display();
education.display();



  $('#main').append(internationalizeButton);

function inName(orginalname){
  var l="";
  l = orginalname.charAt(0).toLocaleUpperCase();
  var i =1;
  while ( orginalname.charAt(i) !== " " ){
    l = l+ orginalname.charAt(i).toLocaleLowerCase();
    i++;
    }
   while ( orginalname.charAt(i) !== "" ){
    l = l+ orginalname.charAt(i).toLocaleUpperCase();
    i++;
    }
  return(l);
  }

if (inName(bio.name) === "Jhirley FONTE"){
console.log("Score");
}

$("#mapDiv").append(googleMap);
 




$(document).click(function(loc){ 
//  console.log(loc);
//  console.log(loc.pageX,loc.pageY);
  logClicks(loc.pageX,loc.pageY);
});
