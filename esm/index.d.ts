interface Item {
    blockchain: string;
    token?: string;
    receiver: string;
    amount: number;
}
interface ConfigProps {
    accept: Item[];
}

declare function Widget(props: ConfigProps): JSX.Element;

declare function PayBtn(props: ConfigProps): JSX.Element;

export { PayBtn, Widget };
