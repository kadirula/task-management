import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";


const Sidebar = () => {

    const [user, setUser] = useState([
        {
            id: 1,
            name: 'User - 1',
            kanban: [
                {
                    id: 1,
                    title: 'Todo',
                    cards: [
                        {
                            head: 'Card Title - 1',
                            description: '',
                            subtasks: ["Subtask - 1", "Subtask - 2"]
                        }
                    ]
                }
            ]
        }
    ])

  return (
    <div className="sidebar">
      <div className="sidebar__head">
        <h1 className="sidebar__logo">kanban</h1>
      </div>

      <div className="sidebar__body">
        <div className="user-tab">
          <div className="user-tab__head">
            <h4 className="user-tab__head-title">All Users (4)</h4>
          </div>
          <div className="user-tab__body">
            <ul className="user-tab__list">
                {
                user.map((userItem, index) => (
                    <li className="user-tab__list-item" key={index} >
                        <FontAwesomeIcon icon={faUser} />
                        { userItem.name }
                    </li>
                ))
              }

              <li
                className="user-tab__list-item user-tab__list-item--colors"
                data-bs-toggle="modal"
                data-bs-target="#userModal"
              >
                <FontAwesomeIcon icon={faPlus} />
                <span>Create User</span>
              </li>

              
            </ul>
          </div>
        </div>
      </div>
      <div className="sidebar__footer"></div>
    </div>
  );
};

export default Sidebar;
