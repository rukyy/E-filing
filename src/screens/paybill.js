import "../css/paybill.css"

const PayBill = () => {
    return (<div className="paybill">
        <div className="paybillcontainer">
            <h3>Filing Fee</h3>
            <div className="paybillcard">
                <ul>
                    <li>Order No: 0000001</li>
                    <li>Case ID: 000211</li>
                    <li>Amount: N20000</li>
                </ul>
                <div className="proceedbtn">
                    <p><i className="fa-solid fa-circle-exclamation"></i>Note this is non refundable</p>
                    <button>Proceed  to Checkout</button>
                </div>

            </div>

        </div>
    </div>);
}

export default PayBill;