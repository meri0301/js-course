const mergeTwoArrays = (arr1, arr2) => {
    const newArr = new Array(arr1.length + arr2.length);
    let i = 0;
    let j = 0;
    let index = 0;

    while (i < arr1.length && j < arr2.length) {
        if (arr1[i] < arr2[j]) {
            newArr[index] = arr1[i];
            ++i;
        } else {
            newArr[index] = arr2[j];
            ++j;
        }
        ++index;
    }

    for (; i < arr1.length; ++i) {
        newArr[index] = arr1[i];
        ++index;
    }

    for (; j < arr2.length; ++j) {
        newArr[index] = arr2[j];
        ++index;
    }

    return newArr;
}

const merge = arr => {
    let newArr = [];
    let i = 0;

    while (i < arr.length) {
        newArr = mergeTwoArrays(newArr, arr[i++]);
    }

    return newArr;
}

console.log(merge([[1, 6, 8], [3, 15, 27], [2, 9], [18, 21, 36], [7, 59]]));
