# Project Title

this application returns the most expensive clicks per IP in an hour Period

## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### NPM Used

-   #### [FS (File System)](https://nodejs.org/docs/latest-v13.x/api/fs.html)

    Node.js built in libary to do File I/O(read and write) operations.

    In current application,utilizing below functions from this package :
    
    readFile : To Read content of Click.json\  
    writeFile : To write result Array to resultSet.json

-   #### [Lodash](https://lodash.com/docs/4.17.15)

    JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.

    In current application,utilizing below functions from this package :

    sortBy : Sorting the clicks array in asc order on basic of datetime values.\
    maxBy : find the object with maximun click amount.\
    groupBy : Grouping the input clicks Array on basic of Ip address,timestamp.

-   #### [Moment](https://momentjs.com/)

    library which helps in parsing, validating, manipulating and displaying date/time in JavaScript in a very easy way

    In current application,utilizing this package to group the clicks array on basis of timestamp field.

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ npm install

## Running the project

    $ npm run solution

## Running the Tests

    $ npm run test
