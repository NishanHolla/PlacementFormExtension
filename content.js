(() => {
  // Define the pre-filled values inside a local scope
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

  // Function to select an option from a dropdown
  function selectDropdownValue(element, value) {
    const options = element.querySelectorAll('[role="option"]');
    options.forEach(option => {
      if (option.textContent.trim() === value) {
        option.click(); // Simulate clicking the option
      }
    });
  }

  // Function to fill out the Google Form by targeting divs with data-params and input fields
  function fillForm() {
    // Handle the email input field directly without checking data-params
    const emailInput = document.querySelector('input[type="email"]');
    if (emailInput) {
      emailInput.value = formData.email;
    }

    // Handle other fields by checking data-params
    document.querySelectorAll('div[data-params]').forEach(div => {
      const dataParams = div.getAttribute('data-params');

      // Handle specific field names (SRN, Name, etc.)
      if (dataParams.includes('SRN')) {
        const inputField = div.querySelector('input[type="text"]');
        if (inputField) inputField.value = formData.srn;
      }
      if (dataParams.includes('Name')) {
        const inputField = div.querySelector('input[type="text"]');
        if (inputField) inputField.value = formData.name;
      }
      if (dataParams.includes('10th')) {
        const inputField = div.querySelector('input[type="text"]');
        if (inputField) inputField.value = formData.tenth;
      }
      if (dataParams.includes('12th')) {
        const inputField = div.querySelector('input[type="text"]');
        if (inputField) inputField.value = formData.twelfth;
      }
      if (dataParams.includes('UG')) {
        const inputField = div.querySelector('input[type="text"]');
        if (inputField) inputField.value = formData.ugCgpa;
      }
      if (dataParams.includes('Mobile')) {
        const inputField = div.querySelector('input[type="text"]');
        if (inputField) inputField.value = formData.mobile;
      }

      // Handle dropdowns for Degree, Gender, and Branch by simulating option selection
      if (dataParams.includes('Degree')) {
        const dropdown = div.querySelector('[role="listbox"]');
        if (dropdown) selectDropdownValue(dropdown, formData.degree);
      }
      if (dataParams.includes('Gender')) {
        const dropdown = div.querySelector('[role="listbox"]');
        if (dropdown) selectDropdownValue(dropdown, formData.gender);
      }
      if (dataParams.includes('Branch')) {
        const dropdown = div.querySelector('[role="listbox"]');
        if (dropdown) selectDropdownValue(dropdown, formData.branch);
      }
    });
  }

  // Run the function to fill the form when the page loads
  window.addEventListener('load', () => {
    setTimeout(fillForm, 2000); // Delay to ensure form is loaded
  });
})();
