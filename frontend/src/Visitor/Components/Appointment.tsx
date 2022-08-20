function Appointment(){
    return(
        <div className="max-w-7xl mx-auto mt-[4rem] text-center grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-0">
            <img className="" src="/images/appointment-image.jpg" alt="" />
            <div className="text-5xl font-bold pt-7 text-[#272727] text-left px-3.5">
                <h1 className="pb-10 sm:text-left text-center">Make an appointment </h1>
                <form>
                    <div className="grid gap-6 mb-6 md:grid-cols-2">
                        <div>
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Name
                            </label>
                            <input type="text" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Full Name"/>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Email
                            </label>
                            <input type="email" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Your Email"/>
                        </div>
                        <div>
                            <label className="block text-gray-700 text-sm font-semibold mb-2">
                                Select Date
                            </label>
                            <input type="text" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="mm/dd/yyyy">
                            </input>
                        </div>
                        <div>
                            <label  className="block text-gray-700 text-sm font-semibold mb-2">Select Department</label>
                            <select id="countries" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>General Health</option>
                                <option >Cardiology</option>
                                <option >Dental</option>
                                <option >Medical Research</option>
                            </select>
                        </div>

                    </div>
                    <div className=" mb-2">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Phone Number
                        </label>
                        <input type="tel" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Phone"/>
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-semibold mb-2">
                            Additional Message
                        </label>
                        <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Message..."></textarea>
                        {/* <input type="text" className="font-light text-sm rounded block w-full p-2.5 bg-slate-200/30 border-slate-700 placeholder-slate-400 placeholder: pb-[6rem] leading-tight focus:outline-none focus:shadow-outline" placeholder="Message"/> */}
                    </div>
                    <div className="mb-10">
                        <button type="submit" className="text-white bg-[#a5c422] focus:outline-none font-medium rounded text-sm w-[100%] px-5 py-4 text-center">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}
export default Appointment;