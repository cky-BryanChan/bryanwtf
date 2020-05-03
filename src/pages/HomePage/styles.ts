import styled from "styled-components";
import heroImage from "./image/hero.jpg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Section = styled.div`
  padding: 100px 5%;
`;

export const SectionHeader = styled.div`
  font-size: 25px;
  font-weight: 300;
  border-bottom: 1px solid #ddd;
  padding-bottom: 10px;
`;

export const ProfileSection = styled(Section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;

  p {
    color: white;
    margin: 10px 0;
    font-size: 20px;
  }
`;

export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0px;
  right: 0px;
  bottom: 0;
  background: url(${heroImage}) center center fixed no-repeat;
  background-size: cover;
  z-index: -1;

  @media only screen and (max-width: 600px) {
    background-image: url(${heroImage});
    /* background: url(${heroImage}) top left fixed no-repeat; */
    top: 0;
    left: 0;
  }
`;

export const ProfilePicWrapper = styled.div`
  border-radius: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 300px;
    height: 300px;
  }
`;

export const StorySection = styled(Section)`
  p {
    font-size: 18px;
  }
`;

export const InfoSection = styled(Section)`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const InfoBlock = styled.div`
  min-width: 50%;
  margin: 20px 0;

  h3 {
    margin: 5px 0;
    font-weight: 500;
    font-size: 25px;
  }

  img {
    width: 50px;
    height: 50px;
    border-radius: 5px;
    margin: 10px 0;
  }
`;

export const Education = styled(Section)`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;

  p {
    margin-right: 20px;
  }
`;

export const ContactSection = styled(Section)`
  display: flex;
  flex-direction: row;
  justify-content: center;

  .HM-social-icon {
    margin: 0 20px;
    color: #888;

    &:hover {
      cursor: pointer;
    }

    &.linkedin:hover {
      color: #0077b5;
    }

    &.github:hover {
      color: #6e5494;
    }

    &.wechat:hover {
      color: #7bb32e;
    }
  }
`;
