/* eslint-disable react/prop-types */
import './Main.css'

function Main({ children }) {
  return (
    <main>
        <article className="main-container">
          {children}
        </article>
    </main>
  )
}

export default Main

