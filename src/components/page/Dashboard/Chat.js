import React from 'react';
import { AiOutlineSend } from 'react-icons/ai';
import { MdDeleteForever } from 'react-icons/md';

const Chat = () => {
      return (
            <div className='mb-20 px-4 lg:px-0'>
                <div className=''>
                <div class=" w-full lg:w-9/12  mx-auto border  shadow-md rounded-lg ">
        <div className="p-5 flex gap-4 border   justify-between rounded">
          <p>Any Question please send text</p>{" "}
          <p
            // onClick={messageDeleteHendeler}
            className="text-2xl text-red-600 cursor-pointer"
          >
            <MdDeleteForever></MdDeleteForever>
          </p>
        </div>
        <div className="h-[600px] p-8 overflow-y-scroll">
          {/* inbox left  */}
          <div className="flex"> </div>
          {/* {allMessages?.map((msg) =>
            data.name === msg.name ? ( */}
              <div className="flex justify-end">
                <div>
                  <div className="px-4 py-2 border bg-[#0C2D48]  rounded-xl mt-3">
                    <small className=" text-slate-300">
                        {/* {msg.name} */}
                        Dear Customer How cam i help You?
                    </small>{" "}
                    <small className="p-0 text-slate-300">
                      {/* <Moment fromNow>{msg.time}</Moment> */}
                    </small>
                    <p className=" font-normal  text-white">
                        {/* {msg?.message} */}
                        </p>
                  </div>
                </div>
              </div>
            {/* ) : ( */}
              <div className="flex  justify-start">
                {/* inbox right  */}
                <div>
                  <div className="px-5 py-2 border bg-[#050A30] text-white rounded-xl mt-3">
                    <small className="text-slate-300">
                        {/* {msg.name} */}
                    </small>{" "}
                    <small className="p-0 text-slate-300">
                      {/* <Moment fromNow>{msg.time}</Moment> */}
                    </small>
                    <p className="font-normal text-white">
                        {/* {msg.message} */}
                        </p>
                  </div>
                </div>
              </div>
            {/* )
          )} */}
          {/* <div ref={msgBoxRef}></div> */}
        </div>

        {/* inbox bottom  */}
        <div className="p-5 flex gap-4 border rounded">
          <input
            // value={message}
            // onKeyDown={hendelEnter}
            // onChange={callectTypingMessage}
            type="text"
            placeholder="Enter Message"
            class="input w-full  input-bordered  "
          />
          <div
            // onClick={onsabmit}
            className=" bg-[#0C2D48] flex gap-2 justify-center items-center text-white rounded px-8 w-28"
          >
            <span className="">Send</span>
            <span className="">
              <AiOutlineSend />
            </span>
          </div>
        </div>
        <p className='text-red-500 py-1'>Chat Functionality is not developed. Will be developed in the future.</p>
      </div>
     

                </div>
            </div>
      );
};

export default Chat;