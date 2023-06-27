import './Header.css'

// eslint-disable-next-line react/prop-types
function Header ({ children }) {
  return (
    <header>
      <h1 className="header-title">
        {children}
      </h1>
    </header>
  )
}

export default Header
