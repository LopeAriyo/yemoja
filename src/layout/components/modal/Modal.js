import React from "react";
import ReactDOM from "react-dom";

const Modal = props => {
    const content = (
        <div className="modal">
            <header className={"header"}>
                <div className="spacer"></div>
                <div className={"header-title"}>
                    <h3>{props.headerTitle}</h3>{" "}
                </div>
                <div className="spacer"></div>
                <div onClick={props.handleClose} className="cross-btn">
                    {" "}
                    X
                </div>
            </header>
            <form
                onSumbit={
                    props.onSumbit
                        ? props.onSumbit
                        : event => event.preventDefault
                }
            >
                <div className={"content"}>{props.children}</div>
                <footer className={"footer"}></footer>
            </form>
        </div>
    );
    return ReactDOM.createPortal(
        content,
        document.getElementById("modal-hook")
    );
};

export default Modal;
