# Placement Form AutoFill Extension

We all know how tiring it can be to repeatedly fill in the same details on placement forms. This Chrome extension automates that process by pre-filling specific fields in Google Forms with your own details. You can easily customize the extension to suit your needs by adding your own data in `content.js`.

## Features

- Automatically fills out fields like **email, SRN, name, gender, degree, branch**, and more.
- Detects input fields and dropdown menus using custom logic.
- Simple and efficient way to avoid repetitive form-filling.

## Image

Below is an image used in this project. It serves as an icon for the extension or can be used in other visual elements of the project.

![WhatsApp Image 2024-09-11 at 1 34 02 PM](https://github.com/user-attachments/assets/d3db159c-5722-4fb3-a785-2a956627fdf7)

*This image is a visual representation and can be used in the extension UI or documentation.*

## Customizing the Extension

### Step 1: Modify `content.js` with Your Own Details

Open the `content.js` file in the project folder and replace the placeholder values with your own personal information:

```javascript
const formData = {
  email: "youremail@example.com",  // Replace with your email
  srn: "YourSRNHere",             // Replace with your SRN
  name: "Your Name",              // Replace with your name
  gender: "Male",                 // Replace with your gender
  degree: "B.Tech",               // Replace with your degree (e.g., B.Tech, MCA)
  branch: "CSE",                  // Replace with your branch (e.g., CSE, ECE)
  tenth: "Your 10th %",           // Replace with your 10th grade percentage
  twelfth: "Your 12th %",         // Replace with your 12th grade percentage
  ugCgpa: "Your CGPA",            // Replace with your UG CGPA
  mobile: "Your Mobile Number"    // Replace with your mobile number
};
```

Save the file after modifying it with your details.

### Step 2: Install the Extension in Chrome

To add the extension to Chrome, follow these steps:

1. **Open Chrome and go to the Extensions page** by typing `chrome://extensions/` into the address bar.
   
2. **Enable Developer mode** by toggling the switch at the top-right corner.

3. **Click the "Load unpacked" button** and select the folder where this project is saved.

4. The extension will now be loaded into Chrome and visible in the extensions toolbar.

5. **Open any Google Form**, click the extension icon, and the form fields will automatically fill in with your data.

## Usage

Once the extension is installed:

1. Navigate to any Google Form.
2. Click on the extension icon in the toolbar.
3. Watch as the form fields are filled with the values from `content.js`.

## File Structure

- **content.js**: Contains the script that automatically fills the form fields. Customize this file with your own details.
- **background.js**: Manages background tasks for the extension.
- **manifest.json**: Defines the permissions and structure for the Chrome extension.
- **icon.png**: Icon used for the extension.
- **README.md**: Documentation for the project.

## How It Works

The extension identifies input fields and dropdowns in Google Forms based on their attributes (like `aria-label`, `type`, or `data-params`). It then automatically fills these fields using the pre-defined values in `content.js`. You can modify these values to suit your needs.

## License

This project is licensed under the MIT License.

---

Made with ❤️ by Nishan Holla
