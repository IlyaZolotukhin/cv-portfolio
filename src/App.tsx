import {useState} from "react";
import {Header} from "./layout/header/Header";
import {Modal} from "./layout/modal/Modal";
import {Main} from "./layout/main/Main";
import {Footer} from "./layout/footer/Footer";

function App() {

    const [isMenuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!isMenuOpen);
    }
    const closeMenu = () => {
        setMenuOpen(false);
    };

    return (
        <>
            {isMenuOpen ? <Modal closeMenu={closeMenu}/> : <Header toggleMenu={toggleMenu}/>}
            <Main/>
            <Footer/>
        </>
    );
}

export default App;

