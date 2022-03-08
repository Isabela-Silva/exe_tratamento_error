
/* 
- ATIVIDADE DO BOOTCAMP IMPULSO FULLSTACK WEB DEVELOPER:

- exercício sobre tratamento de erros
- aula sobre debugging & error handling

*/
    function validaArray(arr, num) {
    try {
        if (!arr && !num) throw new ReferenceError('envie os parametros');
        if (typeof arr !== 'object') throw new TypeError('o array precisa ser um objeto');
        if (typeof num !== 'number') throw new TypeError('o num precisa ser um numero');
        if (arr.length !== num) throw new RangeError('tamanho inválido');
            
        return arr;
    } catch (e) {
        if(e instanceof ReferenceError) {
            console.log('este erro é um ReferenceError');
            console.log(e.message);
        } else if (e instanceof TypeError) {
            console.log('este erro é um TypeError');
            console.log(e.message);
        } else if (e instanceof RangeError) {
            console.log('este erro é um RangeError');
            console.log(e.message);
        } else {
            console.log('este erro foi inesperado');
        }
    }
}

console.log(validaArray()); // sem parâmetros 
console.log(validaArray(5,5)); // sem object
console.log(validaArray([], 'a')); // sem number
console.log(validaArray([],5)); // array length diferente do numero
console.log(validaArray([1,2,5,4,7],5))



