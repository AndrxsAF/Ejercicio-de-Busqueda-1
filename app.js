//EJERCICIO 1

console.log("Ejercicio de buscar en arrays ordenados")

const listNumber = [
    1,  2,  3,   4,  5,  6,  7,  8,  9, 10, 11, 12,
   13, 14, 15,  16, 17, 18, 19, 20, 21, 22, 23, 24,
   25, 26, 27,  28, 29, 30, 31, 32, 33, 34, 35, 36,
   37, 38, 39,  40, 41, 42, 43, 44, 45, 46, 47, 48,
   49, 50, 51,  52, 53, 54, 55, 56, 57, 58, 59, 60,
   61, 62, 63,  64, 65, 66, 67, 68, 69, 70, 71, 72,
   73, 74, 75,  76, 77, 78, 79, 80, 81, 82, 83, 84,
   85, 86, 87,  88, 89, 90, 91, 92, 93, 94, 95, 96,
   97, 98, 99, 100
 ];
 
let findNumber = 45;

function search(array, value) {
    let index = 0
    let end = array.length - 1
    let midpoint = Math.round(end / 2)
    while (array[midpoint] !== value){
        if (value > array[midpoint]) {
            index = midpoint
            midpoint = Math.round((end+index) / 2)
        } else {
            end = midpoint
            midpoint = Math.round((end-index) / 2 ) + index - 1
        }
    }
    return midpoint
}


console.log(search(listNumber, findNumber))


// EJERCICIO 2

console.log("Ejercicio de recorrer arrays sin orden especifico")

let arreglo = [10, 30, 5, 15, 12, 0, 35]
let buscar = 15

function search2(arreglo, buscar) {
    let index = 0
    let end = arreglo.length - 1
    while (((arreglo[index] !== buscar) && (arreglo[end] !== buscar)) && (index !== end)){
        index++
        end--
    }

    if (arreglo[index] == buscar){
        return index
    } else if (arreglo[end] == buscar){
        return end
    } else {
        return "No se encontró"
    }
}

console.log(search2(arreglo, buscar))

// EJERCICIO 3

console.log("Ejercicio de encontrar palabras en el parrafo")

let str = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur vulputate lacus in eleifend porttitor. Aenean fermentum sagittis nisl, et rutrum urna ullamcorper consequat. Nulla vel vestibulum nulla, sed lobortis mauris. Vestibulum bibendum odio eget massa viverra, vitae viverra leo accumsan. Nullam ante nulla, euismod nec libero ac, tincidunt tincidunt magna. Donec ligula neque, iaculis ornare gravida at, mattis vel sem. Cras in aliquam eros. Aenean ac mauris imperdiet, tincidunt magna vel, porttitor mauris. Nam quis arcu massa. Donec at leo a mi sagittis porttitor non eget justo. Morbi luctus erat sit amet mauris eleifend bibendum. Etiam auctor condimentum felis sed fringilla. Nulla erat tortor, efficitur quis justo et, tempor rhoncus enim. Nunc mattis, nibh vitae pretium malesuada, nisl massa fringilla erat, in rhoncus augue felis non erat. Suspendisse potenti. Mauris maximus venenatis lectus sit amet malesuada. In bibendum euismod malesuada. Aliquam at ligula erat. Morbi ut ligula feugiat, pharetra ante ut, bibendum nisl. Mauris a sagittis purus, vel cursus elit. Fusce sed pretium augue. Aliquam venenatis dapibus turpis id mollis. Maecenas cursus dolor nulla, nec tempor odio auctor non. Phasellus fringilla purus nibh, non dignissim erat maximus vitae. Mauris in turpis metus. Mauris in tellus tincidunt, viverra lectus nec, porttitor tortor. Nunc suscipit eros vel auctor faucibus. Donec nunc ipsum, ullamcorper consectetur ligula at, auctor tempus mi. Nulla lacinia imperdiet justo, cursus lobortis lorem pretium suscipit. Proin consequat nisi quam. Aenean maximus turpis eget nisl mattis, ut hendrerit ex facilisis. Duis ut fringilla tortor. Nam vulputate nisi ac consequat vulputate. Donec vitae mattis orci, eu dictum elit. Cras ut nisi ut dolor molestie pellentesque eget non elit. Maecenas volutpat quam ornare consequat malesuada. Ut in felis et justo fringilla sagittis ut sed lorem. Integer molestie purus vitae nunc rutrum fermentum. In interdum, sem tincidunt sagittis gravida, urna turpis gravida ipsum, sit amet viverra justo massa ac tellus. Cras malesuada, justo a elementum lacinia, risus leo vehicula est, eu condimentum enim augue malesuada nisl. Morbi dignissim eleifend est et scelerisque. Nullam ut ex in justo consectetur aliquet eu id libero. Aenean dignissim mauris laoreet nibh euismod, et sodales justo rhoncus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla sed lorem arcu. Nulla facilisi. Vivamus suscipit ex eu efficitur placerat. Pellentesque sit amet eleifend quam. Phasellus hendrerit ut nisi id bibendum. Vestibulum interdum libero eget mi tincidunt, vitae fringilla velit consectetur. Donec sagittis diam dolor. Ut a condimentum ex, in feugiat orci. In non lectus nec dolor sollicitudin vulputate. Aliquam vitae lectus sed orci imperdiet mattis at eu ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque urna eros, tristique vulputate tempus in, ullamcorper non erat. In dapibus quis erat eu ultrices. Duis lobortis sodales mi, fringilla imperdiet felis rhoncus in. Suspendisse dapibus ultrices sem, vel convallis velit blandit id. Phasellus orci urna, finibus ut efficitur eu, bibendum vel odio. Aliquam sollicitudin odio sit amet nisi fringilla commodo. In quis convallis nunc. Praesent at faucibus ex. Aliquam pulvinar, nisi sit amet rutrum aliquet, lorem nisi.`

let str1 = str.replaceAll(',', '')
let str2 = str1.replaceAll('.', '')
let arr = str2.split(' ')

let quantity = {}

for (i in arr) {
    quantity[arr[i].toLowerCase()] ? quantity[arr[i].toLowerCase()]++ : quantity[arr[i].toLowerCase()] = 1
}

console.log(quantity)