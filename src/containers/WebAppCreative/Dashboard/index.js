import React from 'react';
import { Tab, TabList, TabPanel } from 'react-tabs';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Text from 'common/components/Text';
import Heading from 'common/components/Heading';
import Section, { SectionHeading, ReactTabs } from './dashboard.style';

import { dashboard } from 'common/data/WebAppCreative';

const Dashboard = () => {
  return (
    <Section id="features">
      <Container width="1400px">
        <SectionHeading>
          <Heading content={dashboard.sectionTitle} />
          <Text content={dashboard.sectionDesc} />
        </SectionHeading>
        <ReactTabs>
          <nav>
            <TabList>
              {dashboard.tabs.map((tab) => (
                <Tab key={tab.id}>{tab.title}</Tab>
              ))}
            </TabList>
          </nav>

          {dashboard.tabs.map((tab) => (
            <TabPanel key={tab.id}>
              <figure className="animate__animated animate__fadeInUp" style={{borderRadius: "20px", background: 'transparent', boxShadow: "9px 6px 75px 18px rgba(0,0,0,0.1)"}}>
                <NextImage src={tab.content.image} alt={tab.title} style={{borderRadius: "20px"}} />
              </figure>
            </TabPanel>
          ))}
        </ReactTabs>
      </Container>
    </Section>
  );
};

export default Dashboard;
