# Web3pay


This widget has two ways to use it:
1) **Widget:** It  displays chain name and amount that needs to pay  in the web, before you click pay button.

2) **Button:** It displays pay button in the web.

All of those way, after you click pay button, it will popup a tips to tell you the next step.

# use in react

## Usage

```
    npm install @web3camp/web3pay --save
```
or
```
    yarn add @web3camp/web3pay
```

### In your webpage
Button mode:
```
    import { PayBtn }  from "@web3camp/web3pay";


    function App() {
        return (
            <div className="App">
                <PayBtn accept = {
                    [
                        {
                            blockchain: 'ethereum',
                            amount:0.0001,
                            receiver: '0x4e2........02'
                        },
                        {
                            blockchain: 'bsc',
                            amount:0.01,
                            receiver: '0x07D.......153'
                        }
                    ]
                 } />
             </div>
        );
    }
    
```


Widget mode:
```
    import { Widget }  from "@web3camp/web3pay";


    function App() {
        return (
            <div className="App">
                <Widget accept = {
                    [
                        {
                            blockchain: 'ethereum',
                            amount:0.0001,
                            receiver: '0x4e2........02'
                        },
                        {
                            blockchain: 'bsc',
                            amount:0.01,
                            receiver: '0x07D.......153'
                        }
                    ]
                 } />
             </div>
        );
    }
    
```

# Use in html

We also can use Web3pay in your homepage without any required experience in Javascript.

Widget mode:
```
    <div id="widget_container"></div>
    <script src="https://raw.githack.com/Web3Camp-Labs/web3pay/gh-pages/umd/bundle.js"></script>
    <script>
        Web3pay.widgetInit({
            containerId:"widget_container",
            accept: [
                    {
                        blockchain: 'bscTest',
                        amount:1,
                        token: '0x387B...fb00',
                        receiver: '0x183F...3191'
                    },
                    {
                        blockchain: 'ethereum',
                        amount:0.0001,
                        // token: '0xdac1...1ec7',
                        receiver: '0x4e26...3B02'
                    },
                    {
                        blockchain: 'bscTest',
                            amount:1,
                        // token: '0xe9e7...7d56',
                        receiver: '0x183F...3191'
                    }
                ]

        });
    </script>
```

Button mode:
```
    <div id="Button_container"></div>
    <script src="https://raw.githack.com/Web3Camp-Labs/web3pay/gh-pages/umd/bundle.js"></script>
    <script>
        Web3pay.buttonInit({
            containerId:"Button_container",
            accept: [
                    {
                        blockchain: 'bscTest',
                        amount:1,
                        token: '0x387B...fb00',
                        receiver: '0x183F...3191'
                    },
                    {
                        blockchain: 'ethereum',
                        amount:0.0001,
                        // token: '0xdac1...1ec7',
                        receiver: '0x4e26...3B02'
                    },
                    {
                        blockchain: 'bscTest',
                            amount:1,
                        // token: '0xe9e7...7d56',
                        receiver: '0x183F...3191'
                    }
                ]

        });
    </script>
```

###### blockchain: 
We support ethereum, bsc, bsc testnet,polygon now

###### amount: 
The amount that you need to pay

###### receiver:
The address receiving the payment


## Develop Web3pay

You can develop Web3pay.
In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `dist` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.
