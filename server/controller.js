module.exports = {

    getProductsTable: (req, res, next) => {
        const db = req.app.get('db');
        db.get_inventory().then(result => {
            res.send(result)
        }
        )
    },

    postProductsTable: (req, res,next) => {
        const db = req.app.get('db');
        const { name, price, img } = req.body;
        db.create_product({name, price, img})
        db.get_inventory().then(result => {
            res.send(result)
        });
        console.log(name);
        console.log(price);
        console.log(img);
    }
}