
export default function ProductDisplay({ products, maxCount = 1000 }) {
    const len = products.length

    if (len <= maxCount) {
        return products.map((product) => <ProductItem key={product.product.product_id} product={product} />)
    }

    const showProducts = products.slice(0, maxCount).map((product) => <ProductItem key={product.product.product_id} product={product} />)
    const hiddenProducts = products.slice(maxCount, len).map((product) => <div key={product.product.product_id}><ProductItem product={product} /></div>)
    return <>
        {showProducts}
        <button data-tooltip={hiddenProducts}>more</button>
    </>
}

const ProductItem = ({ product: { product: { name }, quantity } }) => {
    return name + `(${quantity}) `
}