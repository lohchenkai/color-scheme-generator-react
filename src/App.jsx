import { useState } from 'react'
import Nav from "./components/Nav"
import './styles/App.css'

export default function App() {
  //to track user input
  const [userInput, setUserInput] = useState({
    choosenColor: "#FFFFFF",
    mode: "monochrome"
  });
  //color state
  const [colorArray, setColorArray] = useState([])

  //function to handle input change
  function handleChange(event){
    // updating userInput state
    setUserInput(prev => ({...prev,
      [event.target.name]: event.target.value
    }))
  }

  //function to handle form submit
  function handleSubmit(event){
    event.preventDefault();
    console.log(userInput);
        //fetching data from color api, .slice is used to remove the '# symbol at the beginning of a color
        fetch(`https://www.thecolorapi.com/scheme?hex=${userInput.choosenColor.slice(1)}&count=5&mode=${userInput.mode}`)
        .then(response => response.json())
        .then(data => {
            //setting colorArray state with api's return value
            const colorContainer = []
            data.colors.map(color => colorContainer.unshift(color.hex.value))
            setColorArray(colorContainer);
        })
  }

  //converting colorArray to DOM elements
  const colorElementsArray = colorArray.map((color, index) => {
    //to configure background color of each div
    const style = {
      backgroundColor: color
    }
    return (
      <div className="color-div" style={style} key={index}> 
        <div className="color-div-text">{color}</div>
      </div>
    )
  })

  return (
    <div className="main-container">
      <Nav 
        handleChange={handleChange}
        handleSubmit={handleSubmit} 
        userInput={userInput} 
      />
      <main className="color-container">
        {colorArray && colorElementsArray}
      </main>
    </div>
  )
}