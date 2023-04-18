import { Link } from "react-router-dom"
export const HomeGreeting = () =>  {
	return (
		<div className="greeting">
			<nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/character">Character</Link>
          </li>
          <li>
            <Link to="/episode">Episode</Link>
          </li>
        </ul>
      </nav>
		</div>
	)
}