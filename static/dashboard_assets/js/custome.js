// Get the id passed from the view
  


function toggleContainer() {
  var container = document.getElementById('profile');
  container.classList.toggle('hidden');
}


function toggleSummary() {
  var container = document.getElementById('summary');
  container.classList.toggle('hidden');
}


function toggleAchievements() {
  var container = document.getElementById('achievements');
  container.classList.toggle('hidden');
}


function toggleSkills() {
  var container = document.getElementById('skills');
  container.classList.toggle('hidden');
}


function toggleLanguages() {
  var container = document.getElementById('languages');
  container.classList.toggle('hidden');
}


function workexperience() {
  var container = document.getElementById('container1');
  container.classList.toggle('hidden');
}



function handlePresentCheckbox() {
  var toInput = document.getElementById("to1");
  var toContainer = document.getElementById("to1Container");
  var fieldEDDT = document.getElementById("FIELD_EDDT");

  if (document.getElementById("present1").checked) {
    toInput.disabled = true; // Disable the input field
    toContainer.innerHTML = "Present"; // Display "Present" text
    fieldEDDT.textContent = "Present"; // Update FIELD_EDDT span with "Present" text
  } else {
    toInput.disabled = false; // Enable the input field when present is unchecked
    toContainer.innerHTML = '<input type="month" id="to1" class="form-control" name="to1" style="height: 35px;" onchange="updateExperience()">'; // Restore input field
    fieldEDDT.textContent = ""; // Reset FIELD_EDDT span
  }
}

function addNewExperience() {
  var container = document.getElementById('container1');
  var experienceCount = container.getElementsByClassName('experience-section').length + 1;
  var newExperience = document.createElement('div');
  newExperience.classList.add('experience-section');

  var header = document.createElement('div');
  header.classList.add('experience-header');
  header.onclick = function () { toggleExperience(this) };
  header.innerHTML = '<i class="fas fa-chevron-down"></i><p><b>Experience ' + experienceCount + '</b></p>';

  var content = document.createElement('div');
  content.classList.add('experience-content');
  content.innerHTML = '<form id="experience' + experienceCount + '">' +
    '<div class="form-group">' +
    '<input type="text" id="company' + experienceCount + '" class="form-control" placeholder="Company Name" name="company' + experienceCount + '" style="height: 30px;">' +
    '</div>' +
    '<div class="form-group">' +
    '<input type="text" id="jobtitle' + experienceCount + '" class="form-control" placeholder="Job Title" name="jobtitle' + experienceCount + '" style="height: 30px;">' +
    '</div>' +
    '<div class="form-group">' +
    '<input type="text" id="city' + experienceCount + '" class="form-control" placeholder="City" name="city' + experienceCount + '" style="height: 30px;">' +
    '</div>' +
    '<div class="form-group">' +
    '<input type="text" id="country' + experienceCount + '" class="form-control" placeholder="Country" name="country' + experienceCount + '" style="height: 30px;">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="from' + experienceCount + '" style="margin-right: 10px;">From:</label>' +
    '<input type="date" id="from' + experienceCount + '" name="from' + experienceCount + '" class="form-control" style="height: 35px;">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="to' + experienceCount + '" style="margin-right: 10px;">To:</label>' +
    '<input type="date" id="to' + experienceCount + '" class="form-control" name="to' + experienceCount + '" style="height: 35px;">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="description' + experienceCount + '">Description:</label>' +
    '<textarea id="description' + experienceCount + '" class="form-control" name="description' + experienceCount + '" rows="5" onkeyup="updateExperience()"></textarea>' +
    '</div>' +
    '</form>';

  newExperience.appendChild(header);
  newExperience.appendChild(content);
  // Append the new experience container to the end of the container
  container.appendChild(newExperience);
}


function toggleExperience(header) {
  var content = header.nextElementSibling;
  header.querySelector('i').classList.toggle('fa-chevron-down');
  header.querySelector('i').classList.toggle('fa-chevron-up');
  content.classList.toggle('hidden');
}


function education() {
  var container = document.getElementById('container2');
  container.classList.toggle('hidden');
}

