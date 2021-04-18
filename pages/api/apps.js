export default (req, res) => {
    res.status(200).json([
        {
            "id": "p-wallet",
            "name": "pWallet",
            "url": "/apps/p-wallet.js/p-wallet.js"
        },
        {
            "id": "darkpool",
            "name": "Darkpool",
            "url": "/apps/darkpool.js/darkpool.js"
        },
        {
            "id": "stackpad",
            "name": "Stackpad",
            "url": "/apps/stackpad.js/stackpad.js"
        }
    ])
}
