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
                        <div className='d-inline-block' key={i} style={{fontSize: font, height: size, width: size, backgroundColor: "lightblue", borderRadius: 10, textAlign: "center"}}>
                            {typesMapperBlue[type]}
                        </div>
                        
                    )
                }
                else if (typesMapperPurple.hasOwnProperty(type)) {
                    return (
                        <div className='d-inline-block' key={i} style={{fontSize: font, height: size, width: size, backgroundColor: "#CBC3E3", borderRadius: 10, textAlign: "center"}}>
                            {typesMapperPurple[type]}
                        </div>
                    )
                }
                else {
                    return (
                        <div className='d-inline-block' key={i} style={{fontSize: font, height: size, width: size, backgroundColor: "#CBC3E3", borderRadius: 10, textAlign: "center"}}>
                            Ot
                        </div>
                    )
                }
            })}
        </div>
    )
}

export default Types;