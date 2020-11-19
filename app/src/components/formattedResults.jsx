const FormattedResults = (props) => {
    const cityList = props.data.map(
        city => (
            <div>{city.city}, {city.state}</div>
        )
    )
    
    return (
        <div>{cityList}</div>
    )
}

export default FormattedResults;
