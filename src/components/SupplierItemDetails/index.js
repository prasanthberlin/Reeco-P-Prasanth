import {
  SupplierMainContainer,
  SectionContainer,
  TopicText,
  ContentDetails,
  HorizontalLine,
} from './styledComponents'

const SupplierItemDetails = () => (
  <SupplierMainContainer>
    <SectionContainer>
      <TopicText>Supplier</TopicText>
      <ContentDetails>East Coast fruits & Vegetables</ContentDetails>
    </SectionContainer>
    <HorizontalLine />
    <SectionContainer>
      <TopicText>Shipping date</TopicText>
      <ContentDetails>Thu, Feb 10</ContentDetails>
    </SectionContainer>
    <HorizontalLine />
    <SectionContainer>
      <TopicText>Total</TopicText>
      <ContentDetails>$15,028.3</ContentDetails>
    </SectionContainer>
    <HorizontalLine />
    <SectionContainer>
      <TopicText>Category</TopicText>
      <ContentDetails>Thu, Feb 10</ContentDetails>
    </SectionContainer>
    <HorizontalLine />
    <SectionContainer>
      <TopicText>Department</TopicText>
      <ContentDetails>300-444-678</ContentDetails>
    </SectionContainer>
    <HorizontalLine />
    <SectionContainer>
      <TopicText>Status</TopicText>
      <ContentDetails>Awaiting your approvel</ContentDetails>
    </SectionContainer>
  </SupplierMainContainer>
)

export default SupplierItemDetails
