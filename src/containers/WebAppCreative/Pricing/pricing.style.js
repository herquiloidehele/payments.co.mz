import styled from 'styled-components';
import { rgba } from 'polished';
import { themeGet } from '@styled-system/theme-get';

export const Section = styled.div`
  padding-top: 70px;
  padding-bottom: 130px;
  @media screen and (max-width: 1024px) {
    padding-top: 50px;
    padding-bottom: 110px;
  }
  @media screen and (max-width: 768px) {
    padding-top: 40px;
    padding-bottom: 60px;
  }
  @media screen and (max-width: 480px) {
    padding-bottom: 60px;
    padding-top: 40px;
  }
`;

export const SectionHeading = styled.div`
  max-width: 580px;
  margin-left: auto;
  margin-right: auto;
  text-align: center;
  margin-bottom: 25px;
  h2 {
    color: ${themeGet('colors.white')};
    font-weight: 700;
    font-size: 26px;
    line-height: 36px;
    letter-spacing: -0.2px;
    @media screen and (max-width: 480px) {
      font-size: 24px;
    }
  }
`;

export const SwitcherWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 50px;
  button {
    background-color: transparent;
    border: 0;
    color: ${themeGet('colors.textColorLight')};
    cursor: pointer;
    padding: 0;
    font-family: Inter, sans-serif;
    font-weight: 500;
    font-size: 16px;
    line-height: 28px;
  }
  .switcher {
    background-color: #3fdbb1;
    border-radius: 16.5px;
    cursor: pointer;
    margin: 0 10px;
    height: 30px;
    width: 50px;
    position: relative;
  }
  .switcher-button {
    background-color: #fff;
    border-radius: 50%;
    height: 23px;
    width: 23px;
    position: absolute;
    top: 50%;
    transform: translate(3px, -50%);
    transition: all 0.3s ease-in-out 0s;
    &.right {
      transform: translate(24px, -50%);
    }
  }
`;

export const Grid = styled.div`
  gap: 35px;
  display: grid;
  grid-template-columns: repeat(3, 360px);
  justify-content: center;
  @media screen and (max-width: 1024px) {
    gap: 20px;
    grid-template-columns: repeat(3, 1fr);
  }
  @media screen and (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const PriceTable = styled.div`
  background-color: ${rgba('#fff', 0.06)};
  color: ${themeGet('colors.white')};
  box-shadow: 0px 25px 70px rgba(64, 106, 157, 0.06);
  border-radius: 30px;
  padding: 45px 85px;
  text-align: center;
  @media (max-width: 1024px) {
    padding: 45px;
  }
  @media (max-width: 768px) {
    padding: 25px 14px;
  }
  @media (max-width: 480px) {
    padding: 35px 45px;
  }
  h2 {
    font-family: 'Inter', sans-serif;
    font-weight: 700;
    font-size: 36px;
    line-height: 44px;
    letter-spacing: -0.16px;
    margin-bottom: 25px;
    @media (min-width: 567px) and (max-width: 768px) {
      font-size: 32px;
      margin-bottom: 15px;
    }
  }
  h5 {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    margin-bottom: 10px;
  }
  p {
    color: ${themeGet('colors.textColorLight')};
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    line-height: 1.67;
  }
  figure {
    margin: 40px 0 28px;
    min-height: 101px;
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: 768px) {
      min-height: auto;
      margin-top: 30px;
      img {
        max-height: 60px;
      }
    }
  }
  button {
    border-radius: 10px;
    font-weight: 700;
    font-size: 15px;
    line-height: 1.6;
    letter-spacing: -0.16px;
    @media (min-width: 567px) and (max-width: 768px) {
      font-size: 14px;
      padding: 10px;
      min-height: 40px;
    }
    @media (max-width: 480px) {
      display: block;
      margin-left: auto;
      margin-right: auto;
    }
  }
  a {
    color: ${themeGet('colors.textColorLight')};
    font-size: 14px;
    line-height: 42px;
    font-weight: 700;
    margin-top: 15px;
    display: inline-flex;
  }
  &.active {
    background-color: ${themeGet('colors.white')};
    h2,
    h5 {
      color: ${themeGet('colors.headingColor')};
    }
    p,
    a {
      color: ${themeGet('colors.headingColor')};
    }
  }
`;
