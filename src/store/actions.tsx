export const CHANGE_GLOBAL_EVENT = "CHANGE_GLOBAL_EVENT";

export interface IChangeEventValueAction{
    type: string
    payload: string
}

export const changeEventValue = (newValue: string) : IChangeEventValueAction => {
    return {
        type: CHANGE_GLOBAL_EVENT,
        payload: newValue
    }
};
