import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <ul>
            <h1> header </h1>
            <li>
                <a href ="/"> Home </a> 
                {/* <Link to = "/">Home </Link> */}
            </li>

            <li>
                <a href ="/main"> Main </a> 
                {/* <Link to ="/main"> Main </Link> */}
            </li>

            <li>
                <a href ="/Edit"> Edit </a> 
                {/* <Link to ="/main"> Main </Link> */}
            </li>

            <li>
                <a href ="/View"> View </a> 
                {/* <Link to ="/main"> Main </Link> */}
            </li>

        </ul>
    )
    }
    export default Header;