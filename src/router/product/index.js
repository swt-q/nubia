export default {
    path: "/product/product_id=:product_id/spec_id=:spec_id",
    name: "product",
    component: () =>
        import ("@pages/product")
}