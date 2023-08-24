import contact from '../utils/contact-book.png';
import bar from '../utils/bar-chart.png';
import { Link } from "react-router-dom"
export default function Sidebar() {
    return (
        <div className="flex border-r-2 ">
            <div className="flex pt-16 flex-col h-screen p-3 bg-neutral-100 w-60">
                <div className="space-y-3 ">
                    <div className="flex items-center ">
                        <h2 className="text-3xl mt-4 font-serif hover:font-sans font-bold">Dashboard</h2>
                    </div>
                    <div className="flex-1 ">
                        <ul className=" pt-2 pb-4 space-y-1  font-serif font-bold text-lg">
                            <li className="rounded-sm hover:bg-neutral-200">
                                <Link
                                    to="/"
                                    className="flex items-center  p-2 space-x-3 rounded-md"
                                >
                                    <img src={contact} />
                                    <span>Contacts</span>
                                </Link>
                            </li>
                            <li className="rounded-sm hover:bg-neutral-200">
                                <Link
                                    to="/dashboard"
                                    className="flex items-center p-2 space-x-3 rounded-md">
                                    <img src={bar} alt="" />
                                    <span>Charts And Maps</span>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

        </div>
    );
}