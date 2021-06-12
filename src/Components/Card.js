import React from 'react'

const Card = (props) => {
    const {name, email, id} = props;
    return (
        <div className="bg-light-green dib br3 pa3 ma2 grow bw-2 shadow-5 tc">
            <img src = {`https://robohash.org/${id}?size=200x200`} alt = "robo img"/>
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    )
}

export default Card;