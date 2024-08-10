# weather-forecast
This ReactJS web application offers real-time weather updates for any location or the user's current location using the OpenWeatherMap API. Users can view the current weather and a 5-day forecast. It features manual location input and automatic location detection, providing a responsive and intuitive user experience.

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

### 1. Project Setup
Initialize the Project: Start by setting up your project folder. Use Node.js to initialize a package.json file.

npx create-react-app weather-forecast
cd weather-forecast
npm install axios dotenv
### 2. API Integration
Choose a Weather API: Popular choices include OpenWeatherMap, WeatherAPI, or AccuWeather. Most of these services offer free API keys with limited requests per day.
Fetch Weather Data: Use Axios or Fetch to call the weather API based on the user's input location. Store the API key in an environment variable.
const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const url = `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${API_KEY}`;
### 3. User Input and Location Detection
Location Input: Create a form for users to enter their location. Use React's state to manage the input.
Automatic Location Detection: Use the browser's Geolocation API to detect the user's location automatically.

navigator.geolocation.getCurrentPosition(position => {
    const { latitude, longitude } = position.coords;
    // Fetch weather data using latitude and longitude
});
### 4. Display Weather Data
Current and 5-Day Forecast: Parse the API response to display current weather and forecast for the next five days. Use React components to structure your data.
UI/UX Design: Consider using a CSS framework or writing custom styles to create a clean and user-friendly interface.

const WeatherCard = ({ day, temperature, description }) => (
    <div className="weather-card">
        <h3>{day}</h3>
        <p>{temperature}°C</p>
        <p>{description}</p>
    </div>
);
### 5. Additional Features
Error Handling: Implement error handling for API calls and user input.
Loading State: Display a loading indicator while fetching data.
Responsive Design: Ensure your application is responsive and works well on different devices.
### 6. Deployment
Once your application is complete, you can deploy it using services like Netlify, Vercel, or GitHub Pages.
