# Cloud_Computing_Project

Introduction

As part of our group project, we developed a web-based learning platform called DULMS V2 (Digital University Learning Management System). This platform serves as a comprehensive solution for students to access learning materials, submit assignments, report lecture absences, take quizzes, and check their grades. In this report, I will explain the code structure and functionality of the three main components of our project: HTML, CSS, and JavaScript.

 HTML Code

The HTML (HyperText Markup Language) forms the backbone of our web application. It provides the structure and content of the webpage. 

At the beginning of our HTML file, we declare the document type with `<!DOCTYPE html>`, which tells the browser that we are using HTML5. The `<html lang="en">` tag indicates that the content is in English. Inside the `<head>` section, we include important metadata, such as the character set and viewport settings, which ensure that our webpage displays correctly on different devices. We also set the title of the webpage to "DULMS V2" and link to our external CSS and JavaScript files.

The `<body>` section contains the visible content of the webpage. We have a header that welcomes users to DULMS V2 and provides a brief description of the platform. The main content is organized into several sections, each dedicated to a specific functionality: files and materials, assignments, lecture absence, quizzes, and grades. Each section includes a heading, a brief description, and a button for user interaction. Finally, the footer contains copyright information, which we updated to reflect the year 2025.

 CSS Code

CSS (Cascading Style Sheets) is used to style our HTML elements and make the platform visually appealing. In our CSS file, we set the overall font family to Arial and applied a light blue background color to the body of the webpage. 

The header is styled with a blue background and white text, creating a professional and welcoming appearance. We added padding to the header to give it some space and centered the text for better alignment. The main content area has padding to ensure that the sections are not cramped.

Each section has a white background, padding, and rounded corners, along with a subtle box shadow to create a card-like effect. This design choice helps to visually separate each section and makes the content easier to read. We also styled the buttons with a green background and white text, adding a hover effect that changes the button color when the user hovers over it. This provides a clear visual cue that the buttons are interactive.

 JavaScript Code

JavaScript is used to add interactivity to our platform. In our JavaScript file, we set up event listeners for each button in the different sections. When a user clicks a button, an alert message is displayed, indicating the action they are attempting to perform.

For example, when the "View Materials" button is clicked, an alert pops up saying "Viewing materials...". Similarly, other buttons trigger alerts for submitting assignments, reporting absences, taking quizzes, and viewing grades. This immediate feedback enhances the user experience by confirming that their actions have been recognized.

 Conclusion

In conclusion, our DULMS V2 Learning Platform effectively combines HTML, CSS, and JavaScript to create a user-friendly and visually appealing web application. The HTML provides the structure, the CSS enhances the design, and the JavaScript adds interactivity.
