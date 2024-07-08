import { useState } from "react";
import PricingCard from "../components/PricingCard";
import "../style/pricingApp.css";

function Price() {
    const [selectMonthly, setSelectMonthly] = useState(true);
    console.log(selectMonthly);
    return (
        <div className="PricingApp">
            <div className="app-container">
                <header>
                    <h1 className="header-topic">Our Pricing Plan</h1>
                    <div className="header-row">
                        <p>Annually</p>
                        <label className="price-switch">
                            <input
                                className="price-checkbox"
                                onChange={() => {
                                    setSelectMonthly((prev) => !prev);
                                }}
                                type="checkbox"
                            />
                            <div className="switch-slider"></div>
                        </label>
                        <p>Monthly</p>
                    </div>
                </header>

                <div className="pricing-cards">
                    <PricingCard
                        title="Essential"
                        price={selectMonthly ? 20.99 : 188.9}
                        storage="Read and listen without limit"
                        users={1}
                        sendUp={4}
                    />
                    <PricingCard
                        title="Deluxe"
                        price={selectMonthly ? 34.99 : 349.9}
                        storage="Read and listen without limit"
                        users={2}
                        sendUp={4}
                    />
                    <PricingCard
                        title="Premium"
                        price={selectMonthly ? 79.99 : 499.9}
                        storage="Read and listen without limit"
                        users={4}
                        sendUp={4}
                    />
                </div>
            </div>
        </div>
    );
}

export default Price;