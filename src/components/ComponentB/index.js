import './index.css'

const ComponentB = props => {
  const {changeColor, cendrol, onClickIncrement} = props
  const bg = changeColor ? 'yellow' : 'red'
  const newCendrol = cendrol < 10 ? `0${cendrol}` : cendrol

  const onClickIncrementButton = () => {
    onClickIncrement()
  }
  return (
    <div className="counter-container">
      <div className={`counter-button-container ${bg}`}>
        <h1 className="counter-heading">{newCendrol}</h1>
        <button
          type="submit"
          className="counter-button"
          onClick={onClickIncrementButton}
        >
          Click to increase counter
        </button>
      </div>
    </div>
  )
}

export default ComponentB
