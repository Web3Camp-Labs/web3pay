import { __assign } from '../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import Modal from './Modal.js';
import { useState } from 'react';

var style = "\n.web3camp_widget_box{\n    padding: 20px;\n    border-radius: 10px;\n    background: #f5f5f5;\n    width: 400px;\n    box-sizing: border-box;\n    font-family: -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, \"Helvetica Neue\", Arial, sans-serif, \"Apple Color Emoji\", \"Segoe UI Emoji\", \"Segoe UI Symbol\";\n}\n.web3camp_widget_first{\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.web3camp_widget_title{\n    font-size: 18px;\n}\n.web3camp_widget_displayBox{\n    background: #fff;\n    padding: 20px;\n    border-radius: 6px;\n    margin-top: 10px;\n    display: flex;\n    align-items: center;\n    justify-content: space-between;\n}\n.web3camp_widget_chain{\n    width: 40px;\n    height: 40px;\n    border-radius: 40px;\n    margin-right: 10px;\n}\n.web3camp_widget_displayBox_lft{\n    display: flex;\n    align-items: center;\n    font-size: 16px;\n}\n.web3camp_widget_button{\n    width: 100%;\n    padding: 15px;\n    border-radius: 10px;\n    border: 0;\n    margin-top:20px;\n    background: #409eff;\n    font-size: 18px;\n    color: #ffffff;\n    cursor: pointer;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.web3camp_widget_button:hover{\n    opacity: 0.8;\n}\n.web3camp_widget_Mask{\n    background: rgba(0,0,0,0.5);\n    backdrop-filter: blur(20px);\n    width: 100vw;\n    height: 100vh;\n    position: fixed;\n    z-index: 99999999;\n    left: 0;\n    top: 0;\n    display: flex;\n    align-items: center;\n    justify-content: center;\n}\n.web3camp_widget_close{\n    cursor: pointer;\n}\n.web3camp_widget_down{\n    transform: rotate(90deg);\n}\n.web3camp_widget_Mask .web3camp_widget_outer{\n    cursor: pointer;\n    position: relative;\n}\n.web3camp_widget_dropBox{\n    position: absolute;\n    background: #fff;\n    left: 0;\n    top: 90px;\n    z-index: 999;\n    width: 100%;\n    border-radius: 6px;\n    box-sizing: border-box;\n    overflow: hidden;\n\n}\n.web3camp_widget_inner{\n    padding: 20px;\n    display: flex;\n    align-items: center;\n    justify-content: flex-start;\n    border-bottom: 1px solid #e2e2e2;\n}\n.web3camp_widget_inner:last-child{\n    border-bottom: 0;\n}\n.web3camp_widget_inner:hover{\n    background: #f5f5f5;\n}\n.web3camp_widget_Tips_outer{\n    position: relative;\n}\n.web3camp_widget_Tips{\n    position: absolute;\n    top: 110px;\n    left: 0;\n    color: #D92121;\n    background: #fff;\n    width: 100%;\n    border-radius: 6px;\n    box-sizing: border-box;\n    padding: 20px;\n    line-height: 1.5em;\n}\n\n\n/**\n  * Dots flow\n  *\n  * @author jh3y - jheytompkins.com\n*/\n.web3camp_widget_double-up:before {\n    display: block;\n    content: '';\n    height: 10px;\n    width: 10px;\n    -webkit-animation: spin .5s infinite linear;\n    animation: spin .5s infinite linear;\n    border: 10px #fff double;\n    border-left-style: solid;\n    border-radius: 100%;\n    margin-right: 10px;\n}\n\n@-webkit-keyframes spin {\n    to {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg); } }\n\n@keyframes spin {\n    to {\n        -webkit-transform: rotate(360deg);\n        transform: rotate(360deg); } }\n\n";
function PayBtn(props) {
  var _a = useState(false),
    show = _a[0],
    setShow = _a[1];
  var accept = props.accept;
  var handleShow = function handleShow() {
    setShow(true);
  };
  var handleHide = function handleHide() {
    setShow(false);
  };
  return jsxs("div", {
    children: [jsx("style", {
      children: style
    }), show && jsx(Modal, {
      handleHide: handleHide,
      accept: accept
    }), jsx("button", __assign({
      className: "web3camp_widget_button",
      onClick: handleShow
    }, {
      children: "Pay"
    }))]
  });
}

export { PayBtn as default };
