import { __awaiter, __generator } from './_virtual/_tslib.js';
import GeneralConfig from './config.js';

var chainChange = function chainChange(accept, current) {
  return __awaiter(void 0, void 0, void 0, function () {
    var _i, _a, item;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          _i = 0, _a = GeneralConfig.chainList;
          _b.label = 1;
        case 1:
          if (!(_i < _a.length)) return [3 /*break*/, 6];
          item = _a[_i];
          if (!(accept[current].blockchain === item.blockchain)) return [3 /*break*/, 5];
          if (!(item.blockchain === "ethereum")) return [3 /*break*/, 3];
          return [4 /*yield*/, switchETH()];
        case 2:
          _b.sent();
          return [3 /*break*/, 5];
        case 3:
          return [4 /*yield*/, switchChain(item)];
        case 4:
          _b.sent();
          _b.label = 5;
        case 5:
          _i++;
          return [3 /*break*/, 1];
        case 6:
          return [2 /*return*/];
      }
    });
  });
};

var switchETH = function switchETH() {
  return __awaiter(void 0, void 0, void 0, function () {
    var ethereum;
    return __generator(this, function (_a) {
      switch (_a.label) {
        case 0:
          ethereum = window.ethereum;
          return [4 /*yield*/, ethereum.request({
            method: "wallet_switchEthereumChain",
            params: [{
              chainId: "0x1"
            }]
          }).catch(function (error) {
            console.error(error);
          })];
        case 1:
          _a.sent();
          return [2 /*return*/];
      }
    });
  });
};

var switchChain = function switchChain(item) {
  return __awaiter(void 0, void 0, void 0, function () {
    var ethereum, chainName, _a, name, symbol, decimals, rpcUrls, blockExplorerUrls, onlineChainId;
    return __generator(this, function (_b) {
      switch (_b.label) {
        case 0:
          ethereum = window.ethereum;
          chainName = item.chainName, _a = item.nativeCurrency, name = _a.name, symbol = _a.symbol, decimals = _a.decimals, rpcUrls = item.rpcUrls, blockExplorerUrls = item.blockExplorerUrls, onlineChainId = item.onlineChainId;
          return [4 /*yield*/, ethereum.request({
            method: 'wallet_addEthereumChain',
            params: [{
              chainId: onlineChainId,
              chainName: chainName,
              nativeCurrency: {
                name: name,
                symbol: symbol,
                decimals: decimals
              },
              rpcUrls: rpcUrls,
              blockExplorerUrls: blockExplorerUrls
            }]
          })];
        case 1:
          _b.sent();
          return [2 /*return*/];
      }
    });
  });
};

var PublicObj = {
  chainChange: chainChange,
  switchETH: switchETH,
  switchChain: switchChain
};

export { PublicObj as default };
