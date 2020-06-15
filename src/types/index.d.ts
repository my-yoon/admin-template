import VueI18n from 'vue-i18n'
import _Vue, { PluginObject, PluginFunction } from 'vue'

export interface IDialogOptions {
    id?: string;
    resolve?: (p: any) => any;
    reject?: (p: any) => any;
    title?: string;
    text?: string;
    apply?: string;
    cancel?: string;
    confirm?: boolean;
    maxWidth?: number;
    $t?: (key: VueI18n.Path, values?: VueI18n.Values) => string;
    [key: string]: any;
}

export interface func {
    (v: any): any;
}
