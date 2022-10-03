import "../scss/menuBar.scss";
import * as ImIcons from "react-icons/im";
import { Link } from "react-router-dom";
import { useState } from "react";
import { MenuBarData } from "./MenuBarData";


function MenuBar() {
    const [menuBar, setMenuBar] = useState(false);

    const showMenuBar = () => setMenuBar(!menuBar);
    return (
        <div>

            {/* <div className="menuBar">
                <Link to="#" className="is-large">
                    <ImIcons.ImMenu onClick={showMenuBar} />
                </Link>
            </div> */}

            <span className="icon">
                <ImIcons.ImMenu onClick={showMenuBar} />
            </span>

            <aside className={menuBar ? "menu active" : "menu"}>
                <ul className="menu-list">
                    <li>
                        <Link to="#" className="menu-bars">
                            <ImIcons.ImCross onClick={showMenuBar} />
                        </Link>
                    </li>

                    {/* Map the menubar items in menubardata */}
                    {MenuBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })
                    }
                </ul>
            </aside>
        </div >
    );
}

export default MenuBar