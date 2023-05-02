import {ethers} from "ethers";
import {useEffect, useState} from "react";
import {ButtonProps, chainObj, Item} from "../type/type";
import GeneralConfig from "../config";
import Loading from "./loading";
import Erc20Abi from "../abi/ERC20.json";

export default function ButtonBox(props:ButtonProps){
    const { current,accept,handleHide } = props;

    const [account,setAccount] =useState<string>('');
    const [error,setError] =useState<string>('');
    const [loading,setLoading] = useState(false);

    const chainChange = async () =>{

        for (let item of GeneralConfig.chainList){
            if( accept[current].blockchain === item.blockchain){
                if(item.blockchain === "ethereum"){
                    await switchETH();
                }else{
                    await switchChain(item);
                }
            }
        }

    }

    const switchETH = async() =>{
        const { ethereum} = window as any;
       await ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{
                chainId: "0x1"
            }]
        }).catch((error:any)=>{
            console.error(error)
       })

    }
    const switchChain = async (item:chainObj) =>{
        const { ethereum} = window as any;
        const { chainName,nativeCurrency:{name,symbol,decimals},rpcUrls,blockExplorerUrls,onlineChainId } = item;
        await ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
                chainId:onlineChainId,
                chainName,
                nativeCurrency: {
                    name,
                    symbol,
                    decimals
                },
                rpcUrls,
                blockExplorerUrls
            }]
        })
    }

    const getAccount = async () =>{
        const { ethereum } = window as any;
        if (typeof ethereum == 'undefined') {
            return {
                type: 'error'
            };
        }
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        setAccount(accounts[0]);
    }

    useEffect(()=>{
        getAccount();
        chainChange();
    },[])

    const handleTransfer = async () =>{
        setLoading(true);
        setError('')
        const { ethereum } = window as any;
        const web3Provider = new ethers.providers.Web3Provider(ethereum);

        const signer = await web3Provider.getSigner();
        const amount = accept[current].amount.toString();
        if(!accept[current].token){
            try{
                let tx = await signer.sendTransaction({
                    to: accept[current].receiver,
                    value: ethers.utils.parseEther(amount),
                });
                let res =  await tx.wait();
                setLoading(false);
                handleHide && handleHide();
            }catch (e) {
                console.error((e as any).message)
                setError((e as any).code)
                setLoading(false);
            }
        }else{
            transferToken(accept[current])
        }
    }

    const transferToken = async (obj:Item) =>{
        try{
            const { ethereum } = window as any;
            const provider = new ethers.providers.Web3Provider(ethereum);
            const signer = await provider.getSigner(account);
            const ErcContract = new ethers.Contract(obj.token!, Erc20Abi, signer);
            const decimals = await ErcContract.decimals();
            const amountErc = ethers.utils.parseUnits(obj.amount.toString(),decimals);
            const result = await ErcContract.transfer(obj.receiver,amountErc.toString())
            const rt =await result.wait();
            setLoading(false);
            handleHide && handleHide();
        }catch (e) {
            console.error((e as any).message)
            setError((e as any).code)
            setLoading(false);
        }
    }

    return <div className="web3camp_widget_Tips_outer">
        {
            !!error.length &&<div className="web3camp_widget_Tips">Error: {error}</div>
        }

        <button className="web3camp_widget_button" onClick={()=>handleTransfer()}>
            {
                loading &&<Loading />
            }

            <span>Pay</span>
            </button>
    </div>
}