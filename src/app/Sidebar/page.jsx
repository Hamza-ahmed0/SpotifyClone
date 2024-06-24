import React from 'react'
import { GoHome } from "react-icons/go";
import { IoSearch } from "react-icons/io5";
import { BiLibrary } from "react-icons/bi";
import { FaPlus } from "react-icons/fa6";
import Link from 'next/link';
import { AiOutlineGlobal } from "react-icons/ai";

export default function Sidebar() {
    return (
        <div className='w-1/4'>
            <div className='nav secondary_bg rounded-md p-8'>
                <div className='flex items-center gap-4'>
                    <GoHome className='text-xl font-bold' />
                    <span className='text-xl'>Home</span>
                </div>
                <div className='flex items-center gap-4 mt-2'>
                    <IoSearch className='text-xl font-bold' />
                    <span className='text-xl'>Search</span>
                </div>
            </div>

            <div className='libarry secondary_bg rounded-t-lg py-2 px-2 mt-2'>
                <div className='flex px-4 justify-between items-center gap-2'>
                    <div className='flex gap-2 items-center'>
                        <BiLibrary className='text-xl font-bold' />
                        <span className='text-xl'>Your Library</span>
                    </div>
                    <button className='hover:bg-black/25 rounded-[50%] p-1'>
                        <FaPlus className='text-xl font-bold' />
                    </button>

                </div>

                <div className='h-40 overflow-y-scroll py-0 mt-4'>
                    <div className='libarry tertiary_bg leading-6 rounded-lg py-6 px-4 mt-5'>
                        <h2 className='font-bold'>Create Your First Playlist</h2>
                        <h4 className='font-bold mt-1'>It's easy, we'll help you</h4>

                        <button className='rounded-full text-black mt-6 px-2 py-1 bg-white font-semibold'>
                            Create Playlist
                        </button>
                    </div>

                    <div className='libarry tertiary_bg leading-6 rounded-lg p-4 mt-6'>
                        <h2 className='font-bold'>Let's find some podcast to follow</h2>
                        <h4 className='font-bold mt-1'>we'll keep you update on new episodes</h4>

                        <button className='rounded-full text-black mt-6 px-2 py-1 bg-white font-semibold'>
                            Browse Podcast
                        </button>
                    </div>

                </div>

            </div>


            <div className='secondary_bg rounded-b-lg py-2 px-2'>
                <div className="mt-4 px-4 flex flex-wrap gap-2">
                    <Link href="#" className='text-xs mx-2 mt-2'>Legal</Link>
                    <Link href="#" className='text-xs mx-2 mt-2'>Safety&Privacycenter</Link>
                    <Link href="#" className='text-xs mx-2 mt-2'>PrivacyPolicy</Link>
                    <Link href="#" className='text-xs mx-2 mt-2'>Cookies</Link>
                    <Link href="#" className='text-xs mx-2 mt-2'>About Ads</Link>
                    <Link href="#" className='text-xs mx-2 mt-2'>Accesibility</Link>

                </div>

                <button className='mt-4 rounded-full border-white flex items-center mx-4 border gap-2 px-3 py-1'><AiOutlineGlobal /><sapn className="font-bold">English</sapn></button>
            </div>


        </div>
    )
}
