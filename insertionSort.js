/** 
In an insertion sort, the first element in the array is considered as sorted, even if it is an unsorted array.
In an insertion sort, each element in the array is checked with the previous elements, resulting in a growing sorted output list.
With each iteration, the sorting algorithm removes one element at a time and finds the appropriate location within the sorted array and inserts it there.
The iteration continues until the whole list is sorted.
*/

const insertionSort = (arr) => {
    const len = arr.length;
    let i, el, j;
    for(i = 1; i<len; i++){
      el = arr[i];
      j = i - 1;
  
      while(j >= 0 && arr[j] > el){
        arr[j + 1] = arr[j];
        j--;
     }
     arr[j + 1] = el;
    }
  
    return arr;
}

console.log(insertionSort([10,80,100,9,13])); // [9, 10, 13, 80, 100 ]
