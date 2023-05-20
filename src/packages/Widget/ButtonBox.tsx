import {ethers} from "ethers";
import {useEffect, useState} from "react";
import {ButtonProps, chainObj, Item} from "../type/type";
import GeneralConfig from "../config";
import Loading from "./loading";
import Erc20Abi from "../abi/ERC20.json";
import PublicObj from "../public";

export default function ButtonBox(props:ButtonProps){
    const { current,accept,handleHide } = props;

    const [account,setAccount] =useState<string>('');
    const [error,setError] =useState<string>('');
    const [loading,setLoading] = useState(false);
    const [showText,setShowText] = useState(false);
    const [currentChain,setCurrentChain] = useState(1);

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
        PublicObj.chainChange(accept,0);
    },[])


    useEffect(()=>{
        setError('');
        getChain()
    },[current])

    useEffect(()=>{

        const arr = GeneralConfig.chainList.filter(item=>item.blockchain === accept[current].blockchain);
        console.log(arr)
        const arrChain = eval(arr[0].onlineChainId!).toString(10);
        console.error(parseInt(arrChain),currentChain,parseInt(arrChain) === currentChain)
        if(parseInt(arrChain) !== currentChain){
            setShowText(true)
        }else{
            setShowText(false)
        }

    },[current,currentChain])

    useEffect(()=>{
        (window as any).ethereum.on('chainChanged', () => {
            setShowText(false)
        });
    },[])

    const getChain = async() =>{
        const { ethereum } = window as any;
        const web3Provider = new ethers.providers.Web3Provider(ethereum);
        const {chainId} = await web3Provider.getNetwork();
        setCurrentChain(chainId)
    }

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

            <span>{showText?"Switch chain":"Pay"}</span>
            </button>
    </div>
}