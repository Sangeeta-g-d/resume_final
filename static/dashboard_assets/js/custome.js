// Get the id passed from the view
  
// Function to delete the first project section
function deleteProject() {
  var projectSection = document.querySelector('.project-section');
  projectSection.parentNode.removeChild(projectSection);
}
// Add an event listener to a parent container (replace 'projectsContainer' with the actual parent container ID)
document.getElementById('projectsContainer').addEventListener('click', function (event) {
  // Check if the clicked element has the 'delete-symbol' class
  if (event.target.classList.contains('delete-symbol')) {
    // Extract the projectCount from the clicked element's ID
    var projectCount = extractProjectCount(event.target.id);

    // Call the deleteProject1 function with the extracted projectCount
    deleteProject1(projectCount);
  }
});

// Function to extract projectCount from the element's ID
function extractProjectCount(elementId) {
  // Assuming the element ID format is 'delete-symbol-{projectCount}'
  var parts = elementId.split('-');
  return parseInt(parts[parts.length - 1]);
}

function deleteProject1(projectCount) {
  // Remove form content
  var formElement = document.getElementById('project1' + projectCount);
  if (formElement) {
    formElement.parentNode.removeChild(formElement);
    console.log('Form Element Deleted:', formElement);
  } else {
    console.log('Form Element not found.');
  }

  // Remove project section
  var projectSection = document.getElementById('project-section' + projectCount);
  if (projectSection) {
    projectSection.parentNode.removeChild(projectSection);
    console.log('Project Section Element Deleted:', projectSection);
  } else {
    console.log('Project Section Element not found.');
  }

  // Remove display div
  var displayDiv = document.getElementById('displayDiv' + projectCount);
  if (displayDiv) {
    displayDiv.parentNode.removeChild(displayDiv);
    console.log('Display Div Element Deleted:', displayDiv);
  } else {
    console.log('Display Div Element not found.');
  }

  // Update local storage to reflect the changes (replace with your actual function)
  updateLocalStorage();
}
// Update local storage to reflect the changes
function updateLocalStorage() {
  console.log("hiiiiiiiiiiiiii")
  // Assuming projectsData is an array that stores project data
  var projectsData = [];

  // Loop through existing projects and store their data
  var projectContainers = document.getElementsByClassName('project-section1');
  console.log(projectContainers)
  for (var i = 0; i < projectContainers.length; i++) {
    var projectCount = i + 1;

    var projectData = {
      projectName: document.getElementById('projectName' + projectCount).value,
      toolsUsed: document.getElementById('description' + projectCount).value,
      link: document.getElementById('jobtitle' + projectCount).value,
      description: document.getElementById('description' + projectCount).value
    };

    projectsData.push(projectData);
  }

  // Save the data to local storage
  localStorage.setItem('projectsData', JSON.stringify(projectsData));
}

// Load projects from local storage
function loadProjectsFromLocalStorage() {
  var projectsData = localStorage.getItem('projectsData');

  if (projectsData) {
    projectsData = JSON.parse(projectsData);

    // Loop through the stored projects and recreate them
    for (var i = 0; i < projectsData.length; i++) {
      var projectCount = i + 1;

      // Recreate the project and display it
      recreateProject(projectCount, projectsData[i]);
    }
  }
}

// Function to recreate a project based on stored data
function recreateProject(projectCount, projectData) {
  // Your code to recreate the project goes here
  // Create the project HTML elements and append them to the container

  // Example:
  var container = document.getElementById('container3');
  var newProject = document.createElement('div');
  newProject.classList.add('project-section1');

  // ... (create header and content elements as you did before)

  // Populate the form fields with stored data
  document.getElementById('projectName' + projectCount).value = projectData.projectName;
  document.getElementById('description' + projectCount).value = projectData.toolsUsed;
  document.getElementById('jobtitle' + projectCount).value = projectData.link;
  document.getElementById('description' + projectCount).value = projectData.description;

  // ... (append newProject to the container)

  // Recreate the display div
  var displayDivId = 'displayDiv' + projectCount;
  var projectSectionId = 'project-section' + projectCount;

  var displayDiv = generateProjectDisplayDiv(projectCount, displayDivId, projectSectionId);
  var projectsContainer = document.getElementById('projectsContainer');
  projectsContainer.appendChild(displayDiv);
}

// Load projects from local storage when the page loads
window.addEventListener('load', loadProjectsFromLocalStorage);

