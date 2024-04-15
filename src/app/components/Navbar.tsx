import Link from "next/link";
import { SignedIn, SignedOut } from '@clerk/nextjs';
import { SignInButton, UserButton } from '@clerk/nextjs';


function Navbar() {
    return (
        <nav className="fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300">
            <a href='/' className="uppercase font-bold text-md h-12 flex items-center">
                Lolja - Artists
            </a>
            <div className='flex items-center gap-8'>
                <SignedIn>
                    <UserButton/>                    
                </SignedIn>
                <SignedOut>
                    <SignInButton mode='modal'>
                        <button className="uppercase bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
                            Login 
                        </button>
                    </SignInButton>
                </SignedOut>
            </div>
        </nav>
    );
}

export default Navbar;
