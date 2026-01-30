const colors = require('colors');
colors.enabled = true;

exports.loggerMiddleware = (str) => {
   const currentDate = new Date();
   const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()} @ ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`.bold.italic.blue;

   console.log(`loggerMiddleware..${str}...${formattedDate}`.bold.italic.blue);

}