function addNewEducation() {
  var container = document.getElementById('container2');

  var experienceCount = container.getElementsByClassName('experience-section').length + 1;
  var newExperience = document.createElement('div');
  newExperience.classList.add('experience-section');


  var header = document.createElement('div');
  header.classList.add('experience-header');
  header.onclick = function () { toggleEducation(this) };
  header.innerHTML = '<i class="fas fa-chevron-down"></i><p><b>Education ' + experienceCount + '</b></p>';

  var content = document.createElement('div');
  content.classList.add('experience-content');
  content.innerHTML = '<form id="experience' + experienceCount + '">' +
    '<div class="form-group">' +
    '<input type="text" id="company' + experienceCount + '" class="form-control" placeholder="Institution Name" name="company' + experienceCount + '" style="height: 30px;">' +
    '</div>' +
    '<div class="form-group">' +
    '<input type="text" id="jobtitle' + experienceCount + '" class="form-control" placeholder="Field Of Study" name="jobtitle' + experienceCount + '" style="height: 30px;">' +
    '</div>' +
    '<div class="form-group">' +
    '<input type="text" id="jobtitle' + experienceCount + '" class="form-control" placeholder="Degree" name="jobtitle' + experienceCount + '" style="height: 30px;">' +
    '</div>' +
    '<div class="form-group">' +
    '<input type="text" id="city' + experienceCount + '" class="form-control" placeholder="City" name="city' + experienceCount + '" style="height: 30px;">' +
    '</div>' +
    '<div class="form-group">' +
    '<input type="text" id="country' + experienceCount + '" class="form-control" placeholder="Country" name="country' + experienceCount + '" style="height: 30px;">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="from' + experienceCount + '" style="margin-right: 10px;">From:</label>' +
    '<input type="date" id="from' + experienceCount + '" name="from' + experienceCount + '" class="form-control" style="height: 35px;">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="to' + experienceCount + '" style="margin-right: 10px;">To:</label>' +
    '<input type="date" id="to' + experienceCount + '" class="form-control" name="to' + experienceCount + '" style="height: 35px;">' +
    '</div>' +

    '</form>';

  newExperience.appendChild(header);
  newExperience.appendChild(content);
  container.insertBefore(newExperience, container.lastElementChild);

}

function toggleEducation(header) {
  var content = header.nextElementSibling;
  header.querySelector('i').classList.toggle('fa-chevron-down');
  header.querySelector('i').classList.toggle('fa-chevron-up');
  content.classList.toggle('hidden');
}


function projects() {
  var container = document.getElementById('container3');
  container.classList.toggle('hidden');
}

function addNewProject() {
  var container = document.getElementById('container3');
  var experienceCount = container.getElementsByClassName('experience-section').length + 1;
  var newExperience = document.createElement('div');
  newExperience.classList.add('experience-section');

  var header = document.createElement('div');
  header.classList.add('experience-header');
  header.onclick = function () { toggleProjects(this) };
  header.innerHTML = '<i class="fas fa-chevron-down"></i><p><b>Projects ' + experienceCount + '</b></p>';

  var content = document.createElement('div');
  content.classList.add('experience-content');
  content.innerHTML = '<form id="experience' + experienceCount + '">' +
    '<div class="form-group">' +
    '<input type="text" id="company' + experienceCount + '" class="form-control" placeholder="Project Name" name="company' + experienceCount + '" style="height: 30px;">' +
    '</div>' +
    '<div class="form-group">' +

    '<label for="description' + experienceCount + '">Tools used:</label>' +
    '<textarea id="description' + experienceCount + '" class="form-control" name="description' + experienceCount + '" rows="3"></textarea>' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="description' + experienceCount + '">:</label>' +
    '<input type="text" id="jobtitle' + experienceCount + '" class="form-control" placeholder="Link" name="jobtitle' + experienceCount + '" style="height: 30px;">' +
    '</div>' +

    '<div class="form-group">' +
    '<label for="description' + experienceCount + '">Description:</label>' +
    '<textarea id="description' + experienceCount + '" class="form-control" name="description' + experienceCount + '" rows="5"></textarea>' +
    '</div>' +

    '</form>';

  newExperience.appendChild(header);
  newExperience.appendChild(content);
  container.insertBefore(newExperience, container.lastElementChild);
}
function toggleProject(header) {
  var content = header.nextElementSibling;
  header.querySelector('i').classList.toggle('fa-chevron-down');
  header.querySelector('i').classList.toggle('fa-chevron-up');
  content.classList.toggle('hidden');
}


