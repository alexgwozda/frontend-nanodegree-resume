var bio = {
  "name" : "Alex Gwozda",
  "role" : "Web Developer",
  "welcomeMsg" : "Welcome to my interactive resume!",
  "contacts" : [ 
    {
      "mobile" : "415-429-2525",
      "email" : "gwozda@gmail.com",
      "github" : "https://github.com/alexgwozda",
      "bioPic" : "images/photo1.png",
    } 
  ],
  "skills" : ["HTML", "CSS", "Javascript"]
}

var work = {
  "jobs" : [
    {
      "employer" : "Massage Envy",
      "title" : "massage therapist",
      "dates" : "August 2014 - Present",
      "location" : "Castro Valley, CA",
      "description" : "Providing massage therapy to relieve stress and pain, as well as problem-solving to treat injuries and chronic conditions."
    },
    {
      "employer" : "Elements Massage",
      "title" : "massage therapist",
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




/*
// f stands for formatted
// Construct the full skills HTML called below.
function listSkills(skills) {
  var formattedList = [];
  for (var i = 0; i < skills.length; i++) {
    formattedList[i] = HTMLskills.replace("%data%", skills[i]);
  }
  return formattedList;
}


var fName = HTMLheaderName.replace("%data%", bio.name);
var fRole = HTMLheaderRole.replace("%data%", bio.role);
var fMobile = HTMLmobile.replace("%data%", bio.mobile);
var fEmail = HTMLemail.replace("%data%", bio.email);
var fGithub = HTMLgithub.replace("%data%", bio.github);
var fBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
var fWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
listSkills(bio.skills);
var fSkills = listSkills(bio.skills);

var fWork1Start = HTMLworkStart.replace("\'>", "\' id='work1'>");
var fWork1Employer = HTMLworkEmployer.replace("%data%", work1.employer);
var fWork1Title = HTMLworkTitle.replace("%data%", work1.title);
var fWork1Dates = HTMLworkDates.replace("%data%", work1.dates);
var fWork1Location = HTMLworkLocation.replace("%data%", work1.location);
var fWork1Description = HTMLworkDescription.replace("%data%", work1.description);

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

$("#skillsChart").append(HTMLskillsStart);
$("#skills").append(fSkills);

$("#workExperience").append(fWork1Start);
$("#work1").append(fWork1Employer);
$("#work1").append(fWork1Title);
$("#work1").append(fWork1Dates);
$("#work1").append(fWork1Location);
$("#work1").append(fWork1Description);

$("#education").append(fSchool1Start);
$("#school1").append(fSchool1Name);
$("#school1").append(fSchool1Degree);
$("#school1").append(fSchool1Dates);
$("#school1").append(fSchool1Location);

*/