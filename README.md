# Web3pay

This widget is only support Native token now.We will develop to support custom token,in the future.

This widget has two ways to use it:
1) **Widget:** It  displays chain name and amount that needs to pay  in the web, before you click pay button.

2) **Button:** It displays pay button in the web.

All of those way, after you click pay button, it will popup a tips to tell you the next step.

## Usage

```
    npm install @web3camp-labs/web3pay --save
```
or
```
    yarn add @web3camp-labs/web3pay
```

### In your webpage
Button mode:
```angular2html
    import { PayBtn }  from "@web3camp-labs/web3pay";


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
```angular2html
    import { Widget }  from "@web3camp-labs/web3pay";


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

###### blockchain: 
We support ethereum, bsc, polygon now

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
