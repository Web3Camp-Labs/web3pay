import { __awaiter, __assign, __generator } from '../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import PayBtn from './payBtn.js';
import GeneralConfig from '../config.js';
import { useState, useEffect } from 'react';
import Erc20Abi from '../abi/ERC20.json.js';
import { ethers } from 'ethers';
import PublicObj from '../public.js';

function Widget(props) {
  var _this = this;
  var _a = useState(),
    symbol = _a[0],
    setSymbol = _a[1];
  var _b = useState(),
    logo = _b[0],
    setLogo = _b[1];
  var _c = useState(),
    amount = _c[0],
    setAmount = _c[1];
  var accept = props.accept;
  useEffect(function () {
    if (!accept || !accept[0]) return;
    GeneralConfig.chainList.map(function (item) {
      if (accept[0].blockchain !== item.blockchain) return;
      PublicObj.chainChange(accept, 0);
      if (!accept[0].token) {
        setSymbol(item.nativeCurrency.symbol);
      } else {
        getSym(accept[0].token);
      }
      setLogo(item.logo);
    });
    setAmount(accept[0].amount);
  }, [accept]);
  useEffect(function () {
    window.ethereum.on('chainChanged', function () {
      getSym(accept[0].token);
    });
  }, []);
  var getSym = function getSym(addr) {
    return __awaiter(_this, void 0, void 0, function () {
      var ethereum, web3Provider, arr, chainId, arrChain, contract, sym;
      var _a;
      return __generator(this, function (_b) {
        switch (_b.label) {
          case 0:
            ethereum = window.ethereum;
            web3Provider = new ethers.providers.Web3Provider(ethereum);
            arr = GeneralConfig.chainList.filter(function (item) {
              return item.blockchain === accept[0].blockchain;
            });
            if (arr.length === 0) return [2 /*return*/];
            return [4 /*yield*/, web3Provider.getNetwork()];
          case 1:
            chainId = _b.sent().chainId;
            arrChain = (_a = Number(arr[0].onlineChainId)) === null || _a === void 0 ? void 0 : _a.toString(10);
            if (chainId !== Number(arrChain)) return [2 /*return*/];
            contract = new ethers.Contract(addr, Erc20Abi, web3Provider);
            return [4 /*yield*/, contract.symbol()];
          case 2:
            sym = _b.sent();
            setSymbol(sym);
            return [2 /*return*/];
        }
      });
    });
  };

  return jsxs("div", __assign({
    className: "web3camp_widget_box"
  }, {
    children: [jsx("div", __assign({
      className: "web3camp_widget_title"
    }, {
      children: "Payment"
    })), jsxs("div", __assign({
      className: "web3camp_widget_displayBox"
    }, {
      children: [jsxs("div", __assign({
        className: "web3camp_widget_displayBox_lft"
      }, {
        children: [jsx("img", {
          className: "web3camp_widget_chain",
          src: logo,
          alt: ""
        }), jsxs("div", {
          children: [symbol, " ", amount]
        })]
      })), jsx("div", {
        children: jsx("img", {
          src: 'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iQ2hldnJvblJpZ2h0IEljb24iIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00LjY0NiAxLjY0NmEuNS41IDAgMCAxIC43MDggMGw2IDZhLjUuNSAwIDAgMSAwIC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDgtLjcwOEwxMC4yOTMgOCA0LjY0NiAyLjM1NGEuNS41IDAgMCAxIDAtLjcwOHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzkwOTA5MCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9zdmc+'
        })
      })]
    })), jsx(PayBtn, {
      accept: accept
    })]
  }));
}

export { Widget as default };
