import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {graphql, ApolloProvider,} from 'react-apollo';
import gql from 'graphql-tag';
import ApolloClient from "apollo-boost";

const client = new ApolloClient({
  uri: "http://10.30.165.59:8080/graphql"
});
client.query({
  query: gql`
  {
    cartDetail(username:"kbk2@techm.com"){
      totalPrice
      totalTax
      totalPriceWithTax
      items{
        productId
        productName
        productImage
        quantity
      
      }
    }
  }
  `
}).then(response => console.log(response.data));


 
//const ProductsListWithData = graphql(query)(productitemList);

//console.log(productitemList);

// const productitemList = ({ data: {loading, error, channels }}) => {
//   if (loading) {
//     return <p>Loading ...</p>;
//   }
//   if (error) {
//     return <p>{error.message}</p>;
//   }
//   return <ul>
//     { cartDetail.map( ch => <li key={ch.totalPrice}>{ch.totalPriceWithTax}</li> ) }
//   </ul>;
// };

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <div class="cart-body">
                    <ol>
                        <li>
                            <div></div>
                            <img src="imgs/1_iPhone_X_gray_DN.png" alt="phone-image" />
                            <div></div>
                            
                        </li>
                        <li>
                            <h5>Samsung</h5>
                            <h4>Galaxy S8</h4>
                            <p>Fermentum Mattis Dapibus Sollicitudin</p>
                        </li>
                        <li>
                            <div>
                                Normal
                                <strike>$220</strike> / 20%
                            </div>
                            <div class="offer-price-wrapper">
                                $160.3 (offer)
                            </div>
                        </li>
                        <li>
                            <div class="item-counter">
                                <div>
                                    <button>&#8208;</button>
                                </div>
                                <div class="counter-box">1

                                </div>
                                <div>
                                    <button>&plus;</button>
                                </div>
                            </div>
                            <div class="text-center remove-item-wrapper">
                                <a href="#!">remove item</a>
                            </div>

                        </li>
                        <li>$160.3</li>
                    </ol>
                    <ol>
                        <li>
                            <div></div>
                            <img src="imgs/simcard_icon2.png" alt="phone-image" />
                            <div></div>
                        </li>
                        <li>
                            <h5>Samsung</h5>
                            <h4>Galaxy S8</h4>
                            <p>Fermentum Mattis Dapibus Sollicitudin</p>
                        </li>
                        <li>
                            <div>
                                Normal
                                {/* <!-- <strike>$220</strike> / 20% --> */}
                            </div>
                            <div class="offer-price-wrapper">
                                $160.3 (offer)
                            </div>
                        </li>
                        <li>
                            <div class="item-counter">
                                <div>
                                    <button>&#8208;</button>
                                </div>
                                <div class="counter-box">1

                                </div>
                                <div>
                                    <button>&plus;</button>
                                </div>
                            </div>
                            <div class="text-center remove-item-wrapper">
                                <a href="#!">remove item</a>
                            </div>

                        </li>
                        <li>$160.3</li>
                    </ol>
                </div>

    {/* <ProductsListWithData /> */}
       
      </ApolloProvider>
    );
  }
}

export default App;
