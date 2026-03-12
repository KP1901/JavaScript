    function add(a, b) {
    return a + b;
    }
    function subtraction(a, b) {
    return a - b;
    }

    export function calculate(operation, a, b) {
    if (operation === "addition") {
        return add(a, b);
    } else if (operation === "subtraction") {
        return subtraction(a, b);
    } else {
        throw new Error("Invalid Operation");
    }
    }

    /*
    
A module is:

-A JavaScript file that can export code and import code from other files.
-In JavaScript, modules are achieved using export and import.
    */