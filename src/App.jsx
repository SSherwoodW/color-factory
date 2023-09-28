// import {Routes} from "./Routes"
import { BrowserRouter, NavLink, Routes, Route } from 'react-router-dom';
import Color from './Color';
import ColorList from "./ColorList";
import SelectColor from './SelectColor';
import './App.css'

function App({ colors }) {
  const colorRoutes = colors.map((color, index) => (
    <Route
      key={index}
      path={`/colors/:${color.name}`} // Assuming you have a route for each color
      element={<Color colors={colors} />}
    >
      <Color color={color} />
      </Route>
     
  ));

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ColorList colors={colors} />}>  </Route>
          <Route path='/colors/:color' element={<SelectColor colors={colors} />}></Route>
          {/* {colorRoutes} */}
        </Routes>
       
        
      </BrowserRouter>
    </>
  )
}

App.defaultProps = {
  colors: [
    {
      name: "red",
      hex: "#ff0000"
    },
    {
      name: "yellow",
      hex: "#FFFF00"
    },
    {
      name: "blue",
      hex: "#0000FF"
    }
  ]
}

export default App;
