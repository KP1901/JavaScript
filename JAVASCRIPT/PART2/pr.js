function counter(a) {
  return function (value) {
    console.log(a + value);
  };
}
const fn = counter(100);
fn(10);
