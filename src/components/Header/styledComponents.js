import styled from 'styled-components/macro'

export const MainHeaderContainer = styled.div``

export const TopHeaderContainer = styled.div`
  background-color: #005c09;
  color: white;
  padding: 5px 60px 5px 60px;
  font-style: serif;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LeftTopHeaderContainer = styled.div`
  display: flex;
  align-items: center;
`

export const BrandName = styled.h1`
  margin-left: 10px;
`

export const TabText = styled.p`
  margin-left: 30px;
  margin-top: 25px;
`

export const RightTopHeaderContainer = styled.div`
  display: flex;
  align-items: center;
  font-family: sans-serif;
  min-width: 150px;
  justify-content: space-around;
`

export const ProfileSection = styled.p`
  margin-left: 20px;
`

export const UserName = styled.span`
  margin-right: 10px;
`
export const OrderDetailsHeader = styled.div``

export const OrderDetails = styled.div`
  display: flex;
  align-items: center;
  margin-left: 70px;
  font-family: sans-serif;
  font-size: 14px;
  opacity: 0.8;
`

export const OrderText = styled.h3`
  margin-right: 10px;
  font-weight: 400;
`

export const OrderID = styled.p`
  margin-left: 10px;
  text-decoration: underline;
`
export const OrderIDContainer = styled.div`
  margin-left: 70px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 80px;
  font-family: sans-serif;
`

export const OrderNumber = styled.h1`
  font-size: 24px;
`

export const DecisionButtonContainer = styled.div``

export const DecisionButton = styled.button`
  background-color: ${props => (props.approve ? '#005c09' : '#ffffff')};
  color: ${props => (props.approve ? '#ffffff' : '#005c09')};
  margin-right: 10px;
  padding: 7px 20px 7px 20px;
  border-color: ${props => (props.approve ? '#ffffff' : '#005c09')};
  border-width: 1px;
  border-radius: 15px;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
`

export const HorizontalLine = styled.hr`
  border-width: 3px;
  opacity: 0.4;
`
