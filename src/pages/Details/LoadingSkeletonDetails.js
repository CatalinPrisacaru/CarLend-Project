import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  ImagesContainer,
  FirstImage,
  SecondImage,
  ContainerButton,
  Container,
  LeftContainer,
  RightContainer,
  OwnerDetails,
  OwnerImage,
  OwnerActivity,
} from "./StyledDetails";
import BackButton from "../../components/Reusable/GoBackButton/GoBackButton";

const LoadingSkeleton = ({ onBack }) => {
  return (
    <div>
      <BackButton />
      <ImagesContainer>
        <FirstImage>
          <Skeleton height={300} width="100%" />
        </FirstImage>
        <SecondImage>
          {[1, 2, 3, 4].map((_, index) => (
            <Skeleton key={index} height={300} width="100%" />
          ))}
        </SecondImage>
      </ImagesContainer>
      <ContainerButton>
        <Skeleton width={150} height={40} />
      </ContainerButton>

      <Container>
        <LeftContainer>
          <Skeleton height={30} width="70%" />
          <Skeleton height={20} width="30%" />
          <hr />
          <Skeleton count={5} />
        </LeftContainer>
        <RightContainer>
          <OwnerDetails>
            <OwnerImage>
              <Skeleton circle height={70} width={70} />
            </OwnerImage>
            <OwnerActivity>
              <Skeleton height={20} width="50%" />
              <Skeleton height={20} width="50%" />
              <Skeleton height={20} width="50%" />
            </OwnerActivity>
          </OwnerDetails>
        </RightContainer>
      </Container>
    </div>
  );
};

export default LoadingSkeleton;
