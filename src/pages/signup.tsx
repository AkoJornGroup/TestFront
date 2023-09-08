import React,{ useState } from 'react';
import Head from "next/head";
import Image from "next/image";
import { Toaster, toast } from 'react-hot-toast'
import { useRouter } from 'next/router';

const Signup = () => {
    const [info, setInfo] = useState({email: "", password: "", password_confirmation: "", first_name: "", last_name: ""});
    const router = useRouter();

    const onSubmit = async (e:React.FormEvent) => {
        console.log(info)
        e.preventDefault();
        if (info.password !== info.password_confirmation) {
            toast.error('Password does not match')
            return
        }
        else if (info.password.length < 8) {
            toast.error('Password must be at least 8 characters')
            return
        }
        else {
            toast.loading('Signing up...')
            const sendInfo = {email: info.email, password: info.password, firstName: info.first_name, lastName: info.last_name}
            console.log(sendInfo)
            try{
                const res = await fetch('https://eventbud-jujiu2awda-uc.a.run.app/signup',{
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(sendInfo)
                })
                if(!res.ok){
                    toast.remove()
                    toast.error('Sign up failed')
                }
                else{
                    toast.remove()
                    toast.success('Sign up success')
                    router.push('/auth/signin')
                }
            }
            catch(err){
                toast.remove()
                toast.error('There is an error')
            }
        }
    }

    return(
        <>
            <Toaster />
            <Head>
                <title>Sign Up</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="fixed top-0 left-0 right-0 bottom-0 bg-gray-100">
                <div className='flex flex-row h-full'>
                    <Toaster />
                    <div className="w-1/2 h-full">
                        <Image src="/images/1login.png" width={500} height={500} style={{ width: '100%', height: '100%' }} alt="vdo" />
                    </div>
                    <div className="w-1/2 flex items-center justify-center h-full">
                        <div className="flex flex-col w-1/2">
                            <div className="flex flex-col justify-start">
                                <h1 className="font-montserrat text-4xl font-bold">Sign Up</h1>
                                <form onSubmit={onSubmit}>
                                        <label className="font-montserrat" htmlFor='email_signUp'>Email</label>
                                        <span className="text-red-600 ml-1">*</span>
                                        <input className="border-2 border-gray-300 rounded-md pl-2 w-full py-2" type="email" placeholder="Email" id='email_signUp'
                                            value={info.email}
                                            onChange={e => setInfo({...info, email: e.target.value})}
                                            name="email"
                                            required
                                        />
                                        <label className="font-montserrat" htmlFor='password_signUp'>Password</label>
                                        <span className="text-red-600 ml-1">*</span>
                                        <input className="border-2 border-gray-300 rounded-md pl-2 w-full py-2" type="password" placeholder="" id='password_signUp' minLength={8} maxLength={20}
                                            value={info.password}
                                            onChange={e => setInfo({...info, password: e.target.value})}
                                            name="password"
                                            required
                                        />
                                        <label className="font-montserrat" htmlFor='confirm_password_signUp'>Password Confirmation</label>
                                        <span className="text-red-600 ml-1">*</span>
                                        <input className="border-2 border-gray-300 rounded-md pl-2 w-full py-2" type="password" placeholder="" id='confirm_password_signUp' minLength={8} maxLength={20}
                                            value={info.password_confirmation}
                                            onChange={e => setInfo({...info, password_confirmation: e.target.value})}
                                            name="password_confirmation"
                                            required
                                        />
                                        <label className="font-montserrat" htmlFor='firstName_signUp'>First Name</label>
                                        <span className="text-red-600 ml-1">*</span>
                                        <input className="border-2 border-gray-300 rounded-md pl-2 w-full py-2" type="text" placeholder="" id='firstName_signUp'
                                            value={info.first_name}
                                            onChange={e => setInfo({...info, first_name: e.target.value})}
                                            name="first_name"
                                            required
                                        />
                                        <label className="font-montserrat" htmlFor='lastName_signUp'>Last Name</label>
                                        <span className="text-red-600 ml-1">*</span>
                                        <input className="border-2 border-gray-300 rounded-md pl-2 w-full py-2" type="text" placeholder="" id='lastName_signUp'
                                            value={info.last_name}
                                            onChange={e => setInfo({...info, last_name: e.target.value})}
                                            name="last_name"
                                            required
                                        />
                                        <button className="bg-black border-2 hover:bg-white hover:text-black active:scale-95 border-black duration-300 text-white font-bold py-2 w-full rounded mt-10" type="submit">Sign Up</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
export default Signup;