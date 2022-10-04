import "../scss/menuBar.scss";
import { MenuBarData } from "./MenuBarData";


const MenuBar = (props) => {
    console.log(props.currentOption)
    return (
        <div className="menu-page">
            {/* <div className="menuBar">
                <Link to="#" className="is-large">
                    <ImIcons.ImMenu onClick={showMenuBar} />
                </Link>
            </div> */}

            {/* <span className="icon">
                <ImIcons.ImMenu onClick={showMenuBar} />
            </span> */}

            <aside className={"menu active"}>
                <ul className="menu-list">
                    {/* <li>
                        <Link to="#" className="menu-bars">
                            <ImIcons.ImCross onClick={showMenuBar} />
                        </Link>
                    </li> */}

                    {/* Map the menubar items in menubardata */}
                    {MenuBarData.map((item, index) => {
                        return (
                            <li key={index} className={props.currentOption === item.id ? item.cName + " choosed" : item.cName}>
                                <a onClick={() => props.preventPop(item.id)}>
                                    {item.icon}
                                    <span className="menubar-span">{item.title}</span>
                                </a>
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