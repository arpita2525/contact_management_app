
import { useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { Link } from "react-router-dom"
import Popup from "../Components/Popup"
import { removeContact } from "../Redux/action"

const Contacts = () => {

    const [isOpen, setIsOpen] = useState(false)
    const [singleContact, setSingleContact] = useState({})
    let data = undefined
    const AllContacts = useSelector((store) => store.contacts)
    const dispatch = useDispatch()
    // console.log(AllContacts)

    const togglePopup = (contact) => {

        setSingleContact(contact)

        setIsOpen(!isOpen)


    }
    useEffect(() => {

    }, [dispatch, AllContacts.length])
    return (
        <div className="flex justify-center items-center h-screen ">
        <div className="justify-center pt-16 text-gray-50   p-4  w-full max-w-screen-lg mx-auto bg-neutral-200 ">
            
            {AllContacts.length == 0 && <div className=" m-auto w-fit p-4 align-middle text-slate-800 justify-center">

            <div className="m-auto w-40 h-40">
            <svg class="h-32 w-32 text-yellow-400"  fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
</svg>
 </div>
           <br></br>
                <h1 className="font-sans text-3xl hover:font-serif ">No Contact Found Please add contact from <br /> Create Contact Button</h1>
            </div>}
            <div className="m-6">
                <button className="rounded-full bg-yellow-400 hover:bg-slate-950 text-slate-800 hover:text-zinc-100 p-3 text-2xl border border-black">
                    <Link to="/contact_form">
                        Create Contact
                    </Link>
                </button>

            </div>
            <div id="contact_list" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 overflow-auto max-h-80 ">

                {
                    AllContacts.map((el) => {
                        return <div key={el.id} className="bg-yellow-50 rounded-lg shadow-md m-4 p-4 text-slate-950 ">
                            <div onClick={() => togglePopup(el)} className="w-3/4 m-auto  ">
                            <svg class="h-24 w-24 text-yellow-400"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="10" x2="9.01" y2="10" />  <line x1="15" y1="10" x2="15.01" y2="10" />  <path d="M9.5 15a3.5 3.5 0 0 0 5 0" /></svg>
                                 <div className="p-4">
                                    {isOpen &&
                                        <Popup close={() => togglePopup(data)} el={singleContact} />

                                    }
                                </div>    <div className="text-left">
                                    <p>First Name : {el.first_name}</p>
                                    <p>Last Name  : {el.last_name}</p>
                                    {/* <p>Mobile   : {el.mob}</p> */}
                                    <p>Status     : {el.status == "active" ? "Active" : "Inactive"}</p>
                                </div>

                            </div>

                            <div className="flex justify-between my-2">
                                <Link to={`edit/${el.id}`}>
                                    <button className="rounded p-2 bg-slate-600 text-zinc-100">

                                        Edit
                                    </button>
                                </Link>

                                <button onClick={() => dispatch(removeContact(el.id))} className="rounded p-2 bg-yellow-400 text-slate-800">Delete</button>
                            </div>
                        </div>
                    })
                }


            </div>

        </div>
        </div>
    )
}

export default Contacts