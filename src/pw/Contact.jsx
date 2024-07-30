export default function Contact(){
    return(
        <>
          <div className="bg-white h-screen pt-14 " id="contact">
            <div className="text-center pt-4 ">
            CONTACT
            </div>
            <div className="text-center lg:text-5xl text-3xl pt-4 ">
            Get in Touch with Me!
            </div>
            <div className="lg:flex gap-16 pt-8 mx-4 lg:mx-0 ">  
            <div  className="pt-10 lg:pr-48 pl-12 lg:ml-28 bg-slate-200 rounded-xl h-full pb-9  mb-6 mx-2">  
            <div className="pt-5 ">
               <div>
               <i class="fa-solid fa-location-dot"></i>
               </div>
               <div className="pt-1">
               Our Office:
               </div>
               <div className="pt-1">
               Jurain,Dhaka Bangladesh
               </div>
               </div>


         <div className="pt-11">
            <div>
            <i class="fa-solid fa-phone"></i>
            </div>
            <div className="pt-1">
            Contact Number:
            </div>
            <div className="pt-1">
            +1234321321
            </div>
         </div>

        <div className="pt-11">
            <div>
            <i class="fa-solid fa-envelope"></i>
            </div>
            <div className="pt-1">
            Email Us:
            </div>
            <div className="pt-1">
            websitename@mail.com
            </div>
        </div>
        
        </div>


        <div className="bg-slate-200 lg:pl-16 pl-9 pt-6 lg:pr-16 pr-8 rounded-xl mx-2">
            <div>
               <div className="lg:flex lg:gap-16 ">
                   <div>
                    <div>
                      Full Name
                    </div>
                    <div className="lg:pt-4 pt-1">
                    <input type="text" placeholder="Your Name" className=" w-full p-3 px-4  bg-gray-50  rounded-lg border-2 border-gray-300" name="name" />
                    </div>
                   </div>
                   <div>
                      <div className="pt-3 lg:pt-0">
                      Email Address
                      </div>
                      <div className="lg:pt-4 pt-1">
                      <input type="email" placeholder="Your Email" className="form-input w-full p-3 lg:px-4 bg-gray-50  rounded-lg border-2 border-gray-300" name="email" />
                       </div>
                   </div>

                 </div>

                 <div>
                  <div className="lg:pt-7 pt-3">
                  Your Message
                  </div>
                  <div className="lg:pt-0 pt-1">
                  <textarea className=" lg:w-full w-full p-2 bg-gray-50  xl:mt-3 rounded-lg border-2 border-gray-300" cols="65" rows="8" placeholder="Start writing message here" name="message"></textarea>
                    </div>
                 </div>
                 <div className="pb-5">
                 <button className=" mb-3 mt-4 bg-gray-700 hover:bg-gray-600 text-white font-semibold py-3 px-3 rounded-lg xl:mx-auto">
                  Send me message <i class="fa-solid fa-envelope"></i>
                </button>

                 </div>


            </div>
        </div>




        </div>
        <div className="text-center pt-11">
        Copyright @2024, 
        <a  className="font-semibold p-1" href="#home">Abish</a> All Rights Reserved.
        </div>



          </div>


        </>
    )
}