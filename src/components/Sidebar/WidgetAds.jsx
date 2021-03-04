import React from "react";
import WidgetContainer from "./WidgetContainer";
import WidgetTitle from "./WidgetTitle";
import config from "../../../data/SiteConfig";
import sidebar_ads from '../../../content/images/binance-signup-10-fee-discount-800x450.jpg.webp';

const WidgetAds = () => (
  <WidgetContainer extraClass="categories-container">
    <WidgetTitle title="Sponsor" />

   <a href="https://www.binance.com/en/register?ref=28853355" target="_blank" rel="nofollow noopener noreferrer">
    <img src={sidebar_ads} />
    </a>
  </WidgetContainer>
)

export default WidgetAds;