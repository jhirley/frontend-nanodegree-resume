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


var skills=["Juggling","Firefighting", "Chewing gum and walking"];
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
