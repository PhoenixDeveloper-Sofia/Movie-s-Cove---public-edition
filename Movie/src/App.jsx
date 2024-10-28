import Header from "./сomponents/Header/Header"
import AppRoutes from "./сomponents/AppRoutes"
import Footer from "./сomponents/Footer/Footer"

import "./style/global.scss"

function App() {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <AppRoutes />
      </main>
      <Footer />
    </div>
  )
}

export default App
