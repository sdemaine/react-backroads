const Service = (props) => {

    const {name, description, icon} = props
    return (
        <article className="service">
            <span className="service-icon"><i className={icon}></i></span>
            <div className="service-info">
                <h4 className="service-title">{props.name}</h4>
                <p className="service-text">
                    {props.description}
                </p>
            </div>
        </article>
    )
}

export default Service