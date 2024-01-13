import styles from "./index.module.scss";
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Favorites from '../pages/Favorites';
import Basket from '../pages/Busket';
import Header from "../components/Header";
function App() {

    return (
        <div className={styles.app}>
            <Header/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/favorites' element={<Favorites />} />
                <Route path='/basket' element={<Basket />} />
            </Routes>
        </div>
    );
}

export default App;
