Task 1: HTML Structure and Basic ServerInteraction
# Server-Side Rendering with Express.js and Form Submissions

This project demonstrates how to set up a Node.js server using Express.js and perform server-side rendering with either EJS or Pug. Additionally, it includes handling basic form submissions.

## Installation

1. Clone this repository:
    ```
    git clone https://github.com/Artist-dk/study-cricle.git
    ```

2. Navigate to the project folder:
    ```
    cd study-circle
    ```

3. Install dependencies:
    ```
    npm install
    ```

## Usage

1. Start the server:
    ```
    npm start
    ```

2. Open your web browser and go to:
    ```
    http://localhost:3000
    ```

3. You should see a form for user input. Fill out the form and submit it to see the server-side rendering in action.

## Prerequisites

Before running this project, make sure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/) (Node.js package manager)

## Supported Rendering Engines

You can choose between two rendering engines:

- EJS (Embedded JavaScript)
- Pug (formerly known as Jade)

To switch between rendering engines, modify the code in the `server.js` file accordingly.

## Issues and Contributions

If you encounter any issues or have suggestions for improvements, please feel free to [open an issue](https://github.com/Artist-dk/study-cricle/issues) or submit a pull request.

## Author

This project was created by Digambar Kumbhar.

```
project_directory/
│
├── views/
│   └── index.ejs
│
├── public/
│   └── any_static_files.css
│
└── server.js
```

- `npm install pug --save`
- `npm install ejs`
