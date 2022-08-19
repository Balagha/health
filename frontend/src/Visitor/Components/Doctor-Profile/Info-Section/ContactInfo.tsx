import React from 'react';
function ContactInfo (){
    return(                 
        <div className="ml-[4.400rem] border border-black rounded-2xl h-[8.125rem] w-[80%]">
            {/* table start */}
                <div className="grid grid-rows-3 grid-flow-col gap-1 m-[1.563rem]">
                    <div className="grid grid-cols-2 divide-x-[0px] gap-0 border-b border-zinc-500">
                        <div className="col-span-2 text-black text-lg"> Contact Info
                        </div>
                    </div>

                    <div className="grid grid-cols-2 divide-x-[0px] gap-0 border-b border-zinc-500">
                            <div className="text-black text-lg"> 
                            Email 
                            </div>
                            <div className="text-black text-lg"> 
                            patelin@medi.org
                            </div>
                    </div>

                    <div className="grid grid-cols-2 divide-x-[0px] gap-0 ">
                            <div className="text-black text-lg"> 
                            Phone 
                            </div>
                            <div className="text-black text-lg"> 
                            (206) 709-3400
                            </div>
                    </div>

                </div>
                {/* table end */}
            </div>
        
    )
}

export default ContactInfo;