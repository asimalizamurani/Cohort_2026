const express = require('express');

function block_1_basicServer() {
    return new Promise((resolve) => {
        const app = express();

        app.use(express.json());

        app.get('/menu', (req, res) => {
            res.json({
                items: [
                    'thali',
                    'biryani'
                ]
            })
        })
    })
}



async function main() {
    await block_1_basicServer();

    process.exit(0);
}

main()