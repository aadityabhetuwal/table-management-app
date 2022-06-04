import '../styles/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AddTable from '../components/AddTable.js';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import ManageTable from '../components/ManageTable';
import EditTable from '../components/EditTable';
import Header from '../components/Header';

function AppRouter() {

    return (
        // have menus for adding table and managing tables
        <div>
            <Header />;

            <Router>
                <Routes>
                    <Route path='/ManageTables' element={<ManageTable />} />
                    <Route path='/AddTable' element={<AddTable />} />
                    <Route path='/EditTable' element={<EditTable />} />
                </Routes>

            </Router>
        </div>
    );
}

export default AppRouter;
