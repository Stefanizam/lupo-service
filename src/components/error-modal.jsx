import React from "react";

const ErrorModal = ({ errorMessage, setErrorMessage }) => {
  return (
    <div className="modal-backdrop w-100 h-100 d-flex justify-content-center align-items-center">
      <div className="bg-light text-dark w-25 d-flex flex-column rounded overflow-hidden">
        <div className="h-100">
          <div className="modal-content">
            <div className="w-100 d-flex justify-content-between bg-danger text-white p-2">
              <h5 className="modal-title">Error</h5>
              <button onClick={() => setErrorMessage("")} type="button" className="btn-close" aria-label="Close"></button>
            </div>
            <div className="p-2">
              <p>{errorMessage}</p>
            </div>
            <div className="modal-footer p-2">
              <button onClick={() => setErrorMessage("")} type="button" className="btn btn-secondary" aria-label="Close">Close</button>
              {/* <button type="button" className="btn btn-primary">Save changes</button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ErrorModal;