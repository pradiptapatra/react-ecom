import { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '@mui/material/Button';
import { IoIosMenu } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";


const Navbar = () => {

    const [isOpenSidebarNav, setIsOpenSidebarNav] = useState(false);

    return (
        <>
            <nav>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-2 navPart1 ">
                            <div className="catWrapper">
                                <Button className="allCatTab align-items-center" onClick={() => setIsOpenSidebarNav(!isOpenSidebarNav)}>
                                    <span className='icon1 mr-2'><IoIosMenu /></span>
                                    <span>ALL CATEGORY</span>
                                    <span className='icon2 ml-2'><FaAngleDown /></span>
                                </Button>
                                <div className={`sidebarNav ${isOpenSidebarNav ? 'open' : ''}`}>
                                    <ul>
                                        <li>
                                            <Link to="/">
                                                <Button>
                                                    <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" width="20" className="mr-2" /> Fashion 
                                                </Button>
                                            </Link>
                                            <div className="submenu">
                                                <Link to="/">
                                                    <Button>Men<span className="MuiTouchRipple-root css-w0pj6f"></span></Button>
                                                </Link>
                                                <Link to="/">
                                                    <Button>Women<span className="MuiTouchRipple-root css-w0pj6f"></span></Button>
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <Button>
                                                    <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" width="20" className="mr-2" /> Fashion 
                                                </Button>
                                            </Link>
                                            <div className="submenu">
                                                <Link to="/">
                                                    <Button>Men<span className="MuiTouchRipple-root css-w0pj6f"></span></Button>
                                                </Link>
                                                <Link to="/">
                                                    <Button>Women<span className="MuiTouchRipple-root css-w0pj6f"></span></Button>
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <Button>
                                                    <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" width="20" className="mr-2" /> Fashion 
                                                </Button>
                                            </Link>
                                            <div className="submenu">
                                                <Link to="/">
                                                    <Button>Men<span className="MuiTouchRipple-root css-w0pj6f"></span></Button>
                                                </Link>
                                                <Link to="/">
                                                    <Button>Women<span className="MuiTouchRipple-root css-w0pj6f"></span></Button>
                                                </Link>
                                            </div>
                                        </li>
                                        <li>
                                            <Link to="/">
                                                <Button>
                                                    <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" width="20" className="mr-2" /> Fashion 
                                                </Button>
                                            </Link>
                                            <div className="submenu">
                                                <Link to="/">
                                                    <Button>Men<span className="MuiTouchRipple-root css-w0pj6f"></span></Button>
                                                </Link>
                                                <Link to="/">
                                                    <Button>Women<span className="MuiTouchRipple-root css-w0pj6f"></span></Button>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-sm-10 navPart2 d-flex align-items-center res-nav-wrapper close">
                            <div className="res-nav-overlay"></div>
                            <div className="res-nav">
                                <ul className="list list-inline ml-auto">
                                    <li className="list-inline-item">
                                        <Link to="/">
                                            <Button>
                                                <img src="https://api.spicezgold.com/download/file_1734525204708_fash.png" width="20" className="mr-2" /> Fashion
                                            </Button>
                                        </Link>
                                        <div className="submenu false">
                                            <Link to="/">
                                                <Button>Men<span className="MuiTouchRipple-root css-w0pj6f"></span></Button>
                                            </Link>
                                            <Link to="/">
                                                <Button>Women<span className="MuiTouchRipple-root css-w0pj6f"></span></Button>
                                            </Link>
                                        </div>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/">
                                            <Button>
                                                <img src="https://api.spicezgold.com/download/file_1734525218436_ele.png" width="20" className="mr-2" /> Electronics<span className="MuiTouchRipple-root css-w0pj6f"></span>
                                            </Button>
                                        </Link>
                                        <div className="submenu false"><a href="/products/subCat/673ed55d2ec02680644f2793">
                                        <Button>Laptops<span className="MuiTouchRipple-root css-w0pj6f"></span></Button></a><a href="/products/subCat/67415b21f1e1da2b3de3ba8b"><Button>Smart Watch Accessories<span className="MuiTouchRipple-root css-w0pj6f"></span></Button></a><a href="/products/subCat/67415b2cf1e1da2b3de3ba91"><Button>Cameras<span className="MuiTouchRipple-root css-w0pj6f"></span></Button></a></div>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/">
                                            <Button>
                                                <img src="https://api.spicezgold.com/download/file_1734525231018_bag.png" width="20" className="mr-2" /> Bags<span className="MuiTouchRipple-root css-w0pj6f"></span>
                                            </Button>
                                        </Link>
                                        <div className="submenu false"><a href="/products/subCat/67654614268bafadd987e5aa"><Button>Men Bags<span className="MuiTouchRipple-root css-w0pj6f"></span></Button></a><a href="/products/subCat/6765461d268bafadd987e5b0"><Button>Women Bags<span className="MuiTouchRipple-root css-w0pj6f"></span></Button></a></div>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/">
                                            <Button>
                                                <img src="https://api.spicezgold.com/download/file_1734525239704_foot.png" width="20" className="mr-2" /> Footwear<span className="MuiTouchRipple-root css-w0pj6f"></span>
                                            </Button>
                                        </Link>
                                        <div className="submenu false"><a href="/products/subCat/67654629268bafadd987e66e"><Button>Men Footwear<span className="MuiTouchRipple-root css-w0pj6f"></span></Button></a><a href="/products/subCat/67654631268bafadd987e679"><Button>Women FootWear<span className="MuiTouchRipple-root css-w0pj6f"></span></Button></a></div>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/">
                                            <Button>
                                                <img src="https://api.spicezgold.com/download/file_1734525248057_gro.png" width="20" className="mr-2" /> Groceries<span className="MuiTouchRipple-root css-w0pj6f"></span>
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/">
                                            <Button>
                                                <img src="https://api.spicezgold.com/download/file_1734525255799_beauty.png" width="20" className="mr-2" /> Beauty<span className="MuiTouchRipple-root css-w0pj6f"></span>
                                            </Button>
                                        </Link>
                                    </li>
                                    <li className="list-inline-item">
                                        <Link to="/">
                                            <Button>
                                                <img src="https://api.spicezgold.com/download/file_1734525275367_well.png" width="20" className="mr-2" /> Wellness<span className="MuiTouchRipple-root css-w0pj6f"></span>
                                            </Button>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;