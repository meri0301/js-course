const memoFib = (n) => {
    if (n <= 2) return 1;
    memoFib.cache = memoFib.cache || [];

    return memoFib.cache[n] = memoFib(n - 1) + memoFib(n - 2);
}

console.log(memoFib(10));

