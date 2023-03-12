import React from 'react';
// import "./packages/css/index.css";
import Widget from "./packages/Widget";
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
                blockchain: 'bsc2',
                amount:0.01,
                // token: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
                receiver: '0x07Da0c2CA57Cc384b39242A81323ba8417248153'
            }
        ]
    } />

    </div>
  );
}

export default App;
