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

// f stands for formatted

// QUESTION: What do I do with HTMLcontactGeneric?

// Construct the full skills HTML called below.
function listSkills(skills) {
  var formattedList = [];
  for (var i = 0; i < skills.length; i++) {
    formattedList[i] = HTMLskills.replace("%data%", skills[i]);
  }
  return formattedList;
}
var HTMLskillsEnd = "</ul>";


fName = HTMLheaderName.replace("%data%", bio.name);
fRole = HTMLheaderRole.replace("%data%", bio.role);
fMobile = HTMLmobile.replace("%data%", bio.mobile);
fEmail = HTMLemail.replace("%data%", bio.email);
fGithub = HTMLgithub.replace("%data%", bio.github);
fBioPic = HTMLbioPic.replace("%data%", bio.bioPic);
fWelcomeMsg = HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg);
fSkills = HTMLskillsStart + listSkills(bio.skills) + HTMLskillsEnd;

$("#header").prepend(fWelcomeMsg);
$("#header").prepend(fRole);
$("#header").prepend(fName);
$("#header").prepend(fBioPic);

$("#topContacts").append(fMobile);
$("#topContacts").append(fEmail);
$("#topContacts").append(fGithub);

$("#skillsChart").append(fSkills);