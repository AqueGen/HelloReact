export interface GlobalEventState {
    readonly globalEventValue: string
}


export const enum GlobalEventActionTypes {
    CHANGE_GLOBAL_EVENT = "CHANGE_GLOBAL_EVENT"
}



export interface IWelcomeType {
    language: string
    hello: string
}
