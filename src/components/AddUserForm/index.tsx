import React from "react";

export const AddUserForm = () => {
    return <div>
        <div className="field-input-group">
            <input placeholder="Avatar" type="text" className="ant-input" />
        </div>
        <div className="field-input-group">
            <input placeholder="Name" type="text" className="ant-input" />
        </div>
        <div className="field-input-group">
            <input placeholder="Content" type="text" className="ant-input" />
        </div>
        <div className="modal-new-user-footer">
            <button className="ant-btn ant-btn-primary">
                Save
            </button>
            <button className="ant-btn" style={{marginLeft: 10}}>
                Cancel
            </button>
        </div>
    </div>
}
