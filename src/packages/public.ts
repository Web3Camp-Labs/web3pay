import GeneralConfig from "./config";
import {chainObj} from "./type/type";
import {Item} from "./type/type";

const chainChange = async (accept:Item[],current:number) =>{
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

const PublicObj = {
    chainChange,
    switchETH,
    switchChain
}

export default PublicObj;