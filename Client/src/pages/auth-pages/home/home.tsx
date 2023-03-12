/* eslint-disable jsx-a11y/alt-text */
import { Card } from "antd";
import Meta from "antd/es/card/Meta";
import NavBar from "components/nav-bar/nav-bar";
import { GetCurrentUser } from "services/local-service";

function HomePage() {
    const currentUser = GetCurrentUser();
    return <div className="w-full h-full">
        <div><NavBar /></div>
        <div>
            <div className="w-full p-10 flex flex-col justify-center items-center space-y-6">
                <div className="p-2 text-2xl font-semibold">Hello</div>
                <div className="">
                    {`${currentUser?.firstName} ${currentUser?.lastName}`}
                </div>
                <img className="object-fill h-[400px] flex p-2" src="./building.jpg" />
            </div>
            <div className="w-full flex justify-center">
                <Card
                    hoverable
                    style={{ width: 300 }}
                    cover={<img alt="example" src="./build12.jpg" />}
                >
                    <Meta title="Smart Township" description="There are many reasons why Townships are fast becoming known as the optimal new age residential format. From the warmth and security of living in a vibrant community, to the sheer convenience of having everything close at hand, homebuyers in India are fast realizing that Township Living is the best way forward." />
                </Card>
            </div>

        </div>
    </div>
}
export default HomePage;