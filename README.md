**Description:**

The URL Shortener repository is a practice project designed to implement a simple URL shortening service. This project allows users to enter a long URL, which is then shortened to a unique alphanumeric code. Additionally, the repository tracks the number of clicks on each shortened URL. While this project is primarily for practice purposes, it demonstrates an efficient backend code structure for handling URL shortening and click tracking.

**Features:**
- URL shortening: Converts long URLs into unique short codes.
- Click tracking: Records the number of clicks on each shortened URL.
- Minimalistic backend code: Demonstrates an optimal backend structure for URL shortening.

**How to Use:**

1. Clone the repository to your local machine:
   ```
   git clone https://github.com/your-username/ssr-url-shortner.git
   ```

2. Navigate to the project directory:
   ```
   cd ssr-url-shortner
   ```

3. Install dependencies:
   ```
   npm install
   ```

4. Start the server:
   ```
   npm start
   ```

5. Open your web browser and visit `http://localhost:5000` to access the URL shortening service.

**Repository Structure:**

- `server.js`: Main entry point of the application, containing Express.js server setup.
- `controllers/`: Directory containing route handlers for different HTTP endpoints.
- `models/`: Directory containing MongoDB models for data interaction.
- `views/`: Directory containing HTML templates for the frontend.
- `public/`: Directory containing static assets such as CSS and JavaScript files.
- `config.js`: Configuration file for setting up MongoDB connection and other environment variables.

# URL Shortener

This repository is a practice project for implementing a URL shortening service with click tracking.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js and npm installed on your system
- MongoDB installed and running

### Installing

1. Clone the repository to your local machine:

   ```
   git clone https://github.com/your-username/url-shortener.git
   ```

2. Navigate to the project directory:

   ```
   cd url-shortener
   ```

3. Install dependencies:

   ```
   npm install
   ```

### Running the Application

1. Ensure MongoDB is running on your system.

2. Start the server:

   ```
   npm start
   ```

3. Open your web browser and visit `http://localhost:3000` to access the URL shortening service.
