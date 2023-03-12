import { Card, Carousel } from "antd";
import Meta from "antd/es/card/Meta";
import NavBar from "components/nav-bar/nav-bar";
import { useState } from "react";
import { text } from "stream/consumers";

function AboutPage() {
    return (
        <div className="">
            <div>
                <NavBar />
            </div>
            <div>
                <Carousel autoplay>
                    <div className="p-2" >
                        <div className="flex justify-center justify-items-center items-center w-full">
                            <Card
                                hoverable
                                style={{ width: "50%" }}
                                cover={<img alt="example" src="./Swimmingpool.jpg" />}
                            >
                                <Meta
                                    title="Swimming Pool"
                                    description="The community pool is one of the best amenities that both the adults and the kids can enjoy. This can give community members a reason to come together and enjoy and build bonds."
                                />
                            </Card>
                        </div>
                    </div>
                    <div className="p-2 flex justify-center justify-items-center items-center w-full">
                        <Card
                            hoverable
                            style={{ width: "50%" }}
                            cover={<img alt="example" src="./gym.jpg" />}
                        >
                            <Meta
                                title="Gym"
                                description="Our township has a gym that provides recreation space and is located inside the building compound, making it extremely convenient for building residents to use it."
                            />
                        </Card>
                    </div>
                    <div className="p-2 flex justify-center justify-items-center items-center w-full">
                        <Card
                            hoverable
                            style={{ width: "50%" }}
                            cover={<img alt="example" src="./communityhall.jpg" />}
                        >
                            <Meta
                                title="Community Hall"
                                description=" Community hall in our township are spacious and well-maintained, and the staff is friendly and helpful. The halls are a great place to host events and gatherings, and the community is lucky to have them."
                            />
                        </Card>
                    </div>
                </Carousel>
            </div >
            <div>
                <p>
                    The concept of gated residential real estate has evolved over time.
                    Today's modern customer likes to come home to not just the four walls
                    of his apartment but a whole new environment of his gated residential
                    address that allows the whole family to lead the life of their choice.
                    It's a search for more than a mere place to arrive after work, a
                    personal haven where we get to pursue our interests. Smart security
                    system, opulent lobby spaces, with modern elevators, comfortable
                    parking spaces, green walkways and open spaces add to the convenience
                    and speak of our choice.
                </p>
            </div>
        </div >
    );
}
export default AboutPage;