import kane1 from "/src/assets/kane/kane1.jpg"
export default function About() {
    return(
        <>

     <div className="bg-white lg:pt-16 lg:h-screen pt-12" id="about">
        <div className=" lg:flex md:flex gap-5 lg:ps-20 mx-6 ">
        <div className="bg-white  border  rounded-xl lg:p-12 lg:mt-6 mt-9 px-10 pt-10 ">
            <div className="">
        <img src={kane1} width={300} height={300} className="rounded-2xl  " />
        </div>
        <div className="text-center md: lg:pt-7 lg:pb-4 pb-2 text-2xl pt-2">
        Abish
        </div>
        <div className=" pt-2  border  rounded-xl text-center pb-2  ">
        Available for Work <i class="fa-solid fa-circle"></i>
        </div >
        <div className="text-center pt-7 flex  pb-6 mx-7 ">
            <div className="lg:ml-11 border  rounded-xl p-3">
            <i class="fa-brands fa-facebook"></i>
            </div>
            <div className="lg:ml-11 border  rounded-xl p-3 ml-4">
            <i class="fa-brands fa-x-twitter"></i>
            </div>
            <div className="lg:ml-11 border  rounded-xl p-3 ml-4"> 
            <i class="fa-brands fa-linkedin-in"></i>
            </div>
            <div className="lg:ml-11 border  rounded-xl p-3 ml-4">
            <i class="fa-brands fa-github"></i>
            </div>
        
         </div>
    
        </div>


        <div className="bg-white lg:p-10 md:pt-7">
            <div className="lg:text-6xl lg:pt-12 text-2xl pt-5 lg:ml-0 ml-3  ">
           <p>Hello, I’m Abish, </p> <p> <span className="border rounded-xl"> Framer Developer</span> and UX / </p> <p>UI Designer Based in</p>  California.
            </div>
            <div className="lg:pt-5 pt-5 lg:ml-0 ml-3">
                <button className="border bg-black text-white rounded-xl lg:p-5 p-2" >Download CV <i class="fa-solid fa-download"></i></button>
             </div>
             <div className="lg:flex md:flex lg:pt-7  lg:gap-28 lg:ml-16 pt-7 ml-5">
                <div>
                    <p className=""> <i class="fa-solid fa-arrow-right -rotate-45 pr-3"></i>Logo Design </p>
                    <p className="lg:pt-8 pt-3"><i class="fa-solid fa-arrow-right -rotate-45 pr-3"></i> Branding Identity </p>
                    <p className="lg:pt-8 pt-3"> <i class="fa-solid fa-arrow-right -rotate-45 pr-3"></i>Web Design</p>
                </div>
                <div >
                    <p className="lg:pt-0 pt-3 " ><i class="fa-solid fa-arrow-right -rotate-45 pr-3"></i>Social Marketing </p>
                    <p className="lg:pt-8 pt-3"><i class="fa-solid fa-arrow-right -rotate-45 pr-3"></i> Digital Marketing</p>
                    <p className="lg:pt-8 pt-3"><i class="fa-solid fa-arrow-right -rotate-45 pr-3"></i> Product Design</p>
                </div>
             </div>
         
        </div>


     </div>



     </div>
        
        </>
    )
     
}