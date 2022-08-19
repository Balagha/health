import React from 'react';
function BasicInfo (){
    return(
        <div className="m-[1.563rem] ml-[4.400rem] border border-black rounded-2xl h-[8.125rem w-[80%]">
            {/* table start */}
                <div className="grid grid-rows-5 grid-flow-col gap-0 m-[1.563rem]">

                    <div className="row-span-2"> 
                        <span className="text-black text-2xl">Basic Info</span><br/>
                        <span className="text-black text-sm"> Some info may be visible to other people<br/>using health service</span><br/><br/>           
                    </div>

                    <div className="grid grid-cols-2 divide-x-[0px] gap-0">
                            <div className="text-black text-lg"> 
                            Name
                            </div>
                            <div className="text-black text-lg"> 
                            Dr. Paul Petelin
                            </div>
                    </div>

                    <div className="grid grid-cols-2 divide-x-[0px] gap-0 ">
                            <div className="text-black text-lg"> 
                            Birthday
                            </div>
                            <div className="text-black text-lg"> 
                            October 28, 1955
                            </div>
                    </div>

                    <div className="grid grid-cols-2 divide-x-[0px] gap-0 ">
                            <div className="text-black text-lg"> 
                            Gender
                            </div>
                            <div className="text-black text-lg"> 
                            Male
                            </div>
                    </div>

                </div>
                {/* table end */}
        </div>
    )
}

export default BasicInfo;