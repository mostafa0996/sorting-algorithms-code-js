/**
Selection sort is an in-place comparison-based algorithm in which the list is divided into two parts,
the sorted part at the left end and the unsorted part at the right end.
Initially, the sorted part is empty and the unsorted part is the entire list.

The smallest element is selected from the unsorted array and swapped with the leftmost element,
and that element becomes a part of the sorted array. This process continues moving unsorted array boundary by one element to the right.

This algorithm is not suitable for large data sets as its average and worst case complexities are of Ο(n2),
where n is the number of items.
 */

const selectionSort = (arr) => {  
    // One by one move boundary of unsorted subarray  
    for (let i = 0; i < arr.length - 1; i++){  
        // Find the minimum element in unsorted array  
        let min_idx = i;  
        for (let j = i+1; j < arr.length; j++) {
            if (arr[j] < arr[min_idx])  
              min_idx = j;  
        } 
        // Swap the found minimum element with the first element  
        [ arr[min_idx], arr[i]] = [arr[i],  arr[min_idx]];
    }
    return arr;  
}  

console.log(selectionSort([10,80,100,9,13])); // [9, 10, 13, 80, 100 ]
