import React from "react";
import styled from "styled-components";
import { ReactComponent as Share } from "../../../assests/icons/share.svg";
import { ReactComponent as Heart } from "../../../assests/icons/chevron-left.svg";
import { BackButton } from "../StyledDetails";

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: ${({ show }) => (show ? "block" : "none")};
  z-index: 1000;
`;

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1001;
`;

const ModalContent = styled.div`
  background: white;
  width: 90%;
  height: 90%;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ModalHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  border-bottom: 1px solid #ddd;
`;

const RightButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-right: 10px;
`;

const Button = styled.div`
  display: flex;
  align-items: center;
  font-weight: bold;
  font-size: 14px;
  color: #3498db;
  cursor: pointer;

  svg {
    margin-right: 8px;
    path {
      fill: #3498db;
    }
  }

  h5 {
    margin-left: 10px;
  }
`;

const Gallery = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  grid-auto-flow: dense;
  padding: 40px;
  overflow: auto;
  height: auto;
  scroll-behavior: smooth;
`;

const ImageContainer = styled.div`
  position: relative;
  border-radius: 8px;
  padding: 15px 15px;

  &:nth-child(1) {
    grid-column: span 2;
    grid-row: span 2;
  }

  &:nth-child(2),
  &:nth-child(3) {
    grid-column: span 1;
    grid-row: span 1;
  }

  &:nth-child(4) {
    grid-column: span 3;
  }

  &:nth-child(5),
  &:nth-child(6) {
    grid-column: span 1;
    grid-row: span 1;
  }

  &:nth-child(7) {
    grid-column: span 3;
  }

  &:nth-child(8),
  &:nth-child(9) {
    grid-column: span 1;
    grid-row: span 1;
  }
  &:nth-child(10) {
    grid-column: span 3;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.2);

    &:hover {
      transform: scale(1.015);
      box-shadow: 0 12px 24px rgba(0, 0, 0, 0.5);
    }
  }
`;

const PhotosModal = ({ showModal, setShowModal, images }) => {
  return (
    <>
      <Overlay show={showModal} onClick={() => setShowModal(false)} />
      {showModal && (
        <ModalWrapper>
          <ModalContent>
            <ModalHeader>
              <BackButton onClick={() => setShowModal(false)}>
                <div className="icon" />
                Go back
              </BackButton>

              <RightButtons>
                <Button>
                  <Share />
                  <h5>Share</h5>
                </Button>
                <Button>
                  <Heart />
                  <h5>Save</h5>
                </Button>
              </RightButtons>
            </ModalHeader>
            <Gallery>
              {images?.map((image, index) => (
                <ImageContainer key={index}>
                  <img src={image} alt={`img-${index}`} />
                </ImageContainer>
              ))}
            </Gallery>
          </ModalContent>
        </ModalWrapper>
      )}
    </>
  );
};

export default PhotosModal;
