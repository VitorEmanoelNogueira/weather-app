
import "./_App.scss"
import DailyForecast from "./components/DailyForecast"
import DayForecast from "./components/DayForecast"
import Footer from "./components/Footer"
import Header from "./components/Header"
import HourlyForecast from "./components/HourlyForecast"

function App() {
  return (
    <>
      <Header />
      <main>
        <DayForecast />
        <DailyForecast />
        <HourlyForecast />
      </main>
      <Footer />
    </>
  )
}

export default App
