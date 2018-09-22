module.exports = {

    getProductsTable: (req, res, next) => {
        const db = req.app.get('db');
        db.get_inventory().then(result => {
            res.send(result)
        }
        )
    },

    postProductsTable: (req, res,next) => {
        const dbinstance = req.app.get('db');
        const { name, price, url } = req.body;
        dbinstance.create_product([name, price, url])
        dbinstance.get_inventory().then(result => {
            res.send(result)
        });
        console.log(name);
        console.log(price);
        console.log(url);
    },
}
