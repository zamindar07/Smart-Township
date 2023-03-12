/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import { Button, Card } from "antd";
import Meta from "antd/es/card/Meta";
import LoginForm from "components/login/login";
import NavBarHome from "components/nav-bar-home/nav-bar-home";
import NavBar from "components/nav-bar/nav-bar";
import { useState } from "react";

function LandingPage() {

    return <div className="w-full h-full">
        <div>
            <NavBarHome />
        </div>
        <div className="flex flex-col px-6 space-y-10 w-full justify-center m-auto">
            <div id="home" className="flex justify-center pt-20 rounded-xl bg-gray-300  m-auto">
                <img className="object-fill h-[400px] flex p-2" src="./building.jpg" />
            </div>
            <div id="login" className="flex flex-col w-full">
                <div className="text-2xl font-semibold">Login </div>
                <LoginForm />
            </div>
            <div id="about" className="w-full flex justify-center">
                <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" src="./logo.jpg" />}
                >
                    <Meta title="" description="" />
                </Card>
            </div>
            <div id="contact" className="w-full pb-10 flex flex-col justify-center items-center space-y-6">
                <div className="p-2 text-2xl font-semibold">CONTACT Us</div>
                <div className="p-2">
                    Khushboo Zamindar,
                    Vaibhav Borane
                </div>
            </div>
        </div>
    </div>
}
export default LandingPage;