/* eslint-disable react/prop-types */
function Modal(props) {
    return (
      <div className="modal-root">
        <div className="modal-body">{props.children}</div>
      </div>
    );
  }
  
  export default Modal;
  