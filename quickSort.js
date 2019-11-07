/***
 * Quick sort is based on the divide-and-conquer approach based on the idea of choosing one element
 * as a pivot element and partitioning the array around it such that: Left side of pivot contains all the elements
 * that are less than the pivot element Right side contains all elements greater than the pivot.
 */

// This function takes random element as pivot
const rand_partition = (arr, start, end) => {
	//chooses position of pivot randomly by using rand() function .
	let random = start + Math.round(Math.random() % (end - start + 1));
	[arr[random], arr[start]] = [arr[start], arr[random]]; //swap pivot with 1st element.
	return partition(arr, start, end);
};

/* This function takes last element as pivot, places  
the pivot element at its correct position in sorted  
array, and places all smaller (smaller than pivot)  
to left of pivot and all greater elements to right  
of pivot */
const partition = (arr, low, high) => {
	let pivot = arr[high]; // pivot
	let i = low - 1; // Index of smaller element
	for (let j = low; j <= high - 1; j++) {
		// If current element is smaller than the pivot
		if (arr[j] < pivot) {
			i++; // increment index of smaller element
			[arr[i], arr[j]] = [arr[j], arr[i]];
		}
	}
	[arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
	return i + 1;
};

// The main function that implements QuickSort
const quickSort = (arr, low = 0, high = arr.length - 1) => {
	if (low < high) {
		/* pi is partitioning index, arr[p] is now  
        at right place */
		let pi = rand_partition(arr, low, high);
		// Separately sort elements before
		// partition and after partition
		quickSort(arr, low, pi - 1);
		quickSort(arr, pi + 1, high);
	}
	return [...arr];
};

console.log(quickSort([101, 55, 12, 255, 129, 786, 2, 3, 0, 478, 125]));
