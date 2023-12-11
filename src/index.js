const arr1= [1, 3, 6, 2, 2, 3, 1] // esperado 6
const arr2= [5, 6, 7, 6, 15, 5, 7] // esperado 15
const arr3= [1, 2, 0, 0, 2, 3, 1] // esperado 3
const arr4= [9, 6, 7, 8, 6, 8, 7] // esperado 9


const findUnique = (arr) =>{
	const tempArray = [...new Set(arr)]; //creamos una copia del array que llega por parametro, pero sin elementos repetidos

	const uniqueNumber = []; //declaramos el array donde haremos el push del numero único

	arr.sort(); //Ordenamos el array original

	 for(let i = 0 ; i < arr.length ; i++){

		//establecemos como condición que si el numero actual (arr[i]) ya existe dentro del array uniqueNumber, lo elimine
		if(uniqueNumber.includes(arr[i])){
			uniqueNumber.pop(arr[i])
		}
		//En caso que la condición anterior no se cumpla evaluamos si el numero es mayor o igual a 3 y que sea un numero impar, caso contrario el programa no pusheará el numero al array
		else if(arr[i] >= 3 && arr[i] % 3 == 0 ){ 
			uniqueNumber.push(arr[i])
		}
		else{
			null
		}
	}
	console.log(uniqueNumber)
	return uniqueNumber
}
findUnique(arr1)
findUnique(arr2)
findUnique(arr3)
findUnique(arr4)

