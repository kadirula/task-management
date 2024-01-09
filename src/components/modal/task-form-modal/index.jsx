import React from 'react'

const TaskFormModal = () => {
  return (
    <div className="modal fade" id="taskModal" tabIndex="-1" aria-labelledby="taskModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-md">
          <div className="modal-content">
            <div className="modal-header">
              <h4 className="modal-title fs-5" id="taskModalLabel">Add New Task</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              <form className="form" id="task-form">
                <div className="form-group">
                    <label htmlFor="" className="form-label">Title</label>
                    <input type="text" className="form-control" placeholder="Title..." name="title" required />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Description</label>
                    <textarea className="form-control" placeholder="Description..." rows="5" name="description"></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Subtasks</label>
                    <div id="subtask"></div>
                    <div className="input-group mb-3">
                        <button className="button button--light button--w-full" id="add-new-task" type="button">
                            <i className="fa-solid fa-plus"></i>
                            Add New Task
                        </button>
                    </div>
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-label">Status</label>
                    <select className="form-control"  name="status" required id="kanban-item-select"></select>
                </div>
                <div className="form-group">
                    <button type="submit" className="button button--main button--w-full">Create Task</button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}

export default TaskFormModal