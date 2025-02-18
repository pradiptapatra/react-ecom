import React, { useState } from "react";
import Slider from "react-slick";
import HomeBanner from "../Components/Headers/HomeBanner";
import HomeCategory from "../Components/Home/HomeCategory";
import { Tabs, Tab, Box, Typography, Grid, Paper } from "@mui/material";
import { Rating } from "@mui/material";
import { IconButton } from "@mui/material";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import ZoomOutMapOutlinedIcon from '@mui/icons-material/ZoomOutMapOutlined';

const tabData = [
    {
      label: "Fashion",
      items: ["T-Shirts", "Jeans", "Jackets", "Shoes"],
    },
    {
      label: "Electronics",
      items: ["Mobiles", "Laptops", "Headphones", "Cameras"],
    },
    {
      label: "Groceries",
      items: ["Fruits", "Vegetables", "Beverages", "Snacks"],
    },
    {
      label: "Beauty",
      items: ["Makeup", "Skincare", "Haircare", "Perfumes"],
    },
    {
        label: "Bags",
        items: ["T-Shirts", "Jeans", "Jackets", "Shoes"],
    },
    {
        label: "Footwear",
        items: ["Mobiles", "Laptops", "Headphones", "Cameras"],
    },
    {
        label: "Wellness",
        items: ["Fruits", "Vegetables", "Beverages", "Snacks"],
    },
    {
        label: "Jewelry",
        items: ["Makeup", "Skincare", "Haircare", "Perfumes"],
    },
];

