import React from "react";
import Header1 from '../Header1/Header';
import "./Order.css";
const Order = () => {
    return(
         <>
         <Header1 />
            <div className="col-md-10  my-3 custom-order">
                    <h2 style={{marginBottom: "20px"}}>List of Orders</h2>
                    <div claasName='table-responsive-sm custom-shadow'>
                        <table className="table table-hover" border='1'>
                            <thead>
                                <tr>
                                    <th scope="col">Index</th>
                                    <th scope="col">Order ID</th>
                                    <th scope="col">Date</th>
                                    <th scope="col">Status</th>
                                    <th scope="col">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>123-76456866-678</td>
                                    <td>23-08-2020</td>
                                    <td>Delivered</td>
                                    <td>
                                        <select>
                                            <option>Select</option>
                                            <option>Delivered</option>
                                            <option>Cancled</option>
                                            <option>Returned</option>
                                            <option>Processing</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>123-76894568-456</td>
                                    <td>16-05-2021</td>
                                    <td>Processing</td>
                                    <td>
                                        <select>
                                            <option>Select</option>
                                            <option>Delivered</option>
                                            <option>Cancled</option>
                                            <option>Returned</option>
                                            <option>Processing</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>123-76457898-342</td>
                                    <td>02-03-2021</td>
                                    <td>Cancled</td>
                                    <td>
                                        <select>
                                            <option>Select</option>
                                            <option>Delivered</option>
                                            <option>Cancled</option>
                                            <option>Returned</option>
                                            <option>Processing</option>
                                        </select>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>123-76886986-876</td>
                                    <td>05-04-2021</td>
                                    <td>Returned</td>
                                    <td>
                                        <select>
                                            <option>Select</option>
                                            <option>Delivered</option>
                                            <option>Cancled</option>
                                            <option>Returned</option>
                                            <option>Processing</option>
                                        </select>
                                    </td>
                                </tr>
                            </tbody>
                        </table>

                    </div>
         </div>
         </>
    );
}

export default Order;