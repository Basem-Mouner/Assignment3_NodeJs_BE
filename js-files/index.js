//-------------------------------------------------------------------------------------------------
"use strict";
//----------------------------------Assignment3 for Node Js QN-(1).----------------------------------------------------------------
//--1-Write a function that prints the full path of the current file. 
{
  function printCurrentFilePath() {
    console.log(`The full path of the current file is: ${__filename}`);
  }
  printCurrentFilePath();
}

//--------------------------------------------------------------------------------------------------
//--2-Write a function that takes a file path and returns its file extension. 
{
  const path = require("node:path");
  function getFileExtension(filePath) {
    const fileExtension = path.extname(filePath);
    console.log(fileExtension);
    return fileExtension;
  }

  getFileExtension(__filename); //out extension
  getFileExtension("example.txt"); // Output: .txt
}
//--------------------------------------------------------------------------------------------------

//--3-Write a function that checks if a given path is absolute. 
{
  const path = require("node:path");

  function isAbsolutePath(filePath) {
    return path.isAbsolute(filePath);
  }
  //Ex
  console.log(isAbsolutePath(__filename)); // Output: true
  console.log(isAbsolutePath("/user/local/bin")); // Output: true
  console.log(isAbsolutePath("index.js")); // Output: false
}
//--------------------------------------------------------------------------------------------------
//--4-Write a function that joins two paths. 
{
  const path = require("node:path");

  function joinPaths(path1, path2) {
    return path.join(path1, path2);
  }

  // Example usage
  console.log(joinPaths("/folder1", "folder2/file.txt")); // Output: \folder1\folder2\file.txt
}
//--------------------------------------------------------------------------------------------------
//--5-Write a function that demonstrates the difference between path.parse and path.format. The function should take a file path as input, parse it, log the parsed object to the console, then reformat it and log the formatted path to the console. 
{
const path = require("node:path");

function demonstrateParseAndFormat(filePath) {
  // Parse the path into an object
  const parsedPath = path.parse(filePath);
  console.log("Parsed Path Object:", parsedPath);

  // Reformat the parsed object back into a string path
  const formattedPath = path.format(parsedPath);
  console.log("Formatted Path:", formattedPath);
}

  // Example usage
  demonstrateParseAndFormat(__filename);
// demonstrateParseAndFormat("/usr/local/bin/index.js");
}
//--------------------------------------------------------------------------------------------------
//-6-Write a function that deletes a file.
{
  const fs = require("node:fs");
  
  function deleteFile(filePath) {
    // fs.unlinkSync(filePath);
    //or
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error(
          `Error deleting file: The file is deleted. No explicit output.`
        );
      } else {
        console.log(`File deleted successfully: ${filePath}`);
      }
    });
  }
  // Example usage
  deleteFile("./hh.txt");
}
//--------------------------------------------------------------------------------------------------
//-7-Write a function that creates a folder.
{
  const fs = require("node:fs");
  function createFolder(folderPath) {
    // fs.mkdirSync(folderPath, { recursive: true });
    //or
    fs.mkdir(folderPath, { recursive: true }, (err) => {
      //The recursive: true option allows it to create nested directories if they don’t already exist.
      if (err) {
        console.error(`Error creating folder: ${err.message}`);
      } else {
        console.log(`Folder created successfully: ${folderPath}`);
      }
    });
  }

  // Example usage
  createFolder("path/to/your/folder");
}
//--------------------------------------------------------------------------------------------------
//-8-Write a function that creates a custom event and listens for. Trigger the event with a message.
{
  const EventEmitter = require("node:events");

function createAndTriggerEvent(message) {
  // Create a new EventEmitter instance
  const eventEmitter = new EventEmitter();

  // Define the event and set up the listener
  eventEmitter.on("greet", (msg) => {
    console.log(`The event is triggered and the message ${msg} is logged. `);
  });

  // Emit the custom event with the provided message
  eventEmitter.emit("greet", message);
}

// Example usage
createAndTriggerEvent("Hello Event!");
}
//--------------------------------------------------------------------------------------------------

// //--------------------------------------------------------------------------------------------------
//*************************************************************************************************
//---------------------------------END OF ASSIGNMENT THANK YOU-------------------------------------
//*************************************************************************************************
//********************************Dev by Basem mouner rizk**********************************************
