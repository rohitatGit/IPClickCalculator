# Project Title

The application processes list of clicks on some IP addresses and get the most expensive clicks per IP for each one hour Period of a day.

1. A ​click​ ​is the composite of an IP address, a timestamp, and a click amount.
2. Duplicate clicks​​ are clicks that have the same IP address, regardless of timestamp or
   click amount.
3. Click periods​​ are defined as the one hour spans that start at the top of the hour. So, in
   one day, there are 24 periods and they are broken down as follows (in HH:MM:SS format):\
   00:00:00 ​ 00:59:59 (period 1) 01:00:00 ​ 01:59:59 (period 2) 02:00:00 ​ 02:59:59 (period 3) ...
   22:00:00 ​ 22:59:59 (period 23) 23:00:00 ​ 23:59:59 (period 24)

Input File : clicks.json\
Output File : resultSet.json

## Requirements

For development, you will only need Node.js and a node global package, npm, installed in your environement.

### NPM Used

-   #### [FS (File System)](https://nodejs.org/docs/latest-v13.x/api/fs.html)

    Node.js built in libary to do File I/O(read and write) operations.

    In current application,utilizing below functions from this package :

    readFile : To Read content of clicks.json.\
    writeFile : To write result Array to resultSet.json.

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
