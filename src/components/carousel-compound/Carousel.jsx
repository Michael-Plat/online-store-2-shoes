import React from 'react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

import Page from './Page';
import { CarouselContext } from './carousel-context';

import './Carousel.scss';

const TRANSITION_DURATION = 300;

export function Carousel({ children, key: index, infinite }) {
  const [offset, setOffset] = React.useState(0);
  const [width, setWidth] = React.useState(450);
  const [pages, setPages] = React.useState([]);
  const [clonesCount, setClonesCount] = React.useState({ head: 0, tail: 0 });
  const [transitionDuration, setTransitionDuration] = React.useState(300);

  const windowElRef = React.useRef();

  React.useEffect(() => {
    if (infinite) {
      setPages([
        React.cloneElement(children[React.Children.count(children) - 1]),
        ...children,
        React.cloneElement(children[0]), // tail: 1
      ]);
      setClonesCount({ head: 1, tail: 1 });
      return;
    }
    setPages(children);
  }, [children, infinite]);

  React.useEffect(() => {
    const resizeHandler = () => {
      const windowElWidth = windowElRef.current.offsetWidth;

      setWidth(windowElWidth);
      setOffset(-(clonesCount.head * width)); // to prevent wrong offset
    };

    resizeHandler();
    window.addEventListener('resize', resizeHandler);

    return () => {
      window.removeEventListener('resize', resizeHandler);
    };
  }, [clonesCount, width]);

  React.useEffect(() => {
    if (transitionDuration === 0) {
      setTimeout(() => {
        setTransitionDuration(TRANSITION_DURATION);
      }, TRANSITION_DURATION);
    }
  }, [transitionDuration]);

  React.useEffect(() => {
    if (!infinite) return;

    // с элемента 0 (clone) -> к предпоследнему (реальный);
    if (offset === 0) {
      setTimeout(() => {
        setTransitionDuration(0);
        setOffset(-(width * (pages.length - 1 - clonesCount.tail)));
      }, TRANSITION_DURATION);
      return;
    }

    // с элемента n (clone) -> к элементу 1 (реальный);
    if (offset === -(width * (pages.length - 1))) {
      setTimeout(() => {
        setTransitionDuration(0);
        setOffset(-(clonesCount.head * width));
      }, TRANSITION_DURATION);
      return;
    }
  }, [offset, infinite, pages, clonesCount, width]);

  const handleLeftClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset + width;
      return Math.min(newOffset, 0);
    });
  };

  const handleRightClick = () => {
    setOffset((currentOffset) => {
      const newOffset = currentOffset - width;
      const maxOffset = -(width * (pages.length - 1));
      return Math.max(newOffset, maxOffset);
    });
  };

  return (
    <CarouselContext.Provider value={{ width }}>
      <div className="mainContainer">
        <FaChevronLeft className="arrow" onClick={handleLeftClick} />
        <div className="window" ref={windowElRef}>
          <div
            className="allPagesContainer"
            style={{
              transform: `translateX(${offset}px)`,
              transitionDuration: `${transitionDuration}ms`,
            }}>
            {pages.map((pages, index) => (
              <React.Fragment key={index}>{pages}</React.Fragment>
            ))}
          </div>
        </div>
        <FaChevronRight className="arrow" onClick={handleRightClick} />
      </div>
    </CarouselContext.Provider>
  );
}

Carousel.Page = Page;
