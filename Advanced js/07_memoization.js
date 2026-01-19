function createSearch() {
  const cache = {};

  return function search(query) {
    if (query in cache) {
      console.log(`From Cache ${cache[query]}`);
      return cache[query];
    }
    let result = query;
    cache[result] = result;
    console.log("Computed:", result);
    return result;
  };
}
const search = createSearch();

search("apple");
search("apple");
search("apple");
search("apple");
search("apple");
