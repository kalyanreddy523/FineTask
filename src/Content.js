import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import MoneyOffCsredIcon from '@mui/icons-material/MoneyOffCsred';
import percentpic from './images/percentcircle.png';
import LocationSearchingIcon from '@mui/icons-material/LocationSearching';
import LunchDiningIcon from '@mui/icons-material/LunchDining';
import { Typography } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import BasicTable from './Table';
import Profilepic from './images/profile.jpeg';
import ratingcard from './images/ratingpic.png';

const Content = () => {
    return (
        <>
            <div className="container-fluid" style={{ backgroundColor: "rgb(20,19,22)",height:"88vh",overflowY:"auto" }}>
                <div className="row mt-3">
                    <div className="col-12 text-white">
                        <h4>Dashboard</h4>
                    </div>
                </div>
                <div className="row mt-3">
                    <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                        {/* <div className="d-flex justify-content-between"> */}
                            <div class="card" style={{ backgroundColor: "rgb(31,32,41)" }}>
                                <div class="card-body">
                                    <div class="card p-1" style={{ width: "35px", color: "rgb(69,102,244)", backgroundColor: "rgb(43,52,103)" }}>
                                        <AddShoppingCartIcon />
                                    </div>
                                    <p style={{ fontSize: "13px", fontWeight: "bold", color: "whitesmoke", marginTop: "4px" }}>Total Orders</p>
                                    <div className='d-flex justify-content-between'>
                                        <h3 style={{ color: "whitesmoke", fontWeight: "bold" }}>75</h3>
                                        <p style={{ paddingTop: "8px", fontWeight: "bold", color: "rgb(0,202,140)" }}>^3%</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            {/* first one */}
                            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                            <div class="card" style={{ backgroundColor: "rgb(31,32,41)" }}>
                                <div class="card-body">
                                    <div class="card p-1" style={{ width: "35px", color: "rgb(0,202,140)", backgroundColor: "rgb(17,80,66)" }}>
                                        <ShoppingBagIcon />
                                    </div>
                                    <p style={{ fontSize: "13px", fontWeight: "bold", color: "whitesmoke", marginTop: "4px" }}>Total Delivered</p>
                                    <div className='d-flex justify-content-between'>
                                        <h3 style={{ color: "whitesmoke", fontWeight: "bold" }}>70</h3>
                                        <p style={{ paddingTop: "8px", fontWeight: "bold", color: "rgb(245,93,96)" }}>^3%</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            {/* second one */}
                            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                            <div class="card" style={{ backgroundColor: "rgb(31,32,41)" }}>
                                <div class="card-body">
                                    <div class="card p-1" style={{ width: "35px", color: "rgb(245,93,96)", backgroundColor: "rgb(100,49,56)" }}>
                                        <ShoppingBagIcon />
                                    </div>
                                    <p style={{ fontSize: "13px", fontWeight: "bold", color: "whitesmoke", marginTop: "4px" }}>Total Cancelled</p>
                                    <div className='d-flex justify-content-between'>
                                        <h3 style={{ color: "whitesmoke", fontWeight: "bold" }}>05</h3>
                                        <p style={{ paddingTop: "8px", fontWeight: "bold", color: "rgb(0,202,140)" }}>^3%</p>
                                    </div>
                                </div>
                            </div>
                            </div>
                            {/* third one */}
                            <div className="col-xs-6 col-sm-6 col-md-3 col-lg-2 col-xl-2 col-xxl-2 mb-3">
                            <div class="card" style={{ backgroundColor: "rgb(31,32,41)" }}>
                                <div class="card-body">
                                    <div class="card p-1" style={{ width: "35px", color: "rgb(222,64,155)", backgroundColor: "rgb(85,37,69)" }}>
                                        <MoneyOffCsredIcon />
                                    </div>
                                    <p style={{ fontSize: "13px", fontWeight: "bold", color: "whitesmoke", marginTop: "4px" }}>Total Revenue</p>
                                    <div className='d-flex justify-content-between'>
                                        <h4 style={{ color: "whitesmoke", fontWeight: "bold" }}>$12k</h4>
                                        <p style={{ paddingTop: "7px", fontWeight: "bold", color: "rgb(245,93,96)" }}>^3%</p>
                                    </div>
                                </div>
                            </div>
                            {/* fourth one */}
                        {/* </div> */}
                        {/* cards */}
                    </div>
                    <div className='col-sm-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4'>
                        <div class="card" style={{backgroundColor: "rgb(31,32,41)"}}>
                                <p className='text-white' style={{fontSize:"10px",padding:"2px"}}>Net Profit</p>
                        <div className='d-flex justify-content-around'>
                            <div>
                            <h3 style={{color:"whitesmoke",fontWeight:"bold"}}>$6759.25</h3>
                            </div>
                            <div>
                            <img src={percentpic} className='img-fluid rounded'/>
                            <p className='text-white' style={{fontSize:"6px"}}>The Value here is Rounded Off</p>
                            </div>
                        </div>
                        <div className='d-flex ps-4 pt-1'>
                        <p style={{ fontWeight: "bold", color: "rgb(245,93,96)" }}>^3%</p>
                        </div>
                        </div>
                    </div>
                </div>
                {/* second row */}
                <div className='row mt-1'>
                    <div className='col-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 mt-2'>
                        <div className='card' style={{backgroundColor: "rgb(31,32,41)"}}>
                            <div className='d-flex justify-content-between p-2'>
                            <h3 style={{color:"whitesmoke"}}>Activity</h3>
                            <button className='btn rounded' style={{backgroundColor:"rgb(76,78,82)",color:"whitesmoke",fontSize:"13px"}}>Weekly^</button>
                            </div>
                            <img src='https://ethresear.ch/uploads/default/original/2X/b/ba02e6504df71d003af68cab5a66f2ab3619ee40.png' className='img-fluid p-2 rounded' style={{height:"180px"}}/>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4 mt-2'>
                        <div className='card' style={{backgroundColor: "rgb(31,32,41)"}}>
                            {/* firstone */}
                            <div className='d-flex justify-content-between p-3'>
                                <div className='d-flex'>
                                <div style={{borderRadius:"95%",padding:"10px",backgroundColor:"rgb(100,49,56)"}}>
                                    <LocationSearchingIcon style={{color:"rgb(245,93,96)"}}/>
                                </div>
                                <Typography style={{color:"whitesmoke",marginTop:"10px",paddingLeft:"5px"}}>Goals</Typography>
                                </div>
                                <div style={{}}>
                                    <button style={{marginTop:"10px",paddingBottom:"5px",borderRadius:"100%",backgroundColor:"rgb(76,78,82)",color:"whitesmoke",fontWeight:"bold"}}>></button>
                                </div>
                            </div>
                            {/* second One */}
                            <div className='d-flex justify-content-between p-3'>
                                <div className='d-flex'>
                                <div style={{borderRadius:"95%",padding:"10px",backgroundColor:"rgb(43,52,103)"}}>
                                    <LunchDiningIcon style={{color:"rgb(69,102,244)"}}/>
                                </div>
                                <Typography style={{color:"whitesmoke",marginTop:"10px",paddingLeft:"5px"}}>Popular Dishes</Typography>
                                </div>
                                <div style={{}}>
                                    <button style={{marginTop:"10px",paddingBottom:"5px",borderRadius:"100%",backgroundColor:"rgb(76,78,82)",color:"whitesmoke",fontWeight:"bold"}}>></button>
                                </div>
                            </div>
                            {/* Third one */}
                            <div className='d-flex justify-content-between p-3'>
                                <div className='d-flex'>
                                <div style={{borderRadius:"95%",padding:"10px",backgroundColor:"rgb(32,74,97)"}}>
                                    <FastfoodIcon style={{color:"rgb(66,142,183)"}}/>
                                </div>
                                <Typography style={{color:"whitesmoke",marginTop:"10px",paddingLeft:"5px"}}>Menus</Typography>
                                </div>
                                <div style={{}}>
                                    <button style={{marginTop:"10px",paddingBottom:"5px",borderRadius:"100%",backgroundColor:"rgb(76,78,82)",color:"whitesmoke",fontWeight:"bold"}}>></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Third row */}
                <div className='row mt-3'>
                    <div className='col-12 col-md-12 col-lg-8 col-xl-8 col-xxl-8 mb-2'>
                        <div className='card' style={{backgroundColor: "rgb(31,32,41)"}}>
                        <h3 style={{color:"whitesmoke",padding:"3px"}}>Recent Orders</h3>
                        <div className='p-3'>
                            <BasicTable/>
                        </div>
                        </div>
                    </div>
                    <div className='col-12 col-md-12 col-lg-4 col-xl-4 col-xxl-4'>
                        <div className='card' style={{backgroundColor: "rgb(31,32,41)"}}>
                            <h4 style={{color:"whitesmoke",padding:"3px"}}>Customer`s Feedback</h4>
                            <div className='p-1'>
                            <div>
                                <img src={Profilepic} style={{borderRadius:"100%"}} className='img-fluid'/>
                                <span style={{paddingLeft:"3px",color:"whitesmoke"}}>Kalyan Reddy</span>
                            </div>
                            <div className='d-flex justify-content-between mt-1'>
                            <img src={ratingcard} className='rounded'/>
                            <p></p>
                            </div>
                            <div className='mt-1'>
                                <Typography style={{color:"whitesmoke",fontSize:"10px"}}>
                                “The food here is absolutely delicious! Every dish we tried was bursting with flavor and cooked to perfection. Highly recommend the [insert dish name] and [insert dish name].”
                                </Typography>
                            </div>
                            <hr style={{color:"whitesmoke"}}/>
                            </div>
                            <div className='p-1'>
                            <div>
                                <img src={Profilepic} style={{borderRadius:"100%"}} className='img-fluid'/>
                                <span style={{paddingLeft:"3px",color:"whitesmoke"}}>Kalyan Reddy</span>
                            </div>
                            <div className='d-flex justify-content-between mt-1'>
                            <img src={ratingcard} className='rounded'/>
                            <p></p>
                            </div>
                            <div className='mt-1'>
                                <Typography style={{color:"whitesmoke",fontSize:"10px"}}>
                                “The food here is absolutely delicious! Every dish we tried was bursting with flavor and cooked to perfection. Highly recommend the [insert dish name] and [insert dish name].”
                                </Typography>
                            </div>
                            <hr style={{color:"whitesmoke"}}/>
                            </div>
                            <div className='p-1'>
                            <div>
                                <img src={Profilepic} style={{borderRadius:"100%"}} className='img-fluid'/>
                                <span style={{paddingLeft:"3px",color:"whitesmoke"}}>Kalyan Reddy</span>
                            </div>
                            <div className='d-flex justify-content-between mt-1'>
                            <img src={ratingcard} className='rounded'/>
                            <p></p>
                            </div>
                            <div className='mt-1'>
                                <Typography style={{color:"whitesmoke",fontSize:"10px"}}>
                                “The food here is absolutely delicious! Every dish we tried was bursting with flavor and cooked to perfection. Highly recommend the [insert dish name] and [insert dish name].”
                                </Typography>
                            </div>
                            <hr style={{color:"whitesmoke"}}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Content;