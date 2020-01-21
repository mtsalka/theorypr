// FD

function sum(a, b, showError) {
    const result = a + b;

    if (result > 1000) {
        showError(result);
    }

    return a + b;
}

const somePrintFunction = function (result) {
    console.log('AAA', result)
};


sum(1000, 3, somePrintFunction)

