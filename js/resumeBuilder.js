var bio = {
  "name" : "Alex Gwozda",
  "role" : "Web Developer",
  "mobile" : "415-429-2525",
  "email" : "gwozda@gmail.com",
  "github" : "https://github.com/alexgwozda",
  "bioPic" : "images/photo1.png",
  "welcomeMsg" : "Welcome to my interactive resume!",
  "skills" : ["HTML", "CSS", "Javascript"],
}

var work1 = {};
work1.employer = "Massage Envy";
work1.title = "massage therapist";
work1.dates = "August 2014 - Present";
work1.location = "Castro Valley, CA";
work1.description = "Providing massage therapy to relieve stress and pain, as well as to treat injuries and chronic conditions.";

var school1 = {};
school1["name"] = "Everest College, Seattle";
school1["degree"] = "Massage Therapy";
school1["dates"] = "July 2009 - March 2011";
school1["location"] = "Seattle, WA";

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