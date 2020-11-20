import '../styles/formattedResults.css';

const FormattedResults = (props) => {
    const cityList = props.data.map(
        city => (
            <div className='cityData'>
                <div className='cityName'>
                    {city['city']}, {city['state']}
                </div>

                <div className='secondaryDetails'>
                    <div className='detailsLeft'>
                        <div>Population: {city['population']}</div>
                        <div>Growth (2000-2013): {city['growth_from_2000_to_2013']}</div>
                    </div>

                    <div className='detailsRight'>
                        <div>Latitude: {city['latitude']}</div>
                        <div>Longitude: {city['longitude']}</div>
                    </div>
                </div>
            </div>
        )
    );
    
    return (
        <div>
            { cityList.length
              ? cityList
              : <span className='notice'>
                    None - please try again
                </span>
            }
        </div>
    );
}

export default FormattedResults;
