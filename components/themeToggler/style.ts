import styled from 'styled-components'


export const StyledSwitcher = styled.button<{current: string}>`

  font-size: 16px;
  width: 2em;
  height: 2em;
  position: relative; 
  border-radius: 50%;
  display: block;
  margin-left: 16px;
  border: none;
  background: transparent;
  overflow: hidden;
  perspective: 1000px;
  color: ${props => props.theme.text};

  .flipper {
    transform-style: preserve-3d;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform .5s linear;
    transform: rotateY(${props => props.current === 'light' ? '0deg' : '180deg'});
  }

  .dark { transform: rotateY(180deg) }

  &:hover {
    .flipper { transform: rotateY(${props => props.current === 'light' ? '180deg' : '0deg'}); }

    .light {
      background: #87ceeb;
      color: #f9d71c;
    }
    .dark {
      background: #0c1445;
      color: #F4F1C9;
    }

    /* span.${props => props.current} {
      transform: rotateY(180deg);
    }

    span:not(.${props => props.current}) {
      transform: rotateY(0deg);
    } */
  }

  span {
    background: ${props => props.theme.background};
    backface-visibility: hidden;
    transition: all .25s;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.25em;
    line-height: 1.25em;

    /* &.${props => props.current} {
      transform: rotateY(0deg);
    }


    &::not(.${props => props.current}) {
      transform: rotateY(180deg);
    } */
  }

`
