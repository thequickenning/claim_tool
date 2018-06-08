# claim_tool

> Tool to claim your Bitcoin Hex fork coins

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

## Testing UTXO
For testing purposes, a testing UTXO set has been added, upon deployment, this will be swapped out for the snapshotted UTXO set.

In the testing UTXO set, the private keys for addresses are the TXID and Script elements. **These addresses are empty on the Bitcoin chain, and shouldn't be used.**