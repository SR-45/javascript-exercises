const removeFromArray = function(array, ...args) {
    let remove = []
    for (let index = 0; index < array.length; index++) {
      if(!args.includes(array[index])){
        remove.push(array[index])
      }
    }
    return remove
};

// Do not edit below this line
module.exports = removeFromArray;
