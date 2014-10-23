var bio = {
  "name" : "Alex Gwozda",
  "role" : "Web Developer",
  "welcomeMsg" : "Welcome to my interactive resume!",
  "bioPic" : "images/photo1.png",
  "contact" :  {
      "mobile" : "415-429-2525",
      "email" : "gwozda@gmail.com",
      "github" : "https://github.com/alexgwozda",
    },
  "skills" : ["HTML", "CSS", "Javascript"]
}

var work = {
  "jobs" : [
    {
      "employer" : "Massage Envy",
      "title" : "Massage Therapist",
      "dates" : "August 2014 - Present",
      "location" : "Castro Valley, CA",
      "description" : "Providing massage therapy to relieve stress and pain, as well as problem-solving to treat injuries and chronic conditions."
    },
    {
      "employer" : "Elements Massage",
      "title" : "Massage Therapist",
      "dates" : "April 2012 - June 2014",
      "location" : "Seattle, WA",
      "description" : "Providing massage therapy to relieve stress and pain, as well as problem-solving to treat injuries and chronic conditions."
    }
  ]
}

var education = {
  "schools" : [
    {
      "name" : "Everest College, Seattle",
      "degree" : "Massage Therapy",
      "dates" : "July 2009 - March 2011",
      "location" : "Seattle, WA"
    },
    {
      "name" : "University of Washington",
      "majors" : ["BS Biology", "BA Sociology"],
      "dates" : "September 2005 - March 2010",
      "location" : "Seattle, WA"
    }
  ], 
  "onlineCourses" : [
    {
      "title" : "Front-End Web Development Nanodegree",
      "school" : "Udacity.com",
      "dates" : "October 2014 - Present",
      "url" : "https://www.udacity.com/course/nd001"
    },
    {
      "title" : "Become a Certified Web Developer",
      "school" : "LearnToProgram via Udemy.com",
      "dates" : "June 2014 - July 2014",
      "url" : "https://www.udemy.com/become-a-certified-web-developer/"
    },
    {
      "title" : "A Smarter Way to Learn Javascript",
      "school" : "..........AUTHOR...........",
      "dates" : "July 2014 - August 2014",
      "url" : "http://www.amazon.com/dp/B00H1W9I6C"
    }
  ]
}

var projects = {
  "projects" : [
    {
      "title" : "Responsive Portfolio",
      "dates" : "October 2014",
      "description" : "HTML and CSS create a fully responsive portfolio page.",
      "image" : [ "..............URL...........", 
                  ".............URL2...........",
                  ".............URL3..........."
                ]
    }
  ]
}


// variable starting with "f" stands for formatted

if (bio.skills.length !== 0) {
  $("#header").append(HTMLskillsStart);
  var fSkills = [];
  for (var i = 0; i < bio.skills.length; i++) {
    fSkills[i] = HTMLskills.replace("%data%", bio.skills[i]);
  }
  $("#skills").append(fSkills);
}

function displayWork() {
  for (job in work.jobs) {
    $("#workExperience").append(HTMLworkStart);
    var fWorkEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var fWorkTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    var fWorkDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
    var fWorkLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
    var fWorkDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(fWorkEmployer + fWorkTitle + fWorkDates + fWorkLocation + fWorkDescription);
  }
}

displayWork();


var fName = HTMLheaderName.replace("%data%", bio.name);
var fRole = HTMLheaderRole.replace("%data%", bio.role);
var fMobile = HTMLmobile.replace("%data%", bio.contact.mobile);
var fEmail = HTMLemail.replace("%data%", bio.contact.email);
var fGithub = HTMLgithub.replace("%data%", bio.contact.github);
var fBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var fWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);

$("#header").prepend(fWelcomeMsg);
$("#header").prepend(fRole);
$("#header").prepend(fName);
$("#header").prepend(fBioPic);

$("#topContacts").append(fMobile);
$("#topContacts").append(fEmail);
$("#topContacts").append(fGithub);

/*

var fSchool1Start = HTMLschoolStart.replace("\'>", "\' id='school1'>");
var fSchool1Name =  HTMLschoolName.replace("%data%", school1.name);
var fSchool1Degree = HTMLschoolDegree.replace("%data%", school1.degree);
var fSchool1Dates =  HTMLschoolDates.replace("%data%", school1.dates);
var fSchool1Location = HTMLschoolLocation.replace("%data%", school1.location);
// HTMLschoolMajor = "<em><br>Major: %data%</em>"

$("#header").prepend(fWelcomeMsg);
$("#header").prepend(fRole);
$("#header").prepend(fName);
$("#header").prepend(fBioPic);

$("#topContacts").append(fMobile);
$("#topContacts").append(fEmail);
$("#topContacts").append(fGithub);

$("#education").append(fSchool1Start);
$("#school1").append(fSchool1Name);
$("#school1").append(fSchool1Degree);
$("#school1").append(fSchool1Dates);
$("#school1").append(fSchool1Location);
*/