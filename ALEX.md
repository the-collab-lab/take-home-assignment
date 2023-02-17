## My solution

### 1. The first step
       Run npm install
       Run npm start

### 2. The second step
        Locate the issue in App.js: The issue with the original code was that the handleSubmit function was not actually converting the text to uppercase or lowercase based on the conversionMode state. And button was not changing the conversionMode state. Button type was not set to submit.

### 3. The third step
        Fix the issue in App.js: I fixed the issue by adding a ternary operator to the handleSubmit function that would convert the text to uppercase or lowercase based on the conversionMode state. I also added a button type of submit to the button.

### 4. The fourth step
      Install Jest and write a test for the app.js file. I installed Jest by running npm install --save-dev jest. I then wrote a test for the handleSubmit function in the app.js file. This test checks that the component properly converts text to lowercase and uppercase when the corresponding radio button is selected, by simulating user interaction with the form and checking the resulting output.