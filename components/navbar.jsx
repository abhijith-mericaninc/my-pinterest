"use client";
import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useUserAuth } from "../components/UserAuthContext";

const Navbar = () => {
  const { user, logOut, googleSignIn } = useUserAuth();

  const router = useRouter();

  //signin
  const handleGoogleSignIn = async (e) => {
    e.preventDefault();
    try {
      await googleSignIn();
      router.push("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="navbar   flex justify-between w-[95%] px-6 ">
      <div className="flex">
        <Link href="./" className="w-20">
          <img
            src="./pinlogo.png"
            alt="logo"
            width={20}
            height={20}
          />
        </Link>
        <Link href="./" className="btn btn-active bg-red-600 ml-4">
          Home
        </Link>
        
        <Link href="./" className="btn btn-active bg-red-600 ml-4">
          Explore
        </Link>
      

      </div>
      <div className="form-control">
      <input type="text" placeholder="search" className=" border-4 w-80 p-3 rounded-full" />
        </div>
      <div className="flex-none gap-2">
        <div className="flex gap-4">
          <button
            onClick={() => router.push("/create-post")}
            className="btn btn-success"
          >
            Create post
          </button>

          {user ? (
            <>
              <button
                onClick={() => logOut()}
                className="btn btn-outline btn-error"
              >
                signOut
              </button>
              <button
                onClick={() => router.push("/profile")}
                className="btn btn-outline btn-primary"
              >
                Profile
              </button>
            </>
          ) : (
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-active btn-ghost "
            >
              Login
            </button>
          )}
        </div>
        
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-20 rounded-full">
              {user ? (
                <img src={user.photoURL} alt="dscdscds" />
              ) : (
                <img src="./profile.jpg"
                alt="profile"
                width={80}
                height={80}
                
                />
              )}
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
          >
            <li>
              <Link href="./profile" className="justify-between">
               Add new account
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;