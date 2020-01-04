/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
  render() {
    const {siteConfig, language = ''} = this.props;
    const {baseUrl, docsUrl} = siteConfig;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

    const SplashContainer = props => (
      <div className="homeContainer">
        <div className="homeSplashFade">
          {props.children}
        </div>
      </div>
    );

    const Logo = props => (
      <div className="projectLogo">
        <img src={props.img_src} alt="Project Logo" />
      </div>
    );

    const ProjectTitle = () => (
      <h2 className="projectTitle">
        {siteConfig.title}
        <small>{siteConfig.tagline}</small>
      </h2>
    );

    const PromoSection = props => (
      <div className="section promoSection">
        <div className="promoRow">
          <div className="pluginRowBlock">{props.children}</div>
        </div>
      </div>
    );

    const Button = props => (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={props.href} target={props.target}>
          {props.children}
        </a>
      </div>
    );

    return (
      <SplashContainer>
        <img src={`${baseUrl}img/og_image.png`} alt="Project Logo" />
      </SplashContainer>
    );
  }
}

class Index extends React.Component {
  render() {
    const {config: siteConfig, language = ''} = this.props;
    const {baseUrl} = siteConfig;

    const Block = props => (
      <Container
        padding={['bottom', 'top']}
        id={props.id}
        background={props.background}>
        <GridBlock
          align="center"
          contents={props.children}
          layout={props.layout}
        />
      </Container>
    );
    
    const MediaLink = props => {
      if (props.iconSource) {
        return (
          <a href={props.url} target="_blank" rel="noreferrer noopener">
            <img
              style={{ marginRight: 4 }}
              height={props.size}
              width={props.size}
              src={props.iconSource}
              alt={props.iconAlt}
            />
          </a>
        );
      } else return null;
    };
    
    const MediaObject = ({ member }) => {
      const { github, twitter, name, orgs, areas } = member;
      const avatarUrl = `https://avatars.githubusercontent.com/${github}`;
      const twitterUrl = `https://twitter.com/${twitter}`;
      const githubUrl = `https://github.com/${github}`;
      return (
        <div className="team_member">
          <img src={avatarUrl} height="200" width="200" alt={name} />
          <div className="member_info">
            <h5 style={{ fontWeight: 600 }}>{name}</h5>
            <MediaLink
              iconAlt="github"
              iconSource="/img/icons/github.svg"
              size="20"
              url={githubUrl}
              text={github}
            />
            <MediaLink
              iconAlt="twitter"
              iconSource="/img/icons/twitter.svg"
              size="20"
              url={twitterUrl}
              text={twitter}
            />
          </div>
        </div>
      );
    };

    const MemberSection = props => {
      return (
        props.members.map(member => {
          return <MediaObject key={member.github} member={member} />;
        })
      )
    };

    class Team extends React.Component {
      render() {
        const team = siteConfig.team;
        return (
          <Container padding={["bottom"]}>
            <h3 style={{textAlign:"center"}}>Meat our Team</h3>
            <div className="team">
              <MemberSection members={team.core} />
            </div>
          </Container>
        );
      }
    }

    const TryOut = () => (
      <Block id="try">
        {[
          {
            content:
              'To make your landing page more attractive, use illustrations! Check out ' +
              '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
              'The illustrations you see on this page are from unDraw.',
            image: `${baseUrl}img/undraw_code_review.svg`,
            imageAlign: 'left',
            title: 'Wonderful SVG Illustrations',
          },
        ]}
      </Block>
    );

    const Description = () => (
      <Block background="dark">
        {[
          {
            content:
              'This is another description of how this project is useful',
            image: `${baseUrl}img/undraw_note_list.svg`,
            imageAlign: 'right',
            title: 'Description',
          },
        ]}
      </Block>
    );

    const LearnHow = () => (
      <Block background="light">
        {[
          {
            content:
              'Each new Docusaurus project has **randomly-generated** theme colors.',
            image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
            imageAlign: 'right',
            title: 'Randomly Generated Theme Colors',
          },
        ]}
      </Block>
    );

    const Information = () => (
      <Container>
        <GridBlock
          align="left"
          contents={[
            {
              title: 'About TechView',
              content: `TechView contains +300 React Interview Questions in different React Topics, and we are working on adding more technologies
              eg: JavaScript, DataStructure, Algorithmes, and more!`
            },
            {
              title: 'Who we are?',
              content: `TechView is an Open-Source Project, available for anyone to add more questions, edit existing ones, or even add new technologies!`
            },
          ]}
          layout='twoColumn'
        />
      </Container>
    );

    const Showcase = () => {
      if ((siteConfig.users || []).length === 0) {
        return null;
      }

      const showcase = siteConfig.users
        .filter(user => user.pinned)
        .map(user => (
          <a href={user.infoLink} key={user.infoLink}>
            <img src={user.image} alt={user.caption} title={user.caption} />
          </a>
        ));

      const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

      return (
        <div className="productShowcaseSection paddingBottom">
          <h2>Who is Using This?</h2>
          <p>This project is used by all these people</p>
          <div className="logos">{showcase}</div>
          <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div>
        </div>
      );
    };

    return (
      <div>
        <HomeSplash siteConfig={siteConfig} language={language} />
        <div className="mainContainer">
          <Information />
          <Team />
          <LearnHow />
          <TryOut />
          <Description />
          <Showcase />
        </div>
      </div>
    );
  }
}

module.exports = Index;
