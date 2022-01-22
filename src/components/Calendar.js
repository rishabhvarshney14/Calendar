import React, {useState} from 'react'
import Carousel from './Carousel';
import Week from './Week';


const Calendar = ({months, data, setDate}) => {
    const [modal, setModal] = useState(false)
    const [modalData, setModalData] = useState({})

    const openModal = (data) => {
        setModal(true);
        console.log(data)
        setModalData(data);
    }

    const closeModal = () => {
        setModal(false);
        setModalData({});
    }
    return (
        <>
            {modal && modalData && <div style={{width: "80%", margin: "auto", }} >
                <svg onClick={closeModal} style={{cursor: "pointer"}} xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-x" viewBox="0 0 16 16">
                    <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
                </svg>

                <Carousel data={data} choosen={modalData} modalData={modalData} />
            </div>}

            {!modal && <div>
                {months.map((week, i) => <Week week={week} key={i} openModal={openModal} setDate={setDate} />)}
            </div>}
        </>
    )
}

export default Calendar;