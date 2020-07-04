import React from "react";
import TextButtons from "../TextBox/TextButtons"

function ForestModal() {
    return(
        <div id="ForestGameModal" className="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myExtraLargeModalLabel" aria-hidden="true">
            <div className="modal-dialog modal-xl" role="document">
                <div className="modal-content text-center">
                    <h1>The Forest</h1>
                    <p>
                        <TextButtons />
                        TEXT TEXT TEXT TEXT
                    </p>
                </div>
            </div>
        </div>
    )
}

export default ForestModal;