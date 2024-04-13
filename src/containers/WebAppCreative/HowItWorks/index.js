import React from 'react';
import { Icon } from 'react-icons-kit';
import { arrowRight } from 'react-icons-kit/feather/arrowRight';
import Container from 'common/components/UI/Container';
import NextImage from 'common/components/NextImage';
import Link from 'common/components/Link';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section, { SectionHeading, Grid, Item } from './howItWorks.style';

import { howTos } from 'common/data/WebAppCreative';

const HowItWorks = () => {
  return (
    <Section id="how-to">
      <Container width="1400px">
        <SectionHeading>
          <Heading content="O que oferecemos?" />
        </SectionHeading>
        <Grid>
          {howTos.map((howTo) => (
            <Item key={howTo.id}>
              <figure>
                <NextImage src={howTo.icon} alt="icon" />
              </figure>
              <Heading as="h4" content={howTo.title} />
              <Text content={howTo.text} />
            </Item>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default HowItWorks;
