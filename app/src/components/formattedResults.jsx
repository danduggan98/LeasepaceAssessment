import '../styles/formattedResults.css';

const FormattedResults = (props) => {
    const cityList = props.data.map(
        city => (
            <div className='cityData'>
                <div>{city['city']}, {city['state']}</div>
                <div>Population: {city['population']}</div>
                <div>Latitude: {city['latitude']}</div>
                <div>Longitude: {city['longitude']}</div>
                <div>Growth (2000-2013): {city['growth_from_2000_to_2013']}</div>
            </div>
        )
    );
    
    return (
        <div>
            { cityList.length
              ? cityList
              : 'None - please try again'
            }
        </div>
    )
}

export default FormattedResults;
