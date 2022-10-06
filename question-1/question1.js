function lowerCaseWords(value) {
    return new Promise((resolve, reject) => {
        let newArray = [];
        for (let val in value){
            if(typeof value[val] === 'string'){
               newArray.push(value[val].toLowerCase());
            }
        }
      if (newArray.length == 0) {
        reject("Nothing to return");
        return;
      }
  
      resolve(newArray);
    });
  }


const mixedArray = ['PIZZA', 10, true, 25, false, 'Wings'];
lowerCaseWords(mixedArray)
  .then((result) => console.log(result))
  .catch((error) => console.log(error));