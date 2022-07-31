const mongoose =require('mongoose');



//date setup


const today = new Date();
const day = today.getDate();
const month = today.getMonth() +1;
const year = today.getFullYear();
const time = today.getTime();


//start block schema