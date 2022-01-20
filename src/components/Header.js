import React from 'react' 

const Header = () => {
    const days = ["S", "M", "T", "W", "T", "F", "S"];

    return (
        <header className="sticky-top bg-light">
            <div className="d-flex justify-content-between ">
                <div>
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" className="bi bi-arrow-left d-inline-block" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                    </svg>
                    <h3 className="d-inline-block pl-2">My Hair Diary</h3>
                </div>
                <h3>Jan 2022</h3>
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