var skillCounter1 = 1; // Initial counter for column1 (odd)
var skillCounter2 = 2; // Initial counter for column3 (even)

function addInputFields(columnId1, columnId2) {
  skillCounter1 += 2; // Increment by 2 to get odd numbers
  skillCounter2 += 2; // Increment by 2 to get even numbers

  // Create new input field
  var newInput = document.createElement("input");
  newInput.type = "text";
  newInput.className = "form-control";
  newInput.setAttribute("onkeyup", "updateSkills()"); // Add event listener for updating skills

  // Create new label
  var newLabel = document.createElement("label");

  // Get the specified containers and insert new label and input field
  var container1 = document.getElementById("skillContainer1");
  newLabel.textContent = "Skill (" + skillCounter1 + "):";
  newInput.id = "skillInput" + skillCounter1;
  container1.appendChild(newLabel.cloneNode(true));
  container1.appendChild(newInput.cloneNode(true));

  var container3 = document.getElementById("skillContainer3");
  newLabel.textContent = "Skill (" + skillCounter2 + "):";
  newInput.id = "skillInput" + skillCounter2;
  container3.appendChild(newLabel.cloneNode(true));
  container3.appendChild(newInput.cloneNode(true));

  // Call updateSkills function after adding new input fields
  updateSkills();
}

function updateText() {
  // Your updateText function logic here
}

var languageCounter1 = 1; // Initial counter for column1 (odd)
    var languageCounter2 = 2; // Initial counter for column3 (even)

    function addLanguageInputFields(columnId1, columnId2) {
      languageCounter1 += 2; // Increment by 2 to get odd numbers
      languageCounter2 += 2; // Increment by 2 to get even numbers

      // Create new input field
      var newInput = document.createElement("input");
      newInput.type = "text";
      newInput.className = "form-control";
      newInput.setAttribute("onkeyup", "updateText()");

      // Create new label
      var newLabel = document.createElement("label");

      // Get the specified containers and insert new label and input field
      var container1 = document.getElementById("languageContainer1");
      newLabel.textContent = "Language (" + languageCounter1 + "):";
      newInput.id = "languageInput" + languageCounter1;
      console.log(newInput.id)
      container1.appendChild(newLabel.cloneNode(true));
      container1.appendChild(newInput.cloneNode(true));

      var container3 = document.getElementById("languageContainer3");
      newLabel.textContent = "Language (" + languageCounter2 + "):";
      newInput.id = "languageInput" + languageCounter2;
      console.log(newInput.id)
      container3.appendChild(newLabel.cloneNode(true));
      container3.appendChild(newInput.cloneNode(true));
    }

    function updateText() {
      // Your updateText function logic here
    }
    function openPopup() {
      // Show the popup
      document.getElementById('imagePopup').style.display = 'block';
    }

    function closePopup() {
      // Close the popup
      document.getElementById('imagePopup').style.display = 'none';
    }

    $(document).ready(function () {
      // Attach input event to all input fields
      $("input").on("input", function () {
        // Get the input value
        var inputValue = $(this).val();

        // Get the corresponding template field id
        var templateField = $(this).data("template-field");

        // Update the template with the input value
        $("#" + templateField).text(inputValue);
      });

      // Add similar event handling for textarea
      $("textarea").on("input", function () {
        var inputValue = $(this).val();
        var templateField = $(this).data("template-field");
        $("#" + templateField).text(inputValue);
      });
    });
    
// dynamic ---------------------------------



var storedFirstName = localStorage.getItem('firstName');
if (storedFirstName) {
    document.getElementById('firstName').value = storedFirstName;

}

var storedLastName = localStorage.getItem('lastName');
if (storedLastName) {
  document.getElementById('lastName').value = storedLastName;
}
var storedEmail = localStorage.getItem('email');
if (storedEmail) {
  document.getElementById('email').value = storedEmail;
}
var storedPhoneno = localStorage.getItem('phoneNumber');
if (storedPhoneno) {
  document.getElementById('phoneNumber').value = storedPhoneno;
}
var storedlinkedin = localStorage.getItem('linkedin');
if (storedlinkedin) {
  document.getElementById('linkedin').value = storedlinkedin;
}
var storedsummary = localStorage.getItem('summaryTextArea');
if (storedsummary) {
  document.getElementById('summaryTextArea').value = storedsummary;
}


