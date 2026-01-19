//  1 example

function orderTea(teaType) {
  function confirmOrder() {
    return `order confirmed for ${teaType}`;
  }
  return confirmOrder();
}
console.log(orderTea("chai"));
