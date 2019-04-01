import React from 'react'
import './IndividualProduct.css'
import { Card, Image, Button, Icon } from 'semantic-ui-react'
import { Link, NavLink } from 'react-router-dom'

const IndividualProduct = ({title, subTitle, photo, details, id, onProductSelect, selectedProduct}) => {

  const detailList = details.map((detail) => {
    return <Card.Description><li>{detail}</li></Card.Description>
  })
  if(title !== selectedProduct) {
    return (
      <Card onClick={ () => onProductSelect(title)} className="ui centered product">
        <Image className="productImage" alt={title} src={photo} />
        <Card.Content className="ui centered">
          <Card.Header><div>{title}</div></Card.Header>
          <Card.Meta><div>{subTitle}</div></Card.Meta>
          <ul>{detailList}</ul>
          <NavLink to="/Order">
            <Button animated='vertical'>
              <Button.Content hidden>Place Order</Button.Content>
                <Button.Content visible>
                <Icon name='shop' />
              </Button.Content>
            </Button>
          </NavLink>
        </Card.Content>
      </Card>

    )
  } else {
    return (
      <Card onClick={ () => onProductSelect(id)} className="ui centered product selected">
        <Image className="productImage selected" alt={title} src={photo} />
        <Card.Content className="ui centered selected">
          <Card.Header><div>{title}</div></Card.Header>
          <Card.Meta><div>{subTitle}</div></Card.Meta>
          <ul>{detailList}</ul>
          <Link to= {{
            pathname: "/OrderPage",
            state: {
              selectedProduct: {selectedProduct}
            }
          }}>
            <Button animated='vertical'>
              <Button.Content hidden>Place Order</Button.Content>
                <Button.Content visible>
                <Icon name='shop' />
              </Button.Content>
            </Button>
          </Link>
        </Card.Content>
      </Card>
    )
  }
}

export default IndividualProduct
