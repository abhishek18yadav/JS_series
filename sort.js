// bubble sort

function swap(arr, a, b) {
    
    let temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
    return arr;
}
function BubbleSort(arr) {
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < arr.length - i; j++){
            if (arr[j] > arr[j + 1]) {
                swap(arr,j, arr[j + 1]);
            }
        }
    }
    console.log(arr);
}

function selectionSort(arr) {
    for (let i = 0; i < arr.length; i++){
        let minTag = i;
        for (let j = i + 1; j < arr.length; j++){
            if(arr[j] < arr[minTag]) {
                minTag = j;
            }
        }
        if (minTag !== i) {
            swap(arr, i, minTag);
        }
    }
    console.log(arr);
}



// BubbleSort([5, 3, 8, 4, 2]);

// selectionSort([5, 3, 8, 4, 2]);

function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++){
        let key = arr[i];
        let y = i - 1;
        while (y >= 0 && arr[y] > key) {
            arr[y + 1] = arr[y];
            y--;
        }
        arr[y + 1] = key;
    }
    console.log(arr);
}

insertionSort([5, 3, 8, 4, 2]);