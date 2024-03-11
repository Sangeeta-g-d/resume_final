// Get the id passed from the view
  
function deleteProject() {
  var projectSection = document.querySelector('.project-section');
  projectSection.parentNode.removeChild(projectSection);
}

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

  var formId = 'experience' + experienceCount;
  var degreeInputId = 'degreeInput' + experienceCount;
  var institutionInputId = 'institution' + experienceCount;
  var cityInputId = 'city' + experienceCount;
  var fromInputId = 'from' + experienceCount;
  var toInputId = 'to' + experienceCount;

  content.innerHTML = '<form id="' + formId + '">' +
    '<div class="form-group">' +
    '<input type="text" id="' + institutionInputId + '" class="form-control" placeholder="Institution Name" name="' + institutionInputId + '" style="height: 30px;" oninput="updateInstitution(' + experienceCount + ')">' +
    '</div>' +
    '<div class="form-group">' +
    '<input type="text" id="' + degreeInputId + '" class="form-control" placeholder="Degree" name="' + degreeInputId + '" style="height: 30px;" onkeyup="updateDegree(' + experienceCount + ')">' +
    '</div>' +
    '<div class="form-group">' +
    '<input type="text" id="' + cityInputId + '" class="form-control" placeholder="City" name="' + cityInputId + '" style="height: 30px;" onkeyup="updateCity(' + experienceCount + ')">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="' + fromInputId + '" style="margin-right: 10px;">From:</label>' +
    '<input type="date" id="' + fromInputId + '" name="' + fromInputId + '" class="form-control" style="height: 35px;" onchange="updateDegreeYear(' + experienceCount + ')">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="' + toInputId + '" style="margin-right: 10px;">To:</label>' +
    '<input type="date" id="' + toInputId + '" class="form-control" name="' + toInputId + '" style="height: 35px;" onchange="updateDegreeYear(' + experienceCount + ')">' +
    '</div>' +
    '</form>';

  newExperience.appendChild(header);
  newExperience.appendChild(content);
  container.insertBefore(newExperience, container.lastElementChild);
  
  // Display div generation and appending
  var displayDiv = generateDisplayDiv(experienceCount);
  var educationContainer = document.getElementById('educationContainer'); // Assuming you have an element with id 'educationContainer'
  educationContainer.appendChild(displayDiv);
  
}
function generateDisplayDiv(experienceCount) {
  var displayDiv = document.createElement('div');
  displayDiv.classList.add('education');
  displayDiv.style.marginTop = "40px";

  displayDiv.innerHTML = 
    '<div style="width: 258px; ">' +
    '<div style="color: #222222; font-size: 12px; font-family: Poppins; font-weight: 700; line-height: 20px; word-wrap: break-word;">' +
    '<span id="displayDegree' + experienceCount + '">Bachelor of Engineering</span><br>' +
    '<span id="displayDegreeFrom' + experienceCount + '"> 2015  </span> | <span id="displayDegreeTo' + experienceCount + '"> 2017 </span>' +
    '</div>' +
    '<div id="displayCollege' + experienceCount + '" style="color: #797979; font-size: 11px; font-family: Prata; font-weight: 400; line-height: 16px; word-wrap: break-word;">' +
    'Copenhagen School of Design and Technology,' +
    '</div>' +
    
    '<div id="displayCity' + experienceCount + '" style="color: #797979; font-size: 11px; font-family: Prata; font-weight: 400; line-height: 16px; word-wrap: break-word;">' +
    'City' +
    '</div>' +
    '</div>';

    return displayDiv;
  }






function updateInstitution(experienceCount) {
  var institutionInputValue = document.getElementById('institution' + experienceCount).value;
  document.getElementById('displayCollege' + experienceCount).innerText = institutionInputValue;
}

function updateDegree(experienceCount) {
  var degreeInputValue = document.getElementById('degreeInput' + experienceCount).value;
  document.getElementById('displayDegree' + experienceCount).innerText = degreeInputValue;
}

function updateCity(experienceCount) {
  var cityInputValue = document.getElementById('city' + experienceCount).value;
  document.getElementById('displayCity' + experienceCount).innerText = cityInputValue;
}

function updateDegreeYear(experienceCount) {
  var fromInputValue = document.getElementById('from' + experienceCount).value;
  document.getElementById('displayDegreeFrom' + experienceCount).innerText = fromInputValue;
  
  var toInputValue = document.getElementById('to' + experienceCount).value;
  document.getElementById('displayDegreeTo' + experienceCount).innerText = toInputValue;
}




