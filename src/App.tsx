import React from 'react';
// import "./packages/css/index.css";
import Widget from "./packages/Widget";
// import {PayBtn} from "./packages";
function App() {


  return (
    <div className="App"><Widget accept={
        [

            {
                blockchain: 'ethereum',
                amount:0.0001,
                // token: '0xdac17f958d2ee523a2206206994597c13d831ec7',
                receiver: '0x4e260bB2b25EC6F3A59B478fCDe5eD5B8D783B02'
            },
            {
                blockchain: 'bscTest',
                amount:1,
                token: '0x387Bd586130a03e4c2ae3c9b9b5481C0993Bfb00',
                receiver: '0x183F09C3cE99C02118c570e03808476b22d63191'
            },
            {
                blockchain: 'bscTest',
                amount:1,
                // token: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
                receiver: '0x183F09C3cE99C02118c570e03808476b22d63191'
            }
        ]
    } />

    </div>
  );
}

export default App;
