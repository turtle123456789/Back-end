        const mongoose = require('mongoose')

        const productSchema = new mongoose.Schema(
            {
                name: { type: String, required: true, unique: true },
                image: { type: String, required: true },
                type: { type: String, required: true },
                price: { type: Number, required: true },
                countInStock: { type: Number, required: true },
                rating: { type: Number, required: true },
                brand: { type: String, required: true },
                description: { type: String },
                discount: { type: Number },
                percentage: { type: Number },
                gift: { type: String },
                partBody: { type: String }, 
                image1: { type: String},
                image2: { type: String},
                image3: { type: String},
                image4: { type: String},
                sale: { type: String},
            },
            {
                timestamps: true,
            }
        );
        const Product = mongoose.model('Product', productSchema);

        module.exports = Product;
