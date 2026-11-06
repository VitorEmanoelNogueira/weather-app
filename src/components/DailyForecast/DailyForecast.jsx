import "./DailyForecast.scss";
import iconRain from "../../assets/images/icon-storm.webp"

export default function DailyForecast() {
    return (
        <section className="c-daily-forecast">
            <h3 className="c-daily-forecast__title">Daily forecast</h3>
            <ol className="c-daily-forecast__cards">

                <li className="c-daily-forecast__card o-surface o-surface--bordered">
                    <time className="c-daily-forecast__day" dateTime="">Mon</time>
                    <img className="c-daily-forecast__icon" src={iconRain} alt="rainny" />

                    <div className="c-daily-forecast__temperatures">
                        <span className="c-daily-forecast__max-temp">
                            <span className="u-sr-only">Maximum Temperature: </span>68°
                        </span>

                        <span className="c-daily-forecast__min-temp">
                            <span className="u-sr-only">Minimum Temperature:</span>57°
                        </span>
                    </div>
                </li>
            </ol>
        </section>
    )
}