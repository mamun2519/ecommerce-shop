import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../Futurecher/Slice/userSlice';
import UserPagination from '../Pagination/UserPagination';
import Loading from '../Utilitis/Loading';
import UserRow from './UserRow';

const User = () => {
      const [searchText, setSearchText] = useState()
      const disPatch = useDispatch();
      const user = useSelector((state) => state.users);
     
      useEffect(()=>{
            disPatch(fetchUser())
      },[])
      const searchHendeler = () => {
            disPatch(fetchUser(searchText));
          };

          console.log(user)
      return (
            <div>
                  <section class="py-1 bg-blueGray-50">
        <div class="w-full  mb-12 xl:mb-0 px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md border rounded ">
            <div class="rounded-t mb-0 px-2 py-3 border-0">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full p2-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-base text-blueGray-700">
                  All User List
                  </h3>
                </div>
                <div class="relative w-full  px-4 max-w-full flex-grow flex-1 text-right">
                <div className="relative ">
        <input
          onChange={(e) => setSearchText(e.target.value)}
          className="w-full h-12  lg:w-9/12 border search outline-none rounded-lg px-4 "
          placeholder="Search User"
          type="text"
          name=""
          id=""
        />
        <button
          onClick={() => searchHendeler()}
          className="h-10 mt-1 bg-red-500 px-4 text-white rounded-lg absolute right-[5px]"
        >
          Search
        </button>

       
      </div>
                </div>
              </div>
            </div>

            <div class="block w-full overflow-x-auto">
              <table class="items-center bg-transparent w-full border-collapse ">
                <thead>
                  <tr className="bg-teal-400 sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                   User Profile
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     Name
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Email
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                     Role
                    </th>
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Make Admin
                    </th>
                
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {user?.users?.user?.length > 0 ? <> {user.loading && <Loading></Loading>}
            {!user.loading && user.error ? <p>{user.error}</p> : ""}
            {!user.loading && !user.error ? (
              <>
                {user?.users?.user?.map((user , i) => (
                  <UserRow key={user._id} user={user} ></UserRow>
                ))}
              </>
            ) : null}</> : "No User Found"}
               
                  
                  
                </tbody>
              </table>
            </div>
            <div class="rounded-t mb-0 px-2 py-3 border-t">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full p2-4 max-w-full  flex justify-center">
                  <h3 class="font-semibold text-base text-blueGray-700">
                  <UserPagination></UserPagination>
                  
                  </h3>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right">
                
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
            </div>
      );
};

export default User;