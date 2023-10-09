import Modal from "./Modal";
import {useEffect, useRef, useState} from "react";
import {ConfigProps} from "../type/type";
import {createRoot} from "react-dom/client";

const style = `
.web3camp_widget_box{
    padding: 20px;
    border-radius: 10px;
    background: #f5f5f5;
    width: 400px;
    box-sizing: border-box;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
}
.web3camp_widget_first{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.web3camp_widget_title{
    font-size: 18px;
}
.web3camp_widget_displayBox{
    background: #fff;
    padding: 20px;
    border-radius: 6px;
    margin-top: 10px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.web3camp_widget_chain{
    width: 40px;
    height: 40px;
    border-radius: 40px;
    margin-right: 10px;
}
.web3camp_widget_displayBox_lft{
    display: flex;
    align-items: center;
    font-size: 16px;
}
.web3camp_widget_button{
    width: 100%;
    padding: 15px;
    border-radius: 10px;
    border: 0;
    margin-top:20px;
    background: #409eff;
    font-size: 18px;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
.web3camp_widget_button:hover{
    opacity: 0.8;
}
.web3camp_widget_Mask{
    background: rgba(0,0,0,0.5);
    backdrop-filter: blur(20px);
    width: 100vw;
    height: 100vh;
    position: fixed;
    z-index: 99999999;
    left: 0;
    top: 0;
    display: flex;
    align-items: center;
    justify-content: center;
}
.web3camp_widget_close{
    cursor: pointer;
}
.web3camp_widget_down{
    transform: rotate(90deg);
}
.web3camp_widget_Mask .web3camp_widget_outer{
    cursor: pointer;
    position: relative;
}
.web3camp_widget_dropBox{
    position: absolute;
    background: #fff;
    left: 0;
    top: 90px;
    z-index: 999;
    width: 100%;
    border-radius: 6px;
    box-sizing: border-box;
    overflow: hidden;

}
.web3camp_widget_inner{
    padding: 20px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #e2e2e2;
}
.web3camp_widget_inner:last-child{
    border-bottom: 0;
}
.web3camp_widget_inner:hover{
    background: #f5f5f5;
}
.web3camp_widget_Tips_outer{
    position: relative;
}
.web3camp_widget_Tips{
    position: absolute;
    top: 110px;
    left: 0;
    color: #D92121;
    background: #fff;
    width: 100%;
    border-radius: 6px;
    box-sizing: border-box;
    padding: 20px;
    line-height: 1.5em;
}


/**
  * Dots flow
  *
  * @author jh3y - jheytompkins.com
*/
.web3camp_widget_double-up:before {
    display: block;
    content: '';
    height: 10px;
    width: 10px;
    -webkit-animation: spin .5s infinite linear;
    animation: spin .5s infinite linear;
    border: 10px #fff double;
    border-left-style: solid;
    border-radius: 100%;
    margin-right: 10px;
}

@-webkit-keyframes spin {
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg); } }

@keyframes spin {
    to {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg); } }

`

export function PayBtnInternal(props:ConfigProps){
    const [show, setShow] = useState(false);
    const { accept } = props;

    const handleShow = () =>{
        setShow(true);
    }
    const handleHide = () =>{
        setShow(false);
    }

    return <div>
        <style>{style}</style>
        {
            show &&<Modal handleHide={handleHide} accept={accept} />
        }
        <button className="web3camp_widget_button" onClick={handleShow}>Pay</button>
    </div>
}

export default function PayBtn(props:ConfigProps) {

    const shadowRoot = useRef(null);
    useEffect(() => {
        if (shadowRoot.current) {
            const rootElement = (shadowRoot.current as any).attachShadow({mode: "open"});
            const root = createRoot(rootElement)
            root.render(<PayBtnInternal {...props}/>)
        }
        return ()=>{
            shadowRoot.current = null;
        }
    }, [shadowRoot.current]);

    return <div ref={shadowRoot}></div>
};
