
import "./_App.scss"
import Header from "./components/Header/Header"
import Search from "./components/Search/Search"
import DayForecast from "./components/DayForecast/DayForecast"
import DailyForecast from "./components/DailyForecast/DailyForecast"
import HourlyForecast from "./components/HourlyForecast/HourlyForecast"
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <>
      <Header />

      <main className="l-main">
        <h1>How’s the sky looking today?</h1>
        <Search />
        
        <div className="l-forecasts">
          <DayForecast />
          <DailyForecast />
          <HourlyForecast />
        </div>
      </main>

      <Footer />
    </>
  )
}

export default App
