import { useParams } from 'react-router-dom'

import React from 'react'

const Info = () => {

    const { id } = useParams();

    return (
        <div>

            <h1>Mais informação sobre o porduto: {id}</h1>

        </div>
    )
}

export default Info