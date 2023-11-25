import {IoCheckmark} from 'react-icons/io5'
import {RxCross2} from 'react-icons/rx'
import {
  EachProductContainer,
  EachProductList,
  AvocadoHassImage,
  ProductContent,
  ButtonContainer,
  UpdateButtons,
  HorizontalLine,
} from './styledComponents'

const ListItemDetails = props => {
  const {productDetails} = props
  console.log(productDetails)
  const {productName, brand, price, quantity, total} = productDetails

  return (
    <>
      <EachProductContainer>
        <EachProductList>
          <AvocadoHassImage
            src="https://res.cloudinary.com/dlefoxknm/image/upload/v1700909172/cmoumka4qdmtmbvewcub.jpg"
            alt="avocadohass"
          />
          <ProductContent>{productName}</ProductContent>
          <ProductContent>{brand}</ProductContent>
          <ProductContent>{price}</ProductContent>
          <ProductContent>{quantity}</ProductContent>
          <ProductContent>{total}</ProductContent>
        </EachProductList>
        <ButtonContainer>
          <UpdateButtons>
            <IoCheckmark />
          </UpdateButtons>
          <UpdateButtons>
            <RxCross2 />
          </UpdateButtons>
          <UpdateButtons>Edit</UpdateButtons>
        </ButtonContainer>
      </EachProductContainer>
      <HorizontalLine />
    </>
  )
}

export default ListItemDetails
