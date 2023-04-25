interface Log {
    (data: string): void;
    clear(): void;
    gray(data: string): void;
    red(data: string): void;
    green(data: string): void;
    yellow(data: string): void;
    blue(data: string): void;
    magenta(data: string): void;
    cyan(data: string): void;
    success(data: string): void;
    error(data: string): void;
    warn(data: string): void;
    info(data: string): void;
}
declare const log: Log;

export { log as default };
