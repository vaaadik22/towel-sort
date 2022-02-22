
module.exports = function towelSort (matrix) {

  if(matrix === undefined){
  return [];
  }
  if(matrix){
    matrix.forEach((element, index) => {
      if(index % 2){
        element.reverse();
      }
    })
    return matrix.contact.aply([], matrix);
  }
}
