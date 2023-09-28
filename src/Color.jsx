import { Link, useNavigate, useParams } from "react-router-dom";

function Color({ color }) {
    const { name } = useParams();
    const navigate = useNavigate();

    if (!name || !color) {
        navigate("/colors");
        return null;
    }

    const currColor = color;

    return (
<div className="Color" style={{ backgroundColor: currColor.hex }}>
      <p>this is {currColor.name}.</p>
      <p>Isn't it beautiful?</p>
      <p>
        <Link to="/colors">Go back</Link>
      </p>
    </div>
    )
    // const colorDivs = colors.map(color => (
    //     <div className="Color" style={{ backgroundColor: color.hex }}>
    //   <p>this is {color.name}.</p>
    //   <p>Isn't it beautiful?</p>
    //   <p>
    //     <Link to="/colors">Go back</Link>
    //   </p>
    // </div>
    // ))

    // return (
    //     { colorDivs }
    // )    
}

export default Color