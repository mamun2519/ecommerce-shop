import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAdmin } from "../Futurecher/Slice/getallAdminSlice";
import { fetchUser } from "../Futurecher/Slice/userSlice";
import AdminPagenation from "../Pagination/AdminPagenation";
import UserPagination from "../Pagination/UserPagination";
import Loading from "../Utilitis/Loading";
import AdminTableRow from "./AdminTableRow";
import UserRow from "./UserRow";

const User = () => {
  const [searchText, setSearchText] = useState();
  const [searchAdmin, setSearchAdmin] = useState();
  const disPatch = useDispatch();
  const user = useSelector((state) => state.users);
  const admin = useSelector((state) => state.admins);
  console.log(admin);
  useEffect(() => {
    disPatch(fetchUser());
    disPatch(fetchAdmin());
  }, []);
  const searchHendeler = () => {
    disPatch(fetchUser(searchText));
  };
  const searchAdminHendeler = () => {
    disPatch(fetchAdmin(searchAdmin));
  };



  return (
    <div>
      <section class="py-1 bg-blueGray-50">
        <div class="w-full  mb-12 xl:mb-0 px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md border rounded ">
            <div class="rounded-t mb-0 px-2 py-3 border-0">
              <div class="lg:flex block flex-wrap items-center">
                <div class="relative w-full p2-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-center lg:text-left text-base text-blueGray-700">
                    All User List
                  </h3>
                </div>
                <div class="relative w-full mt-2  px-4 max-w-full flex-grow flex-1 text-right">
                  <div className="relative ">
                    <input
                      onChange={(e) => setSearchText(e.target.value)}
                      className="w-full h-12  lg:w-9/12 border search outline-none rounded-lg px-4 "
                      placeholder="Search User Name"
                      type="text"
                      name=""
                      id=""
                    />
                    <button
                      onClick={() => searchHendeler()}
                      className="h-10 mt-1 bg-[#062C30] px-4 text-white rounded-lg absolute right-[5px]"
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
                  <tr className="bg-[#062C30] text-white sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
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
                  {user?.users?.user?.length > 0 ? (
                    <>
                      {" "}
                      {user.loading && <Loading></Loading>}
                      {!user.loading && user.error ? <p>{user.error}</p> : ""}
                      {!user.loading && !user.error ? (
                        <>
                          {user?.users?.user?.map((user, i) => (
                            <UserRow key={user._id} user={user}></UserRow>
                          ))}
                        </>
                      ) : null}
                    </>
                  ) : (
                    <tr className="flex justify-center">
                      <p className=" py-2 text-red-500 font-medium">
                        User Not Found
                      </p>
                    </tr>
                  )}
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
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* admin table  */}
      <section class="py-1 bg-blueGray-50 mt-10">
        <div class="w-full  mb-12 xl:mb-0 px-4">
          <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-md border rounded ">
            <div class="rounded-t mb-0 px-2 py-3 border-0">
              <div class="lg:flex block flex-wrap items-center">
                <div class="relative w-full p2-4 max-w-full flex-grow flex-1">
                  <h3 class="font-semibold text-center lg:text-left text-base text-blueGray-700">
                    All Admin List
                  </h3>
                </div>
                <div class="relative w-full mt-2 px-4 max-w-full flex-grow flex-1 text-right">
                  <div className="relative ">
                    <input
                      onChange={(e) => setSearchAdmin(e.target.value)}
                      className="w-full h-12  lg:w-9/12 border search outline-none rounded-lg px-4 "
                      placeholder="Search Admin Name"
                      type="text"
                      name=""
                      id=""
                    />
                    <button
                      onClick={() => searchAdminHendeler()}
                      className="h-10 mt-1 bg-[#062C30] px-4 text-white rounded-lg absolute right-[5px]"
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
                  <tr className="bg-[#062C30] text-white sm:table-row rounded-l-lg sm:rounded-none mb-2 sm:mb-0">
                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Admin Profile
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
                      Remove Admin
                    </th>

                    <th class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left">
                      Action
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {admin?.admins?.user?.length > 0 ? (
                    <>
                      {" "}
                      {admin.loading && <Loading></Loading>}
                      {!admin.loading && admin.error ? (
                        <p>{admin.error}</p>
                      ) : (
                        ""
                      )}
                      {!admin.loading && !admin.error ? (
                        <>
                          {admin?.admins?.user?.map((user, i) => (
                            <AdminTableRow
                              key={user._id}
                              user={user}
                            ></AdminTableRow>
                          ))}
                        </>
                      ) : null}
                    </>
                  ) : (
                    <tr className="flex justify-center">
                      <p className=" py-2 text-red-500 font-medium">
                        User Not Found
                      </p>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
            <div class="rounded-t mb-0 px-2 py-3 border-t">
              <div class="flex flex-wrap items-center">
                <div class="relative w-full p2-4 max-w-full  flex justify-center">
                  <h3 class="font-semibold text-base text-blueGray-700">
                    <AdminPagenation />
                  </h3>
                </div>
                <div class="relative w-full px-4 max-w-full flex-grow flex-1 text-right"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default User;
