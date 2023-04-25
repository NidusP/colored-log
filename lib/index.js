"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => src_default
});
module.exports = __toCommonJS(src_exports);
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
