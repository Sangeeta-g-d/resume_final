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
      
// dynamic ------------------------
      function updateSkills() {
        var skills1 = document.getElementById("skillContainer1").getElementsByTagName("input");
        var skills2 = document.getElementById("skillContainer3").getElementsByTagName("input");

        var skillList1 = [];
        var skillList2 = [];

        for (var i = 0; i < skills1.length; i++) {
          if (skills1[i].value.trim() !== "") {
            skillList1.push(skills1[i].value.trim());
          }
        }

        for (var j = 0; j < skills2.length; j++) {
          if (skills2[j].value.trim() !== "") {
            skillList2.push(skills2[j].value.trim());
          }
        }

        // Convert array to string before storing in localStorage
        localStorage.setItem("skills1", JSON.stringify(skillList1));
        localStorage.setItem("skills2", JSON.stringify(skillList2));

        // Update the displayed skills list
        updateSkillsList(skillList1, skillList2);
      }

      // Function to update the displayed skills list
      function updateSkillsList(skillList1, skillList2) {
        var skillListHTML1 = "<ul>";
        var skillListHTML2 = "<ul>";

        for (var i = 0; i < skillList1.length; i++) {
          skillListHTML1 += "<li>" + skillList1[i] + "</li>";
        }
        skillListHTML1 += "</ul>";

        for (var j = 0; j < skillList2.length; j++) {
          skillListHTML2 += "<li>" + skillList2[j] + "</li>";
        }
        skillListHTML2 += "</ul>";

        document.getElementById("FIELD_SKC1").innerHTML = skillListHTML1;
        document.getElementById("FIELD_SKC2").innerHTML = skillListHTML2;


      }



      function updateSummaryText() {
        var summary = document.getElementById("summaryTextArea").value;
        document.getElementById("FIELD_FRFM").textContent = summary;
        localStorage.setItem("summary", summary);
      }

      // Function to update the displayed name
      function updateText() {
        var firstName = document.getElementById("firstName").value;
        var lastName = document.getElementById("lastName").value;
        var phoneNumber = document.getElementById("phoneNumber").value;
        var email = document.getElementById("email").value;
        var address = document.getElementById("address").value;
        var linkedin = document.getElementById("linkedin").value;

        // Update the content of the span elements
        document.getElementById("FIELD_FNAM").textContent = firstName;
        document.getElementById("FIELD_LNAM").textContent = lastName;
        document.getElementById("FIELD_CPHN").textContent = phoneNumber;
        document.getElementById("FIELD_EMAI").textContent = email;
        document.getElementById("FIELD_ADDR").textContent = address;
        document.getElementById("FIELD_LNKD").textContent = linkedin;

        // Store the entered names in localStorage
        localStorage.setItem("firstName", firstName);
        localStorage.setItem("lastName", lastName);
        localStorage.setItem("phoneNumber", phoneNumber);
        localStorage.setItem("email", email);
        localStorage.setItem("address", address);
        localStorage.setItem("linkedin", linkedin);
      }

      // Function to update the displayed experience
      function updateExperience() {
        var company = document.getElementById("company1").value;
        var jobTitle = document.getElementById("jobtitle1").value;
        var city = document.getElementById("city1").value;
        var country = document.getElementById("country1").value;
        var fromDate = document.getElementById("from1").value;
        var toDate = document.getElementById("to1").value;
        var description = document.getElementById("description1").value;

        // Update the content of the corresponding elements
        document.getElementById("FIELD_CMN").textContent = company;
        document.getElementById("FIELD_JTIT").textContent = jobTitle;
        document.getElementById("FIELD_JCIT").textContent = city;
        document.getElementById("FIELD_JSTA").textContent = country;
        document.getElementById("FIELD_JSTD").textContent = fromDate;
        document.getElementById("FIELD_EDDT").textContent = toDate;

        // Parse the description and generate the list with bullet points
        var descriptionList = "<ul>";
        var descriptionPoints = description.split('.');
        for (var i = 0; i < descriptionPoints.length; i++) {
          if (descriptionPoints[i].trim() !== "") { // Check if the point is not empty
            descriptionList += "<li>" + descriptionPoints[i] + ".</li>";
          }
        }
        descriptionList += "</ul>";
        document.getElementById("FIELD_JDES").innerHTML = descriptionList;

        // Store the entered values in localStorage
        localStorage.setItem("company", company);
        localStorage.setItem("jobTitle", jobTitle);
        localStorage.setItem("city", city);
        localStorage.setItem("country", country);
        localStorage.setItem("fromDate", fromDate);
        localStorage.setItem("toDate", toDate);
        localStorage.setItem("description", description);
      }


      // Function to retrieve stored values and update the displayed information
      window.onload = function () {
        var firstName = localStorage.getItem("firstName");
        var lastName = localStorage.getItem("lastName");
        var phoneNumber = localStorage.getItem("phoneNumber");
        var email = localStorage.getItem("email");
        var address = localStorage.getItem("address");
        var linkedin = localStorage.getItem("linkedin");
        var company = localStorage.getItem("company");
        var jobTitle = localStorage.getItem("jobTitle");
        var city = localStorage.getItem("city");
        var country = localStorage.getItem("country");
        var fromDate = localStorage.getItem("fromDate");
        var toDate = localStorage.getItem("toDate");
        var description = localStorage.getItem("description");
        var summary = localStorage.getItem("summary");
        var skills1 = localStorage.getItem("skills1");
        var skills2 = localStorage.getItem("skills2");

        if (firstName && lastName) {
          // Update the displayed name
          document.getElementById("FIELD_FNAM").textContent = firstName;
          document.getElementById("FIELD_LNAM").textContent = lastName;
          document.getElementById("FIELD_CPHN").textContent = phoneNumber;
          document.getElementById("FIELD_EMAI").textContent = email;
          document.getElementById("FIELD_ADDR").textContent = address;
          document.getElementById("FIELD_LNKD").textContent = linkedin;
          // Update the input fields with stored values
          document.getElementById("firstName").value = firstName;
          document.getElementById("lastName").value = lastName;
          document.getElementById("phoneNumber").value = phoneNumber;
          document.getElementById("email").value = email;
          document.getElementById("address").value = address;
          document.getElementById("linkedin").value = linkedin;
        }
        if (summary) {
          // Populate the textarea with the stored summary
          document.getElementById("summaryTextArea").value = summary;
          // Update the displayed summary
          document.getElementById("FIELD_FRFM").textContent = summary;
        }
        if (skills1 && skills2) {
          // Convert string back to array
          var skillList1 = JSON.parse(skills1);
          var skillList2 = JSON.parse(skills2);

          // Update the displayed skills list
          updateSkillsList(skillList1, skillList2);
        }


        if (company && jobTitle) {
          // Update the displayed experience
          document.getElementById("FIELD_CMN").textContent = company;
          document.getElementById("FIELD_JTIT").textContent = jobTitle;
          document.getElementById("FIELD_JCIT").textContent = city;
          document.getElementById("FIELD_JSTA").textContent = country;
          document.getElementById("FIELD_JSTD").textContent = fromDate;

          // Check if 'Present' checkbox is checked
          var presentChecked = document.getElementById("present1").checked;

          if (presentChecked) {
            // If 'Present' checkbox was checked, update the displayed 'To' field to show 'Present'
            document.getElementById("FIELD_EDDT").textContent = "Present";
          } else {
            // If 'Present' checkbox was not checked, update the displayed 'To' field with the stored value
            document.getElementById("FIELD_EDDT").textContent = toDate;
          }

          // Parse the stored description and format it correctly
          var descriptionList = "<ul>";
          var descriptionPoints = description.split('.');
          for (var i = 0; i < descriptionPoints.length; i++) {
            if (descriptionPoints[i].trim() !== "") {
              descriptionList += "<li>" + descriptionPoints[i] + ".</li>";
            }
          }
          descriptionList += "</ul>";
          document.getElementById("FIELD_JDES").innerHTML = descriptionList;

          // Update the input fields with stored values
          document.getElementById("company1").value = company;
          document.getElementById("jobtitle1").value = jobTitle;
          document.getElementById("city1").value = city;
          document.getElementById("country1").value = country;
          document.getElementById("from1").value = fromDate;
          // Don't update 'To' input field value if 'Present' checkbox is checked
          if (!presentChecked) {
            document.getElementById("to1").value = toDate;
          }
          document.getElementById("description1").value = description;
        }
      };
