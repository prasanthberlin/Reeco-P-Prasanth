import {GrCart} from 'react-icons/gr'
import {FaChevronDown} from 'react-icons/fa6'
import {FaChevronRight} from 'react-icons/fa'

import {
  MainHeaderContainer,
  TopHeaderContainer,
  LeftTopHeaderContainer,
  BrandName,
  TabText,
  RightTopHeaderContainer,
  ProfileSection,
  UserName,
  OrderDetailsHeader,
  OrderDetails,
  OrderText,
  OrderID,
  OrderIDContainer,
  OrderNumber,
  DecisionButtonContainer,
  DecisionButton,
  HorizontalLine,
} from './styledComponents'

const Header = () => (
  <MainHeaderContainer>
    <TopHeaderContainer>
      <LeftTopHeaderContainer>
        <BrandName>Reeco</BrandName>
        <TabText>Store</TabText>
        <TabText>Orders</TabText>
        <TabText>Analytics</TabText>
      </LeftTopHeaderContainer>
      <RightTopHeaderContainer>
        <GrCart size="25" />
        <ProfileSection>
          Hello, <UserName>Prasanth</UserName>
          <FaChevronDown />
        </ProfileSection>
      </RightTopHeaderContainer>
    </TopHeaderContainer>
    <OrderDetailsHeader>
      <OrderDetails>
        <OrderText>Orders</OrderText>
        <FaChevronRight />
        <OrderID>Order 32457ABC</OrderID>
      </OrderDetails>
    </OrderDetailsHeader>
    <OrderIDContainer>
      <OrderNumber>Order 32457ABC</OrderNumber>
      <DecisionButtonContainer>
        <DecisionButton>Back</DecisionButton>
        <DecisionButton approve>Approve Order</DecisionButton>
      </DecisionButtonContainer>
    </OrderIDContainer>
    <HorizontalLine />
  </MainHeaderContainer>
)

export default Header
