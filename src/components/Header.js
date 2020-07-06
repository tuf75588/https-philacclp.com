/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"

function Header({ siteTitle }) {
  return (
    <div
      css={css`
        padding: 2rem;
        display: flex;
        justify-content: space-between;
        align-items: center;
        font-size: 16px;
        width: 100%;
      `}
    >
      <div className="header-social-media">
        <p>social media stuff</p>
      </div>
      <div className="header-logo">
        <p>Center City</p>
        <p>Language & Play</p>
      </div>
      <div className="header-contact">
        <p>999.999.9999 | placeholderemail@gmail.com</p>
      </div>
    </div>
  )
}

export default Header
