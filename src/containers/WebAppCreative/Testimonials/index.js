import React from 'react';
import Container from 'common/components/UI/Container';
import Image from 'common/components/Image';
import Heading from 'common/components/Heading';
import Text from 'common/components/Text';
import Section, {
  SectionHeading,
  ReactSlick,
  Item,
  AuthorInfo,
} from './testimonials.style';

import { testimonials } from 'common/data/WebAppCreative';

const settings = {
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const Testimonials = () => {
  return (
    <Section id="testimonial">
      <Container width="1400px">
        <SectionHeading>
          <Heading content="What people say about us" />
        </SectionHeading>
        <ReactSlick {...settings}>
          {testimonials.map((testimonial) => (
            <Item key={testimonial.id}>
              <div>
                <figure>
                  <Image src={testimonial.logo?.src} alt="logo" />
                </figure>
                <Text as="blockquote" content={testimonial.quote} />
              </div>
              <AuthorInfo>
                <Heading as="h4" content={testimonial.author} />
                <Text content={testimonial.designation} />
              </AuthorInfo>
            </Item>
          ))}
        </ReactSlick>
      </Container>
    </Section>
  );
};

export default Testimonials;
