import styled, { keyframes } from "styled-components"

const loading = keyframes`
  from {
    top: -200%;
  } 
  to {
    top: 100%;
  }
`;

const StyledSkeleton = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 4px;
  box-shadow: 1px 1px 10px rgba(0,0,0,2);
  position: relative;
  overflow: hidden;
  margin: 40px auto 0 auto;

  ::before {
    content: "";
    display: block;
    position: absolute;
    height: 50%;
    width: 100%;
    background: linear-gradient(to bottom, #fff 0%, #f7f7f7 50%, #E5E5E5 100%);
    animation: ${loading} 1000ms ease-in-out infinite;
  }

  @media screen and (min-width: 766px) {
    margin-top: 100px;
  }
`;

const SkeletonContainer = styled.div`
  @media screen and (min-width: 1000px) {
    display: flex;
    height: 100vh;
    margin: 0 auto;
    width: 90%;
  }
`;

export default function SkeletonLoading() {
  return (
    <SkeletonContainer>
      <StyledSkeleton />
      <StyledSkeleton />
      <StyledSkeleton />
    </SkeletonContainer>
  )
}