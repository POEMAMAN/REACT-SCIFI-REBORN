
import LogOut from "./LogOut";
import ActualUser from "./ActualUser";
import { Link } from "react-router-dom";



function MainPage() {


  return (
    <>
      <div>
        <ActualUser />
        <LogOut />
        <ul>
          <li>
            <Link to="/main/menuBooks">Books <img src="https://res.cloudinary.com/dqfaa272n/image/upload/v1705792965/_ea736ba5-f041-4b3b-87b1-4ae4b7c27545_fyplvn.jpg" alt="Books" /></Link>
          </li>
          <li>
          <Link to="/main/menuAuthors">Authors <img src="https://res.cloudinary.com/dqfaa272n/image/upload/v1705792135/MenuAuthors_pdllkz.jpg" alt="Authors" /></Link>
          </li>
          <li>
          <Link to="/main/menuUniverses">Universes <img src="https://res.cloudinary.com/dqfaa272n/image/upload/v1705792137/MenuUniverses_fwqylw.jpg" alt="Universes" /></Link>
          </li>
        </ul>
      </div>
    </>
  )
}

export default MainPage
