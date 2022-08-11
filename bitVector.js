const bitVector = bitCount => {
    const elementCount = Math.ceil(bitCount / 32);
    const vector = new Array(elementCount);

    for (let i = 0; i < elementCount; ++i) {
        vector[i] = 0;
    }

    return vector;
}

const get = (vector, num) => {
    const bigIndex = Math.floor(num / 32);
    const smallIndex = num % 32;

    const val = vector[bigIndex] & (1 << smallIndex);
    return val !== 0;
}

const set = (vector, num) => {
    const bigIndex = Math.floor(num / 32);
    const smallIndex = num % 32;

    vector[bigIndex] = vector[bigIndex] | (1 << smallIndex);
}

const vector = bitVector(64)

set(vector, 30);
console.log(get(vector, 30), 'get');


