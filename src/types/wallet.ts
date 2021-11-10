export type WalletType={
    [key: string]: {
        balance: number
    }
};

export type CurrencyType={
    [key: string]: {
        symbol: string,
        code: string,
        name: string,
    }
};
