var bio = {
  "name" : "Alex Gwozda",
  "role" : "Web Developer",
  "welcomeMsg" : "Welcome to my interactive resume!",
  "bioPic" : "images/photo1.png",
  "contact" :  {
      "location": "San Leandro (SF East Bay), CA, USA",
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
    },
    {
      "employer": "CRA, Communication Research Associates",
      "title": "Full-time Intern",
      "dates": "April 2008 - September 2008",
      "location": "Berwin, PA",
      "description": "Successfully followed through with dozens of contributors; also researched, critically edited, and generated ideas found in its 13 chapters.  (In person and long-distance.)  Book link: <a href='http://www.amazon.com/Leadership-Without-Excuses-Accountability-High-Performance/dp/0071600043'>Leadership Without Excuses</a>."
    },
    { 
      "employer": "Associated Students of the University of Washington",
      "title": "Student Senate Secretary",
      "dates": "September 2006 - June 2007",
      "location": "Seattle, WA",
      "description": "Ensured website functionality as webmaster, maintained 4-8 hours of meeting minutes every week, and revised Senate documents."
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
      "image" : [ "http://www.placekitten.com/g/300/300", 
                  "http://www.placekitten.com/g/300/300",
                  "http://www.placekitten.com/g/300/300"
                ]
    },
    {
      "title": "Interactive Resume",
      "dates": "November 2014",
      "description": "Features jQuery and more to construct the resume.",
      "image": [ "http://www.placekitten.com/g/300/300",
                 "http://www.placekitten.com/g/300/300",
                 "http://www.placekitten.com/g/300/300"
               ]
    },
    {
      "title": "Blogger: the Arcade Game",
      "dates": "December 2014",
      "description": "Save the Blogger by dodging trolls, bugs, and flamers! Frogger gets reimagined with Object-Oriented Javascript.",
      "image": [ "http://www.placekitten.com/g/300/300",
                 "http://www.placekitten.com/g/300/300",
                 "http://www.placekitten.com/g/300/300"
               ]
    },
    {
      "title": "Performance-Optimized Website",
      "dates": "December 2014",
      "description": "Resolves multiple issues to achieve target frame rates and PageSpeed scores.",
      "image": [ "http://www.placekitten.com/g/300/300",
                 "http://www.placekitten.com/g/300/300",
                 "http://www.placekitten.com/g/300/300"
               ]
    },
    {
      "title": "Neighborhood Map",
      "dates": "January 2014",
      "description": "Javascript and informational API's drive a fully interactive map and its locations.",
      "image": [ "http://www.placekitten.com/g/300/300",
                 "http://www.placekitten.com/g/300/300",
                 "http://www.placekitten.com/g/300/300"
               ]
    },
    {
      "title": "6th Nanodegree Project",
      "dates": "February 2014",
      "description": "To be announced!",
      "image": [ "http://www.placekitten.com/g/300/300",
                 "http://www.placekitten.com/g/300/300",
                 "http://www.placekitten.com/g/300/300"
               ]
    },
    {
      "title": "Javascript RPG",
      "dates": "March 2014",
      "description": "Runs on basic Javascript, teaches basic Javascript",
      "image": [ "http://www.placekitten.com/g/300/300",
                 "http://www.placekitten.com/g/300/300",
                 "http://www.placekitten.com/g/300/300"
               ]
    }
  ],
  display : function() {
    for (var i = 0; i < projects.projects.length; i++) {
      $("#projects").append(HTMLprojectStart);

      var fProjectTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      $(".project-entry:last").append(fProjectTitle)

      var fProjectDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      $(".project-entry:last").append(fProjectDates)

      var fProjectDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      $(".project-entry:last").append(fProjectDescription)

      for (each in projects.projects[i].image) {
        var fProjectImage = HTMLprojectImage.replace("%data%", projects.projects[i].image[each]);
        $(".project-entry:last").append(fProjectImage);
      }
    }
  }
}

projects.display();


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


function inName() {
  var nameArray = bio.name.split(" ");
  nameArray[1] = nameArray[1].toUpperCase();
  nameArray[0] = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
  return nameArray.join(" ");
}

$("#main").append(internationalizeButton);

$("#mapDiv").append(googleMap);