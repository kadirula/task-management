
import TaskFormModal from './components/modal/task-form-modal';
import UserModal from './components/modal/user-modal';
import Navbar from './components/navbar';
import Sidebar from './components/sidebar';
const App = () => {

  return (
    <div className='theme-light'>
      <div className="page">
        <div className="page__left">
          <Sidebar/>
        </div>
        <div className="page__right">
          <div className="page__header">
                <Navbar/>
            </div>
            <div className="page__content">

            </div>
        </div>
      </div>

    {/* begin:: Task Form Modal */}
    <TaskFormModal/>
    {/* end:: Task Form Modal */}

    {/* begin:: User Modal */}
    <UserModal/>
    {/* end:: User Modal */}


    </div>
  )
}

export default App
