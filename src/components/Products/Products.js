import React from "react"
import IndividualProduct from "../IndividualProduct/IndividualProduct"
import ProductDetails from "../../ProductDetails.js"
import {Animated} from "react-animated-css";

class Products extends React.Component {
  state = { selectedProduct: null }

  onProductSelect = (selectedProduct) => {
    if(selectedProduct === this.state.selectedProduct) {
      this.setState({ selectedProduct: null })
    } else {
      this.setState({ selectedProduct })
    }
  }

  renderedList = () => {
    return (
      ProductDetails.map((product) => {
        return <IndividualProduct selectedProduct={this.state.selectedProduct} onProductSelect={this.onProductSelect} title={product.title} subTitle={product.subTitle} photo={product.photo} id={product.id} details={product.details}/>
      })
    )
  }

  render() {
    return (
      <Animated animationIn="slideInUp" animationOut="fadeOutDown" isVisible={true}>
        <div className="ui relaxed divided list">{this.renderedList()}</div>
      </Animated>
    )
  }
}

export default Products
