import './header.css';
import { useState } from 'react';
import ReactLoading from "react-loading";
import { FaHome,FaCube,FaCompactDisc,FaMapMarker,FaShoppingBag,FaTruck,FaRegNewspaper,FaBarcode,FaEnvira } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';


 function Header(){
    const [loading,setloading]=useState(false);
    const navigate = useNavigate();
    const[arr,setarr]=useState([])
    const [value,setvalue]=useState({name:"",mail:"",number:"",image:""})
    
    const changehandle=(e)=>{
        setvalue({...value,[e.target.name]:e.target.value}) 
        
         
    }

    let {name,mail,number,image} = value;

    function clickes(e){
        e.preventDefault();
        setarr([...arr,{name,mail,number,image}]);

    }

   

    function deletes(i){
        arr.splice(i,1);
        setarr([...arr]);
    }
   
    function click(){
    setloading(true);
     setTimeout(()=>{
       setloading(false);
       navigate("/products");
       
     },5000)
   
     
    }
   
     return (
       
      <div>
      
       <div className='col1'>
       <i className='icon'><FaEnvira></FaEnvira></i>
      <h4>Inventory<br></br> Management</h4>
      <h1>Hi Admin</h1>
      <nav>
       <ul>
         <li id='Dashboard' ><i><FaHome></FaHome></i>Dashboard</li>
         <li onClick={click}><i><FaCube></FaCube></i>Products</li>
         <li><i><FaCompactDisc></FaCompactDisc></i>Inventory/Alerts</li>
         <li><i><FaMapMarker></FaMapMarker></i>Locations</li>
         <li><i><FaShoppingBag></FaShoppingBag></i>Sales</li>
         <li><i><FaTruck></FaTruck></i>Shipments</li>
         <li><i><FaRegNewspaper></FaRegNewspaper></i>Reports</li>
         <li><i><FaBarcode></FaBarcode></i>Barcode Scanner</li>
       </ul>
      </nav>
   
      </div>
      <div className='top'>
       <b>Location</b><br></br>
   <select>
     <option>Mumbai</option>
     <option>Chennai</option>
   </select>
   <button className='logout'>Logout</button>
      </div>
      <div className='dashboard'>
       <h2>Purchase Orders</h2>
      </div>
      <div className='load'>{loading?
       <ReactLoading type="bars" color="#0000FF"
                   height={100} width={50} />:null
      }</div>
      
      <div className='end'>
       <p className='p1'>@2023 Code Titan's&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;PRIVACY POLICY</p><br></br>
       <p className='p2'>All Rights Reserved&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;TERMS & CONDITIONS</p>
      </div>
   
      
     
      </div>
     );
 }

 export default Header;