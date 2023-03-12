/* eslint-disable jsx-a11y/alt-text */
import { Dropdown, Menu, MenuProps } from "antd";
import React, { useMemo } from "react";
import { useHistory, useLocation } from "react-router-dom";
import { GetCurrentUser, SetCurrentUser } from "services/local-service";
import { UserOutlined } from "@ant-design/icons";

function NavBar() {
    const currentUser = GetCurrentUser();

    const history = useHistory();
    if (!currentUser) { history.push("/"); }
    const location = useLocation();
    const activeMenu: MenuProps["items"] = useMemo(
        () => {
            const menus = [
                {
                    label: "Home",
                    key: `/home`
                }, {
                    label: "Profile",
                    key: "/profile"
                },
                {
                    label: "About",
                    key: `/about`
                },
                {
                    label: "Tickets",
                    key: `/tickets`
                },
                {
                    label: "Create Ticket",
                    key: `/create-ticket`
                }
            ];
            if (currentUser?.isAdmin) {
                menus.push({
                    label: "All Users",
                    key: `/users`
                });
            }
            return menus;

        },
        []);

    const menu = <Menu>
        <Menu.Item>{`${currentUser?.firstName} ${currentUser?.lastName}`} </Menu.Item>
        <Menu.Divider />
        <Menu.Item>{`${currentUser?.emailID}`}</Menu.Item>
        <Menu.Divider />
        <Menu.Item onClick={() => { SetCurrentUser(null); history.push("/"); }}>Logout</Menu.Item>
    </Menu>
    return (
        <div className="h-12 w-full">
            <div className="grow flex items-center min-w-0">
                <div className="flex px-2"> <img src="./logo.jpg" className="h-8 "></img> </div>
                <div className="grow min-w-0 pl-2">
                    <Menu
                        onClick={(e) => {
                            console.log(location.pathname);
                            history.push(e.key);

                        }}
                        selectedKeys={[location.pathname]}
                        items={activeMenu}
                        mode="horizontal"
                        className=""
                    />
                </div>
                <div className="flex items-center justify-end pr-4">
                    <Dropdown arrow placement="bottomRight" overlay={menu} trigger={["click"]}>
                        <div data-cy="account" className="accMenuContainer">
                            <UserOutlined className="user-out-lined" />
                        </div>
                    </Dropdown>
                </div>
            </div>

        </div>
    );
}

export default NavBar;
