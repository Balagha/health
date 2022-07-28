import React from 'react';
function ContactInfo (){
    return(
                    <div style={{margin:'25px'}}>

                        {/* 3rd section start*/}
                        <div style={{marginLeft:'45px', border: '1px solid black',borderRadius: '15px', height:'130px', width:'650px'}}>
                                <div style={{margin:'25px'}}>
                                    <table style={{width: '100%'}}>
                                            <tr style={{color: 'black', fontSize: '140%', borderBottomWidth:'1px', borderColor:'#aaaaaa', borderStyle:'solid'}}>
                                                <td>Contact Info</td>
                                            </tr>
                                            <tr style={{fontSize: '100%', color: 'black', borderBottomWidth:'1px', borderColor:'#aaaaaa', borderStyle:'solid'}}>
                                                <td>Email</td>
                                                <td>bill.gates@gatefoundation.org</td>
                                            </tr>
                                            <tr style={{color: 'black', fontSize: '100%', borderColor:'#aaaaaa', borderStyle:'solid'}}>
                                                <td>Phone</td>
                                                <td>(206) 709-3400</td>
                                            </tr>
                                    </table>
                                </div>
                            </div>
                            {/* 3rd section end*/}

                    </div>
    )
}

export default ContactInfo;