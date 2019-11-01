/**
 * Bubble sort is a comparison-based algorithm in which each pair of adjacent elements is compared and the elements
 * are swapped if they are not in order. This algorithm is not suitable for large data sets as its average and worst case
 * complexity are of Ο(n^2) where n is the number of items.
 */
 
 const bubbleSort = (arr) => {
    const length = arr.length;
     
     for(let i = 0; i < length; i++){
        for(let j = 0; j < length ; j++){
            if(arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j] =  arr[j+1];
                arr[j+1] = temp;
                
                // Es6 swap
               // [ arr[j], arr[j+1]] = [arr[j+1],  arr[j]];
            }
        }
    }
     return arr
 }         
 // examples 
console.log(bubbleSort([10,80,100,9,13])); // [9, 10, 13, 80, 100 ]