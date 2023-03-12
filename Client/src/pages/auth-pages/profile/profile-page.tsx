import NavBar from "components/nav-bar/nav-bar";
import { GetCurrentUser } from "services/local-service";

function ProfilePage() {
    const currentUser = GetCurrentUser();
    return <div className="w-full h-full">
        <div><NavBar /></div>

        <div className="h-full w-full">
            <main className="profile-page">
                <section className="relative block h-[400px]">
                    <div className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage: `url('https://images.unsplash.com/photo-1499336315816-097655dcfbda?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=2710&amp;q=80')`
                        }}>
                        <div id="blackOverlay" className="w-full h-full absolute opacity-50 bg-black"></div>
                    </div>
                    <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[70px]"
                        style={{ transform: `translateZ(0px)` }}>
                        <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                            <polygon className="text-blueGray-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
                        </svg>
                    </div>
                </section>
                <section className="relative bg-blueGray-200">
                    <div className="w-[600px] mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white  mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img alt="" src="./profile.png" className="shadow-xl rounded-full h-auto align-middle border-none absolute -m-16 -ml-20 lg:-ml-16 max-w-[150px]" />
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-24">
                                    <h3 className="text-4xl font-semibold leading-normal  text-blueGray-700 mb-2">
                                        {`${currentUser?.firstName} ${currentUser?.lastName}`}
                                    </h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-bold uppercase">
                                        <i className="fas fa-map-marker-alt mr-2 text-lg text-blueGray-400"></i>
                                        {currentUser?.emailID}
                                    </div>
                                    <div className="mb-2 text-blueGray-600 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Contact No. {currentUser?.contactNo}
                                    </div>
                                    <div className="mb-2 text-blueGray-600">
                                        <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>Wing No. {currentUser?.wingNO}
                                    </div>
                                    <div className="mb-2 text-blueGray-600 mt-10">
                                        <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>Floor No. {currentUser?.floor}
                                    </div>
                                    <div className="mb-2 text-blueGray-600">
                                        <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>Flat No. {currentUser?.flatNo}
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                                    <div className="flex flex-wrap justify-center">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                                                Welcome to your profile. 
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <footer className="relative bg-blueGray-200 pt-8 pb-6 mt-8">
                        <div className="w-[600px]  mx-auto px-4">
                            <div className="flex flex-wrap items-center md:justify-between justify-center">
                                <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                                       developed by  Khushboo Zamindar 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </footer>
                </section>
            </main>
        </div>
    </div >
}
export default ProfilePage;