// Function to update local storage (replace with your actual implementation)
function updateLocalStorage() {
  console.log('Updating Local Storage...');
  // Your logic to update local storage goes here
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

  var formId = 'experience' + experienceCount;
  var jobtitleInputId = 'jobtitle' + experienceCount;
  var companyInputId = 'company' + experienceCount;
  var fromInputId = 'from' + experienceCount;
  var toInputId = 'to' + experienceCount;
  var descriptionInputId = 'description' + experienceCount;

  content.innerHTML = '<form id="' + formId + '">' +
    '<div class="form-group">' +
    '<input type="text" id="' + jobtitleInputId + '" class="form-control" placeholder="Designation" name="' + jobtitleInputId + '" style="height: 30px;" oninput="updateExperience2(' + experienceCount + ')">' +
    '</div>' +
    '<div class="form-group">' +
    '<input type="text" id="' + companyInputId + '" class="form-control" placeholder="Company Name" name="' + companyInputId + '" style="height: 30px;" oninput="updateExperience2(' + experienceCount + ')">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="' + fromInputId + '" style="margin-right: 10px;">From:</label>' +
    '<input type="month" id="' + fromInputId + '" name="' + fromInputId + '" class="form-control" style="height: 35px;" oninput="updateExperience2(' + experienceCount + ')">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="' + toInputId + '" style="margin-right: 10px;">To:</label>' +
    '<input type="month" id="' + toInputId + '" class="form-control" name="' + toInputId + '" style="height: 35px;" oninput="updateExperience2(' + experienceCount + ')">'+
    '</div>' +
    '<div class="form-group">' +
    '<label for="' + descriptionInputId + '">Description:</label>' +
    '<textarea id="' + descriptionInputId + '" class="form-control" name="' + descriptionInputId + '" rows="5" oninput="updateExperience2(' + experienceCount + ')"></textarea>' +
    '</div>' +
    '</form>';

  newExperience.appendChild(header);
  newExperience.appendChild(content);
  container.insertBefore(newExperience, container.lastElementChild);

  // Generate display div for the new experience section
  var displayDiv = generateExperienceDisplayDiv(experienceCount);
  document.getElementById('experienceContainer').appendChild(displayDiv);
  saveExperience();
}
function generateExperienceDisplayDiv(experienceCount) {
  var displayDiv = document.createElement('div');
  displayDiv.classList.add('work-experience');
  displayDiv.style.marginTop = "10px";

  displayDiv.innerHTML = 
    
    '<div style="width: 254px;">' +     
    '<div id="Display_Designation' + experienceCount + '" style="color: #222222; font-size: 14px; font-family: Poppins; font-weight: 700; line-height: 20px; word-wrap: break-word;">' +
    'Product Designer' +
    '</div>' +
    '<div style="color: #797979; font-size: 11px; font-family: Prata; font-weight: 400; line-height: 16px; word-wrap: break-word;">' +
    '<span id="Display_Cname' + experienceCount + '"> Fintef</span>, <span id="Display_From' + experienceCount + '"> 2019 </span >-<span id="Display_To' + experienceCount + '"> Present</span>' +
    '</div>' +
    '<div class="content">' +
    '<div id="Display_Description' + experienceCount + '" style="color: #222222; font-size: 10px; font-family: Poppins; font-weight: 400; line-height: 14px; word-wrap: break-word; overflow: hidden;">' +
    'Designing end-to-end experience for financial products on mobile & web platforms. Working closely with managers, marketing specialists, and developers..' +
    '</div>' +
    '</div>' +
    '</div>';

  return displayDiv;
}
function saveExperience() {
  var containerHtml = document.getElementById('container1').innerHTML;
  var experienceContainerHtml = document.getElementById('experienceContainer').innerHTML;
  localStorage.setItem('experienceContainerHtml', experienceContainerHtml);
  localStorage.setItem('containerHtml', containerHtml);
}

