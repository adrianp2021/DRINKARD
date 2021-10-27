import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import DotLoader from 'react-spinners/DotLoader'

const CocktailShow = () => {
  const { id } = useParams()
  console.log(id)

  const [cocktail, setCocktail] = useState(null)
  const [hasError, setHasError] = useState(false)

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

  // useEffect(() => {
  //   if (!cocktail) return
  //   const entries = Object.entries(cocktail)
  //   console.log('These are the entries', entries)
  //   const filteredIngredients = entries.filter((ingredient) => {
  //     if (ingredient[0].includes('strIngredient') && ingredient[1] !== null) {
  //       return ingredient[1]
  //     }
  //   })
  //   console.log('these are the filtered ingredients', filteredIngredients)
  // }, [cocktail])

  // create another state for ingredients, when cocktails updates you can also update the state(ingredients)

  return (
    <section className="section">
      <div className="container">
        {cocktail ? (
          <div>
            <h2 className="title has-text-centered">{cocktail.strDrink}</h2>
            <hr />
            <div className="columns">
              <div className="column is-half" id="cocktail-card-div">
                <figure>
                  <img src={cocktail.strDrinkThumb} alt='' id="cocktail-card" />
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
                {cocktail.strGlass}
                <hr />
                <h4 className="title is-4">
                  <span role="img" aria-label="globe"></span>Instructions
                </h4>
                <p>{cocktail.strInstructions}</p>
                <hr />
                <h4 className="title is-4">Ingredients</h4>
                <p>{cocktail.strMeasure1} {cocktail.strIngredient1}</p>
                <p>{cocktail.strMeasure2} {cocktail.strIngredient2}</p>
                <p>{cocktail.strMeasure3} {cocktail.strIngredient3}</p>
                <p>{cocktail.strMeasure4} {cocktail.strIngredient4}</p>
                <p>{cocktail.strMeasure5} {cocktail.strIngredient5}</p>
                <p>{cocktail.strMeasure6} {cocktail.strIngredient6}</p>
                <hr />
              </div>
            </div>
          </div>
        ) : (
          <h2 className="title has-text-centered">
            {hasError
              ? 'Oh something went wrong, the sadness 😞'
              : <DotLoader />}
          </h2>
        )}
      </div>
    </section>
  )
}

export default CocktailShow
