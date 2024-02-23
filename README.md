# Topics
## 1.Intro
### Course Intro

Welcome to this introductory course on Node.js! In this course, you will learn what Node.js is, its history, and how to install it. You will also learn how to create a Command Line Interface (CLI), what are npm and modules, the different types of modules available, how to interact with files, how to download modules using npm, how to write tests with Jest, and how to create an HTTP server, handle requests, and serve a simple website. All of these topics will be taught in the context of building a CLI-based note-taking app, along with a simple website to demonstrate the concepts.

By the end of the course, you will have a solid foundation in Node.js and be ready to move onto building real applications using the platform. It does not matter whether you're a seasoned developer or just starting out; this course is an excellent resource for anyone looking to learn about Node.js and its many uses.

### History of Node.js

 The Story of Node.js

- Introduction to Node.js:
  > Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It is an event-driven, non-blocking I/O model that makes it lightweight and efficient. Node.js' package ecosystem, npm, is the largest ecosystem of open source libraries in the world.
- The Birth of Node.js:
  > Ryan Dahl, the creator of Node.js, was inspired to create Node.js after seeing a demonstration of Comet, a web application model that allows a server to push data to a client without the client requesting it. He wanted to create a server that could handle a large number of connections simultaneously. He was also frustrated with the limitations of Apache HTTP Server, which was the most popular server at the time.
- The First Release:
  > Node.js was first released in 2009. It was built on the V8 JavaScript engine, which was developed by Google for use in their Chrome web browser. The first version of Node.js was able to run on Linux and Mac OS X, with Windows support added later.
- The Rise of Node.js:
  > Node.js became popular quickly because it could handle a large number of concurrent connections with high throughput. It was also popular because it allowed developers to use JavaScript on the server-side, which was already familiar to many front-end developers. As Node.js gained popularity, the Node.js community grew, and many new modules and frameworks were developed to extend its capabilities.
- Node.js Today:
  > Node.js is now a mature and stable platform used by many companies to build high-performance network applications. It has a large and active community of developers who continue to develop new modules and frameworks to extend its capabilities. Node.js is often used in combination with other technologies, such as databases, front-end frameworks, and cloud platforms, to build full-stack web applications.
### Non blocking I/O
 Non blocking I/O

Node.js is known for its efficient and scalable I/O model, which is based on a non-blocking, event-driven architecture. This means that I/O operations are handled asynchronously and do not block the execution of the main program. In contrast to traditional blocking I/O models, where the program waits for each I/O operation to complete before continuing to the next one, Node.js can execute multiple I/O operations simultaneously.

Here are some key points that explain how Node.js achieves non-blocking I/O:

- **Event Loop**: Node.js uses an event loop to manage I/O operations. The event loop is a loop that listens for events and triggers the corresponding callback functions. When an I/O operation is initiated, Node.js registers the corresponding callback function with the event loop. Once the operation completes, the event loop triggers the callback function, which can then process the result.
- **Callbacks**: Callbacks are functions that are passed as arguments to other functions. In Node.js, callbacks are used to handle the results of I/O operations. When an I/O operation is initiated, a callback function is provided that will be called when the operation completes. By using callbacks, Node.js can execute other code while waiting for I/O operations to complete.
- **Non-Blocking APIs**: Node.js provides a set of non-blocking APIs that allow developers to perform I/O operations asynchronously. For example, the `fs` module provides non-blocking methods for reading and writing files. When these methods are called, Node.js immediately returns control to the program, allowing it to continue executing other code. Once the I/O operation completes, the callback function is called with the result.
- **Single-Threaded**: Node.js is a single-threaded environment, which means that all I/O operations are handled by a single thread. This allows Node.js to handle large numbers of simultaneous connections without consuming a lot of system resources. In contrast, other environments like Python and Ruby use multiple threads to handle I/O operations, which can lead to higher resource consumption and slower performance.

 Example

Blocking code example:

```jsx
const getUserSync = (userId) => {
  const users = {
    1: { name: 'John', age: 35 },
    2: { name: 'Jane', age: 28 }
  };
  return users[userId];
}

const user = getUserSync(1);
console.log(user);
```

In this example, the `getUserSync` function returns a user object from a hardcoded list of users. This function is **blocking**, because it executes synchronously and returns the result immediately.

Non-blocking code example:

```jsx
const getUserAsync = (userId, callback) => {
  const users = {
    1: { name: 'John', age: 35 },
    2: { name: 'Jane', age: 28 }
  };
  setTimeout(() => {
    callback(users[userId]);
  }, 1000);
}

getUserAsync(1, (user) => {
  console.log(user);
});
```

In this example, the `getUserAsync` function returns a user object from a hardcoded list of users, but it executes asynchronously, using the `setTimeout` function to delay the execution of the callback function by 1 second. The `getUserAsync` function takes a callback function as its second argument, which is called with the user object once it has been retrieved.
### Hello World
 Hello World