function loadExperience() {
  var containerHtml = localStorage.getItem('containerHtml');
  var experienceContainerHtml = localStorage.getItem('experienceContainerHtml');
  if (containerHtml && experienceContainerHtml) {
    document.getElementById('container1').innerHTML = containerHtml;
    document.getElementById('experienceContainer').innerHTML = experienceContainerHtml;
  }
 // localStorage.clear();
}
function updateExperience2(experienceCount) {
  console.log(experienceCount)
  var jobtitleValue2 = document.getElementById('jobtitle' + experienceCount).value;
  document.getElementById('Display_Designation' + experienceCount).innerText = jobtitleValue2;
  
    var companyValue2 = document.getElementById('company' + experienceCount).value;
    document.getElementById('Display_Cname' + experienceCount).innerText = companyValue2;
  
  
    var desValue2 = document.getElementById('description' + experienceCount).value;
    document.getElementById('Display_Description' + experienceCount).innerText = desValue2;
  
  
    var fromValue2 = document.getElementById('from' + experienceCount).value;
    console.log(fromInputValue)
    document.getElementById('Display_From' + experienceCount).innerText = fromValue2;
    
    var toValue2 = document.getElementById('to' + experienceCount).value;
    document.getElementById('Display_To' + experienceCount).innerText = toValue2;

   
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
  var educationCount = container.getElementsByClassName('education-section').length + 1;
  var newEducation = document.createElement('div');
  newEducation.classList.add('education-section');

  var header = document.createElement('div');
  header.classList.add('education-header');
  header.onclick = function () { toggleEducation(this) };
  header.innerHTML = '<i class="fas fa-chevron-down"></i><p><b>Education ' + educationCount + '</b></p>';

  var content = document.createElement('div');
  content.classList.add('education-content');

  var formId = 'education' + educationCount;
  var degreeInputId = 'degreeInput' + educationCount;
  var institutionInputId = 'institution' + educationCount;
  var cityInputId = 'city' + educationCount;
  var fromInputId = 'degreeFromInput' + educationCount;
  var toInputId = 'to' + educationCount;

  content.innerHTML = '<form id="' + formId + '">' +
    '<div class="form-group">' +
    '<input type="text" id="' + institutionInputId + '" class="form-control" placeholder="Institution Name" name="' + institutionInputId + '" style="height: 30px;" oninput="updateDisplay(' + educationCount + ')">' +
    '</div>' +
    '<div class="form-group">' +
    '<input type="text" id="' + degreeInputId + '" class="form-control" placeholder="Degree" name="' + degreeInputId + '" style="height: 30px;" oninput="updateDisplay(' + educationCount + ')">' +
    '</div>' +
    '<div class="form-group">' +
    '<input type="text" id="' + cityInputId + '" class="form-control" placeholder="City" name="' + cityInputId + '" style="height: 30px;" oninput="updateDisplay(' + educationCount + ')">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="' + fromInputId + '" style="margin-right: 10px;">From:</label>' +
    '<input type="month" id="' + fromInputId + '" name="' + fromInputId + '" class="form-control" style="height: 35px;" onchange="updateDisplay(' + educationCount + ')">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="' + toInputId + '" style="margin-right: 10px;">To:</label>' +
    '<input type="month" id="' + toInputId + '" class="form-control" name="' + toInputId + '" style="height: 35px;" onchange="updateDisplay(' + educationCount + ')">' +
    '</div>' +
    '</form>';

    newEducation.appendChild(header);
    newEducation.appendChild(content);
  container.insertBefore(newEducation, container.lastElementChild);
  
  var displayDiv = generateDisplayDiv(educationCount);
      var educationContainer = document.getElementById('educationContainer'); // Assuming you have an element with id 'educationContainer'
      educationContainer.appendChild(displayDiv);
      
  // Save added education to local storage
  saveEducation();
}

function generateDisplayDiv(educationCount) {
  var displayDiv = document.createElement('div');
  displayDiv.classList.add('education');
  displayDiv.style.marginTop = "30px";

  displayDiv.innerHTML = 
    '<div style="width: 258px; ">' +
    '<div style="color: #222222; font-size: 12px; font-family: Poppins; font-weight: 700; line-height: 20px; word-wrap: break-word;">' +
    '<span id="displayDegree' + educationCount + '">Bachelor of Engineering</span><br>' +
    '<span id="displayDegreeFrom' + educationCount + '"> 2015  </span> | <span id="displayDegreeTo' + educationCount + '"> 2017 </span>' +
    '</div>' +
    '<div id="displayCollege' + educationCount + '" style="color: #797979; font-size: 11px; font-family: Prata; font-weight: 400; line-height: 16px; word-wrap: break-word;">' +
    'Copenhagen School of Design and Technology,' +
    '</div>' +
    '<div id="displayCity' + educationCount + '" style="color: #797979; font-size: 11px; font-family: Prata; font-weight: 400; line-height: 16px; word-wrap: break-word;">' +
    'City' +
    '</div>' +
    '</div>';

  return displayDiv;
}

