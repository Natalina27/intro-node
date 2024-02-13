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
### Node REPL

## 2. Creating a Command Line Interface (CLI)
### Process and Environment
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

