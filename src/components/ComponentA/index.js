import {Component} from 'react'
import './index.css'
import ComponentB from '../ComponentB'

class ComponentA extends Component {
  state = {changeColor: true, cendrol: 2}

  onClickIncrement = () => {
    this.setState(prevState => ({
      cendrol: prevState.cendrol + 10,
    }))
  }

  onChangeColor = () => {
    this.setState(prevState => ({changeColor: !prevState.changeColor}))
  }

  render() {
    const {changeColor, cendrol} = this.state
    return (
      <div className="app-container">
        <ComponentB
          changeColor={changeColor}
          cendrol={cendrol}
          onClickIncrement={this.onClickIncrement}
        />
        <button
          type="submit"
          className="change-color-button"
          onClick={this.onChangeColor}
        >
          Change Color
        </button>
      </div>
    )
  }
}

export default ComponentA
