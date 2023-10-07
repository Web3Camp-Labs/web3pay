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
                receiver: '0xD85c413dA833CeBD8338138CcEFA04979DF70E8e'
            },
            {
                blockchain: 'bscTest',
                amount:1,
                token: '0xdf43C48D8Cd91D33Fa46bA0E5030293A19998dC2',
                receiver: '0xD85c413dA833CeBD8338138CcEFA04979DF70E8e'
            },
            {
                blockchain: 'bscTest',
                amount:1,
                // token: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
                receiver: '0xD85c413dA833CeBD8338138CcEFA04979DF70E8e'
            }
        ]
    } />

    </div>
  );
}

export default App;
