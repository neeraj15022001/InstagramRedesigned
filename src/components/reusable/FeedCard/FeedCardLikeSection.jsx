import React from 'react'
import "./FeedCard.css"

function FeedCardLikeSection({iconClass,value}) {
    return (
        <div className="d-flex align-items-center justify-content-start">
            <i class={`bi ${iconClass} FeedCard__label`}></i>
            <span className="ms-1 FeedCard__label">{value}</span>
        </div>
    )
}

export default FeedCardLikeSection
