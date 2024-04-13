import React, { useState } from 'react';
import { Icon } from 'react-icons-kit';
import Fade from 'react-reveal/Fade';
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right';

import Container from 'common/components/UI/Container';
import Heading from 'common/components/Heading';
import Button from 'common/components/Button';
import Image from 'common/components/Image';
import Text from 'common/components/Text';

import { pricing } from 'common/data/WebAppCreative';
import {
  Section,
  SectionHeading,
  SwitcherWrapper,
  Grid,
  PriceTable,
} from './pricing.style';
import Link from "next/link";

const Pricing = () => {

  return (
    <Section id="pricing">
      <Container width="1400px">
        <SectionHeading style={{paddingBottom: '30px'}}>
          <Heading content="Explore os nossos pacotes" />
        </SectionHeading>

        <Grid>
          {pricing.map((priceTable) => (
            <Fade key={priceTable.id} up delay={priceTable.id * 100}>
              <PriceTable
                className={
                  priceTable.isActive
                    ? 'active animate__animated animate__fadeInUp'
                    : 'animate__animated animate__fadeInUp'
                }
              >
                <Heading
                  content={`${priceTable.price} ${priceTable.currencySymbol}`}
                />
                <Heading as="h5" content={priceTable.title} />
                <Text content={priceTable.desc} />
                <figure>
                  <Image src={priceTable.icon?.src} alt={priceTable.title} />
                </figure>
                <Link href={priceTable.button.link} target={'_blank'}>
                  <Button title={priceTable.button.label} />
                </Link>
              </PriceTable>
            </Fade>
          ))}
        </Grid>
      </Container>
    </Section>
  );
};

export default Pricing;
