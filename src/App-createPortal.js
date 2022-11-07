import React, {useCallback, useContext, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState} from "react";
import './App.css';
import {createPortal} from "react-dom";


const Modal = ({ onClose }) => {
    const reactElement = <>
        <div
            className="modal fade show"
            tabIndex="-1"
            role="dialog"
            style={{ display: 'block' }}
        >
            <div className="modal-dialog">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title"> Modal title </h5>
                        <button
                            type="button"
                            className="close"
                            data-dismiss="modal"
                            aria-label="Close"
                        >
                            <span aria-hidden="true" onClick={onClose}>
                                &times;
                            </span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <p>Modal body text goes here.</p>
                    </div>
                    <div className="modal-footer">
                        <button
                            type="button"
                            className="btn btn-secondary"
                            data-dismiss={"modal"}
                            onClick={onClose}
                        >
                            Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className={"modal-backdrop fade show"}></div>
    </>;
    return createPortal(reactElement,document.body);
};

const App = () => {
    const [modal, setModal] = useState(false);
    const showModal = () => {setModal(true)};
    const hideModal = () => {setModal(false)};
    const style = {
        transform: "translateY(1px)"
    };
    return <div className={"card"} style={style}>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <button onClick={showModal} className="btn btn-primary">
                Go somewhere
            </button>
        </div>
        {modal && <Modal onClose={hideModal} />}
    </div>
}

export default App;
