import './navigation.css'
import { pageLinks } from '../../data'

function Navigation() {



  return (

    <nav className="navigation">
      <div className="navigation-header">
        <h1 className="navigation-heading">Royal Hotel</h1>

        <form className="navigation-search">
          <input
            type="text"
            className="navigation-search-input"
            placeholder="Search..."
          />
          <button className="navigation-search-btn">
            <i className="fas fa-search"></i>
          </button>
        </form>
      </div>

      <ul className="navigation-list">
        {pageLinks.map((link) => {
          const { id, href, text } = link
          return (
            <li key={id} className="navigation-item">
              <a href={href} className="navigation-link">{text}</a>
            </li>

          )
        })}

      </ul>
      <div class="copyright">
        <p>&copy; 2023. Royal Hotel. All Rights Reserved</p>
      </div>
    </nav>
  )
}

export default Navigation
