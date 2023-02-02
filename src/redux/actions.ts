export enum ACTIONS_TYPE {
    CHANGE_CURRENCY_FIELD_TYPE = 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE',
    CHANGE_CHANGE_ACTION = 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    CHANGE_CURRENT_CURRENCY = 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',


    // SET_CURRENCY_AMOUNT = 'CurrencyExchange/SET_CURRENCY_AMOUNT',
    // SET_ACTION = 'CurrencyExchange/SET_ACTION',
    // CHANGE_CURRENCY = 'CurrencyExchange/CHANGE_CURRENCY'
}


export type ChangeCurrencyFieldType = {
    type: 'CurrencyExchange/CHANGE_CURRENCY_FIELD_TYPE'
    amountOfBYN: string
    amountOfCurrency: string
};

export const ChangeCurrencyFieldAC = (amountOfBYN: string, amountOfCurrency: string): ChangeCurrencyFieldType => {
    return{
        type: ACTIONS_TYPE.CHANGE_CURRENCY_FIELD_TYPE,
        amountOfBYN,
        amountOfCurrency

    }as const
};
export const ChangeCurrentCurrencyAC = (currentCurrency: string): ChangeCurrentCurrencyType => {
    return {
        type: ACTIONS_TYPE.CHANGE_CURRENT_CURRENCY,
        currentCurrency
    }as const
};
export const ChangeActionAC = (isBuying: boolean): ChangeAction => {
    return{
        type: ACTIONS_TYPE.CHANGE_CHANGE_ACTION,
        isBuying
    } as const
};



export type ChangeAction = {
    type: 'CurrencyExchange/CHANGE_CHANGE_ACTION',
    isBuying: boolean
};

export type ChangeCurrentCurrencyType = {
    type: 'CurrencyExchange/CHANGE_CURRENT_CURRENCY',
    currentCurrency: string
};

export type CurrencyReducersTypes = ChangeCurrencyFieldType | ChangeAction | ChangeCurrentCurrencyType;