import React from 'react' 

const Types = ({types, font, size}) => {
    const typesMapperPurple = {
        "hair cut": "Cu",
        "hair color":"HC",
        "clarifying": "C",
    };

    const typesMapperBlue = {
        "protein treatment": "Pr",
        "deep conditioning": "DC",
    }

    return (
        <div>
            {types.map((type, i) => {
                if (typesMapperBlue.hasOwnProperty(type)) {
                    return (
                        <p className='d-inline-block' style={{fontSize: font, height: size, width: size, backgroundColor: "lightblue", borderRadius: 10}}>
                            {typesMapperBlue[type]}
                        </p>
                    )
                }
                if (typesMapperPurple.hasOwnProperty(type)) {
                    return (
                        <p className='d-inline-block' style={{fontSize: font, height: size, width: size, backgroundColor: "#CBC3E3", borderRadius: 10}}>
                            {typesMapperPurple[type]}
                        </p>
                    )
                }
            })}
        </div>
    )
}

export default Types;