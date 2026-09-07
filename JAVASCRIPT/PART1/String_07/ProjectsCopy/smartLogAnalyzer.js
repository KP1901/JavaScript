let logInput =
  "2026-08-29 10:15:23 [INFO] User 101 logged in 2026-08-29 10:16:45 [ERROR] User 205 payment failed 2026-08-29 10:17:12 [WARNING] User 309 account locked 2025-05-25 10:16:30 [WARNING] User 305 account locked";

function smartLogAnalyzer(log) {
  log = log.match(/\d{4}-\d{2}-\d{2}[\s\S]*?(?=\d{4}-\d{2}-\d{2}|$)/g);
  // log = log.split("\n");

  log = log.map((item) => item.trim()).join(",");

  let level = log
    .match(/\[[A-Z]+\]/g)
    .map((item) => item.slice(1, item.length - 1));

  let countLevel = level.reduce((acc, curr) => {
    acc[curr] = (acc[curr] ?? 0) + 1;
    return acc;
  }, {});

  let userIds = log
    .match(/User\s+\d+/g)
    .map((item) => Number(item.match(/\d+/g)));

  let matches = log.matchAll(/\[([A-Z]+)\]\s+User\s+(\d+)\s+(.+)/g);

  let result = [];

  for (const match of matches) {
    result.push({
      level: match[1],
      userId: Number(match[2]),
      message: match[3],
    });
    // console.log(match);
  }
  let errorLogs = result.filter((error) => error.level === "ERROR");
  return errorLogs;
}

let result = smartLogAnalyzer(logInput);
console.log(result);
