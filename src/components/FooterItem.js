import React from 'react'

const FooterItem = (props) => {

    const {href, icon} = props
    return (
        <li>
            <a href={href} target="_blank" rel="noreferrer" className="footer-icon"
            ><i className={icon}></i
            ></a>
        </li>
    )
}

export default FooterItem