function Home() {

    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        centerMode: true,
        variableWidth: true, // Ensures width is flexible
        autoplay: false, // Enables auto-scroll
        autoplaySpeed: 2000
    };
    
    return (
        <>
            <HomeBanner />
            <HomeCategory />
            
            <section class="homeProducts pb-0">
                <div class="container">
                    <div class="row homeProductsRow">
                        <div class="col-md-3">
                            <div class="sticky">
                                <div class="banner mb-3">
                                    <a class="box" href="/products/subCat/673ed55d2ec02680644f2793">
                                        <img src="https://api.spicezgold.com/download/file_1734525757507_NewProject(34).jpg" class="w-100 transition" alt="banner img" />
                                    </a>
                                </div>
                                <div class="banner mb-3">
                                    <a class="box" href="/products/category/670f54a3e86c762e3cad6cb3">
                                        <img src="https://api.spicezgold.com/download/file_1734525767798_NewProject(35).jpg" class="cursor w-100 transition" alt="banner img" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-9 productRow">
                            <div class="d-flex align-items-center res-flex-column">
                                <div class="info" style={{width: "35%"}}>
                                    <h3 class="mb-0 hd">Popular Products</h3>
                                    <p class="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                                </div>
                                <div class="ml-auto d-flex align-items-center justify-content-end res-full" style={{width: "65%"}}>
                                    <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                                        <Tabs
                                            value={value}
                                            onChange={handleChange}
                                            variant="scrollable"
                                            scrollButtons="auto"
                                            aria-label="scrollable tabs"
                                            className="filterTabs"
                                        >
                                            {tabData.map((tab, index) => (
                                                <Tab key={index} label={tab.label} />
                                            ))}
                                        </Tabs>
                                    </Box>

                                    {/* <Box sx={{ p: 3 }}>
                                        <Grid container spacing={2}>
                                        {tabData[value].items.map((item, index) => (
                                            <Grid item xs={6} sm={4} md={3} key={index}>
                                            <Paper sx={{ p: 2, textAlign: "center", bgcolor: "#f5f5f5" }}>
                                                <Typography>{item}</Typography>
                                            </Paper>
                                            </Grid>
                                        ))}
                                        </Grid>
                                    </Box> */}
                                </div>
                            </div>
                            <div class="product_row w-100 mt-2" style={{ opacity: 1 }}>
                                <Slider {...settings}>
                                    <div key={0} className="item" style={{width: "222px"}}>
                                        <div class="productItem undefined">
                                            <div class="img_rapper">
                                                <a href="#">
                                                    <div class="productItemSliderWrapper">
                                                        <div class="img1 transition">
                                                            <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                                <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693615931_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-produc-Copy.webp" />
                                                            </span>
                                                        </div>
                                                        <div class="img2 transition">
                                                            <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                                <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693649180_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-pro(1).webp" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                                <span class="badge badge-primary">20%</span>
                                                <div class="actions">
                                                    <IconButton size="large">
                                                        <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                                    </IconButton>

                                                    <IconButton size="large">
                                                        <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                            <div class="info" title="Lenovo Ideapad Slim 3 Intel Core I5-12450H 15.6&quot; (39.6Cm) FHD IPS Thin &amp; Light Laptop (16GB/512GB SSD/Win 11/Office 2021/AleX/Backlit Keyboard/1 Year Warranty + ADP/3 Month Game Pass/Grey/1.62Kg), 83ER008DIN">
                                                <a href="/product/67655316268bafadd9885d57">
                                                    <h4>Lenovo Ideapad Slim ...</h4>
                                                </a>
                                                <span class="text-success d-block">In Stock</span>
                                                <Rating value={5} precision={0.5} size="small" readOnly />
                                                <div class="d-flex"><span class="oldPrice">Rs 42000</span><span class="netPrice text-danger ml-2">Rs 45000</span></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div  key={1} className="item" style={{width: "222px"}}>
                                        <div class="productItem undefined">
                                            <div class="img_rapper">
                                                <a href="#">
                                                    <div class="productItemSliderWrapper">
                                                        <div class="img1 transition">
                                                            <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                                <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693615931_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-produc-Copy.webp" />
                                                            </span>
                                                        </div>
                                                        <div class="img2 transition">
                                                            <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                                <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693649180_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-pro(1).webp" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                                <span class="badge badge-primary">20%</span>
                                                <div class="actions">
                                                    <IconButton size="large">
                                                        <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                                    </IconButton>

                                                    <IconButton size="large">
                                                        <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                            <div class="info" title="Lenovo Ideapad Slim 3 Intel Core I5-12450H 15.6&quot; (39.6Cm) FHD IPS Thin &amp; Light Laptop (16GB/512GB SSD/Win 11/Office 2021/AleX/Backlit Keyboard/1 Year Warranty + ADP/3 Month Game Pass/Grey/1.62Kg), 83ER008DIN">
                                                <a href="/product/67655316268bafadd9885d57">
                                                    <h4>Lenovo Ideapad Slim ...</h4>
                                                </a>
                                                <span class="text-success d-block">In Stock</span>
                                                <Rating value={5} precision={0.5} size="small" readOnly />
                                                <div class="d-flex"><span class="oldPrice">Rs 42000</span><span class="netPrice text-danger ml-2">Rs 45000</span></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div key={2} className="item" style={{width: "222px"}}>
                                        <div class="productItem undefined">
                                            <div class="img_rapper">
                                                <a href="#">
                                                    <div class="productItemSliderWrapper">
                                                        <div class="img1 transition">
                                                            <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                                <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693615931_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-produc-Copy.webp" />
                                                            </span>
                                                        </div>
                                                        <div class="img2 transition">
                                                            <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                                <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693649180_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-pro(1).webp" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                                <span class="badge badge-primary">20%</span>
                                                <div class="actions">
                                                    <IconButton size="large">
                                                        <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                                    </IconButton>

                                                    <IconButton size="large">
                                                        <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                            <div class="info" title="Lenovo Ideapad Slim 3 Intel Core I5-12450H 15.6&quot; (39.6Cm) FHD IPS Thin &amp; Light Laptop (16GB/512GB SSD/Win 11/Office 2021/AleX/Backlit Keyboard/1 Year Warranty + ADP/3 Month Game Pass/Grey/1.62Kg), 83ER008DIN">
                                                <a href="/product/67655316268bafadd9885d57">
                                                    <h4>Lenovo Ideapad Slim ...</h4>
                                                </a>
                                                <span class="text-success d-block">In Stock</span>
                                                <Rating value={5} precision={0.5} size="small" readOnly />
                                                <div class="d-flex"><span class="oldPrice">Rs 42000</span><span class="netPrice text-danger ml-2">Rs 45000</span></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div key={3} className="item" style={{width: "222px"}}>
                                        <div class="productItem undefined">
                                            <div class="img_rapper">
                                                <a href="#">
                                                    <div class="productItemSliderWrapper">
                                                        <div class="img1 transition">
                                                            <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                                <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693615931_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-produc-Copy.webp" />
                                                            </span>
                                                        </div>
                                                        <div class="img2 transition">
                                                            <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                                <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693649180_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-pro(1).webp" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                                <span class="badge badge-primary">20%</span>
                                                <div class="actions">
                                                    <IconButton size="large">
                                                        <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                                    </IconButton>

                                                    <IconButton size="large">
                                                        <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                            <div class="info" title="Lenovo Ideapad Slim 3 Intel Core I5-12450H 15.6&quot; (39.6Cm) FHD IPS Thin &amp; Light Laptop (16GB/512GB SSD/Win 11/Office 2021/AleX/Backlit Keyboard/1 Year Warranty + ADP/3 Month Game Pass/Grey/1.62Kg), 83ER008DIN">
                                                <a href="/product/67655316268bafadd9885d57">
                                                    <h4>Lenovo Ideapad Slim ...</h4>
                                                </a>
                                                <span class="text-success d-block">In Stock</span>
                                                <Rating value={5} precision={0.5} size="small" readOnly />
                                                <div class="d-flex"><span class="oldPrice">Rs 42000</span><span class="netPrice text-danger ml-2">Rs 45000</span></div>
                                            </div>
                                        </div>
                                    </div>

                                    <div key={4} className="item" style={{width: "222px"}}>
                                        <div class="productItem undefined">
                                            <div class="img_rapper">
                                                <a href="#">
                                                    <div class="productItemSliderWrapper">
                                                        <div class="img1 transition">
                                                            <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                                <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693615931_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-produc-Copy.webp" />
                                                            </span>
                                                        </div>
                                                        <div class="img2 transition">
                                                            <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                                <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693649180_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-pro(1).webp" />
                                                            </span>
                                                        </div>
                                                    </div>
                                                </a>
                                                <span class="badge badge-primary">20%</span>
                                                <div class="actions">
                                                    <IconButton size="large">
                                                        <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                                    </IconButton>

                                                    <IconButton size="large">
                                                        <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                                    </IconButton>
                                                </div>
                                            </div>
                                            <div class="info" title="Lenovo Ideapad Slim 3 Intel Core I5-12450H 15.6&quot; (39.6Cm) FHD IPS Thin &amp; Light Laptop (16GB/512GB SSD/Win 11/Office 2021/AleX/Backlit Keyboard/1 Year Warranty + ADP/3 Month Game Pass/Grey/1.62Kg), 83ER008DIN">
                                                <a href="/product/67655316268bafadd9885d57">
                                                    <h4>Lenovo Ideapad Slim ...</h4>
                                                </a>
                                                <span class="text-success d-block">In Stock</span>
                                                <Rating value={5} precision={0.5} size="small" readOnly />
                                                <div class="d-flex"><span class="oldPrice">Rs 42000</span><span class="netPrice text-danger ml-2">Rs 45000</span></div>
                                            </div>
                                        </div>
                                    </div>
                                </Slider>
                            </div>

                            <div class="d-flex align-items-center mt-2">
                                <div class="info w-75">
                                    <h3 class="mb-0 hd">NEW PRODUCTS</h3>
                                    <p class="text-light text-sml mb-0">New products with updated stocks.</p>
                                </div>
                            </div>

                            <div class="product_row productRow2 w-100 mt-4 d-flex productScroller ml-0 mr-0">
                                <div class="productItem undefined">
                                    <div class="img_rapper">
                                        <a href="/product/66e14052d7b24f428474f35a">
                                            <div class="productItemSliderWrapper">
                                                <div class="img1 transition">
                                                    <span class="lazy-load-image-background blur lazy-load-image-loaded" style={{color: "transparent", display: "inline-block"}}>
                                                        <img alt="image" class="w-100" src="https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-0-202403291512.webp" />
                                                    </span>
                                                </div>
                                                <div class="img2 transition">
                                                    <span class="lazy-load-image-background blur lazy-load-image-loaded" style={{color: "transparent", display: "inline-block"}}>
                                                    <img alt="image" class="w-100" src="https://api.spicezgold.com/download/file_1734527098974_poco-c61-4gb-ram-64gb-rom-ethereal-blue-smartphone-product-images-orvmh0bwivm-p608625324-1-202403291512.jpg" />
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                        <span class="badge badge-primary">10%</span>
                                        <div class="actions">
                                            <IconButton size="large">
                                                <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>

                                            <IconButton size="large">
                                                <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div class="info" title="POCO C61, 4GB RAM, 64GB ROM, Ethereal Blue, Smartphone">
                                        <a href="/product/66e14052d7b24f428474f35a"><h4>POCO C61, 4GB RAM, 6...</h4></a><span class="text-success d-block">In Stock</span>
                                        
                                        <Rating value={5} precision={0.5} size="small" readOnly />
                                        <div class="d-flex"><span class="oldPrice">Rs 15000</span><span class="netPrice text-danger ml-2">Rs 20000</span></div>
                                    </div>
                                </div>

                                <div class="productItem undefined">
                                    <div class="img_rapper">
                                        <a href="/product/66e14052d7b24f428474f35a">
                                            <div class="productItemSliderWrapper">
                                                <div class="img1 transition">
                                                    <span class="lazy-load-image-background blur lazy-load-image-loaded" style={{color: "transparent", display: "inline-block"}}>
                                                        <img alt="image" class="w-100" src="https://api.spicezgold.com/download/file_1734526033421_hp-15s-fr5012tu-standard-laptop-intel-core-i3-1215u-8-gb-512-gb-ssd-intel-uhd-graphics-windows-11-home-mso-fhd-39-6cm-15-6-inch-digital-o494421633-p609466420-0-202407041151.webp"
                                                    />
                                                    </span>
                                                </div>
                                                <div class="img2 transition">
                                                    <span class="lazy-load-image-background blur lazy-load-image-loaded" style={{color: "transparent", display: "inline-block"}}>
                                                        <img alt="image" class="w-100" src="https://api.spicezgold.com/download/file_1734526033421_hp-15s-fr5012tu-standard-laptop-intel-core-i3-1215u-8-gb-512-gb-ssd-intel-uhd-graphics-windows-11-home-mso-fhd-39-6cm-15-6-inch-digital-o494421633-p609466420-1-202407041151.webp" />
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                        <span class="badge badge-primary">10%</span>
                                        <div class="actions">
                                            <IconButton size="large">
                                                <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>

                                            <IconButton size="large">
                                                <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div class="info" title="POCO C61, 4GB RAM, 64GB ROM, Ethereal Blue, Smartphone">
                                        <a href="/product/66e14052d7b24f428474f35a"><h4>POCO C61, 4GB RAM, 6...</h4></a><span class="text-success d-block">In Stock</span>
                                        
                                        <Rating value={5} precision={0.5} size="small" readOnly />
                                        <div class="d-flex"><span class="oldPrice">Rs 15000</span><span class="netPrice text-danger ml-2">Rs 20000</span></div>
                                    </div>
                                </div>

                                <div class="productItem undefined">
                                    <div class="img_rapper">
                                        <a href="/product/66e14052d7b24f428474f35a">
                                            <div class="productItemSliderWrapper">
                                                <div class="img1 transition">
                                                    <span class="lazy-load-image-background blur lazy-load-image-loaded" style={{color: "transparent", display: "inline-block"}}>
                                                    <img alt="image" class="w-100" src="https://api.spicezgold.com/download/file_1734526836569_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg" />
                                                    </span>
                                                </div>
                                                <div class="img2 transition">
                                                    <span class="lazy-load-image-background blur lazy-load-image-loaded" style={{color: "transparent", display: "inline-block"}}>
                                                    <img alt="image" class="w-100" src="https://api.spicezgold.com/download/file_1734526836571_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg" />
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                        <span class="badge badge-primary">10%</span>
                                        <div class="actions">
                                            <IconButton size="large">
                                                <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>

                                            <IconButton size="large">
                                                <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div class="info" title="POCO C61, 4GB RAM, 64GB ROM, Ethereal Blue, Smartphone">
                                        <a href="/product/66e14052d7b24f428474f35a"><h4>POCO C61, 4GB RAM, 6...</h4></a><span class="text-success d-block">In Stock</span>
                                        
                                        <Rating value={5} precision={0.5} size="small" readOnly />
                                        <div class="d-flex"><span class="oldPrice">Rs 15000</span><span class="netPrice text-danger ml-2">Rs 20000</span></div>
                                    </div>
                                </div>

                                <div class="productItem undefined">
                                    <div class="img_rapper">
                                        <a href="/product/66e14052d7b24f428474f35a">
                                            <div class="productItemSliderWrapper">
                                                <div class="img1 transition">
                                                    <span class="lazy-load-image-background blur lazy-load-image-loaded" style={{color: "transparent", display: "inline-block"}}>
                                                    <img alt="image" class="w-100" src="https://api.spicezgold.com/download/file_1734526809409_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-0-202408011909.jpg" />
                                                    </span>
                                                </div>
                                                <div class="img2 transition">
                                                    <span class="lazy-load-image-background blur lazy-load-image-loaded" style={{color: "transparent", display: "inline-block"}}>
                                                    <img alt="image" class="w-100" src="https://api.spicezgold.com/download/file_1734526809411_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-1-202408011909.jpg" />
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                        <span class="badge badge-primary">10%</span>
                                        <div class="actions">
                                            <IconButton size="large">
                                                <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>

                                            <IconButton size="large">
                                                <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div class="info" title="POCO C61, 4GB RAM, 64GB ROM, Ethereal Blue, Smartphone">
                                        <a href="/product/66e14052d7b24f428474f35a"><h4>POCO C61, 4GB RAM, 6...</h4></a><span class="text-success d-block">In Stock</span>
                                        
                                        <Rating value={5} precision={0.5} size="small" readOnly />
                                        <div class="d-flex"><span class="oldPrice">Rs 15000</span><span class="netPrice text-danger ml-2">Rs 20000</span></div>
                                    </div>
                                </div>

                                <div class="productItem undefined">
                                    <div class="img_rapper">
                                        <a href="/product/66e14052d7b24f428474f35a">
                                            <div class="productItemSliderWrapper">
                                                <div class="img1 transition">
                                                    <span class="lazy-load-image-background blur lazy-load-image-loaded" style={{color: "transparent", display: "inline-block"}}>
                                                    <img alt="image" class="w-100" src="https://api.spicezgold.com/download/file_1734526836569_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-0-202403231855.jpg" />
                                                    </span>
                                                </div>
                                                <div class="img2 transition">
                                                    <span class="lazy-load-image-background blur lazy-load-image-loaded" style={{color: "transparent", display: "inline-block"}}>
                                                    <img alt="image" class="w-100" src="https://api.spicezgold.com/download/file_1734526836571_modestouze-attires-women-s-mukaish-worked-ethnic-jacket-with-top-and-pant-set-product-images-rvziicqwq6-1-202403231855.jpg"/>
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                        <span class="badge badge-primary">10%</span>
                                        <div class="actions">
                                            <IconButton size="large">
                                                <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>

                                            <IconButton size="large">
                                                <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div class="info" title="POCO C61, 4GB RAM, 64GB ROM, Ethereal Blue, Smartphone">
                                        <a href="/product/66e14052d7b24f428474f35a"><h4>POCO C61, 4GB RAM, 6...</h4></a><span class="text-success d-block">In Stock</span>
                                        
                                        <Rating value={5} precision={0.5} size="small" readOnly />
                                        <div class="d-flex"><span class="oldPrice">Rs 15000</span><span class="netPrice text-danger ml-2">Rs 20000</span></div>
                                    </div>
                                </div>

                                <div class="productItem undefined">
                                    <div class="img_rapper">
                                        <a href="/product/66e14052d7b24f428474f35a">
                                            <div class="productItemSliderWrapper">
                                                <div class="img1 transition">
                                                    <span class="lazy-load-image-background blur lazy-load-image-loaded" style={{color: "transparent", display: "inline-block"}}>
                                                        <img alt="image" class="w-100" src="https://api.spicezgold.com/download/file_1734526809409_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-0-202408011909.jpg" />
                                                    </span>
                                                </div>
                                                <div class="img2 transition">
                                                    <span class="lazy-load-image-background blur lazy-load-image-loaded" style={{color: "transparent", display: "inline-block"}}>
                                                        <img alt="image" class="w-100" src="https://api.spicezgold.com/download/file_1734526809411_need-printed-cotton-straight-kurtis-for-women-fancy-kurti-for-girls-regular-office-college-wear-kurta-for-ladies-kurti-pant-set-of-1-size-l-product-images-rvyi2nw7q6-1-202408011909.jpg" />
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                        <span class="badge badge-primary">10%</span>
                                        <div class="actions">
                                            <IconButton size="large">
                                                <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>

                                            <IconButton size="large">
                                                <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div class="info" title="POCO C61, 4GB RAM, 64GB ROM, Ethereal Blue, Smartphone">
                                        <a href="/product/66e14052d7b24f428474f35a"><h4>POCO C61, 4GB RAM, 6...</h4></a><span class="text-success d-block">In Stock</span>
                                        
                                        <Rating value={5} precision={0.5} size="small" readOnly />
                                        <div class="d-flex"><span class="oldPrice">Rs 15000</span><span class="netPrice text-danger ml-2">Rs 20000</span></div>
                                    </div>
                                </div>

                                <div class="productItem undefined">
                                    <div class="img_rapper">
                                        <a href="/product/66e14052d7b24f428474f35a">
                                            <div class="productItemSliderWrapper">
                                                <div class="img1 transition">
                                                    <span class="lazy-load-image-background blur lazy-load-image-loaded" style={{color: "transparent", display: "inline-block"}}>
                                                        <img alt="image" class="w-100" src="https://api.spicezgold.com/download/file_1734526702388_gespo-black-teal-blue-colorblocked-round-neck-half-sleeve-casual-t-shirt-product-images-rvwmlodbas-0-202304131033.jpg" />
                                                    </span>
                                                </div>
                                                <div class="img2 transition">
                                                    <span class="lazy-load-image-background blur lazy-load-image-loaded" style={{color: "transparent", display: "inline-block"}}>
                                                        <img alt="image" class="w-100" src="https://api.spicezgold.com/download/file_1734526702390_gespo-black-teal-blue-colorblocked-round-neck-half-sleeve-casual-t-shirt-product-images-rvwmlodbas-1-202304131033.webp" />
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                        <span class="badge badge-primary">10%</span>
                                        <div class="actions">
                                            <IconButton size="large">
                                                <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>

                                            <IconButton size="large">
                                                <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div class="info" title="POCO C61, 4GB RAM, 64GB ROM, Ethereal Blue, Smartphone">
                                        <a href="/product/66e14052d7b24f428474f35a"><h4>POCO C61, 4GB RAM, 6...</h4></a><span class="text-success d-block">In Stock</span>
                                        
                                        <Rating value={5} precision={0.5} size="small" readOnly />
                                        <div class="d-flex"><span class="oldPrice">Rs 15000</span><span class="netPrice text-danger ml-2">Rs 20000</span></div>
                                    </div>
                                </div>
                            </div>

                            <div class="bannerAds pt-3 pb-3">
                                <div class="swiper swiper-initialized swiper-horizontal bannerSection pt-3 swiper-backface-hidden">
                                    <div class="swiper-wrapper">
                                        <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style={{width: "315.333px", "margin-right": "10px"}}>
                                            <div class="col_">
                                                <a class="box" href="/products/subCat/673ed52fcab231596bf06684"><img src="https://api.spicezgold.com/download/file_1734525653108_NewProject(20).jpg" class="w-100 transition" alt="banner img" /></a>
                                            </div>
                                        </div>
                                        <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1" style={{width: "315.333px", "margin-right": "10px"}}>
                                            <div class="col_">
                                                <a class="box" href="/products/subCat/673ed52fcab231596bf06684"><img src="https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg" class="w-100 transition" alt="banner img" /></a>
                                            </div>
                                        </div>
                                        <div class="swiper-slide" data-swiper-slide-index="2" style={{width: "315.333px", "margin-right": "10px"}}>
                                            <div class="col_">
                                                <a class="box" href="/products/subCat/673ed52fcab231596bf06684"><img src="https://api.spicezgold.com/download/file_1734525620831_NewProject(3).jpg" class="w-100 transition" alt="banner img" /></a>
                                            </div>
                                        </div>
                                        <div class="swiper-slide" data-swiper-slide-index="3" style={{width: "315.333px", "margin-right": "10px"}}>
                                            <div class="col_">
                                                <a class="box" href="/products/category/670f5477e86c762e3cad6c9f"><img src="https://api.spicezgold.com/download/file_1734532742018_NewProject(22).jpg" class="w-100 transition" alt="banner img" /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="swiper-button-prev"></div>
                                    <div class="swiper-button-next"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="d-flex align-items-center mt-4">
                        <div class="info">
                            <h3 class="mb-0 hd">featured products</h3>
                            <p class="text-light text-sml mb-0">Do not miss the current offers until the end of March.</p>
                        </div>
                    </div>

                    <div class="product_row w-100 mt-2" style={{ opacity: 1 }}>
                        <Slider {...settings}>
                            <div key={0} className="item" style={{width: "222px"}}>
                                <div class="productItem undefined">
                                    <div class="img_rapper">
                                        <a href="#">
                                            <div class="productItemSliderWrapper">
                                                <div class="img1 transition">
                                                    <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                        <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693615931_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-produc-Copy.webp" />
                                                    </span>
                                                </div>
                                                <div class="img2 transition">
                                                    <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                        <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693649180_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-pro(1).webp" />
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                        <span class="badge badge-primary">20%</span>
                                        <div class="actions">
                                            <IconButton size="large">
                                                <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>

                                            <IconButton size="large">
                                                <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div class="info" title="Lenovo Ideapad Slim 3 Intel Core I5-12450H 15.6&quot; (39.6Cm) FHD IPS Thin &amp; Light Laptop (16GB/512GB SSD/Win 11/Office 2021/AleX/Backlit Keyboard/1 Year Warranty + ADP/3 Month Game Pass/Grey/1.62Kg), 83ER008DIN">
                                        <a href="/product/67655316268bafadd9885d57">
                                            <h4>Lenovo Ideapad Slim ...</h4>
                                        </a>
                                        <span class="text-success d-block">In Stock</span>
                                        <Rating value={5} precision={0.5} size="small" readOnly />
                                        <div class="d-flex"><span class="oldPrice">Rs 42000</span><span class="netPrice text-danger ml-2">Rs 45000</span></div>
                                    </div>
                                </div>
                            </div>

                            <div  key={1} className="item" style={{width: "222px"}}>
                                <div class="productItem undefined">
                                    <div class="img_rapper">
                                        <a href="#">
                                            <div class="productItemSliderWrapper">
                                                <div class="img1 transition">
                                                    <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                        <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693615931_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-produc-Copy.webp" />
                                                    </span>
                                                </div>
                                                <div class="img2 transition">
                                                    <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                        <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693649180_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-pro(1).webp" />
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                        <span class="badge badge-primary">20%</span>
                                        <div class="actions">
                                            <IconButton size="large">
                                                <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>

                                            <IconButton size="large">
                                                <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div class="info" title="Lenovo Ideapad Slim 3 Intel Core I5-12450H 15.6&quot; (39.6Cm) FHD IPS Thin &amp; Light Laptop (16GB/512GB SSD/Win 11/Office 2021/AleX/Backlit Keyboard/1 Year Warranty + ADP/3 Month Game Pass/Grey/1.62Kg), 83ER008DIN">
                                        <a href="/product/67655316268bafadd9885d57">
                                            <h4>Lenovo Ideapad Slim ...</h4>
                                        </a>
                                        <span class="text-success d-block">In Stock</span>
                                        <Rating value={5} precision={0.5} size="small" readOnly />
                                        <div class="d-flex"><span class="oldPrice">Rs 42000</span><span class="netPrice text-danger ml-2">Rs 45000</span></div>
                                    </div>
                                </div>
                            </div>

                            <div key={2} className="item" style={{width: "222px"}}>
                                <div class="productItem undefined">
                                    <div class="img_rapper">
                                        <a href="#">
                                            <div class="productItemSliderWrapper">
                                                <div class="img1 transition">
                                                    <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                        <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693615931_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-produc-Copy.webp" />
                                                    </span>
                                                </div>
                                                <div class="img2 transition">
                                                    <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                        <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693649180_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-pro(1).webp" />
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                        <span class="badge badge-primary">20%</span>
                                        <div class="actions">
                                            <IconButton size="large">
                                                <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>

                                            <IconButton size="large">
                                                <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div class="info" title="Lenovo Ideapad Slim 3 Intel Core I5-12450H 15.6&quot; (39.6Cm) FHD IPS Thin &amp; Light Laptop (16GB/512GB SSD/Win 11/Office 2021/AleX/Backlit Keyboard/1 Year Warranty + ADP/3 Month Game Pass/Grey/1.62Kg), 83ER008DIN">
                                        <a href="/product/67655316268bafadd9885d57">
                                            <h4>Lenovo Ideapad Slim ...</h4>
                                        </a>
                                        <span class="text-success d-block">In Stock</span>
                                        <Rating value={5} precision={0.5} size="small" readOnly />
                                        <div class="d-flex"><span class="oldPrice">Rs 42000</span><span class="netPrice text-danger ml-2">Rs 45000</span></div>
                                    </div>
                                </div>
                            </div>

                            <div key={3} className="item" style={{width: "222px"}}>
                                <div class="productItem undefined">
                                    <div class="img_rapper">
                                        <a href="#">
                                            <div class="productItemSliderWrapper">
                                                <div class="img1 transition">
                                                    <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                        <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693615931_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-produc-Copy.webp" />
                                                    </span>
                                                </div>
                                                <div class="img2 transition">
                                                    <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                        <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693649180_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-pro(1).webp" />
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                        <span class="badge badge-primary">20%</span>
                                        <div class="actions">
                                            <IconButton size="large">
                                                <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>

                                            <IconButton size="large">
                                                <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div class="info" title="Lenovo Ideapad Slim 3 Intel Core I5-12450H 15.6&quot; (39.6Cm) FHD IPS Thin &amp; Light Laptop (16GB/512GB SSD/Win 11/Office 2021/AleX/Backlit Keyboard/1 Year Warranty + ADP/3 Month Game Pass/Grey/1.62Kg), 83ER008DIN">
                                        <a href="/product/67655316268bafadd9885d57">
                                            <h4>Lenovo Ideapad Slim ...</h4>
                                        </a>
                                        <span class="text-success d-block">In Stock</span>
                                        <Rating value={5} precision={0.5} size="small" readOnly />
                                        <div class="d-flex"><span class="oldPrice">Rs 42000</span><span class="netPrice text-danger ml-2">Rs 45000</span></div>
                                    </div>
                                </div>
                            </div>

                            <div key={4} className="item" style={{width: "222px"}}>
                                <div class="productItem undefined">
                                    <div class="img_rapper">
                                        <a href="#">
                                            <div class="productItemSliderWrapper">
                                                <div class="img1 transition">
                                                    <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                        <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693615931_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-produc-Copy.webp" />
                                                    </span>
                                                </div>
                                                <div class="img2 transition">
                                                    <span class=" lazy-load-image-background blur lazy-load-image-loaded" style={{ color: "transparent", display: "inline-block" }}>
                                                        <img alt="image" class="w-100 " src="https://api.spicezgold.com/download/file_1734693649180_lenovo-ideapad-slim-3-intel-core-i5-12450h-15-6-39-6cm-fhd-ips-thin-light-laptop-16gb-512gb-ssd-win-11-office-2021-alex-backlit-keyboard-1-year-warranty-adp-3-month-game-pass-grey-1-62kg-83er008din-pro(1).webp" />
                                                    </span>
                                                </div>
                                            </div>
                                        </a>
                                        <span class="badge badge-primary">20%</span>
                                        <div class="actions">
                                            <IconButton size="large">
                                                <ZoomOutMapOutlinedIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>

                                            <IconButton size="large">
                                                <FavoriteBorderSharpIcon fontSize="inherit" style={{ fontSize: "20px" }} />
                                            </IconButton>
                                        </div>
                                    </div>
                                    <div class="info" title="Lenovo Ideapad Slim 3 Intel Core I5-12450H 15.6&quot; (39.6Cm) FHD IPS Thin &amp; Light Laptop (16GB/512GB SSD/Win 11/Office 2021/AleX/Backlit Keyboard/1 Year Warranty + ADP/3 Month Game Pass/Grey/1.62Kg), 83ER008DIN">
                                        <a href="/product/67655316268bafadd9885d57">
                                            <h4>Lenovo Ideapad Slim ...</h4>
                                        </a>
                                        <span class="text-success d-block">In Stock</span>
                                        <Rating value={5} precision={0.5} size="small" readOnly />
                                        <div class="d-flex"><span class="oldPrice">Rs 42000</span><span class="netPrice text-danger ml-2">Rs 45000</span></div>
                                    </div>
                                </div>
                            </div>
                        </Slider>
                    </div>

                    
                    <div class="bannerAds pt-3 pb-3">
                        <div class="swiper swiper-initialized swiper-horizontal bannerSection pt-3 swiper-backface-hidden">
                            <div class="swiper-wrapper" style={{ transform: "translate3d(0px, 0px, 0px)"}}>
                                <div class="swiper-slide swiper-slide-active" data-swiper-slide-index="0" style={{width: "409.333px", "margin-right": "10px"}}>
                                    <div class="col_">
                                        <a class="box" href="/products/subCat/673ed528cab231596bf0667d"><img src="https://api.spicezgold.com/download/file_1734525879105_banner-7.jpg" class="w-100 transition" alt="banner img" /></a>
                                    </div>
                                </div>
                                <div class="swiper-slide swiper-slide-next" data-swiper-slide-index="1" style={{width: "409.333px", "margin-right": "10px"}}>
                                    <div class="col_">
                                        <a class="box" href="/products/subCat/67415b21f1e1da2b3de3ba8b"><img src="https://api.spicezgold.com/download/file_1734525868575_banner-9.jpg" class="w-100 transition" alt="banner img" /></a>
                                    </div>
                                </div>
                                <div class="swiper-slide" data-swiper-slide-index="2" style={{width: "409.333px", "margin-right": "10px"}}>
                                    <div class="col_">
                                        <a class="box" href="/products/subCat/67415b2cf1e1da2b3de3ba91"><img src="https://api.spicezgold.com/download/file_1734525855497_banner-5.jpg" class="w-100 transition" alt="banner img" /></a>
                                    </div>
                                </div>
                            </div>
                            <div class="swiper-button-prev swiper-button-lock"></div>
                            <div class="swiper-button-next swiper-button-lock"></div>
                        </div>
                    </div>

                </div>  
            </section>
        </>
    )
}

export default Home;