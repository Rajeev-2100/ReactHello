# React Router Demo App

A simple React application demonstrating client-side routing using React Router. The app contains two pages:

* **Home Page** (`/`)
* **About Page** (`/about`)

## Features

* React 19
* React Router DOM
* Client-side navigation
* Separate page components
* Clean project structure

## Project Structure

```bash
src/
│
├── pages/
│   └── About.jsx
│
├── App.jsx
├── main.jsx
└── index.css
```

## Installation

1. Clone the repository:

```bash
git clone <repository-url>
```

2. Navigate to the project directory:

```bash
cd project-name
```

3. Install dependencies:

```bash
npm install
```

## Running the Application

Start the development server:

```bash
npm run dev
```

The application will be available at:

```bash
http://localhost:5173
```

## Routes

| Route    | Description   |
| -------- | ------------- |
| `/`      | Home page     |
| `/about` | About Us page |

## Technologies Used

* React
* React DOM
* React Router DOM
* Vite

## About Page

The About page displays information about the organization using placeholder text and demonstrates how React Router renders different components based on the current URL.

## Router Configuration

```jsx
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />
  },
  {
    path: "/about",
    element: <About />
  }
]);
```

## Learning Objectives

This project helps developers understand:

* React component structure
* React Router setup
* Route configuration
* Navigation between pages
* Single Page Application (SPA) concepts

## Author

Created as a React Router learning project.