function storeEducationData(experienceCount) {
  var educationData = {
    degree: document.getElementById('degreeInput' + experienceCount).value,
    institution: document.getElementById('institution' + experienceCount).value,
    city: document.getElementById('city' + experienceCount).value,
    from: document.getElementById('from' + experienceCount).value,
    to: document.getElementById('to' + experienceCount).value
  };

  // Store educationData in localStorage
  localStorage.setItem('education' + experienceCount, JSON.stringify(educationData));
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
    '<label for="description' + experienceCount + '">Link:</label>' +
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
  var displayDiv = generateProjectDisplayDiv(experienceCount);
  var projectsContainer = document.getElementById('projectsContainer'); // Assuming you have an element with id 'projectsContainer'
  projectsContainer.appendChild(displayDiv);
}

function generateProjectDisplayDiv(experienceCount) {
  var displayDiv = document.createElement('div');
  displayDiv.classList.add('projects');
  displayDiv.style.marginTop = "10px";

  displayDiv.innerHTML =
    '<div class="project-section" style="width: 258px; ">' +
    '<div style="color: #222222; font-size: 12px; font-family: Poppins; font-weight: 700; line-height: 20px; word-wrap: break-word;">' +
    '<span id="displayProjectName' + experienceCount + '">Fees Management System</span>' +
    '</div>' +
    '<div id="displayProjectTools' + experienceCount + '" style="color: #797979; font-size: 11px; font-family: Prata; font-weight: 400; line-height: 16px; word-wrap: break-word;">' +
    'Tools used: Python, Django, MySQL, Excel' +
    '</div>' +
    '<div id="displayProjectLink' + experienceCount + '" style="color: #797979; font-size: 11px; font-family: Prata; font-weight: 400; line-height: 16px; word-wrap: break-word;">' +
    'https://www.kickresume.com/dashboard/resumes/' +
    '</div>' +
    '<div id="displayProjectDes' + experienceCount + '" style="color: #222222; font-size: 10px; font-family: Poppins; font-weight: 400; line-height: 14px; word-wrap: break-word; overflow: hidden;">' +
    'Developed a streamlined and efficient fees processing website. <br> User-friendly web-based Fees management System that automated entire fee processing workflow by integrating secure payment gateway. <br>Reduced administrative workload and processing time. <br> Students can crack their fees and pay accordingly through Razor pay gateway.' +
    '</div>' +
    '</div>';

      return displayDiv;
}


