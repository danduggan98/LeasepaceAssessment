const FormattedResults = (props) => {
    const cityList = props.data.map(
        city => (
            <div className='cityData'>
                <div>{city.city}, {city.state}</div>
                { /* Additional data here */ }
            </div>
        )
    )
    
    return (
        <div>{cityList}</div>
    )
}

export default FormattedResults;
