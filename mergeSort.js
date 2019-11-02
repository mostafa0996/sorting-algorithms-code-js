/** 
 - Merge sort algorithm uses the “divide and conquer” strategy. 
 Wherein we divide the problem into subproblems and solve those subproblems individually.

 - Merge sort is performed using the following steps:

#1) The list to be sorted is divided into two arrays of equal length by dividing the list on the middle element. 
    If the number of elements in the list is either 0 or 1, then the list is considered sorted.

#2) Each sublist is sorted individually by using merge sort recursively.

#3) The sorted sublists are then combined or merged together to form a complete sorted list.

- Big O
    Worst case time complexity	O(n*log n)
    
    Best case time complexity	O(n*log n)
    
    Average time complexity	O(n*log n)
    
    Space complexity	O(n)
*/

function merger(left, right) {
    const arr = [  ];
    while (left.length && right.length) {
        if (left[0] < right[0]) {
            // remove from the left part and push the sorted array
            arr.push(left.shift()) 
        } else {
            // remove from the right part and push into the sorted array
            arr.push(right.shift()) 
        }
    }
    return [ ...arr, ...left, ...right ];
}

function mergeSort(arr, half = arr.length/2){
    if(arr.length < 2){
      return arr;
    }
  
    const left = arr.splice(0, half); //left part of  the array
     return merger(mergeSort(left),mergeSort(arr));
}
// example
console.log(mergeSort([10,5,9,8,7,2,6,1,3,4]));
