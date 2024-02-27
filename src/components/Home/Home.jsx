
import './home.css'
import { FaGlobe } from "react-icons/fa6";

import { FiPhone } from "react-icons/fi";
      import { FaFacebook } from "react-icons/fa";
const Home = () => {
  return (
    <div>

      <div className='imgOne'>
        <img  src="https://i.ibb.co/D74qD76/logo.png" alt="" />
      </div>

      <div className='second-part'>

        <div className='imgTwo'>
       <img src="https://i.ibb.co/FxRDKhz/1.png" alt="" />

        </div>

        <div>

      <h2 className='textOne'> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.</h2>
     <ul className='textTwo'>
     <li>
     C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.
     </li>
     <li>
     C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient <br /> smart pumps with IoT enabled control panel. 
     </li>
     </ul>

   <div className='imgThree'>
   <img src="https://i.ibb.co/kBtdmMV/2.png" alt="" />
   </div>
   <h2 className='textFour'>Government of India has awarded the "National Energy Conservation Award 2018". Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, <br /> Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.</h2>
        </div>

      </div>


     <div className='third-part'>
      <h2>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. </h2>
       <img src="https://i.ibb.co/qjQfSYN/3.png" alt="" />
       <h2>
Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h2>
       
       <div className='line'>

       </div>


     <h2>
     C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS
     </h2>
     <div className="categories ">
  CHEMICALS & PROCESS <span>|</span>
  POWER <span>|</span>
 WATER & WASTE WATER <span>|</span>
  OILS & GAS <span>|</span>
  PHARMA <span>|</span>
  SUGARS & DISTILLERIES <span>|</span>
  PAPER & PULP <span>|</span>
  MARINE & DEFENCE<span>|</span>
  METAL & MINING <span>|</span>
 FOOD & BEVERAGE <br />
 PETROCHEMICAL & REFINERIES <span>|</span>
  SOLAR <span>|</span>
 BUILDING HVAC <span>|</span>
  FIRE FIGHTING <span>|</span>
  AGRICULTURE & RESIDENTIAL
</div>

     </div>
     

     <div className='four-part '>
      <div className='phone'>
      

     <FiPhone className='ph'/>
    <h2>Toll free 1800 200 1234</h2>
      </div>
      <div className='facebook'>
      <FaFacebook className='fb'/>
     <h2>www.facebook.com/cripumps</h2>
      </div>
      <div className='globe'>
        <FaGlobe className='gb'/>
     <h2>www.crigroups.com</h2>
        
      </div>
     </div>

    </div>
  );
};

export default Home;