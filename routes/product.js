const router = require("express").Router();
const productController = require('../controllers/productController')

router.post("/" , productController.create_product)
router. get("/" , productController.product_all);
router.get("/:productId" ,  productController.single_Product)
router.put("/:productId" , productController.update_product)
router.delete("/:productId", productController.delete_product)



module.exports= router;