export default function Recipe({ name, tagline, image_url }) {
  return (
    <li className="recipe__card card">
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
    </li>
  )
}
