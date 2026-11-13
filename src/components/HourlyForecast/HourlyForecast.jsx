import "./HourlyForecast.scss";
import partlyCloudy from "../../assets/images/icon-partly-cloudy.webp";

export default function HourlyForecast() {
    return (
        <section className="c-hourly-forecast o-surface o-surface--large" aria-labelledby="hourly-forecast-title">
            <div className="c-hourly-forecast__header">

                <h3 className="c-hourly-forecast__title" id="hourly-forecast-title">Hourly forecast</h3>

                <button 
                className="c-hourly-forecast__toggle-picker"
                type="button" 
                popoverTarget="day-picker" 
                aria-haspopup="listbox">
                    Monday
                    <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="13" height="8" fill="none" viewBox="0 0 13 8"><path fill="currentColor" d="M6.309 7.484 1.105 2.316c-.175-.14-.175-.421 0-.597l.704-.668a.405.405 0 0 1 .597 0l4.219 4.148 4.184-4.148c.175-.176.457-.176.597 0l.703.668c.176.176.176.457 0 .597L6.906 7.484a.405.405 0 0 1-.597 0Z" /></svg>
                </button>

                <ul
                className="c-hourly-forecast__day-picker o-surface o-surface--bordered o-dropdown-panel"
                id="day-picker"
                popover="auto"
                role="listbox"
                aria-label="Select a day"
                tabIndex="0">
                    <li className="c-hourly-forecast__day o-dropdown-panel__option" role="option" aria-selected="true">Monday</li>
                    <li className="c-hourly-forecast__day o-dropdown-panel__option" role="option" aria-selected="false">Tuesday</li>
                    <li className="c-hourly-forecast__day o-dropdown-panel__option" role="option" aria-selected="false">Wednesday</li>
                    <li className="c-hourly-forecast__day o-dropdown-panel__option" role="option" aria-selected="false">Thursday</li>
                    <li className="c-hourly-forecast__day o-dropdown-panel__option" role="option" aria-selected="false">Friday</li>
                    <li className="c-hourly-forecast__day o-dropdown-panel__option" role="option" aria-selected="false">Saturday</li>
                    <li className="c-hourly-forecast__day o-dropdown-panel__option" role="option" aria-selected="false">Sunday</li>
                </ul>
            </div>

            <ol className="c-hourly-forecast__hours-list">
                <li className="c-hourly-forecast__hour-item o-surface--bordered">
                    <div className="c-hourly-forecast__weather">
                        <img className="c-hourly-forecast__icon" src={partlyCloudy} alt="Partly Cloudy" />
                        <time className="c-hourly-forecast__hour" dateTime="">4 PM</time>
                    </div>
                    <span className="c-hourly-forecast__temperature">68°</span>
                </li>

                <li className="c-hourly-forecast__hour-item o-surface--bordered">
                    <div className="c-hourly-forecast__weather">
                        <img className="c-hourly-forecast__icon" src={partlyCloudy} alt="Partly Cloudy" />
                        <time className="c-hourly-forecast__hour" dateTime="">4 PM</time>
                    </div>
                    <span className="c-hourly-forecast__temperature">68°</span>
                </li>

                <li className="c-hourly-forecast__hour-item o-surface--bordered">
                    <div className="c-hourly-forecast__weather">
                        <img className="c-hourly-forecast__icon" src={partlyCloudy} alt="Partly Cloudy" />
                        <time className="c-hourly-forecast__hour" dateTime="">4 PM</time>
                    </div>
                    <span className="c-hourly-forecast__temperature">68°</span>
                </li>

                <li className="c-hourly-forecast__hour-item o-surface--bordered">
                    <div className="c-hourly-forecast__weather">
                        <img className="c-hourly-forecast__icon" src={partlyCloudy} alt="Partly Cloudy" />
                        <time className="c-hourly-forecast__hour" dateTime="">4 PM</time>
                    </div>
                    <span className="c-hourly-forecast__temperature">68°</span>
                </li>

                <li className="c-hourly-forecast__hour-item o-surface--bordered">
                    <div className="c-hourly-forecast__weather">
                        <img className="c-hourly-forecast__icon" src={partlyCloudy} alt="Partly Cloudy" />
                        <time className="c-hourly-forecast__hour" dateTime="">4 PM</time>
                    </div>
                    <span className="c-hourly-forecast__temperature">68°</span>
                </li>

                <li className="c-hourly-forecast__hour-item o-surface--bordered">
                    <div className="c-hourly-forecast__weather">
                        <img className="c-hourly-forecast__icon" src={partlyCloudy} alt="Partly Cloudy" />
                        <time className="c-hourly-forecast__hour" dateTime="">4 PM</time>
                    </div>
                    <span className="c-hourly-forecast__temperature">68°</span>
                </li>

                <li className="c-hourly-forecast__hour-item o-surface--bordered">
                    <div className="c-hourly-forecast__weather">
                        <img className="c-hourly-forecast__icon" src={partlyCloudy} alt="Partly Cloudy" />
                        <time className="c-hourly-forecast__hour" dateTime="">4 PM</time>
                    </div>
                    <span className="c-hourly-forecast__temperature">68°</span>
                </li>

                <li className="c-hourly-forecast__hour-item o-surface--bordered">
                    <div className="c-hourly-forecast__weather">
                        <img className="c-hourly-forecast__icon" src={partlyCloudy} alt="Partly Cloudy" />
                        <time className="c-hourly-forecast__hour" dateTime="">4 PM</time>
                    </div>
                    <span className="c-hourly-forecast__temperature">68°</span>
                </li>

                <li className="c-hourly-forecast__hour-item o-surface--bordered">
                    <div className="c-hourly-forecast__weather">
                        <img className="c-hourly-forecast__icon" src={partlyCloudy} alt="Partly Cloudy" />
                        <time className="c-hourly-forecast__hour" dateTime="">4 PM</time>
                    </div>
                    <span className="c-hourly-forecast__temperature">68°</span>
                </li>

                <li className="c-hourly-forecast__hour-item o-surface--bordered">
                    <div className="c-hourly-forecast__weather">
                        <img className="c-hourly-forecast__icon" src={partlyCloudy} alt="Partly Cloudy" />
                        <time className="c-hourly-forecast__hour" dateTime="">4 PM</time>
                    </div>
                    <span className="c-hourly-forecast__temperature">68°</span>
                </li>

                <li className="c-hourly-forecast__hour-item o-surface--bordered">
                    <div className="c-hourly-forecast__weather">
                        <img className="c-hourly-forecast__icon" src={partlyCloudy} alt="Partly Cloudy" />
                        <time className="c-hourly-forecast__hour" dateTime="">4 PM</time>
                    </div>
                    <span className="c-hourly-forecast__temperature">68°</span>
                </li>

                <li className="c-hourly-forecast__hour-item o-surface--bordered">
                    <div className="c-hourly-forecast__weather">
                        <img className="c-hourly-forecast__icon" src={partlyCloudy} alt="Partly Cloudy" />
                        <time className="c-hourly-forecast__hour" dateTime="">4 PM</time>
                    </div>
                    <span className="c-hourly-forecast__temperature">68°</span>
                </li>

                <li className="c-hourly-forecast__hour-item o-surface--bordered">
                    <div className="c-hourly-forecast__weather">
                        <img className="c-hourly-forecast__icon" src={partlyCloudy} alt="Partly Cloudy" />
                        <time className="c-hourly-forecast__hour" dateTime="">4 PM</time>
                    </div>
                    <span className="c-hourly-forecast__temperature">68°</span>
                </li>

                <li className="c-hourly-forecast__hour-item o-surface--bordered">
                    <div className="c-hourly-forecast__weather">
                        <img className="c-hourly-forecast__icon" src={partlyCloudy} alt="Partly Cloudy" />
                        <time className="c-hourly-forecast__hour" dateTime="">4 PM</time>
                    </div>
                    <span className="c-hourly-forecast__temperature">68°</span>
                </li>

                <li className="c-hourly-forecast__hour-item o-surface--bordered">
                    <div className="c-hourly-forecast__weather">
                        <img className="c-hourly-forecast__icon" src={partlyCloudy} alt="Partly Cloudy" />
                        <time className="c-hourly-forecast__hour" dateTime="">4 PM</time>
                    </div>
                    <span className="c-hourly-forecast__temperature">68°</span>
                </li>
            </ol>
        </section>
    )
}