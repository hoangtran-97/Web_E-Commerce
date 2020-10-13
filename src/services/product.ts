import Product, { ProductDocument } from "../models/Product";

const findAll = (): Promise<ProductDocument[]> => {
    return Product.find()
        .sort({ name: 1 })
        .exec();
};

const findById = (productId: string): Promise<ProductDocument> => {
    return Product.findById(productId)
        .exec()
        .then(product => {
            if (!product) {
                throw new Error(`Product ${productId} not found`);
            }
            return product;
        });
};

const findByName = (productName: string): Promise<ProductDocument[]> => {
    return Product.find({ name: productName })
        .exec()
        .then(product => {
            if (!product) {
                throw new Error(`Product ${productName} not found`);
            }
            return product;
        });
};
const findByCategories = (
    productCategories: string
): Promise<ProductDocument[]> => {
    return Product.find({ categories: productCategories })
        .exec()
        .then(product => {
            if (!product) {
                throw new Error(`Product ${productCategories} not found`);
            }
            return product;
        });
};
const findByVariants = (
    productVariants: string
): Promise<ProductDocument[]> => {
    return Product.find({ variants: productVariants })
        .exec()
        .then(product => {
            if (!product) {
                throw new Error(`Product ${productVariants} not found`);
            }
            return product;
        });
};

const create = (product: ProductDocument): Promise<ProductDocument> => {
    return product.save();
};

const update = (
    productId: string,
    update: Partial<ProductDocument>
): Promise<ProductDocument> => {
    return Product.findById(productId)
        .exec()
        .then(product => {
            if (!product) {
                throw new Error(`Product ${productId} not found`);
            }
            if (update.name) {
                product.name = update.name;
            }
            if (update.description) {
                product.description = update.description;
            }
            if (update.categories) {
                product.categories = update.categories;
            }
            if (update.variants) {
                product.variants = update.variants;
            }
            if (update.sizes) {
                product.sizes = update.sizes;
            }
            if (update.img) {
                product.img = update.img;
            }
            if (update.price) {
                product.price = update.price;
            }

            return product.save();
        });
};

const deleteProduct = (productId: string): Promise<ProductDocument | null> => {
    return Product.findByIdAndDelete(productId).exec();
};

export default {
    findAll,
    findByCategories,
    findByVariants,
    findById,
    findByName,
    create,
    update,
    deleteProduct,
};
