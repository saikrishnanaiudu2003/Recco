// Import necessary components and icons
import { Component } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import { CiSearch } from "react-icons/ci";
import { MdPrint } from "react-icons/md";
import Items from '../Items'; // Importing the custom 'Items' component
import './index.css'; // Importing styles for the component

// Define the Header component
class Header extends Component {
    state = {
        itemsList: [] // Initial state for the list of items
    }

    // Fetch items data when the component mounts
    componentDidMount() {
        this.getItems();
    }

    // Function to fetch items data from JSON file
    getItems = async () => {
        try {
            const response = await fetch("/data.json");

            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }

            const jsonData = await response.json();

            if (!Array.isArray(jsonData.items)) {
                throw new Error('Items is not an array');
            }

            this.setState({ itemsList: jsonData.items });
        } catch (error) {
            console.error("Error fetching Data", error);
        }
    }

    // Render the component
    render() {
        const { itemsList } = this.state;

        return (
            <div>
                {/* Main container */}
                <div className="main-container">
                    {/* Flex container for header items */}
                    <div className="items-flex">
                        <h1 className="main-head">Recco</h1>
                        <ul className="list-items-container">
                            <li className="items">Store</li>
                            <li className="items">Order</li>
                            <li className="items">Analytics</li>
                        </ul>
                    </div>

                    {/* Flex container for cart and user info */}
                    <div className="last-flex-items">
                        <button className="cart-button" type="button">
                            <span className="count-item">0</span>
                            <CiShoppingCart className="cart-icon" />
                        </button>
                        <p className="name-para">Hello, James</p>
                    </div>
                </div>

                {/* Order details container */}
                <div className="orderd-container">
                    {/* All order items */}
                    <div className="all-order-items">
                        <p className="order-para">
                            Orders<span className="span-icon"><FaArrowRight className="arrow-icon" /></span>
                            <span className="text-line-para">Order 32457ABC</span>
                        </p>
                        {/* Order details */}
                        <div className="order-items-flex">
                            <div>
                                <h1>Order 32457ABC</h1>
                            </div>
                            <div className="button-container">
                                <button className="back-button" type="button">Back</button>
                                <button className="approved-button" type="button">Approved</button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Order card */}
                <div className="order-card">
                    <div className="card">
                        {/* Order information */}
                        <div className="items-card">
                            <p className="oder-card-para">Suppliers</p>
                            <h1 className="order-card-head">East coast fruits & vegetables</h1>
                        </div>
                        <div className="vl"></div>
                        <div className="items-card">
                            <p className="oder-card-para">Shipping Date</p>
                            <h1 className="order-card-head">Thu, Feb 10</h1>
                        </div>
                        <div className="vl"></div>
                        <div className="items-card">
                            <p className="oder-card-para">Total</p>
                            <h1 className="order-card-head">$15,028.3</h1>
                        </div>
                        <div className="vl"></div>
                        <div className="items-card">
                            <p className="oder-card-para">Category</p>
                            {/* Repeated category icons */}
                            <MdCategory />
                            <MdCategory />
                            <MdCategory />
                            <MdCategory />
                        </div>
                        <div className="vl"></div>
                        <div className="items-card">
                            <p className="oder-card-para">Department</p>
                            <h1 className="order-card-head">300-444-678</h1>
                        </div>
                        <div className="vl"></div>
                        <div className="items-card">
                            <p className="oder-card-para">Status</p>
                            <h1 className="order-card-head">Awating your approval</h1>
                        </div>
                    </div>
                </div>

                {/* Ordered items container */}
                <div className="items-card-oder">
                    <div className="orderd-items-flex">
                        {/* Search and print functionality */}
                        <div className="flex-searc">
                            <div className="input-card">
                                <input className="input-element" placeholder="search.." type="search" />
                                <div className="icon-card">
                                    <CiSearch />
                                </div>
                            </div>
                            <div className="print-items">
                                <button className="back-button" type="button">Item</button>
                                <div className="icon-card">
                                    <MdPrint className="search-icon" />
                                </div>
                            </div>
                        </div>
                        {/* Item list headers */}
                        <div className="orderd-items-flex-2">
                            <p className="items-list-para">Product Name</p>
                            <p className="items-list-para">Brand</p>
                            <p className="items-list-para">Price</p>
                            <p className="items-list-para">Quantity</p>
                            <div className="total-item">
                                <p className="items-list-para">Total</p>
                            </div>
                            <div className="last-item">
                                <p className="items-list-para">Status</p>
                            </div>
                        </div>
                        {/* Render the list of items using the 'Items' component */}
                        <div>
                            <ul className="list-items">
                                {itemsList.map((eachItems) => (
                                    <Items details={eachItems} key={eachItems.id} />
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

// Export the Header component
export default Header;
