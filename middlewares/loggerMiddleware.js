exports.loggerMiddleware = (str) => {
   const currentDate = new Date();
   const formattedDate = `${currentDate.getMonth() + 1}/${currentDate.getDate()}/${currentDate.getFullYear()} @ ${currentDate.getHours()}:${currentDate.getMinutes()}:${currentDate.getSeconds()}`;

   console.log(`loggerMiddleware..${str}...${formattedDate}`);

}