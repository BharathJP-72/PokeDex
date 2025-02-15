
function useDebounce(cb, delay = 2000) {
    let timerId
    return (...args) => {
        clearTimeout(timerId)

        timerId = setTimeout(() => {
            cb(...args)
        }, delay);
  }
}

export default useDebounce


/*
Step-by-Step Explanation

1. Declares timerId → This variable stores the reference to the setTimeout function.

2. Returns a new function → This function is what Search.js uses (debounceUpdateSearch).

3. Every time the function runs (onChange):
        -Clears the previous timeout → Cancels the previously scheduled execution.
        -Starts a new timer (setTimeout) → The function (cb) will execute after the delay (default 2000ms).
        -Only runs after the user stops typing.
 */