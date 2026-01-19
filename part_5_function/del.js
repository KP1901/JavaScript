const tracker = {
  count: 0,
  logClick() {
    this.count++;
    console.log(`Clicked ${this.count} times`);
  },
};

//way - 1 direct call
// const track = tracker.logClick.bind(tracker);
// track();
// track();

/*
✅ What happens here:

-You are directly calling the function that belongs to tracker.
-It executes immediately at that line.
-You control when it runs.
*/

// way -2 callback context

function simulateClick(callback) {
  callback();
  callback();
}

simulateClick(tracker.logClick.bind(tracker));

/*

*✅ What happens here:

-You don’t call the function immediately.
-You pass it as an argument (a callback function) to another function (simulateClick).
-Then that other function decides when and how many times to call it. */
