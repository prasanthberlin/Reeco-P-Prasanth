// eslint-disable-next-line import/no-extraneous-dependencies
import {v4 as uuidv4} from 'uuid'

import {IoMdSearch} from 'react-icons/io'

import {AiOutlinePrinter} from 'react-icons/ai'
import ListItemDetails from '../ListItemDetails'

import {
  ProductDetailsMainContainer,
  TopProductContainer,
  SearchProductContainer,
  SearchInput,
  ButtonContainer,
  AddItemButton,
  ProductTitleContainer,
  TitleHeading,
  ProductDetailsContainer,
} from './styledComponents'

const productList = [
  {
    id: uuidv4(),
    productName: 'orange',
    brand: 'Nilgiris',
    price: '$60.67/6*1LB',
    quantity: '0x6*1LB',
    total: '0',
  },
  {
    id: uuidv4(),
    productName: 'chicken',
    brand: 'Sugana',
    price: '$20.67/5*6LB',
    quantity: '5x4*1LB',
    total: '$3000.88',
  },
  {
    id: uuidv4(),
    productName: 'ginger',
    brand: 'Sri Ganesh Store',
    price: '$10.54/1*3LB',
    quantity: '5x8*2LB',
    total: '$1213.09',
  },
  {
    id: uuidv4(),
    productName: 'Bread',
    brand: 'Hot Breads',
    price: '$4.32/2*4LB',
    quantity: '4x1*6LB',
    total: '$111.23',
  },
  {
    id: uuidv4(),
    productName: 'Tomato Sauce',
    brand: 'Red Home',
    price: '$20.67/2*1LB',
    quantity: '1x8*2LB',
    total: '$4533.45',
  },
]

const ProductItemDetails = () => (
  <ProductDetailsMainContainer>
    <TopProductContainer>
      <SearchProductContainer>
        <SearchInput placeholder="Search" />
        <IoMdSearch />
      </SearchProductContainer>
      <ButtonContainer>
        <AddItemButton>Add item</AddItemButton>
        <AiOutlinePrinter color="#005c09" size="25" />
      </ButtonContainer>
    </TopProductContainer>
    <ProductTitleContainer>
      <TitleHeading>Product name</TitleHeading>
      <TitleHeading>Brand</TitleHeading>
      <TitleHeading>Price</TitleHeading>
      <TitleHeading>Quantity</TitleHeading>
      <TitleHeading>Total</TitleHeading>
      <TitleHeading>Status</TitleHeading>
    </ProductTitleContainer>
    <ProductDetailsContainer>
      {productList.map(eachProduct => (
        <ListItemDetails key={eachProduct.id} productDetails={eachProduct} />
      ))}
    </ProductDetailsContainer>
  </ProductDetailsMainContainer>
)

export default ProductItemDetails