updateText(); // Update the display with the stored values

function updateText() {
  var firstName = document.getElementById("firstName").value;
  var Display_Fname = document.getElementById("Display_Fname");
  Display_Fname.textContent = firstName;

  var lastName = document.getElementById('lastName').value;
  var Display_Lname = document.getElementById("Display_Lname");
  Display_Lname.textContent = lastName;

  var email = document.getElementById('email').value;
  var Display_Email = document.getElementById("Display_Email");
  Display_Email.textContent = email;

  var phoneNumber = document.getElementById('phoneNumber').value;
  var Display_Phoneno = document.getElementById("Display_Phoneno");
  Display_Phoneno.textContent = phoneNumber;

  var linkedin = document.getElementById('linkedin').value;
  var Display_lnkedin = document.getElementById("Display_lnkedin");
  Display_lnkedin.textContent = linkedin;

  var summaryTextArea = document.getElementById('summaryTextArea').value;
  var Display_Summary = document.getElementById("Display_Summary");
  Display_Summary.textContent = summaryTextArea;

  // Store the values in localStorage
  localStorage.setItem('firstName', firstName);
  localStorage.setItem('lastName', lastName);
  localStorage.setItem('email', email);
  localStorage.setItem('phoneNumber', phoneNumber);
  localStorage.setItem('linkedin', linkedin);
  localStorage.setItem('summaryTextArea', summaryTextArea);
}
 // Example JavaScript to dynamically adjust margin-top

 //education section
   // Retrieve the stored value from localStorage
   var storedInstitutionName = localStorage.getItem('userInstitutionName');
   var initialInstitutionName = storedInstitutionName || 'Copenhagen School of Design and Technology';
   var storedDegree = localStorage.getItem('userDegree') || 'Bachelor of Engineering';
   var storedDegreeFrom = localStorage.getItem('userDegreeFrom') || '2015';
   var storedDegreeTo = localStorage.getItem('userDegreeTo') || '2017';
 
   // Set the initial value in the input and div
   document.getElementById('institution1').setAttribute('placeholder', initialInstitutionName);
   document.getElementById('schoolDiv').textContent = initialInstitutionName + ',';
   document.getElementById('degreeDiv').textContent = storedDegree;
  document.getElementById('degreeInput').setAttribute('placeholder', storedDegree);
  document.getElementById('degreeFrom').textContent = storedDegreeFrom + ' - ';
  document.getElementById('degreeTo').textContent = storedDegreeTo;

 
   function updateInstitution() {
     // Get the input value
     var institutionName = document.getElementById('institution1').value;
 
     // Update the div content
     document.getElementById('schoolDiv').textContent = institutionName + ',';
 
     // Update the placeholder attribute
     document.getElementById('institution1').setAttribute('placeholder', institutionName);
 
     // Store the value in localStorage
     localStorage.setItem('userInstitutionName', institutionName);
   }
   function updateDegree() {
    // Get the input value
    var degreeValue = document.getElementById('degreeInput').value;

    // Update the div content and placeholder
    document.getElementById('degreeDiv').textContent = degreeValue;
    document.getElementById('degreeInput').setAttribute('placeholder', degreeValue);

    // Store the value in localStorage
    localStorage.setItem('userDegree', degreeValue);
  }

  function updateFromYear() {
    // Get the input value
    var fromYearValue = document.getElementById('degreeFromInput').value;

    // Update the div content
    document.getElementById('degreeFrom').textContent = fromYearValue + ' | ';

    // Store the value in localStorage
    localStorage.setItem('userDegreeFrom', fromYearValue);
  }

  function updateToYear() {
    // Get the input value
    var toYearValue = document.getElementById('degreeToInput').value;

    // Update the div content
    document.getElementById('degreeTo').textContent = toYearValue;

    // Store the value in localStorage
    localStorage.setItem('userDegreeTo', toYearValue);
  }