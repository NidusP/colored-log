// src/index.ts
var log = console.log;
log.clear = console.clear;
log.gray = function(data) {
  log("\x1B[90m" /* GRAY */ + data + "\x1B[0m" /* RESET */);
};
log.red = function(data) {
  log("\x1B[91m" /* RED */ + data + "\x1B[0m" /* RESET */);
};
log.green = function(data) {
  log("\x1B[92m" /* GREEN */ + data + "\x1B[0m" /* RESET */);
};
log.yellow = function(data) {
  log("\x1B[93m" /* YELLOW */ + data + "\x1B[0m" /* RESET */);
};
log.blue = function(data) {
  log("\x1B[94m" /* BLUE */ + data + "\x1B[0m" /* RESET */);
};
log.magenta = function(data) {
  log("\x1B[95m" /* MAGENTA */ + data + "\x1B[0m" /* RESET */);
};
log.cyan = function(data) {
  log("\x1B[96m" /* CYAN */ + data + "\x1B[0m" /* RESET */);
};
log.success = function(data) {
  log("\x1B[42;30m" /* SUCCESS */ + data + "\x1B[0m" /* RESET */);
};
log.error = function(data) {
  log("\x1B[41;30m" /* ERROR */ + data + "\x1B[0m" /* RESET */);
};
log.warn = function(data) {
  log("\x1B[43;30m" /* WARN */ + data + "\x1B[0m" /* RESET */);
};
log.info = function(data) {
  log("\x1B[40;37m" /* INFO */ + data + "\x1B[0m" /* RESET */);
};
var src_default = log;
export {
  src_default as default
};
