import _Vue, { PluginObject, PluginFunction } from 'vue'

export interface LogLevel {
    debug(...args: any[]): void;
    info(...args: any[]): void;
    warn(...args: any[]): void;
    error(...args: any[]): void;
    fatal(...args: any[]): void;
}

export interface VueModules {
    [key: string]: PluginObject<any> | PluginFunction<any>;
}

export type Nullable<T> = T | null;

/**
 * Y / N Flag
 */
export enum YnFlag {
    Y = 'Y',
    N = 'N'
}

/**
 * 키보드 코드
 */
export enum KeyCode {
    SPACE = 32,
    ENTER = 13,
    TAB = 9,
    BACKSPACE = 8,
    SHIFT = 16,
    CTRL = 17,
    ALT = 18,
    PAGE_UP = 33,
    PAGE_DOWN = 34,
    LEFT_ARROW = 37,
    UP_ARROW = 38,
    RIGHT_ARROW = 39,
    DOWN_ARROW = 40,
}
