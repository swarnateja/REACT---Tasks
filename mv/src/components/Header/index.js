

import './index.css'

const Header = (props) =>{
    const {greeting, name} = props
    return(
        <div>
           <h1>{greeting} {name}</h1>
        </div>
    )
}
export default Header