function saveEducation() {
  var containerHtml = document.getElementById('container2').innerHTML;
  var educationContainerHtml = document.getElementById('educationContainer').innerHTML;
  localStorage.setItem('containerHtml', containerHtml);
  localStorage.setItem('educationContainerHtml', educationContainerHtml);
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
function loadEducation() {
  var containerHtml = localStorage.getItem('containerHtml');
  var educationContainerHtml = localStorage.getItem('educationContainerHtml');
  if (containerHtml && educationContainerHtml) {
    document.getElementById('container2').innerHTML = containerHtml;
    document.getElementById('educationContainer').innerHTML = educationContainerHtml;
  }
 // localStorage.clear();
}

function updateDisplay(educationCount) {
  console.log(educationCount)
  var institutionInputValue = document.getElementById('institution' + educationCount).value;
  document.getElementById('displayCollege' + educationCount).innerText = institutionInputValue;
  
    var degreeInputValue = document.getElementById('degreeInput' + educationCount).value;
    document.getElementById('displayDegree' + educationCount).innerText = degreeInputValue;
  
  
    var cityInputValue = document.getElementById('city' + educationCount).value;
    document.getElementById('displayCity' + educationCount).innerText = cityInputValue;
  
  
    var fromInputValue = document.getElementById('degreeFromInput' + educationCount).value;
    console.log(fromInputValue)
    document.getElementById('displayDegreeFrom' + educationCount).innerText = fromInputValue;
    
    var toInputValue = document.getElementById('to' + educationCount).value;
    document.getElementById('displayDegreeTo' + educationCount).innerText = toInputValue;

    localStorage.setItem("institution1", institutionInputValue);
    localStorage.setItem("degreeInput1", degreeInputValue);
    localStorage.setItem("city1", cityInputValue);
    localStorage.setItem("from1", fromInputValue);
    localStorage.setItem("to1", toInputValue);
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
function saveProject() {
  var containerHtml = document.getElementById('container3').innerHTML;
  var projectContainerHtml = document.getElementById('projectsContainer').innerHTML;
  localStorage.setItem('containerHtml', containerHtml);
  localStorage.setItem('projectContainerHtml', projectContainerHtml);
  var projectNameValue = document.getElementById("projectName" + projectCount).value;
  localStorage.setItem("dynamicProjectNameLocal" + projectCount, projectNameValue);
}
function addNewProject() {
  var container = document.getElementById('container3');
  var projectCount = container.getElementsByClassName('project-section1').length + 1;
  var newProject = document.createElement('div');
  newProject.classList.add('project-section1');

  var header = document.createElement('div');
  header.classList.add('project-header');
  header.onclick = function () { toggleProjects(this) };
  header.innerHTML = '<i class="fas fa-chevron-down"></i><p><b>Projects ' + projectCount + '</b></p>';

  var content = document.createElement('div');
  content.classList.add('project-content');
  var formId = 'project1' + projectCount;
  console.log('Form ID:', formId); // Log the form ID

  content.innerHTML = '<form id="project1' + projectCount + '">' +
    '<div class="form-group">' +
    '<input type="text" id="projectName' + projectCount + '" class="form-control" placeholder="Project Name" name="company' + projectCount + '" oninput="updateProjectName2(' + projectCount + ')" style="height: 30px;">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="description' + projectCount + '">Tools used:</label>' +
    '<textarea id="description' + projectCount + '" class="form-control" name="description' + projectCount + '" rows="3"></textarea>' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="description' + projectCount + '">Link:</label>' +
    '<input type="text" id="jobtitle' + projectCount + '" class="form-control" placeholder="Link" name="jobtitle' + projectCount + '" style="height: 30px;">' +
    '</div>' +
    '<div class="form-group">' +
    '<label for="description' + projectCount + '">Description:</label>' +
    '<textarea id="description' + projectCount + '" class="form-control" name="description' + projectCount + '" rows="5"></textarea>' +
    '</div>' +
    '</form>';

  newProject.appendChild(header);
  newProject.appendChild(content);
  container.insertBefore(newProject, container.lastElementChild);

  // Create unique IDs for the display div and project section
  var displayDivId = 'displayDiv' + projectCount;
  var projectSectionId = 'project-section' + projectCount;

  var displayDiv = generateProjectDisplayDiv(projectCount, displayDivId, projectSectionId);
  var projectsContainer = document.getElementById('projectsContainer');
  projectsContainer.appendChild(displayDiv);

  saveProject(projectCount);
}
// Function to generate project display div
function generateProjectDisplayDiv(projectCount, displayDivId, projectSectionId) {
  var displayDiv = document.createElement('div');
  displayDiv.classList.add('projects');
  displayDiv.style.marginTop = "10px";
  displayDiv.id = displayDivId;

  displayDiv.innerHTML =
    '<div class="project-section" id="' + projectSectionId + '" style="width: 258px; ">' +
    '<div class="delete-symbol" id="delete-symbol-' + projectCount + '">&#10006;</div>' +
    '<div style="color: #222222; font-size: 12px; font-family: Poppins; font-weight: 700; line-height: 20px; word-wrap: break-word;">' +
    '<span id="displayProjectName' + projectCount + '">Fees Management System</span>' +
    '</div>' +
    '<div id="displayProjectTools' + projectCount + '" style="color: #797979; font-size: 11px; font-family: Prata; font-weight: 400; line-height: 16px; word-wrap: break-word;">' +
    'Tools used: Python, Django, MySQL, Excel' +
    '</div>' +
    '<div id="displayProjectLink' + projectCount + '" style="color: #797979; font-size: 11px; font-family: Prata; font-weight: 400; line-height: 16px; word-wrap: break-word;">' +
    'https://www.kickresume.com/dashboard/resumes/' +
    '</div>' +
    '<div id="displayProjectDes' + projectCount + '" style="color: #222222; font-size: 10px; font-family: Poppins; font-weight: 400; line-height: 14px; word-wrap: break-word; overflow: hidden;">' +
    'Developed a streamlined and efficient fees processing website. <br> User-friendly web-based Fees management System that automated entire fee processing workflow by integrating secure payment gateway. <br>Reduced administrative workload and processing time. <br> Students can crack their fees and pay accordingly through Razor pay gateway.' +
    '</div>' +
    '</div>';

  return displayDiv;
}




function loadProject() {
  var containerHtml = localStorage.getItem('containerHtml');
  var projectContainerHtml = localStorage.getItem('projectContainerHtml');
  if (containerHtml && projectContainerHtml) {
    document.getElementById('container3').innerHTML = containerHtml;
    document.getElementById('projectsContainer').innerHTML = projectContainerHtml;
  }
  localStorage.clear()
}

function loadProjectData(projectCount) {
  // Load project name from localStorage
  var projectNameInput = document.getElementById("projectName" + projectCount);
  if (projectNameInput) {
    var storedValue = localStorage.getItem("dynamicProjectNameLocal" + projectCount);
    if (storedValue) {
      projectNameInput.value = storedValue;
      updateProjectName2(projectCount); // Update the display immediately
    }
  }
}
function toggleProject(header) {
  localStorage.clear();
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

function updateProjectName2(projectCount) {
  var projectNameValue = document.getElementById("projectName" + projectCount).value;
  var projectNameElement = document.getElementById("displayProjectName" + projectCount);
  if (projectNameElement) {
    projectNameElement.innerHTML = projectNameValue;

    // Store project name in localStorage
    localStorage.setItem("dynamicProjectNameLocal" + projectCount, projectNameValue);
  }
}
window.onload = function () {
  var projects = document.querySelectorAll('#container3 .project-section1');
  console.log(projects);

  for (var i = 0; i < projects.length; i++) {
    var projectCount = i + 1;
    loadProjectData(projectCount);
  }
};

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
    document.getElementById("projectTools").value = storedProjectTools;
    document.getElementById("displayProjectTools").innerText = storedProjectTools;
  }
  if (storedProjectLink) {
    document.getElementById("projectLink").value = storedProjectLink;
    document.getElementById("displayProjectLink").innerText = storedProjectLink;
  }
  if(storedProjectName){
    document.getElementById("projectName").value = storedProjectName
    document.getElementById("displayProjectName").innerHTML = storedProjectName
  }

  if(storedProjectDes){
    var formattedValue = storedProjectDes.replace(/\.\s*/g, '<br>&bull; ');

    document.getElementById("projectDes").value = storedProjectDes;
    document.getElementById("displayProjectDes").innerHTML = formattedValue;
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
      
 

      }
      loadProject();
      loadEducation();
      loadExperience();

 
// Call the function to retrieve stored value when the page loads
window.onload = retrieveStoredValue;




