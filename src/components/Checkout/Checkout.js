import React, { Component } from 'react';
import Header1 from '../Header1/Header';

class Checkout extends Component {
  
   
    constructor(props) {

        super(props); 
        this.state = {}
    };

    goToBooks = () => {
        window.location.href = "/Books"
    }
    
    htmlContent = () => {
        return (         
            <div className="">
                <Header1/>
                <div class="jumbotron">
                    <h1 class="display-4">Welcome to Dal Book Barn !</h1>
                    <p class="lead"><span className="set-p-style">Sorry We haven't added Payment Gateway Yet.</span></p>
                    <hr class="my-4"/>
                    <p>Explore what we have !</p>
                    <button className="btn btn-info" onClick={this.goToBooks}>Go to Books</button>
                </div>
            </div>
        ) 
    }

    render() {
        return (this.htmlContent());
    }
}
export default Checkout;