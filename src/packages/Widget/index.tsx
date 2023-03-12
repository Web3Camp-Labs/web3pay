import PayBtn from "./payBtn";
import {ConfigProps} from "../type/type";
import GeneralConfig from "../config";
import {useEffect, useState} from "react";

export default function Widget(props:ConfigProps){
    const [symbol,setSymbol] = useState<string>();
    const [logo,setLogo] = useState<string>();
    const [amount,setAmount] = useState<number>();

    const { accept } = props;

    useEffect(()=>{
        if(!accept || !accept[0])return;
        GeneralConfig.chainList.map((item)=>{
            if( accept[0].blockchain !== item.blockchain)return;
            setSymbol(item.nativeCurrency.symbol);
            setLogo(item.logo);
        })
        setAmount(accept[0].amount);

    },[accept])

    return <div className="web3camp_widget_box">

        <div className="web3camp_widget_title">Payment</div>
        <div className="web3camp_widget_displayBox">
            <div className="web3camp_widget_displayBox_lft">
                <img className="web3camp_widget_chain" src={logo} alt="" />
                <div>{symbol} {amount}</div>
            </div>

            <div>
                <img src='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iQ2hldnJvblJpZ2h0IEljb24iIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00LjY0NiAxLjY0NmEuNS41IDAgMCAxIC43MDggMGw2IDZhLjUuNSAwIDAgMSAwIC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDgtLjcwOEwxMC4yOTMgOCA0LjY0NiAyLjM1NGEuNS41IDAgMCAxIDAtLjcwOHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzkwOTA5MCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9zdmc+'/>
            </div>
        </div>
        <PayBtn accept={accept} />
    </div>
}