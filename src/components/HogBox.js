import React from 'react'
import HogTile from './HogTile'

const HogBox = ({hogs}) => {
    return (
        <div>
        {hogs.map(hog => {
            return <HogTile 
                key={hog.name}
                hog={hog}
            />
        })}
        </div>
    )
}

export default HogBox