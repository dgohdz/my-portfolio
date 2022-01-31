// import React, { useState } from 'react';
// import "./Modal.css";

// export default function Modal() {
//     const [modal, setModal] = useState(false);

//     const toggleModal = () => {
//         setModal(!modal)
//     }

//     return (
//         <>
//         <button onClick={toggleModal} className='modal-button'>Modal Button</button>

//         <div className='modal'>
//             <div className='overlay'>
//                 <div className='modal-content'>
//                     <h1>Message Sent!</h1>
//                     <p>I will respond ASAP!</p>
//                     <button className='close-modal' onClick={toggleModal}>close modal</button>
//                 </div>
//             </div>
//         </div>
//         </>
//     );
// }