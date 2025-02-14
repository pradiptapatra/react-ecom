import React, { useContext, useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import { FaAngleDown } from "react-icons/fa";
import Dialog from '@mui/material/Dialog';
import { IoSearchOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import Slide from '@mui/material/Slide';
import { MyContext } from '../../../App';

const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="up" ref={ref} {...props} />;
  });

  
function CountryDropdown() {
    const [isOpenModal, setisOpenModal] = useState(false);
    const [selectedTab, setSelectedTab] = useState(null);
    const [countryList, setCountryList] = useState([]);
    const context = useContext(MyContext);

    const selectedCountry = (index, country) => {
        setSelectedTab(index);
        setisOpenModal(false);
        context.setSelectedCountry(country);
    }

    useEffect(() => {
        setCountryList(context.countryList);
    },[context.countryList]);

    const filterCountryList = (e) => {
        const searchkey = e.target.value.toLowerCase();
        console.log(searchkey);

        if(searchkey) {
            const list = countryList.filter((item)=>{
                return item.country.toLowerCase().includes(searchkey);
            });
            setCountryList(list);
        } else {
            setCountryList(context.countryList);
        }        
    }

    return ( 
        <>
            <Button className='countryDrop' onClick={() => setisOpenModal(true)}>
                <div className="info d-flex flex-column"> 
                    <span className="label">Your Location</span>
                    <span className="name">
                        {
                            context.selectedCountry ?
                                context.selectedCountry?.substr(0,20)
                            : 'Select Location'
                        }
                    </span>
                </div>
            </Button>

            <Dialog open={isOpenModal} TransitionComponent={Transition} onClose={() => setisOpenModal(false)} className='locationModal'>
                <h4>Choose your Delivery Locations</h4>
                <p>Enter your address and we will specify the offer for Your area.</p>
                <Button className='close_' onClick={() => setisOpenModal(false)}><MdClose /></Button>

                <div className="headerSearch w-100">
                    <input type="text" placeholder="Search your area..." onChange={filterCountryList} />
                    <Button><IoSearchOutline /></Button>
                </div>

                <ul className='countryList'>
                    {
                        countryList?.length > 0 && countryList.map((item, index) => {
                            return (
                                <li key={index}>
                                    <Button className={selectedTab === index ? 'active' : ''} onClick={() => selectedCountry(index, item.country)}>{item.country}</Button>
                                </li>
                            )
                        })
                    }
                </ul>
            </Dialog>
        </>
    );
}

export default CountryDropdown;