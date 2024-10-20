Sure! Here’s the README content without markdown formatting:

---

**Real-Time Data Processing System for Weather Monitoring**

**Overview**  
This project implements a real-time data processing system to monitor weather conditions across major metros in India. It retrieves weather data from the OpenWeatherMap API and provides summarized insights through rollups and aggregates.

**Features**  
- Real-Time Weather Data Retrieval: Continuously fetch weather data every configurable interval (e.g., every 5 minutes).
- Daily Weather Summaries: Calculate daily averages, maxima, minima, and dominant weather conditions.
- Alerting System: Trigger alerts based on user-defined thresholds for temperature and weather conditions.
- Visualizations: Display daily summaries, historical trends, and alerts.
- Extended Parameters: Support for additional weather parameters like humidity and wind speed (Bonus).

**Getting Started**

**Prerequisites**  
- Node.js
- Docker (optional, for running the database)
- An OpenWeatherMap API key

**Installation**  
1. Clone the repository:  
   `git clone https://github.com/yourusername/weather-monitor.git`  
   `cd weather-monitor`

2. Install dependencies:  
   `npm install`

3. Configure the API key:  
   Create a `.env` file in the root directory and add your OpenWeatherMap API key:  
   `OPENWEATHER_API_KEY=your_api_key_here`

4. (Optional) Set up the database using Docker:  
   `docker run --name weather-db -e MYSQL_ROOT_PASSWORD=root -e MYSQL_DATABASE=weather_data -p 3306:3306 -d mysql:latest`

5. Start the application:  
   `node index.js`

**Usage**  
- The system will automatically fetch weather data for Delhi, Mumbai, Chennai, Bangalore, Kolkata, and Hyderabad.
- Configure alert thresholds in the application settings to receive notifications.
- Visualizations can be accessed via the built-in web server (if applicable).

**Testing**  
To ensure the system works as intended, run the test cases:  
`npm test`

**Design Choices**  
- Data Retrieval: The application utilizes Axios for HTTP requests to the OpenWeatherMap API, ensuring efficient data fetching and error handling.
- Data Processing: Utilizes JavaScript's array methods for rollups and aggregates, maintaining clarity and performance.
- Alert System: Built using simple condition checks with configurable options for ease of use.

**Test Cases**  
- System Setup: Verify successful connection to the OpenWeatherMap API.
- Data Retrieval: Ensure weather data is fetched and parsed correctly.
- Temperature Conversion: Validate temperature conversion functionality.
- Daily Weather Summary: Confirm accurate calculations for daily summaries.
- Alerting Thresholds: Test alert triggers for defined thresholds.

**License**  
This project is licensed under the MIT License.

**Acknowledgments**  
- OpenWeatherMap API for providing weather data.
- Node.js for building the application.

--- 
