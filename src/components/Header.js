/** @jsx jsx */
import { css, jsx } from "@emotion/core"
import { Link } from "gatsby"

function Header({ siteTitle }) {
  return (
    <div
      css={css`
        border: 1px solid black;
      `}
    >
      <h1>header component</h1>
    </div>
  )
}

export default Header
