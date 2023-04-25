enum ANSI_COLOR {
  GRAY = '\x1b[90m',
  RED = '\x1b[91m',
  GREEN = '\x1b[92m',
  YELLOW = '\x1b[93m',
  BLUE = '\x1b[94m',
  MAGENTA = '\x1b[95m',
  CYAN = '\x1b[96m',
  RESET = '\x1b[0m',

  SUCCESS = '\x1b[42;30m',
  WARN = '\x1b[43;30m',
  ERROR = '\x1b[41;30m',
  INFO = '\x1b[40;37m',
}
interface Log {
  (data: string): void
  clear(): void
  gray(data: string): void
  red(data: string): void
  green(data: string): void
  yellow(data: string): void
  blue(data: string): void
  magenta(data: string): void
  cyan(data: string): void

  success(data: string): void
  error(data: string): void
  warn(data: string): void
  info(data: string): void
}
const log = console.log as Log

log.clear = console.clear
log.gray = function (data: string) {
  log(ANSI_COLOR.GRAY + data + ANSI_COLOR.RESET)
}
log.red = function (data: string) {
  log(ANSI_COLOR.RED + data + ANSI_COLOR.RESET)
}
log.green = function (data: string) {
  log(ANSI_COLOR.GREEN + data + ANSI_COLOR.RESET)
}
log.yellow = function (data: string) {
  log(ANSI_COLOR.YELLOW + data + ANSI_COLOR.RESET)
}
log.blue = function (data: string) {
  log(ANSI_COLOR.BLUE + data + ANSI_COLOR.RESET)
}
log.magenta = function (data: string) {
  log(ANSI_COLOR.MAGENTA + data + ANSI_COLOR.RESET)
}
log.cyan = function (data: string) {
  log(ANSI_COLOR.CYAN + data + ANSI_COLOR.RESET)
}

log.success = function (data: string) {
  log(ANSI_COLOR.SUCCESS + data + ANSI_COLOR.RESET)
}
log.error = function (data: string) {
  log(ANSI_COLOR.ERROR + data + ANSI_COLOR.RESET)
}
log.warn = function (data: string) {
  log(ANSI_COLOR.WARN + data + ANSI_COLOR.RESET)
}
log.info = function (data: string) {
  log(ANSI_COLOR.INFO + data + ANSI_COLOR.RESET)
}
export default log
