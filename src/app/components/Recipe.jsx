import { useRecipeStore } from '../../../store'
import './Recipe.scss'

export default function Recipe({ name, isSelected, tagline, image_url, id }) {
  const deleteProduct = useRecipeStore(state => state.deleteProduct)

  const handleDelete = (event, id) => {
    event.preventDefault()
    event.stopPropagation()
    deleteProduct(id)
  }
  return (
    <li className={isSelected ? 'recipe__card card clicked' : 'recipe__card card'}>
      <div className="card--img">
        <img src={image_url} />
      </div>
      <div className="card--text">
        <div className="card--title">{name}</div>
        <div className="card--sub">{tagline}</div>
      </div>
      <button type="button" className="card--button">
        View Recipe
      </button>

      {isSelected && (
        <button
          onClick={e => handleDelete(e, id)}
          id="delete-btn"
          type="button"
          className="card--button button-delete"
        >
          DELETE
        </button>
      )}
    </li>
  )
}
