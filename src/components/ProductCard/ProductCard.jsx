import "./ProductCard.scss"

function ProductCard() {
    return (
        <div className="product">
            <div className="product__image">
                <img src="profile.jpg" alt="Image product" className="product__image__src"/>
            </div>
            <h2 className="product__title">Title</h2>
            <nav className="product__footer">
                <button className="product__footer__btn">Details</button>  
                <div className="product__footer__timer">
                <h3 >Timer</h3>
                </div>           
            </nav>
        </div>        
    )
}

export default ProductCard;


