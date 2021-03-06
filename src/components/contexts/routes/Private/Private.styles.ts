import styled, { css, DefaultTheme } from 'styled-components';
import media from 'styled-media-query';

type WrapperProps = {
  hasRelations: boolean;
}

const wrapperModifiers = {
  hasRelations: (theme: DefaultTheme) => css`
    width: calc(100% - ${theme.elements.relations});

    ${media.lessThan('large')`
      width: 100%;
    `}
  `,
};

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, hasRelations = true }) => css`
    display: grid;
    height: 100vh;
    grid-template-areas: 'nav' 'main';
    grid-template-rows: 80px 1fr;
    grid-template-columns: 1fr;
    width: 100%;
    transition: width 0.3s ease-in-out;
    overflow: hidden;

    ${hasRelations && wrapperModifiers.hasRelations(theme)}
  `}
`;

export const OutletWrapper = styled.div<WrapperProps>`
  ${({ theme }) => css`
    grid-area: main;
    padding-bottom: ${theme.spacings['2xlg']};
    display: flex;
    justify-content: center;

    /* > div {
      max-width: 1300px;
    } */
  `}
`;
