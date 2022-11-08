import styled from "styled-components";

const Title = styled.h1``;

const Subtitle = styled.h2``;

const ContentContainer = styled.div``;

const contents = [
  {
    title: "Hello Lightning! Build a TMDB App.",
    subtitle: "An introduction to STB app development in Lightning.js",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];

const Content = styled.div``;
const ContentTitle = styled.h3``;
const ContentSubtitle = styled.h4``;
const ContentDescription = styled.p``;

function Contents() {
  return (
    <ContentContainer>
      {contents.map(({ title, subtitle, desc }, key) => {
        return (
          <Content key={key}>
            <ContentTitle>{title}</ContentTitle>
            <ContentSubtitle>{subtitle}</ContentSubtitle>
            <ContentDescription>{desc}</ContentDescription>
          </Content>
        );
      })}
    </ContentContainer>
  );
}

export default function Home() {
  return (
    <div>
      <Title>ThunderProof Blog</Title>
      <Subtitle>Build Lightning fast apps. Without getting shocked!</Subtitle>

      <Contents />
    </div>
  );
}
