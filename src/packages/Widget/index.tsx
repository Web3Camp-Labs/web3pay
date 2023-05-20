import PayBtn from "./payBtn";
import {chainObj, ConfigProps} from "../type/type";
import GeneralConfig from "../config";
import {useEffect, useState} from "react";
import Erc20Abi from "../abi/ERC20.json";
import {ethers} from "ethers";
import PublicObj from "../public";

export default function Widget(props:ConfigProps){
    const [symbol,setSymbol] = useState<string>();
    const [logo,setLogo] = useState<string>();
    const [amount,setAmount] = useState<number>();

    const { accept } = props;

    useEffect(()=>{
        if(!accept || !accept[0])return;
        GeneralConfig.chainList.map((item)=>{
            if( accept[0].blockchain !== item.blockchain)return;
            PublicObj.chainChange(accept,0);
            if(!accept[0].token){
                setSymbol(item.nativeCurrency.symbol);
            }else{
                getSym(accept[0].token);
            }
            setLogo(item.logo);
        })
        setAmount(accept[0].amount);
    },[accept]);

    useEffect(()=>{
        (window as any).ethereum.on('chainChanged', () => {
            getSym(accept[0].token!);
        });
    },[])

    const getSym = async(addr:string) =>{
        const { ethereum } = window as any;
        const web3Provider = new ethers.providers.Web3Provider(ethereum);
        const arr = GeneralConfig.chainList.filter(item=>item.blockchain === accept[0].blockchain);
        if(arr.length === 0 ) return;
        const {chainId} = await web3Provider.getNetwork();
        const arrChain = eval(arr[0].onlineChainId!)?.toString(10);
        if(chainId !== Number(arrChain)) return;
        const contract = new ethers.Contract(addr, Erc20Abi, web3Provider);
        let sym = await contract.symbol();
        setSymbol(sym);
    }

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