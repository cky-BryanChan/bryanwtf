import React, { useState } from "react";

//assets
import ProfilePic from "../../assets/profile.jpg";
import uoftLogo from "../../assets/uoft.png";
import QRcode from "./image/wechat.jpg";

//styles
import {
  Container,
  SectionHeader,
  ProfileSection,
  BackgroundImage,
  ProfilePicWrapper,
  StorySection,
  InfoSection,
  InfoBlock,
  Education,
  ContactSection,
} from "./styles";

const SKILLS: string[] = [
  "React JS",
  "React Native",
  "HTML",
  "CSS",
  "Git",
  "blah blah blah...",
  "see resume if you want more...",
];

const HomePage: React.FC = () => {
  return (
    <Container>
      <ProfileSection>
        <ProfilePicWrapper>
          <img src={ProfilePic} alt="bg" />
        </ProfilePicWrapper>
        <p className="in">- K.Y Bryan Chan, React Developer</p>
        <BackgroundImage />
      </ProfileSection>

      <StorySection>
        <SectionHeader>How I End Up With Coding?</SectionHeader>
        <br />
        <p>Well, I saw Mark Zuckerberg on TV one time.</p>
      </StorySection>

      <InfoSection>
        <InfoBlock>
          <h3>Skills</h3>
          <div className="HM-skill-list">
            {SKILLS.map((s) => {
              return <p key={s}>-{s}</p>;
            })}
            <a
              href="https://docs.google.com/document/d/1yDdUNUe_3YONlHK9XqHeBJdhtYGubXrxjLWw-Honmyw/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </InfoBlock>

        <InfoBlock>
          <h3>Education</h3>
          <Education>
            <p>
              Bachelor of Applied Science (Computer Engineering) degree at
              University of Toronto
            </p>
            <img src={uoftLogo} alt="uoft" />
          </Education>
        </InfoBlock>
      </InfoSection>
    </Container>
  );
};

export default HomePage;