Let’s get started with writing our very first Node.js program. But, what is a Node.js program? Simple, some JavaScript!

```jsx
console.log('hello world')
```

Ok, this is cool, but now what? How do we go about executing this code? We can use the Node CLI for this. In your terminal, run:

```bash
node index.js
```

By use the Node CLI, we can then execute a JavaScript file by using path to that file. That’s it! You’ve created your first JavaScript program. If you did this right, you’ll see hello world in the terminal, which in Node.js, is the console.
### Browser vs Node.js
JavaScript is a popular programming language used in both the browser and server-side applications. However, there are significant differences between how it works in the browser and in Node.js.
Global Object
In a browser, the global object is window, while in Node.js, it is global. For example, to log the global object in a browser, we can use:
```js
console.log(window)
```
To do the same in Node.js, we use:
```js
console.log(global)
```

###### Modules

We can import modules in the browser using script tags with the type attribute set to module and the src attribute set to the path of the module file. For example:
```html
<script type="module" src="./module.js"></script>
 ```

We can then use the exported functions in our JavaScript code. For instance, we can import a sayHello function from a module called module.js and use it in our main JavaScript file as follows:

```js
 import { sayHello } from './module.js'
sayHello()
```

On the other hand, in Node.js, we use the require  or import statement to import modules:
```js
 import { module } from './module.js'
 ```
###### DOM
The browser has a Document Object Model (DOM) that allows us to interact with HTML elements. For example, to change the text of an HTML element in the browser, we can use:

```jsx
document.getElementById('elementId').innerHTML = 'New text'
```

However, in Node.js, there is no DOM, so we cannot access or manipulate HTML elements.

###### Server vs. Website

Node.js is mainly used for server-side applications, while the browser is used for websites. For example, we can create a simple server in Node.js using:
```js
const http = require('http');

const server = http.createServer((req, res) => {
res.write('Hello World!');
res.end();
});

server.listen(3000);
```
On the other hand, in the browser, we can create a website using HTML, CSS, and JavaScript.

###### Console

The console object works the same way in both the browser and Node.js. For example, to log a message in the browser, we can use:
```js
console.log('Hello World!')
```
Similarly, in Node.js, we can use:
```js
console.log('Hello World!')
```
JavaScript is used in both the browser and Node.js, but there are significant differences in how it works in each environment. However, there are also many similarities, and if you already know JavaScript, you should be able to quickly pick up Node.js. Understanding the differences and similarities between the two environments is crucial when developing applications in either of them.

### Node REPL
The Node REPL (Read-Eval-Print Loop) is a command-line interface that allows you to interactively run JavaScript code. It is similar to the browser console, but it runs on the server side. You can use the Node REPL to quickly test JavaScript code, experiment with new features, and debug issues.

To start the Node REPL, simply open your terminal and type node. 
This will give you access to the Node REPL, where you can run JavaScript code interactively.

## 2. Creating a Command Line Interface (CLI)
### Process and Environment

#### Process

In Node.js, the process object is a global object that provides information about the current Node.js process and allows developers to interact with it. Some of the most commonly used properties and methods of the process object are:

- `process.argv`: an array that contains the command line arguments passed to the current process
- `process.pid`: the ID of the current process
- `process.env`: an object that contains the environment variables of the current process
- `process.exit()`: terminates the current process with an optional exit code

Here's an example of how to use the `process.argv` property to get the command line arguments passed to a Node.js script:

```jsx
// script.js
console.log(process.argv);
```

If we run this script with the command `node script.js arg1 arg2`, the output will be:

```jsx
[ 'node', '/path/to/script.js', 'arg1', 'arg2' ]
```

This shows that the `process.argv` array contains the path to the Node.js executable, the path to the script being run, and the two arguments passed to the script.

## Environment

The environment in Node.js refers to the set of variables that are available to a program at runtime. These variables are stored in the `process.env` object, which is an object containing key-value pairs of environment variable names and values.

Here's an example of how to use the `process.env` object to access environment variables:

```jsx
// script.js
console.log(process.env.NODE_ENV);
```

If we run this script with the command `NODE_ENV=production node script.js`, the output will be:

```jsx
production
```

This shows that we can access the value of the `NODE_ENV` environment variable using the `process.env` object.

#### Conclusion

In conclusion, understanding the process and environment in Node.js is crucial for building scalable and high-performance applications. By using the process object and environment variables, developers can access and manipulate the runtime environment of their programs.
### What is a CLI?
### Creating a CLI

## 3. Modules
### What is a module
### Require vs Import
### Thinking in Modules
### Internal Modules
### NPM and 3rd Party Modules
### Using yargs

## 4. File I/O
### Async in node
### The FS module
### Using a file as a DB
### Note CRUD
### Updating commands

## 5. Testing
### Types of tests
### Unit Testing with Jest

## 6. Servers
### What is a server
### Vanilla server
### Recap

