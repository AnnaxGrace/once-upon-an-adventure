import React from "react";

function SignUpModal() {
    return(
        <div className="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Sign Up!</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="modal-body">
                    <form className="signup">
                            <input type="email" className="form-control special" id="email-input" placeholder="Email" />
                                <br />

                            <input type="password" className="form-control special" id="password-input" placeholder="Password" />
                                <br />
                    </form>
                </div>
                <div className="modal-footer">
                    <button type="button" className="btn special" data-dismiss="modal">Close</button>
                    <button type="submit" className="btn special">Register!</button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default SignUpModal;