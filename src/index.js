#!/usr/bin/env node
import {count} from './utils.js'
import fs from 'fs'


console.log('Hello world!')
console.log(count(5))
// const note = process.argv[2]
// const newNote = {
//     content: note,
//     id: Date.now(),
//     id1: new Date().valueOf(),
//     id2: new Date().getTime()
// }
// console.log('process.argv', process.argv)
// console.log('note', note)
//console.log('newNote', newNote)

// (function() {
//     console.log('IIFE')
// })()

//alert('Hello world!') //ReferenceError: alert is not defined
// console.log(window) //browser -> ReferenceError: window is not defined

//GLOBAL
// console.log('global', global) //node

//PROCESS
// console.log('process', process) //node process
// console.log('process.argv', process.argv)

//PIN
// console.log('process.pin', process.pin)

//ENV
// console.log('process.env', process.env)
// console.log(process.env.NODE_ENV)

//EXIT
// console.log('process.argv', process.exit())
