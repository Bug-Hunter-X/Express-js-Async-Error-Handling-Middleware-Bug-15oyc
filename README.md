# Express.js Async Error Handling Middleware Bug

This repository demonstrates a common bug in Express.js applications related to async error handling middleware. The bug involves the improper placement or implementation of error-handling middleware, causing unhandled errors.

## Bug Description
The provided `bug.js` file contains an Express.js application with a route handler that can throw an error. However, the error handling middleware is not correctly catching the error, leading to an unhandled promise rejection or a server crash.

## Bug Reproduction
1. Clone this repository.
2. Navigate to the project directory.
3. Run `node bug.js`.
4. Access the route `/users/error` in your browser or using a tool like `curl`.
5. Observe the error message in the console or the unhandled promise rejection.

## Solution
The `bugSolution.js` file provides the corrected implementation of the error handling middleware. This version ensures that all errors, both synchronous and asynchronous, are properly caught and handled.