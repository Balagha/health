import React from 'react';
function BasicInfo (){
    return(
                    <div style={{margin:'25px'}}>

                        {/* 2nd section start*/}
                        <div style={{marginLeft:'45px',border: '1px solid black',borderRadius: '15px', height:'270px', width:'650px'}}>
                                <div style={{margin:'25px'}}>
                                        <table style={{width: '70%'}}>
                                                <tr style={{color: 'black', fontSize: '140%', borderColor:'#aaaaaa', borderStyle:'solid'}}>
                                                    <td>Basic Info</td>
                                                </tr>
                                                <tr style={{color: 'black', fontSize: '90%', borderColor:'#aaaaaa', borderStyle:'solid'}}>
                                                    <td>Some info may be visible to other people<br/>using health service</td>
                                                </tr><br/>
                                                <tr style={{fontSize: '100%', color: 'black', borderColor:'#aaaaaa', borderStyle:'solid'}}>
                                                    <td>Name</td>
                                                    <td>Bill Gates</td>
                                                </tr><br/>
                                                <tr style={{color: 'black', fontSize: '100%', borderColor:'#aaaaaa', borderStyle:'solid'}}>
                                                    <td>Birthday</td>
                                                    <td>October 28, 1955</td>
                                                </tr><br/>
                                                <tr style={{color: 'black', fontSize: '100%', borderColor:'#aaaaaa', borderStyle:'solid'}}>
                                                    <td>Gender</td>
                                                    <td>Male</td>
                                                </tr>
                                        </table>
                                </div>
                            </div>
                        {/* 2nd section end*/}

                    </div>
    )
}

export default BasicInfo;