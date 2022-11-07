import React, {useCallback, useContext, useEffect, useLayoutEffect, useMemo, useReducer, useRef, useState} from "react";
import './App.css';
import {createPortal} from "react-dom";


const Modal = ({ onClose }) => {
    throw new Error();

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

class ErrorBoundary extends React.Component {

    constructor(props) {
        super(props);
        this.state = {error: false}
    }

    componentDidCatch(error, errorInfo) {
        console.log(error, errorInfo)
    }

    static getDerivedStateFromError(error) {
        // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
        return { error: true };
    }

    render() {
        if (this.state.error) {
            return <div className="alert alert-danger">
                Il y a eu un problème
            </div>
        }
        return this.props.children
    }

}

const App = () => {
    const [modal, setModal] = useState(false);
    const showModal = () => {setModal(true)};
    const hideModal = () => {setModal(false)};
    const style = {
        transform: "translateY(1px)"
    };
    const log = () => {
        console.log("click")
    };
    return <div className={"card"} style={style} onClick={log}>
        <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum
            </p>
            <button onClick={showModal} className="btn btn-primary">
                Go somewhere
            </button>
        </div>
        <ErrorBoundary>
            {modal && <Modal onClose={hideModal} />}
        </ErrorBoundary>
    </div>
}

export default App;
