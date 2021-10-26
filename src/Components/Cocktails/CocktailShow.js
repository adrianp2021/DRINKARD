import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

const CocktailShow = () => {
  const { id } = useParams()
  console.log(id)

  const [cocktail, setCocktail] = useState(null)
  const [hasError, setHasError] = useState(false)
  // const [ingredients, setIngredients] = useState('')

  useEffect(() => {
    const getCocktails = async () => {
      try {
        const { data } = await axios.get(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        // console.log(response)
        setCocktail(data.drinks[0])
        console.log('what is setCocktail', setCocktail)
        console.log('What is the data on lookup returning', data)
      } catch (err) {
        console.log(err)
        setHasError(true)
      }
    }
    getCocktails()
  }, [id])

  useEffect(() => {
    if (!cocktail) return
    const entries = Object.entries(cocktail)
    console.log('These are the entries', entries)
    const filteredIngredients = entries.filter((ingredient) => {
      if (ingredient[0].includes('strIngredient') && ingredient[1] !== null) {
        return ingredient[1]
      }
    })
    console.log('these are the filtered ingredients', filteredIngredients)
  }, [cocktail])

  // create another state for ingredients, when cocktails updates you can also update the state(ingredients)

  return (
    <section className="section">
      <div className="container">
        {cocktail ? (
          <div>
            <h2 className="title has-text-centered">{cocktail.strDrink}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half">
                <figure className="image">
                  <img src={cocktail.strDrinkThumb} alt={cocktail.strDrink} />
                </figure>
              </div>
              <div className="column is-half">
                <h4 className="title is-4">
                  <span role="img" aria-label="plate">
                    Category
                  </span>
                  
                </h4>
                <p>{cocktail.strCategory}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="globe"></span>Alcoholic/Non-alcoholic
                </h4>
                <p>{cocktail.strAlcoholic}</p>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="globe"></span>Glass Type
                </h4>
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="globe"></span>Instructions
                </h4>
                <p>{cocktail.strInstructions}</p>
                <hr />

                <h4 className="title is-4">Ingredients</h4>
                <p>{cocktail.filteredIngredients}</p>
                {/* <p>{cocktail.strIngredient}</p> */}
              </div>
            </div>
          </div>
        ) : (
          <h2 className="title has-text-centered">
            {hasError
              ? 'Oh something went wrong, the sadness 😞'
              : '...loading 🧀 '}
          </h2>
        )}
      </div>
    </section>
  )
}

export default CocktailShow
