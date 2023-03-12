import ButtonBox from "./ButtonBox";
import {useEffect, useState} from "react";
import {ModalProps,ShowItem} from "../type/type";
import GeneralConfig from "../config";

export default function Modal(props:ModalProps){
    const {handleHide,accept} = props;
    const [show,setShow] = useState(false);
    const [current,setCurrent] = useState(0);
    const [list,setList] = useState<ShowItem[]>([]);

    useEffect(()=>{
        if(!accept)return;
        let arr:ShowItem[]=[];
        accept.map((receiverItem)=>{
            GeneralConfig.chainList.map((item)=>{
                if( receiverItem.blockchain === item.blockchain){
                    let obj ={
                        ...receiverItem,
                        logo:item.logo,
                        symbol:item.nativeCurrency.symbol
                    }
                    arr.push(obj);
                }
            })
        })
        setList(arr);

    },[accept])

    const handleShow = () =>{
        setShow(true)
    }

    const handleCurrent = (num:number) =>{
        setCurrent(num);
        setShow(false);
    }

    if(!list.length)return null;
    return <div className="web3camp_widget_Mask">
        <div className="web3camp_widget_box">
            <div className="web3camp_widget_first">
                <div className="web3camp_widget_title">Confirmation</div>
                <div onClick={()=>handleHide()} className="web3camp_widget_close" >
                    <img src="data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48cGF0aCBkPSJNNTU2LjggNTEyTDgzMiAyMzYuOGMxMi44LTEyLjggMTIuOC0zMiAwLTQ0LjgtMTIuOC0xMi44LTMyLTEyLjgtNDQuOCAwTDUxMiA0NjcuMmwtMjc1LjItMjc3LjMzMzMzM2MtMTIuOC0xMi44LTMyLTEyLjgtNDQuOCAwLTEyLjggMTIuOC0xMi44IDMyIDAgNDQuOGwyNzUuMiAyNzcuMzMzMzMzLTI3Ny4zMzMzMzMgMjc1LjJjLTEyLjggMTIuOC0xMi44IDMyIDAgNDQuOCA2LjQgNi40IDE0LjkzMzMzMyA4LjUzMzMzMyAyMy40NjY2NjYgOC41MzMzMzNzMTcuMDY2NjY3LTIuMTMzMzMzIDIzLjQ2NjY2Ny04LjUzMzMzM0w1MTIgNTU2LjggNzg3LjIgODMyYzYuNCA2LjQgMTQuOTMzMzMzIDguNTMzMzMzIDIzLjQ2NjY2NyA4LjUzMzMzM3MxNy4wNjY2NjctMi4xMzMzMzMgMjMuNDY2NjY2LTguNTMzMzMzYzEyLjgtMTIuOCAxMi44LTMyIDAtNDQuOEw1NTYuOCA1MTJ6IiBmaWxsPSIjOTA5MDkwIiA+PC9wYXRoPjwvc3ZnPg==" alt=""/>
                </div>
            </div>

            <div className=" web3camp_widget_outer">
                <div className="web3camp_widget_displayBox" onClick={handleShow}>
                    <div className="web3camp_widget_displayBox_lft">
                        <img className="web3camp_widget_chain" src={list[current].logo} alt="" />
                        <div>{list[current].symbol} {list[current].amount}</div>
                    </div>

                    <div>
                        <img className="web3camp_widget_down" src='data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iQ2hldnJvblJpZ2h0IEljb24iIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00LjY0NiAxLjY0NmEuNS41IDAgMCAxIC43MDggMGw2IDZhLjUuNSAwIDAgMSAwIC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDgtLjcwOEwxMC4yOTMgOCA0LjY0NiAyLjM1NGEuNS41IDAgMCAxIDAtLjcwOHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzkwOTA5MCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9zdmc+'/>
                    </div>
                </div>

                {
                    show &&<div className="web3camp_widget_dropBox" >
                        {
                            list.map((item,index)=>(<div className="web3camp_widget_inner"  key={index} onClick={()=>handleCurrent(index)}>
                                <img className="web3camp_widget_chain" src={item.logo} alt="" />
                                <div>{item.symbol} {item.amount}</div>
                            </div>))
                        }

                    </div>
                }

            </div>
            <ButtonBox current={current} accept={accept} />
        </div>
    </div>
}