function toggleProject(header) {
  var content = header.nextElementSibling;
  header.querySelector('i').classList.toggle('fa-chevron-down');
  header.querySelector('i').classList.toggle('fa-chevron-up');
  content.classList.toggle('hidden');
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



 // Update the display with the stored values

 




function updateFName_Lname() {
  // Update first name
  var firstNameValue = document.getElementById("firstName").value;
  document.getElementById("Display_Fname").innerText = firstNameValue;

  // Update last name
  var lastNameValue = document.getElementById("lastName").value;
  document.getElementById("Display_Lname").innerText = lastNameValue;

  // Store values in local storage
  localStorage.setItem("firstName", firstNameValue);
  localStorage.setItem("lastName", lastNameValue);
  
}

function updateLinkedin(){
  // Update LinkedIn URL
  var linkedinValue = document.getElementById("linkedin").value;
  document.getElementById("Display_lnkedin").innerText = linkedinValue;
  localStorage.setItem("linkedin", linkedinValue); 
}

function updateEmail(){
  // Update email
  var emailValue = document.getElementById("email").value;
  document.getElementById("Display_Email").innerText = emailValue;
  localStorage.setItem("email", emailValue);
}

function updatePhoneno(){
  // Update phone number
  var phoneNumberValue = document.getElementById("phoneNumber").value;
  document.getElementById("Display_Phoneno").innerText = phoneNumberValue;
  localStorage.setItem("phoneNumber", phoneNumberValue);
}

function updateSummary(){ 
  var SummaryValue = document.getElementById("summary1").value;
  document.getElementById("Display_Summary").innerText = SummaryValue;
  localStorage.setItem("summary1", SummaryValue);
}

function updateProjectname(){ 
  var projectNameValue = document.getElementById("projectName").value;
  var projectNameElement = document.getElementById("displayProjectName")
  projectNameElement.innerHTML = projectNameValue
  localStorage.setItem("projectNameLocal", projectNameValue);
}

function updateProjectTools(){ 
  var projectToolsValue = document.getElementById("projectTools").value;
  var projectToolsElement = document.getElementById("displayTools")
  projectToolsElement.innerHTML = projectToolsValue
  localStorage.setItem("projectToolsLocal", projectToolsValue);
}

function updateProjectLink(){ 
  var projectLinkValue = document.getElementById("projectLink").value;
  var projectLinkElement = document.getElementById("displayProjectLink")
  projectLinkElement.innerHTML = projectLinkValue
  localStorage.setItem("projectLinkLocal", projectLinkValue);
}

function updateProjectDes(){ 
  var projectDesValue = document.getElementById("projectDes").value;
  var projectDesElement = document.getElementById("displayProjectDes")
   // Replace periods with a round dot and a line break
   var formattedValue = projectDesValue.replace(/\.\s*/g, '<br>&bull; ');
    projectDesElement.innerHTML = formattedValue;
  localStorage.setItem("projectDesLocal", projectDesValue);
}

function handlePresentCheckbox() {
  var presentCheckbox = document.getElementById('present1');
  if (presentCheckbox.checked) {
      document.getElementById('Display_To').textContent = 'Present';
      document.getElementById('to1').value = '';
      localStorage.setItem('toValue', '');
  } else {
      updateExperience();
  }
}

 // Experience
 function updateExperience() {
  var inputValue = document.getElementById("jobtitle1").value;
  var divElement = document.getElementById("Display_Designation");
  divElement.innerText = inputValue;
  
  var companyValue = document.getElementById("company1").value;
  
  // Update company name
  var companyNameElement = document.getElementById("Display_Cname");
  companyNameElement.innerText = companyValue;

  // Update description
  var descriptionElement = document.getElementById("Display_Description");
  descriptionElement.innerText = descriptionValue;

  var descriptionElement = document.getElementById("Display_Description");
  descriptionElement.innerText = descriptionValue;


  var FromValue = document.getElementById("from1").value;
  var FromElement = document.getElementById("Display_From");
  FromElement.innerText = FromValue;

  var ToValue = document.getElementById("to1").value;
  var ToElement = document.getElementById("Display_To");
  ToElement.innerText = ToValue;

  var toDate = document.getElementById('to1').value;
  if (!toDate) {
      document.getElementById('Display_To').textContent = '';
  } else {
      document.getElementById('Display_To').textContent = toDate;
  }
  // Save the current value to localStorage
  localStorage.setItem('toValue', toDate);
  
  // Store all values in local storage
  localStorage.setItem("jobTitle", inputValue);
  localStorage.setItem("companyName", companyValue);
  localStorage.setItem("description", descriptionValue);
  localStorage.setItem("from1", FromValue);
}

function updateExperienceDescription() {
  var descriptionValue = document.getElementById("description1").value;
    // Update description
    var descriptionElement = document.getElementById("Display_Description");
    descriptionElement.innerText = descriptionValue;
  
    var descriptionElement = document.getElementById("Display_Description");
    descriptionElement.innerText = descriptionValue;

    localStorage.setItem("description", descriptionValue);
}

function updateDegree() {
  var degreeValue = document.getElementById("degreeInput").value;
  var degreeElement = document.getElementById("displayDegree")
  degreeElement.innerHTML = degreeValue
  localStorage.setItem("degreeInputLocal", degreeValue);
}

function updateDegreeYear() {
  var degreeFromValue = document.getElementById("degreeFromInput").value;
  var degreeFromElement = document.getElementById("displayDegreeFrom")
  degreeFromElement.innerHTML = degreeFromValue

  var degreeToValue = document.getElementById("degreeToInput").value;
  var degreeToElement = document.getElementById("displayDegreeTo")
  degreeToElement.innerHTML = degreeToValue

  localStorage.setItem("degreeFromLocal", degreeFromValue);
  localStorage.setItem("degreeToLocal", degreeToValue);
}

function updateInstitution() {
  var collegeValue = document.getElementById("institution1").value;
  var collegeElement = document.getElementById("displayCollege")
  collegeElement.innerHTML = collegeValue
  localStorage.setItem("collegeInputLocal", collegeValue);
}

function updateCityCountry() {
  var cityValue = document.getElementById("city").value;
  var cityElement = document.getElementById("displayCity")
  cityElement.innerHTML = cityValue
  localStorage.setItem("cityLocal", cityValue); 
}
function updateSkills() {
  var skill1 = document.getElementById('skill1').value;
  var skillsList = document.getElementById('skillsList');
  
  // Split input by commas and trim extra spaces
  var skillsArray = skill1.split(',').map(skill => skill.trim());
  
  // Generate the HTML for the skills list
  var skillsHTML = '<ul>';
  skillsArray.forEach(skill => {
    skillsHTML += '<li>' + skill + '</li>';
  });
  skillsHTML += '</ul>';
  
  // Update the content of the skills list
  skillsList.innerHTML = skillsHTML;

  // Store entered skills in localStorage
  localStorage.setItem('enteredSkills', skill1);
}




function retrieveStoredValue() {
  var storedValue = localStorage.getItem("jobTitle");
  var storedCompanyName = localStorage.getItem("companyName");
  var storedDescription = localStorage.getItem("description");
  var storedDegree = localStorage.getItem("degreeInputLocal")
  var storedFromDegree = localStorage.getItem("degreeFromLocal")
  var storedToDegree = localStorage.getItem("degreeToLocal")
  var storedCollege = localStorage.getItem("collegeInputLocal")
  var storedCity = localStorage.getItem("cityLocal")
  var storedProjectName = localStorage.getItem("projectNameLocal")
  var storedProjectTools = localStorage.getItem("projectToolsLocal")
  var storedProjectLink = localStorage.getItem("projectLinkLocal")
  var storedProjectDes = localStorage.getItem("projectDesLocal")
  var storedSkills = localStorage.getItem("enteredSkills")
 

  if (storedValue) {
    document.getElementById("jobtitle1").value = storedValue;
    document.getElementById("Display_Designation").innerText = storedValue;
  }
  if (storedProjectTools) {
    document.getElementById("projectTools").value = storedValue;
    document.getElementById("displayProjectTools").innerText = storedValue;
  }
  if (storedProjectLink) {
    document.getElementById("projectLink").value = storedValue;
    document.getElementById("displayProjectLink").innerText = storedValue;
  }
  if(storedProjectName){
    document.getElementById("projectName").value = storedProjectName
    document.getElementById("displayProjectName").innerHTML = storedProjectName
  }

  if(storedProjectDes){
    document.getElementById("projectDes").value = storedProjectName
    document.getElementById("displayProjectDes").innerHTML = storedProjectName
  }
  
  if (storedCompanyName) {
    document.getElementById("company1").value = storedCompanyName;
    document.getElementById("Display_Cname").innerText = storedCompanyName;
  }

  if (storedDescription) {
    document.getElementById("description1").value = storedDescription;
    document.getElementById("Display_Description").innerText = storedDescription;
  }
  if (storedDegree){
    document.getElementById("degreeInput").value = storedDegree
    document.getElementById("displayDegree").innerHTML = storedDegree
  }
  if (storedFromDegree){
    document.getElementById("degreeFromInput").value = storedFromDegree
    document.getElementById("displayDegreeFrom").innerHTML = storedFromDegree
  }
  if (storedToDegree){
    document.getElementById("degreeToInput").value = storedToDegree
    document.getElementById("displayDegreeTo").innerHTML = storedToDegree
  }
  if (storedCollege){
    document.getElementById("institution1").value = storedCollege
    document.getElementById("displayCollege").innerHTML = storedCollege
  }
  if (storedCity){
    document.getElementById('city').value = storedCity
    document.getElementById('displayCity').innerHTML = storedCity
  }
  if (storedSkills){
    document.getElementById('skill1').value = storedSkills
    document.getElementById('skillsList').innerHTML = storedSkills
  }
 


  var storedFirstname = localStorage.getItem("firstName");
  if (storedFirstname) {
    document.getElementById("firstName").value = storedFirstname;
    document.getElementById("Display_Fname").innerText = storedFirstname;
  }

  var storedLastname = localStorage.getItem("lastName");
  if (storedLastname) {
    document.getElementById("lastName").value = storedLastname;
    document.getElementById("Display_Lname").innerText = storedLastname;
  }

  var storedPhoneNumber = localStorage.getItem("phoneNumber");
  if (storedPhoneNumber) {
    document.getElementById("phoneNumber").value = storedPhoneNumber;
    document.getElementById("Display_Phoneno").innerText = storedPhoneNumber;
  }

  var storedEmail = localStorage.getItem("email");
  if (storedEmail) {
    document.getElementById("email").value = storedEmail;
    document.getElementById("Display_Email").innerText = storedEmail;
  }

  var storedLinkedin = localStorage.getItem("linkedin");
  if (storedLinkedin) {
    document.getElementById("linkedin").value = storedLinkedin;
    document.getElementById("Display_lnkedin").innerText = storedLinkedin;
  }
  var storedSummary = localStorage.getItem("summary1");
  if (storedSummary) {
    document.getElementById("summary1").value = storedSummary;
    document.getElementById("Display_Summary").innerText = storedSummary;
  }
  var storedFrom = localStorage.getItem("from1");
  if (storedFrom) {
    document.getElementById("from1").value = storedFrom;
    document.getElementById("Display_From").innerText = storedFrom;
  }
  var skill1 = localStorage.getItem('enteredSkills');
  if (skill1) {
      document.getElementById('skill1').value = skill1;
      updateSkills(); // Corrected function call
  }
      
  loadEducationFromLocalStorage();

      }
  

 
// Call the function to retrieve stored value when the page loads
window.onload = retrieveStoredValue;





