import React from 'react' 

const Header = ({date}) => {
    const days = ["S", "M", "T", "W", "T", "F", "S"];
    

    return (
        <header className="sticky-top bg-light row">
            <div className="d-flex justify-content-between" style={{width:"95%", margin: "auto"}}>
                <h3><span style={{color: 'lightblue'}}>my</span> hair diary</h3>
             
                <h3>{date.format("MMM")} {date.format("YYYY")}</h3>
            </div>
            
            <div>
                <div className='row g-0'>
                {days.map((day, i) => (
                        <div key={i} className='col border text-center'>
                            <p>{day}</p>
                        </div>
                    )
                )}
                </div>
            </div>
        </header>
    )
}

export default Header;
