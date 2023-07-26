// Importing the necessary modules 
import React, { Component, Fragment } from 'react'; 
import { Link } from 'react-router-dom'; 
import '../css/Dashboard.css'; 
import logoImage from "../images/dashboardLogo.png"; 
import dashboardMenu from "../images/dashboardMenu.png"; 
import wallets from "../images/wallets.png"; 
import currency from "../images/currency.png"; 
import accounts from "../images/account.png"; 
import logout from "../images/logout.png"
import searchLogo from "../images/searchLogo.png"; 
import thompsonImage from "../images/thompson.png"; 
import balance from "../images/balance.png"; 
import bitcoin from "../images/btc.png"; 
import litecoin from "../images/lte.png"; 
import ether from "../images/ether.png"; 
import bitcoinVolume from "../images/chart.png"
import markets from "../images/markets.png"



// Creating the class based component 
class Dashboard extends Component {
    // Creating a state 
    state = {
        data: null, 
        loading: true, 
        error: null
    } 

    // // c
    // componentDidMount() {
    //     // Fetch the data and render it on the page 
    //     this.fetchData(); 
    // }

    // // 
    // fetchData = () => {
    //     const apiUrl = "http://ec2-52-89-2-154.us-west-2.compute.amazonaws.com:8400/api/v1/wallet/bitcoin-volume"; 

    //     // 
    //     fetch(apiUrl)
    //     .then((response) => response.json())
    //     .then((data) => {
    //         this.setState({
    //             data: data, 
    //         })
    //     })
    // }

    // Rendering the component 
    render() {
        const { data } = this.state; 
        console.log(data); 
        // Returning the jsx component 
        return (
            <Fragment> 
                <section className="mainSectionDashboard">
                    <div className='leftDiv'>
                        <div>
                            <img src={logoImage} alt="" className="logoImage" srcset="" />
                        </div>

                        <div className="dashboardMenu">
                            <div>
                                <img src={dashboardMenu} className="dashboardMenuImage" alt="" />
                            </div>
                            <div>
                                <p className="dashboardPara"> Dashboard </p>
                            </div>
                           

                        </div>

                        <div className="dashboardMenu">
                            <div>
                                <img src={wallets} className="dashboardMenuImage" alt="" />
                            </div>
                            <div>
                                <p className="dashboardPara"> Wallets </p>
                            </div>
                           

                        </div>

                        <div className="dashboardMenu">
                            <div>
                                <img src={currency} className="dashboardMenuImage" alt="" />
                            </div>
                            <div>
                                <p className="dashboardPara"> Curriencies </p>
                            </div>
                           

                        </div>

                        <div className="dashboardMenu">
                            <div>
                                <img src={accounts} className="dashboardMenuImage" alt="" />
                            </div>
                            <div>
                                <p className="dashboardPara"> Account </p>
                            </div>
                           

                        </div>

                        <div className="dashboardMenuLogout">
                            <div>
                                <img src={logout} className="dashboardMenuImageLogout" alt="" />
                            </div>                       
                        </div>


                    </div>

                    <div className="rightDiv">
                        {/* First div */}
                        <div className="firstDiv">
                            <div className="searchDiv">
                                <img src={searchLogo} alt="" className="searchLogo" srcset="" />
                                <input type="search" name="" className="searchInputForm" id="" placeholder='Search...'/>
                            </div>

                            <div className="">
                                <img src={thompsonImage} alt="" className="userDisplayName" />

                            </div>
                        </div>

                        {/* Second div */}
                        <div className="secondDiv">
                            <div className="overViewParaDiv">
                                <h3> Overview </h3> 
                            </div>
                            <div className="secondDivInner">
                                <div className="overViewDiv">
                                    <img src={balance} alt="" className="overviewImage" />

                                </div>
                                <div className="overViewDiv">
                                    <img src={bitcoin} alt="" className="overviewImage" />

                                </div>
                                <div className="overViewDiv">
                                    <img src={litecoin} className="overviewImage" alt="" />

                                </div>
                                <div className="overViewDiv">
                                    <img src={ether} alt="" className="overviewImage" />

                                </div>

                            </div>

                        </div>

                        <div className="thirdDiv">
                            <img src={bitcoinVolume} alt="" srcset="" className="bitcoinVolumeImage" />

                        </div>

                        <div className="thirdDiv third">
                            <img src={markets} alt="" srcset="" className="bitcoinVolumeImage" />

                        </div>

                    </div>

                </section>

            </Fragment>
        )
    }
}

// Exporting the Dashboard component 
export default Dashboard; 