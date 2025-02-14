import Button from '@mui/material/Button';
import { IoSearchOutline } from "react-icons/io5";

const SearchBox = () => {
return (
    <div className="headerSearchWrapper false">
        <div className=" d-flex align-items-center">
            <div className="headerSearch ml-3 mr-3">
                <input type="text" placeholder="Search for products..." />
                <Button>
                    <IoSearchOutline />
                </Button>
            </div>
        </div>
    </div>
)
}

export default SearchBox;