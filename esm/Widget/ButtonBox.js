import { __awaiter, __assign, __generator } from '../_virtual/_tslib.js';
import { jsxs, jsx } from 'react/jsx-runtime';
import { ethers } from 'ethers';
import { useState, useEffect } from 'react';
import GeneralConfig from '../config.js';
import Loading from './loading.js';
import Erc20Abi from '../abi/ERC20.json.js';
import PublicObj from '../public.js';

function ButtonBox(props) {
  var _this = this;
  var current = props.current,
    accept = props.accept,
    handleHide = props.handleHide;
  var _a = useState(''),
    account = _a[0],
    setAccount = _a[1];
  var _b = useState(''),
    error = _b[0],
    setError = _b[1];
  var _c = useState(false),
    loading = _c[0],
    setLoading = _c[1];
  var _d = useState(false),
    showText = _d[0],
    setShowText = _d[1];
  var _e = useState(1),
    currentChain = _e[0],
    setCurrentChain = _e[1];
  var getAccount = function getAccount() {
    return __awaiter(_this, void 0, void 0, function () {
      var ethereum, accounts;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            ethereum = window.ethereum;
            if (typeof ethereum == 'undefined') {
              return [2 /*return*/, {
                type: 'error'
              }];
            }
            return [4 /*yield*/, ethereum.request({
              method: 'eth_requestAccounts'
            })];
          case 1:
            accounts = _a.sent();
            setAccount(accounts[0]);
            return [2 /*return*/];
        }
      });
    });
  };

  useEffect(function () {
    getAccount();
    PublicObj.chainChange(accept, 0);
  }, []);
  useEffect(function () {
    setError('');
    getChain();
  }, [current]);
  useEffect(function () {
    var arr = GeneralConfig.chainList.filter(function (item) {
      return item.blockchain === accept[current].blockchain;
    });
    var arrChain = Number(arr[0].onlineChainId).toString(10);
    if (parseInt(arrChain) !== currentChain) {
      setShowText(true);
    } else {
      setShowText(false);
    }
  }, [current, currentChain]);
  useEffect(function () {
    window.ethereum.on('chainChanged', function () {
      setShowText(false);
    });
  }, []);
  var getChain = function getChain() {
    return __awaiter(_this, void 0, void 0, function () {
      var ethereum, web3Provider, chainId;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            ethereum = window.ethereum;
            web3Provider = new ethers.providers.Web3Provider(ethereum);
            return [4 /*yield*/, web3Provider.getNetwork()];
          case 1:
            chainId = _a.sent().chainId;
            setCurrentChain(chainId);
            return [2 /*return*/];
        }
      });
    });
  };

  var handleTransfer = function handleTransfer() {
    return __awaiter(_this, void 0, void 0, function () {
      var ethereum, web3Provider, signer, amount, tx, e_1;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            setLoading(true);
            setError('');
            ethereum = window.ethereum;
            web3Provider = new ethers.providers.Web3Provider(ethereum);
            return [4 /*yield*/, web3Provider.getSigner()];
          case 1:
            signer = _a.sent();
            amount = accept[current].amount.toString();
            if (!!accept[current].token) return [3 /*break*/, 7];
            _a.label = 2;
          case 2:
            _a.trys.push([2, 5,, 6]);
            return [4 /*yield*/, signer.sendTransaction({
              to: accept[current].receiver,
              value: ethers.utils.parseEther(amount)
            })];
          case 3:
            tx = _a.sent();
            return [4 /*yield*/, tx.wait()];
          case 4:
            _a.sent();
            setLoading(false);
            handleHide && handleHide();
            return [3 /*break*/, 6];
          case 5:
            e_1 = _a.sent();
            console.error(e_1.message);
            setError(e_1.code);
            setLoading(false);
            return [3 /*break*/, 6];
          case 6:
            return [3 /*break*/, 8];
          case 7:
            transferToken(accept[current]);
            _a.label = 8;
          case 8:
            return [2 /*return*/];
        }
      });
    });
  };

  var transferToken = function transferToken(obj) {
    return __awaiter(_this, void 0, void 0, function () {
      var ethereum, provider, signer, ErcContract, decimals, amountErc, result, e_2;
      return __generator(this, function (_a) {
        switch (_a.label) {
          case 0:
            _a.trys.push([0, 5,, 6]);
            ethereum = window.ethereum;
            provider = new ethers.providers.Web3Provider(ethereum);
            return [4 /*yield*/, provider.getSigner(account)];
          case 1:
            signer = _a.sent();
            ErcContract = new ethers.Contract(obj.token, Erc20Abi, signer);
            return [4 /*yield*/, ErcContract.decimals()];
          case 2:
            decimals = _a.sent();
            amountErc = ethers.utils.parseUnits(obj.amount.toString(), decimals);
            return [4 /*yield*/, ErcContract.transfer(obj.receiver, amountErc.toString())];
          case 3:
            result = _a.sent();
            return [4 /*yield*/, result.wait()];
          case 4:
            _a.sent();
            setLoading(false);
            handleHide && handleHide();
            return [3 /*break*/, 6];
          case 5:
            e_2 = _a.sent();
            console.error(e_2.message);
            setError(e_2.code);
            setLoading(false);
            return [3 /*break*/, 6];
          case 6:
            return [2 /*return*/];
        }
      });
    });
  };

  return jsxs("div", __assign({
    className: "web3camp_widget_Tips_outer"
  }, {
    children: [!!error.length && jsxs("div", __assign({
      className: "web3camp_widget_Tips"
    }, {
      children: ["Error: ", error]
    })), jsxs("button", __assign({
      className: "web3camp_widget_button",
      onClick: function onClick() {
        return handleTransfer();
      }
    }, {
      children: [loading && jsx(Loading, {}), jsx("span", {
        children: showText ? "Switch chain" : "Pay"
      })]
    }))]
  }));
}

export { ButtonBox as default };
