import React from 'react'

const UserModal = () => {
  return (
    <div className="modal fade" id="userModal" tabIndex="-1" aria-labelledby="userModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fs-5" id="userModalLabel">Add New User</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="form" id="user-form">
                <div className="form-group">
                    <label htmlFor="" className="form-label">User</label>
                    <input type="text" className="form-control" placeholder="User..." name="title" required />
                </div>
                <div className="form-group">
                    <button type="submit" className="button button--main button--w-full">Create User</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default UserModal