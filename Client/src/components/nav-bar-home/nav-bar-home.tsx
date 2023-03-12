/* eslint-disable jsx-a11y/alt-text */
import { Menu, MenuProps } from "antd";
import React, { useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

function NavBarHome() {
    const history = useHistory();
    const [current, setCurrent] = useState("");
    const location = useLocation();
    const activeMenu: MenuProps["items"] = useMemo(
        () => [
            {
                label: "Home",
                key: `home`
            },
            {
                label: "Login",
                key: `login`
            },
            {
                label: "About",
                key: `about`
            },
            {
                label: "Contact",
                key: `contact`
            }
        ],
        []);

    return (
        <div className="h-12 w-full fixed">
            <div className="grow flex items-center min-w-0">
                <div className="flex px-2"> <img src="./logo.jpg" className="h-8 "></img> </div>
                <div className="grow min-w-0 pl-2">
                    <Menu
                        onClick={(e) => {
                            const anchor = document.getElementById(e.key);
                            console.log(anchor);
                            if (anchor)
                                anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });

                        }}
                        selectedKeys={[location.pathname]}
                        items={activeMenu}
                        mode="horizontal"
                        className="menus"
                    />
                </div>
            </div>
        </div>
    );
}

export default NavBarHome;
