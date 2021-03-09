# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @janderson1924/lotide`

**Require it:**

`const _ = require('@janderson1924/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `head()`: finds first element of array
* `tail()`: prints all but first element of given array
* `middle()`: finds the middle element of an array
* `assertArraysEqual()`: asserts whether arrays are identical or not
* `assertEqual()`: asserts whether arrays are identical or not
* `assertObjectsEqual()`: asserts whether objects are identical or not
* `eqArrays()`: compares two arrays for a match
* `eqObjects()`: compares two objects for a match
