import React from 'react';
import {css} from '@emotion/core';

function Introduction() {
  const boxOneStyle = css`
    border: 1px solid black;
    margin: 1rem;
    width: 300px;
  `;

  const boxTwoStyle = css`
    border: 1px solid black;
    margin: 1rem;
    width: 300px;
  `;
  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
        align-items: center;
        margin: 2rem auto;
      `}
    >
      <div css={boxOneStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut velit
        ligula, varius eu hendrerit ut, vehicula sed nisi. Pellentesque commodo
        tempus felis, in suscipit ipsum auctor id. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia curae; Donec
        porttitor ultricies ornare. Duis eget imperdiet tellus. Nullam nec
        condimentum magna. Sed ultrices dolor ut eleifend imperdiet. Morbi quam
        ex, blandit in gravida at, pretium id dolor. Suspendisse hendrerit justo
        id justo porta commodo. Fusce ut sapien eu dui euismod fringilla quis
        nec nisi. Sed vitae tempor justo. Integer ut ligula in lacus laoreet
        elementum. Fusce quis libero sollicitudin, tempus velit at, feugiat
        lectus. Aliquam porta feugiat posuere. Aliquam erat volutpat. Nunc
        feugiat lobortis vehicula. Donec porttitor laoreet neque vehicula
        tempus. Vestibulum eleifend sapien nunc, commodo sollicitudin ligula
        vestibulum sed. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas.
      </div>
      <div css={boxTwoStyle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut velit
        ligula, varius eu hendrerit ut, vehicula sed nisi. Pellentesque commodo
        tempus felis, in suscipit ipsum auctor id. Vestibulum ante ipsum primis
        in faucibus orci luctus et ultrices posuere cubilia curae; Donec
        porttitor ultricies ornare. Duis eget imperdiet tellus. Nullam nec
        condimentum magna. Sed ultrices dolor ut eleifend imperdiet. Morbi quam
        ex, blandit in gravida at, pretium id dolor. Suspendisse hendrerit justo
        id justo porta commodo. Fusce ut sapien eu dui euismod fringilla quis
        nec nisi. Sed vitae tempor justo. Integer ut ligula in lacus laoreet
        elementum. Fusce quis libero sollicitudin, tempus velit at, feugiat
        lectus. Aliquam porta feugiat posuere. Aliquam erat volutpat. Nunc
        feugiat lobortis vehicula. Donec porttitor laoreet neque vehicula
        tempus. Vestibulum eleifend sapien nunc, commodo sollicitudin ligula
        vestibulum sed. Pellentesque habitant morbi tristique senectus et netus
        et malesuada fames ac turpis egestas.
      </div>
    </div>
  );
}

export default Introduction;
