const sumaArray = (entArr) => {
  if (!Array.isArray(entArr)) {
    return isNaN(entArr) ? 0 : entArr; 
  }
  return entArr.reduce((sum, item) => sum + sumaArray(item), 0);
}

var lista1 = [1, 4, 3, 0];
var lista2 = [1, 2, [5, 8], 4];
var lista3 = [0, [6, 2], null, 7, 1];
var lista4 = [0, [6, 2], null, 7, 1, [0,null,[0, [6, 2], null, 7, 1]]];

console.log(sumaArray(lista1));
console.log(sumaArray(lista2));
console.log(sumaArray(lista3));
console.log(sumaArray(lista4));
