const { Router } = require("express");

const router = Router();
const { validateProductByID } = require("../helpers");
const ProductController = require("../controllers/product.controller");
const { check } = require("express-validator");
const { validatorFields, isAdmin, validateJwt } = require("../middleware/validator");

router.get("/", ProductController.getAllProduct);

router.get("/:id", [
    check("id", "the ID is invalid").isMongoId(),
    check("id").custom(validateProductByID),
    validateJwt,
    isAdmin,
    validatorFields
], ProductController.getProductById);

router.post("/", [
    check("name", "name is required").not().isEmpty(),
    check("price", "price is required").not().isEmpty(),
    check("category", "category is required").not().isEmpty(),
    check("quantity", "quantity is required").not().isEmpty(),
    check("description", "description is required").not().isEmpty(),
    validateJwt,
    isAdmin,
    validatorFields
], ProductController.createProduct);

router.put("/:id", [
    check("id", "the ID is invalid").isMongoId(),
    check("id").custom(validateProductByID),
    validateJwt,
    isAdmin
], ProductController.updateProduct);

router.delete("/:id", [
    check("id", "the ID is invalid").isMongoId(),
    check("id").custom(validateProductByID),
    validateJwt,
    isAdmin
], ProductController.deleteProduct);

module.exports = router;
