# Project Title

this application returns the most expensive clicks per IP in an hour Period

## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### NPM Used

-   #### Moment

    library which helps in parsing, validating, manipulating and displaying date/time in JavaScript in a very easy way

    In current application,using this package to group the clicks array on basis of timestamp field.

-   #### Lodash

    JavaScript library which provides utility functions for common programming tasks using the functional programming paradigm.

    In current application,using this below functions from package :

    sortBy : Sorting the clicks array in asc order on basic of datetime values.\
    maxBy : find the object with maximun click amount.\
    groupBy : Grouping the input clicks Array on basic of Ip address,timestamp.

-   #### FS (File System)
    Node.js built libary to do File I/O(read and write) opertions

## Install

    $ git clone https://github.com/YOUR_USERNAME/PROJECT_TITLE
    $ cd PROJECT_TITLE
    $ npm install

## Running the project

    $ npm run solution

## Running the Tests

    $ npm run test
