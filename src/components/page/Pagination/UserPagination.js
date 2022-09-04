import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUser } from '../Futurecher/Slice/userSlice';

const UserPagination = () => {
      const disPatch = useDispatch();
      // const product = useSelector((state) => state.products);
      // console.log(product)
      const [prePage , setPrePage] = useState(1)
      // console.log(typeof prePage );
  
      const previousPageHendeler = () =>{
          if(prePage > 1){
              const pPage = prePage - 1
              setPrePage(pPage)
              disPatch(fetchUser(pPage))
            
  
          }
         
      }
     
      const nextPageHendeler = () =>{
          const pPage = prePage + 1
          setPrePage(pPage)
          disPatch(fetchUser(pPage))
  
      }
  
  
      const paginationHendeler = (page) =>{
          // const previousPage = setPrePage(page)
          // const newpage = prePage - 1
          // console.log(newpage);
  
      
          
         
          if(page == 1){
              setPrePage(page)
              disPatch(fetchUser(page))
             
             
          }
          if(page == 2){
            disPatch(fetchUser(page))
              setPrePage(page)
             
          }
          if(page == 3){
              setPrePage(page)
              disPatch(fetchUser(page))
             
          }
          if(page == 4){
              setPrePage(page)
              disPatch(fetchUser(page))
             
          }
          if(page == 5){
              setPrePage(page)
              disPatch(fetchUser(page))
             
          }
         
        
      }
      return (
            <div class="flex justify-center">
            <button onClick={()=>  previousPageHendeler()} href="#"
            disabled={prePage ==1 && "disabled"}
            className={prePage == 1 ? "px-4 py-2 mx-1  capitalize  rounded-md cursor-not-allowed  bg-red-200  text-white": "px-4 py-2 mx-1  capitalize  rounded-md cursor-not-allowed  bg-red-400  text-white"}>
                <div class="flex items-center -mx-1">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 16l-4-4m0 0l4-4m-4 4h18" />
                    </svg>
    
                    <span class="mx-1">
                        previous
                    </span>
                </div>
            </button>
    
            <button onClick={()=>  paginationHendeler(1)} className={prePage == 1? "bg-red-500 hidden px-4 py-2 mx-1 text-white transition-colors duration-200 transform  rounded-md sm:inline   " : "hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:text-white dark:hover:text-gray-200"} >
                1
            </button>
    
            <button onClick={()=>  paginationHendeler(2)} className={prePage == 2? "bg-red-500 hidden px-4 py-2 mx-1 text-white transition-colors duration-200 transform  rounded-md sm:inline   " : "hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:text-white dark:hover:text-gray-200"} >
                2
            </button>
    
            <button onClick={()=>  paginationHendeler(3)} className={prePage == 3? "bg-red-500 hidden px-4 py-2 mx-1 text-white transition-colors duration-200 transform  rounded-md sm:inline   " : "hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:text-white dark:hover:text-gray-200"} >
                3
            </button>
    
            <bttton onClick={()=>  paginationHendeler(4)} className={prePage == 4? "bg-red-500 hidden px-4 py-2 mx-1 text-white transition-colors duration-200 transform  rounded-md sm:inline   " : "hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:text-white dark:hover:text-gray-200"} >
                4
            </bttton>
    
            <button onClick={()=>  paginationHendeler(5)} className={prePage == 5? "bg-red-500 hidden px-4 py-2 mx-1 text-white transition-colors duration-200 transform  rounded-md sm:inline   " : "hidden px-4 py-2 mx-1 text-gray-700 transition-colors duration-200 transform bg-white rounded-md sm:inline dark:bg-gray-900 dark:text-gray-200 hover:text-white dark:hover:text-gray-200"} >
                5
            </button>
    
            <button onClick={()=>  nextPageHendeler() }  disabled={prePage ==5 && "disabled"} className={prePage == 5 ? "px-4 py-2 mx-1  capitalize  rounded-md cursor-not-allowed  bg-red-200  text-white": "px-4 py-2 mx-1  capitalize  rounded-md cursor-not-allowed  bg-red-400  text-white"}>
                <div class="flex items-center-mx-1">
                    <span class="mx-1">
                        Next
                    </span>
                    
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6 mx-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                </div>
            </button>
        </div>
      );
};

export default UserPagination;