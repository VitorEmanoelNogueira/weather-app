import "./DayForecast.scss";
import iconSunny from "../../assets/images/icon-sunny.webp"

export default function DayForecast() {
    return (
        <section className="c-day-forecast" aria-labelledby="c-day-forecast-title">

            <div className="c-day-forecast__overview">

                <div className="c-day-forecast__location-info">
                    <h2 className="c-day-forecast__location" id="day-forecast-title">Berlin, Germany</h2>
                    <time className="c-day-forecast__date" dateTime="2025-08-05"> Tuesday, Aug 5, 2025</time>
                </div>

                <div className="c-day-forecast__weather">
                    <img className="c-day-forecast__climate-icon" width="320" height="320" src={iconSunny} alt="Sunny" />
                    <p className="c-day-forecast__temperature">68°</p>
                </div>
            </div>

            <dl className="c-day-forecast__conditions">
                <div className="c-day-forecast__condition o-surface o-surface--bordered">
                    <dt className="c-day-forecast__condition-label">Feels like</dt>
                    <dd className="c-day-forecast__condition-value">64°</dd>
                </div>

                <div className="c-day-forecast__condition o-surface o-surface--bordered">
                    <dt className="c-day-forecast__condition-label">Humidity</dt>
                    <dd className="c-day-forecast__condition-value">{/* <!-- Insert humidity here --> */}46%</dd>
                </div>

                <div className="c-day-forecast__condition o-surface o-surface--bordered">
                    <dt className="c-day-forecast__condition-label">Wind</dt>
                    <dd className="c-day-forecast__condition-value">{/* <!-- Insert wind here --> */}9 mph</dd>
                </div>

                <div className="c-day-forecast__condition o-surface o-surface--bordered">
                    <dt className="c-day-forecast__condition-label">Precipitation</dt>
                    <dd className="c-day-forecast__condition-value">{/* <!-- Insert precipitation here --> */}0 in</dd>
                </div>
            </dl>
        </section>
    )
}