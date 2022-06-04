import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTable from '../components/AddTable.js';
import { BrowserRouter as Router,Routes, Route, Link } from 'react-router-dom';
import ManageTable from '../components/ManageTable';
import EditTable from '../components/EditTable';

function AppRouter() {
    // const [tableList, setTableList] = useLocalStorage('tableList', []);
    
    return (
    // have menus for adding table and managing tables
    <div>
        <div className="header m-4">Table Management System</div>
        
        <Router>
            <div className='container d-flex align-items-center justify-content-center gap-4 p-3' >
                <Link to='/ManageTables' className='routes routes'>Manage Table </Link>
                <Link to='/AddTable' className='routes routes'>Create Table</Link>
            </div>

            <Routes>
                <Route path='/' element={<ManageTable />} />
                <Route path='/ManageTables' element={<ManageTable />} />
                <Route path='/AddTable' element={<AddTable />} />
                <Route path='/EditTable' element={<EditTable />} />
            </Routes>
        
        </Router>
    </div>
  );
}

export default AppRouter;
