function greet() {
  let name = "kiran";

  setTimeout(function () {
    console.log(name);
  }, 2000);
}
greet();

/**
 Closure – Q7 Notes (Callback + Closure)

-name is created inside the greet function.
-The callback function passed to setTimeout uses name.
-The callback forms a closure over name.
-greet() finishes execution before setTimeout runs.
-The lexical environment containing name is kept alive.
-When the callback executes later, it still accesses name.
-Garbage collection does not remove name because it is still referenced.
 */