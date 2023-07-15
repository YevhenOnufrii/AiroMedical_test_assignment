export default function RecipeDetails({ params, searchParams }) {
  const data = Object.keys(searchParams)[0]
  const product = JSON.parse(data)

  const { image_url, name, tagline, description, first_brewed, ingredients, food_pairing } = product

  return (
    <>
      {product.id && (
        <div className="product-details">
          <div className="product">
            <h2 className="product__title">Product details</h2>
            <div className="product__image">
              <img src={image_url} alt="product image" />
            </div>
            <ul className=" product__description description">
              <li className="description__name">
                <span>Name:</span> {name}
              </li>
              <li className="description__tagline">
                <span>Tagline:</span> {tagline}
              </li>
              <li className="description__overview">
                <span>Description:</span> {description}
              </li>
              <li className="description__first_brewed">
                <span>First brewed:</span> {first_brewed}
              </li>
              <li className="description__ingredients">
                <span>Ingredients:</span>
                <ul>
                  {ingredients.malt.map(el => (
                    <li key={el.name}>
                      {el.name}, {el.amount.value} {el.amount.unit}
                    </li>
                  ))}
                </ul>
              </li>
              <li className="description__food-pairing">
                <span> Food pairing: </span> {food_pairing}
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  )
}
