import { __awaiter, __assign, __generator, __asyncValues } from '../_virtual/_tslib.js';
import { jsx, jsxs } from 'react/jsx-runtime';
import ButtonBox from './ButtonBox.js';
import { useState, useEffect } from 'react';
import GeneralConfig from '../config.js';
import { ethers } from 'ethers';
import Erc20Abi from '../abi/ERC20.json.js';
import PublicObj from '../public.js';

function Modal(props) {
  var _this = this;
  var handleHide = props.handleHide,
    accept = props.accept;
  var _a = useState(false),
    show = _a[0],
    setShow = _a[1];
  var _b = useState(0),
    current = _b[0],
    setCurrent = _b[1];
  var _c = useState([]),
    list = _c[0],
    setList = _c[1];
  useEffect(function () {
    if (!accept) return;
    formatArr();
  }, [accept]);
  useEffect(function () {
    window.ethereum.on('chainChanged', function () {
      formatArr();
    });
  }, []);
  var formatArr = function formatArr() {
    return __awaiter(_this, void 0, void 0, function () {
      var arr, _a, accept_1, accept_1_1, receiverItem, _b, _c, _d, item, obj, ethereum, web3Provider, chainId, arrChain, contract, sym, e_1_1, e_2_1;
      var _e, e_2, _f, _g, _h, e_1, _j, _k;
      return __generator(this, function (_l) {
        switch (_l.label) {
          case 0:
            arr = [];
            _l.label = 1;
          case 1:
            _l.trys.push([1, 29, 30, 35]);
            _a = true, accept_1 = __asyncValues(accept);
            _l.label = 2;
          case 2:
            return [4 /*yield*/, accept_1.next()];
          case 3:
            if (!(accept_1_1 = _l.sent(), _e = accept_1_1.done, !_e)) return [3 /*break*/, 28];
            _g = accept_1_1.value;
            _a = false;
            _l.label = 4;
          case 4:
            _l.trys.push([4,, 26, 27]);
            receiverItem = _g;
            _l.label = 5;
          case 5:
            _l.trys.push([5, 19, 20, 25]);
            _b = true, _c = (e_1 = void 0, __asyncValues(GeneralConfig.chainList));
            _l.label = 6;
          case 6:
            return [4 /*yield*/, _c.next()];
          case 7:
            if (!(_d = _l.sent(), _h = _d.done, !_h)) return [3 /*break*/, 18];
            _k = _d.value;
            _b = false;
            _l.label = 8;
          case 8:
            _l.trys.push([8,, 16, 17]);
            item = _k;
            console.log(receiverItem.blockchain, item.blockchain);
            if (!(receiverItem.blockchain === item.blockchain)) return [3 /*break*/, 15];
            obj = void 0;
            if (!!receiverItem.token) return [3 /*break*/, 9];
            obj = __assign(__assign({}, receiverItem), {
              logo: item.logo,
              symbol: item.nativeCurrency.symbol
            });
            return [3 /*break*/, 14];
          case 9:
            if (!(receiverItem.blockchain === "ethereum")) return [3 /*break*/, 10];
            obj = __assign(__assign({}, receiverItem), {
              logo: item.logo,
              symbol: "ETH"
            });
            return [3 /*break*/, 14];
          case 10:
            ethereum = window.ethereum;
            web3Provider = new ethers.providers.Web3Provider(ethereum);
            return [4 /*yield*/, web3Provider.getNetwork()];
          case 11:
            chainId = _l.sent().chainId;
            arrChain = Number(item.onlineChainId).toString(10);
            if (!(chainId !== Number(arrChain))) return [3 /*break*/, 12];
            obj = __assign(__assign({}, receiverItem), {
              logo: item.logo,
              symbol: "..."
            });
            return [3 /*break*/, 14];
          case 12:
            contract = new ethers.Contract(receiverItem.token, Erc20Abi, web3Provider);
            console.log(contract);
            return [4 /*yield*/, contract.symbol()];
          case 13:
            sym = _l.sent();
            obj = __assign(__assign({}, receiverItem), {
              logo: item.logo,
              symbol: sym
            });
            _l.label = 14;
          case 14:
            arr.push(obj);
            console.log(obj);
            _l.label = 15;
          case 15:
            return [3 /*break*/, 17];
          case 16:
            _b = true;
            return [7 /*endfinally*/];
          case 17:
            return [3 /*break*/, 6];
          case 18:
            return [3 /*break*/, 25];
          case 19:
            e_1_1 = _l.sent();
            e_1 = {
              error: e_1_1
            };
            return [3 /*break*/, 25];
          case 20:
            _l.trys.push([20,, 23, 24]);
            if (!(!_b && !_h && (_j = _c.return))) return [3 /*break*/, 22];
            return [4 /*yield*/, _j.call(_c)];
          case 21:
            _l.sent();
            _l.label = 22;
          case 22:
            return [3 /*break*/, 24];
          case 23:
            if (e_1) throw e_1.error;
            return [7 /*endfinally*/];
          case 24:
            return [7 /*endfinally*/];
          case 25:
            return [3 /*break*/, 27];
          case 26:
            _a = true;
            return [7 /*endfinally*/];
          case 27:
            return [3 /*break*/, 2];
          case 28:
            return [3 /*break*/, 35];
          case 29:
            e_2_1 = _l.sent();
            e_2 = {
              error: e_2_1
            };
            return [3 /*break*/, 35];
          case 30:
            _l.trys.push([30,, 33, 34]);
            if (!(!_a && !_e && (_f = accept_1.return))) return [3 /*break*/, 32];
            return [4 /*yield*/, _f.call(accept_1)];
          case 31:
            _l.sent();
            _l.label = 32;
          case 32:
            return [3 /*break*/, 34];
          case 33:
            if (e_2) throw e_2.error;
            return [7 /*endfinally*/];
          case 34:
            return [7 /*endfinally*/];
          case 35:
            setList(arr);
            return [2 /*return*/];
        }
      });
    });
  };

  var handleShow = function handleShow() {
    setShow(true);
  };
  var handleCurrent = function handleCurrent(num) {
    setCurrent(num);
    setShow(false);
    console.log(accept, num);
    if (accept[num]) {
      PublicObj.chainChange(accept, num);
    }
  };
  if (!list.length) return null;
  return jsx("div", __assign({
    className: "web3camp_widget_Mask"
  }, {
    children: jsxs("div", __assign({
      className: "web3camp_widget_box"
    }, {
      children: [jsxs("div", __assign({
        className: "web3camp_widget_first"
      }, {
        children: [jsx("div", __assign({
          className: "web3camp_widget_title"
        }, {
          children: "Confirmation"
        })), jsx("div", __assign({
          onClick: function onClick() {
            return handleHide();
          },
          className: "web3camp_widget_close"
        }, {
          children: jsx("img", {
            src: "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMTAyNCAxMDI0IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgd2lkdGg9IjE2IiBoZWlnaHQ9IjE2Ij48cGF0aCBkPSJNNTU2LjggNTEyTDgzMiAyMzYuOGMxMi44LTEyLjggMTIuOC0zMiAwLTQ0LjgtMTIuOC0xMi44LTMyLTEyLjgtNDQuOCAwTDUxMiA0NjcuMmwtMjc1LjItMjc3LjMzMzMzM2MtMTIuOC0xMi44LTMyLTEyLjgtNDQuOCAwLTEyLjggMTIuOC0xMi44IDMyIDAgNDQuOGwyNzUuMiAyNzcuMzMzMzMzLTI3Ny4zMzMzMzMgMjc1LjJjLTEyLjggMTIuOC0xMi44IDMyIDAgNDQuOCA2LjQgNi40IDE0LjkzMzMzMyA4LjUzMzMzMyAyMy40NjY2NjYgOC41MzMzMzNzMTcuMDY2NjY3LTIuMTMzMzMzIDIzLjQ2NjY2Ny04LjUzMzMzM0w1MTIgNTU2LjggNzg3LjIgODMyYzYuNCA2LjQgMTQuOTMzMzMzIDguNTMzMzMzIDIzLjQ2NjY2NyA4LjUzMzMzM3MxNy4wNjY2NjctMi4xMzMzMzMgMjMuNDY2NjY2LTguNTMzMzMzYzEyLjgtMTIuOCAxMi44LTMyIDAtNDQuOEw1NTYuOCA1MTJ6IiBmaWxsPSIjOTA5MDkwIiA+PC9wYXRoPjwvc3ZnPg==",
            alt: ""
          })
        }))]
      })), jsxs("div", __assign({
        className: " web3camp_widget_outer"
      }, {
        children: [jsxs("div", __assign({
          className: "web3camp_widget_displayBox",
          onClick: handleShow
        }, {
          children: [jsxs("div", __assign({
            className: "web3camp_widget_displayBox_lft"
          }, {
            children: [jsx("img", {
              className: "web3camp_widget_chain",
              src: list[current].logo,
              alt: ""
            }), jsxs("div", {
              children: [list[current].symbol, " ", list[current].amount]
            })]
          })), jsx("div", {
            children: jsx("img", {
              className: "web3camp_widget_down",
              src: 'data:image/svg+xml;base64,PHN2ZyBjbGFzcz0iQ2hldnJvblJpZ2h0IEljb24iIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgd2lkdGg9IjE2IiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik00LjY0NiAxLjY0NmEuNS41IDAgMCAxIC43MDggMGw2IDZhLjUuNSAwIDAgMSAwIC43MDhsLTYgNmEuNS41IDAgMCAxLS43MDgtLjcwOEwxMC4yOTMgOCA0LjY0NiAyLjM1NGEuNS41IDAgMCAxIDAtLjcwOHoiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbD0iIzkwOTA5MCIgc3Ryb2tlLXdpZHRoPSIxIj48L3BhdGg+PC9zdmc+'
            })
          })]
        })), show && jsx("div", __assign({
          className: "web3camp_widget_dropBox"
        }, {
          children: list.map(function (item, index) {
            return jsxs("div", __assign({
              className: "web3camp_widget_inner",
              onClick: function onClick() {
                return handleCurrent(index);
              }
            }, {
              children: [jsx("img", {
                className: "web3camp_widget_chain",
                src: item.logo,
                alt: ""
              }), jsxs("div", {
                children: [item.symbol, " ", item.amount]
              })]
            }), index);
          })
        }))]
      })), jsx(ButtonBox, {
        current: current,
        accept: accept,
        handleHide: handleHide
      })]
    }))
  }));
}

export { Modal as default };
