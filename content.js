// Define the pre-filled values
const formData = {
    email: "hollanishan@gmail.com",
    srn: "PES2UG21CS340",
    name: "Nishan Holla",
    gender: "Male",
    degree: "B.Tech",
    branch: "CSE",
    tenth: "91.4",
    twelfth: "95",
    ugCgpa: "7.67",
    mobile: "8951621998"
  };
  
  // Function to fill out the Google Form
  function fillForm() {
    // Find form fields and set values
    document.querySelectorAll('input[type="email"]').forEach(input => {
      if (input.labels && input.labels[0].innerText.includes('Email')) {
        input.value = formData.email;
      }
    });
  
    document.querySelectorAll('input[type="text"]').forEach(input => {
      if (input.labels && input.labels[0].innerText.includes('SRN')) {
        input.value = formData.srn;
      } else if (input.labels && input.labels[0].innerText.includes('Name')) {
        input.value = formData.name;
      } else if (input.labels && input.labels[0].innerText.includes('10th %')) {
        input.value = formData.tenth;
      } else if (input.labels && input.labels[0].innerText.includes('12th %')) {
        input.value = formData.twelfth;
      } else if (input.labels && input.labels[0].innerText.includes('UG cgpa')) {
        input.value = formData.ugCgpa;
      } else if (input.labels && input.labels[0].innerText.includes('Mobile number')) {
        input.value = formData.mobile;
      }
    });
  
    // Find dropdowns for gender, degree, branch
    document.querySelectorAll('select').forEach(select => {
      if (select.labels && select.labels[0].innerText.includes('Gender')) {
        select.value = "Male";
      } else if (select.labels && select.labels[0].innerText.includes('Degree')) {
        select.value = "B.Tech";
      } else if (select.labels && select.labels[0].innerText.includes('Branch')) {
        select.value = "CSE";
      }
    });
  }
  
  // Run the function to fill the form when the page loads
  window.onload = fillForm;
  