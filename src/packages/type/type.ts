import config from "../config";

export interface Item{
    blockchain: string;
    token?: string;
    receiver: string;
    amount:number;
}
export interface ConfigProps{
    accept: Item[]
}

export interface ModalProps extends ConfigProps{
    handleHide:Function
}

export interface ShowItem extends Item{
    logo:string;
    symbol:string;
}
export interface ButtonProps extends ConfigProps{
    current:number;
}

export interface chainObj{
    chainName:string;
    blockchain:string;
    logo:string;
    nativeCurrency:{
        name?:string;
        symbol:string;
        decimals?:number
    }
    rpcUrls?:string[];
    blockExplorerUrls?:string[];
    onlineChainId?:string;
}