import React , {use, useEffect, useState} from 'react'
import user from '../../../public/images/events/user.png'
import Editprofile from '../../components/eachprofileeiment/edit_profile'
import edit_profile from '../../components/eachprofileeiment/edit_profile';
import { Form } from 'react-bootstrap';
import { set, useForm } from 'react-hook-form';
import { clear } from 'console';



interface edit_profile {
    Firstname : string;
    Lastname : string;
    Email : string;
    Phone : string;
}



const profilepage = (props:any) => {
    
    const Event = props
    const [inputst,Setinputst] = useState('')
    console.log("Event",Event)
    const [show1,Setshow1] = useState(true)
    const [show2,Setshow2] = useState(false)
    const [show3,Setshow3] = useState(false)
    const setshowfunc =(e)=>{
        console.log(e)
        if(e === "show1"){
            Setshow1(true)
            Setshow2(false)
            Setshow3(false)
            console.log("show1")
        }
        if(e === "show2"){
            Setshow1(false)
            Setshow2(true)
            Setshow3(false)
            console.log("show2")
        }
        if(e === "show3"){
            Setshow1(false)
            Setshow2(false)
            Setshow3(true)
            console.log("show3")
        }
    }
    const submitefromeditprofile = () => {
        const inputfname = document.getElementById('inputFirstname').value;
        const inputlname = document.getElementById('inputlastname').value;
        const inputemail = document.getElementById('inputemail').value;
        const inputmb = document.getElementById('inputmobile phone').value;
        const Jsonedit:edit_profile = {
            Firstname: inputfname.value,
            Lastname: inputlname,
            Email: inputemail,
            Phone: inputmb,
        }
        console.log("Jsonedit: ",Jsonedit)
    }
    return(
        <>
        <div className=' flex justify-center gap-10 '>
            <div className='  w-[18%] bg-white    mt-20 shadow-lg rounded-2xl  '>
                    <div className=' grid justify-items-center h-1/2 bg-white rounded-2xl w-full grid-cols-1'>
                        <div className=' h-5'></div>
                        <img src=  {"images/events/user.png"}   className='  h-[120px] justify-center '/>
                        <h1 className='text-xl font-montserrat text-center mt-1 text-black font-bold'>{Event.Name}</h1> {/*ใช้ตรงนี้ */}
                        <h2 className='text-xl font-montserrat text-center text-gray-400'>{Event.Gmail}</h2>
                        <div className='h-1 w-4/5 bg-slate-200 mt-4 rounded-2xl  mb-4'></div>
                    </div>
                    <div className=' h-1/2  rounded-2xl w-full'>
                            <button className=' flex h-1/3 bg-white hover:bg-slate-50 shadow-2xl cursor-pointer w-full ' value="show1" onClick={() => {setshowfunc("show1")}}  >
                            {
                                show1 && <div className=' w-2 h-3/4 mt-2 bg-black' ></div>
                            }
                            {
                                show1 &&<h1 className=' text-3xl py-4 pl-4 font-montserrat  font-bold md:text-2xl sm:text-xl '>Edit Profile</h1>
                            }
                            {
                                !show1 && <h1 className=' text-3xl py-4 pl-6 font-montserrat md:text-2xl sm:text-xl'>Edit Profile</h1>
                            }
                            </button>
                    
                        <button className=' flex h-1/3 bg-white hover:bg-slate-50 shadow-lg cursor-pointer w-full' value="show2" onClick={() => {setshowfunc("show2")}}>
                            {
                            show2 && <div className=' w-2 h-3/4 bg-black mt-2 '></div>
                            }
                            {
                              !show2 &&  <h1 className=' text-3xl py-4 pl-6 font-montserrat md:text-2xl  sm:text-xl' >Change Password</h1>
                            }
                            {
                                show2 &&  <h1 className=' text-3xl py-4 pl-6 font-montserrat font-bold md:text-2xl sm:text-xl'>Change Password</h1>
                            }
                        </button>
                        <button className=' flex h-1/3 bg-white hover:bg-slate-50  rounded-b-2xl cursor-pointer w-full' value="show3" onClick={() =>{setshowfunc("show3")}}>
                            {
                                show3 && <div className=' w-2 h-3/4 bg-black mt-2 '></div>
                            }
                            {
                                !show3 &&<h1 className=' text-3xl py-4 pl-6 font-montserrat md:text-2xl'>Staff</h1>
                            }
                            {
                                show3 &&<h1 className=' text-3xl py-4 pl-6 font-montserrat font-bold md:text-2xl'>Staff</h1>
                            }
                        </button>
                    </div>
            </div>
            {/* edit profile */}

            {show1 &&
            
                <div className='justify-end  w-3/5 h-full bg-white mt-20 rounded-2xl shadow-xl'>
                <div className=' mt-20  mx-14'>
                    <h1 className='text-4xl  font-montserrat  font-bold'>Edit Profile</h1>
                
                        <div className='flex mt-5 '>
                            <h1 className='text-2xl  font-montserrat  font-medium mt-1 '>First Name</h1>
                            <h1 className='text-2xl  font-montserra text-red-600 font-bold ml-1'>*</h1>
                            <h1 className='text-sm  font-montserrat text-gray-500 ml-10 pt-3'>as it appears on ID card or passport</h1>
                            <h1 className='text-2xl  font-montserrat  font-medium ml-24 mt-1 '>Last Name</h1>
                            <h1 className='text-2xl  font-montserra text-red-600 font-bold'>*</h1>
                            <h1 className='text-sm  font-montserrat text-gray-500 ml-10 pt-3'>as it appears on ID card or passport</h1>
                        </div>
                        <div className='flex mt-2 gap-14'>
                                <input type="text" id='inputFirstname' value={inputst}  className=' border-gray-300 w-[46%]  h-12  border-2 rounded-lg pl-4 text-2xl  font-montserra pb-2' />
                                <input type="text" id='inputlastname' className=' border-gray-300 w-[46%]  h-12  border-2 rounded-lg pl-4 text-2xl  font-montserra pb-2' />
                        </div>
                        <div className='flex mt-5 '>
                            <h1 className='text-2xl  font-montserrat  font-medium mt-1'>Email</h1>
                            <h1 className='text-2xl  font-montserra text-red-600 font-bold ml-1 '> *</h1>
                            <h1 className='text-2xl  font-montserrat  font-medium  mt-1 ml-[43%]'>Mobile Phone Number</h1>
                        </div>
                        <div className='flex mt-2 gap-14'>
                            <input type="text" id='inputemail' className=' border-gray-300 w-[46%]  h-12  border-2 rounded-lg pl-4 text-2xl  font-montserra pb-2' />
                            <input type="tel" id='inputmobile phone' className=' border-gray-300 w-[46%]  h-12  border-2 rounded-lg pl-4 text-2xl  font-montserra pb-2' />
                        </div>
                    <div className='flex justify-end w-full mb-10'>
                        <button className=' items-end w-3/12 h-12 bg-black mt-10 rounded-2xl ' onClick={() => submitefromeditprofile()}>
                            <h1 className=' text-white text-xl  font-montserrat font-semibold '>Save</h1>
                        </button>
                    </div>
                </div>
                </div> 
            }
            {/* change password */}
            { show2 &&

                <div className='justify-end  w-3/5 h-full  bg-white mt-20 rounded-2xl shadow-xl'>
                 <div className=' mt-20  mx-14'>
                    <h1 className='text-4xl  font-montserrat  font-bold'>Change Password</h1>
                    <div className='flex mt-5 '>
                        <h1 className='text-2xl  font-montserrat  font-medium mt-1 '>Current Password</h1>
                        <h1 className='text-2xl  font-montserra text-red-600 font-bold ml-1'>*</h1>
                        
                    </div>
                    <div className='flex mt-2 gap-14'>
                        <input type="text" 
                        placeholder='Enter Current Password'
                        className=' border-gray-300 w-[46%]  h-12  border-2 rounded-lg pl-4 text-2xl  font-montserra pb-2' />
                    </div>
                    <div className='flex mt-5 '>
                        <h1 className='text-2xl  font-montserrat  font-medium mt-1'>New Password</h1>
                        <h1 className='text-2xl  font-montserra text-red-600 font-bold ml-1 mr-5  '> *</h1>
                        <h1 className='text-2xl  font-montserrat  font-medium  mt-1  xl:ml-80 lg:ml-36 '>Password Confirmation</h1>
                        <h1 className='text-2xl  font-montserra text-red-600 font-bold ml-1 mr-9'> *</h1>
                    </div>
                    <div className='flex mt-2 gap-14'>
                        <input type="text"
                        placeholder='Enter New Password' 
                        className=' border-gray-300 w-[46%]  h-12  border-2 rounded-lg pl-4 text-2xl  font-montserra pb-2' />
                        <input type="text" 
                        placeholder='Confirm Your New Password'
                        className=' border-gray-300 w-[46%]  h-12  border-2 rounded-lg pl-4 text-2xl  font-montserra pb-2' />
                    </div>
                    <div className='flex justify-end w-full mb-10'>
                        <button className=' items-end w-3/12 h-12 bg-black mt-10 rounded-2xl '>
                            <h1 className=' text-white text-xl  font-montserrat font-semibold '>Save</h1>
                        </button>
                    </div>
                   
                    </div>
                </div>     
                
            }
            {/* Staff */}
            {
                show3 && 
                <div className='grid grid-row-1 grid-col-1 place-content-center w-3/5 h-full  bg-white mt-20 rounded-2xl shadow-xl'>
                    <div className='items-center'>
                         <h1 className=' text-8xl font-montserrat font-bold'>EVENT</h1>
                    </div>
                </div>
            }
        </div>
           
        </>
        
    )
}
export default profilepage