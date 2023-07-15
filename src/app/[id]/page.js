'use client'

import { useRecipeStore } from '../../../store'

export default function RecipeDetails({ params }) {
  // const getItem = useRecipeStore(state => state.getRecipe(params.id))
  const someData = {
    id: 1,
    name: 'Buzz',
    tagline: 'A Real Bitter Experience.',
    first_brewed: '09/2007',
    description:
      'A light, crisp and bitter IPA brewed with English and American hops. A small batch brewed only once.',
    image_url: 'https://images.punkapi.com/v2/keg.png',
    abv: 4.5,
    ibu: 60,
    target_fg: 1010,
    target_og: 1044,
    ebc: 20,
    srm: 10,
    ph: 4.4,
    attenuation_level: 75,
    volume: {
      value: 20,
      unit: 'litres',
    },
    boil_volume: {
      value: 25,
      unit: 'litres',
    },
    method: {
      mash_temp: [
        {
          temp: {
            value: 64,
            unit: 'celsius',
          },
          duration: 75,
        },
      ],
      fermentation: {
        temp: {
          value: 19,
          unit: 'celsius',
        },
      },
      twist: null,
    },
    ingredients: {
      malt: [
        {
          name: 'Maris Otter Extra Pale',
          amount: {
            value: 3.3,
            unit: 'kilograms',
          },
        },
        {
          name: 'Caramalt',
          amount: {
            value: 0.2,
            unit: 'kilograms',
          },
        },
        {
          name: 'Munich',
          amount: {
            value: 0.4,
            unit: 'kilograms',
          },
        },
      ],
      hops: [
        {
          name: 'Fuggles',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'First Gold',
          amount: {
            value: 25,
            unit: 'grams',
          },
          add: 'start',
          attribute: 'bitter',
        },
        {
          name: 'Fuggles',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'First Gold',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'middle',
          attribute: 'flavour',
        },
        {
          name: 'Cascade',
          amount: {
            value: 37.5,
            unit: 'grams',
          },
          add: 'end',
          attribute: 'flavour',
        },
      ],
      yeast: 'Wyeast 1056 - American Ale™',
    },
    food_pairing: [
      'Spicy chicken tikka masala',
      'Grilled chicken quesadilla',
      'Caramel toffee cake',
    ],
    brewers_tips:
      'The earthy and floral aromas from the hops can be overpowering. Drop a little Cascade in at the end of the boil to lift the profile with a bit of citrus.',
    contributed_by: 'Sam Mason <samjbmason>',
  }

  const { id, image_url, name, tagline, description, first_brewed, ingredients, food_pairing } =
    someData

  return (
    <>
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
    </>
  )
}
