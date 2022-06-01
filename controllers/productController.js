const productSchema = require('../models/product')


exports.addProduct = async (req, res) => {
    try {
        const body = req.body;
        const product = new productSchema(body);
        await product.save()
        return res.status(200).send({ msg: 'Product added successfully', product });
    } catch (error) {
        return res.status(500).send({ msg: error })
    }
}



exports.getAllProducts = async (req, res) => {
    try {
        cat = req.query.cat
        const products = cat ? await productSchema.find({ categories: cat }) : await productSchema.find();
        if (products.length == 0) {
            return res.status(400).send({ msg: 'Collection product is empty...' });
        }
        return res.status(200).send({ products });
    } catch (error) {
        return res.status(500).send({ msg: error })
    }
}

exports.getProdByCat = async (req, res) => {
    try {
        cat = req.params.cat;
        const products = await productSchema.find({ categories: cat });
        if (products.length == 0) {
            return res.status(400).send({ msg: 'Collection product is empty...' });
        }
        return res.status(200).send({ products });
    } catch (error) {
        return res.status(500).send({ msg: error })
    }
}

exports.getOneProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productSchema.findById(id);
        if (!product) {
            return res.status(400).send({ msg: 'Product does not exist...' });
        }
        return res.status(200).send({ product });
    } catch (error) {
        return res.status(500).send({ msg: error })
    }
}


exports.deleteOneProduct = async (req, res) => {
    const { id } = req.params;
    try {
        const product = await productSchema.findByIdAndDelete(id);
        if (!product) {
            return res.status(400).send({ msg: 'Product does not exist...' });
        }
        return res.status(200).send({ msg: 'Product deleted' });
    } catch (error) {
        return res.status(500).send({ msg: error })
    }
}
