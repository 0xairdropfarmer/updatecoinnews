import React from "react";
import WidgetContainer from "./WidgetContainer";
import WidgetTitle from "./WidgetTitle";
import config from "../../../data/SiteConfig";
import binance_banner from '../../../content/images/binance-signup-10-fee-discount-800x450.jpg.webp';
import zipmex_banner from './../../../public/img/zipmex.png.webp';
const WidgetAds = () => {

return(
  <>
  <WidgetContainer extraClass="categories-container">
    <WidgetTitle title="Sponsor" />
   <a href="https://www.binance.com/en/register?ref=Q4WT3GTW" target="_blank" rel="nofollow noopener noreferrer">
    <img src={binance_banner} />
    </a>
  </WidgetContainer>
  <WidgetContainer extraClass="categories-container">

   <a href="https://trade.zipmex.co.th/accounts/sign-up?aff=FHzCsIrLc9" target="_blank" rel="nofollow noopener noreferrer">
    <img src={zipmex_banner} />
    </a>
  </WidgetContainer>
  </>
)
}
export default WidgetAds;