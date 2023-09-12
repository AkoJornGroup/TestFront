import React, {FormEventHandler, useState} from "react";
import Head from "next/head";
import Image from "next/image";
import { NextPage } from "next";
import { signIn } from "next-auth/react";
import { useRouter } from "next/router";
import toast, {Toaster} from "react-hot-toast";

export const loginEO: NextPage = (props): JSX.Element => {
    const [info, setInfo] = useState({"email": "", "password": ""});
    const router = useRouter();
    const handleSubmit:FormEventHandler<HTMLFormElement> = async (e) => {
        //validation here
        e.preventDefault();


        const res = await signIn('credentials', {
            "email": info.email,
            "password": info.password,
            redirect: false,
            //callbackUrl: '/main', //change this to main page
            
        });

        if (res.error) {
            toast.error('Sign in failed , please check your email and password')
        }
        else{
            toast.success('Sign in success')
            router.push('/main')

        }

    }

    return (
        <>
            <Head>
                <title>Login as Event Organizer</title>
                <meta name="description" content="Generated by create-t3-app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main className="fixed top-0 left-0 right-0 bottom-0 bg-neutral-900">
                <Toaster />
                <div className='flex flex-row h-full'>
                    <div className="w-1/2 h-full">
                        <Image src="/images/loginsignup/1.png" width={500} height={500} style={{ width: '100%', height: '100%' }} alt="vdo" />
                    </div>
                    <div className="w-1/2 flex items-center justify-center h-full">
                        <div className="flex flex-col w-1/2">
                            <div className="flex flex-col justify-start">
                                <h1 className="font-montserrat text-white text-4xl font-bold">Sign In as</h1>
                                <h1 className="font-montserrat text-white text-4xl font-bold">Event Organizer</h1>
                                <div className="flex flex-col">
                                    <form onSubmit={handleSubmit}>
                                        <label className="font-montserrat text-white">Email</label>
                                        <span className="text-red-600 ml-1">*</span>
                                        <input 
                                            className="border-2 border-gray-300 rounded-md pl-2 w-full py-2" 
                                            type="email" 
                                            placeholder="me@email.com"
                                            value={info.email}
                                            onChange={(e) => {setInfo({...info, email: e.target.value})}}
                                        />
                                        <label className="font-montserrat text-white">Password</label>
                                        <span className="text-red-600 ml-1">*</span>
                                        <input 
                                            className="border-2 border-gray-300 rounded-md pl-2 w-full py-2" 
                                            type="password" 
                                            placeholder=""
                                            value={info.password}
                                            onChange={(e) => {setInfo({...info, password: e.target.value})}}
                                        />
                                        <div className="flex flex-row justify-between">
                                            <div>
                                            <input type="checkbox"></input>
                                            <span className="font-montserrat text-white pl-2">Remember me</span>
                                            </div>
                                            <a className="font-montserrat text-gray-500 pl-2" href="/resetpassword">Forgot password?</a> 
                                        </div> 
                                        <button className="hover:bg-black bg-white text-black border-2 border-white duration-300 hover:text-white font-bold py-2 w-full rounded mt-5" type="submit">
                                                Sign In
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="flex flex-row justify-between w-full">
                                <p className="font-montserrat text-white">Don&apos;t have an account?</p>
                                <a className="font-montserrat text-gray-500 pl-2 font-bold" href="/signup">Sign up</a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    )
}


export default loginEO