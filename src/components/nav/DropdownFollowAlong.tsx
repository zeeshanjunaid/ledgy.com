import React, { useState, MouseEvent } from 'react';
import { Link } from 'gatsby';
import { CSSTransition } from 'react-transition-group';

import {
  NAVBAR_TITLES,
  NAVBAR_LINKS,
  formatUrl,
  isExternalUrl,
  NavbarMenuColumn,
  NavbarMenuItem,
} from '../lib';
import { targetBlank } from '../../helpers';
import { DynamicTrans } from '../DynamicTrans';
import { Icon } from '../Icon';

type ListItemProps = { title: string; isTextShown: boolean; prefix: string };

type ParentListItemProps = ListItemProps & {
  eventHandlingProps: {
    onMouseEnter: (e: MouseEvent) => void;
    onMouseLeave: (e: MouseEvent) => void;
  };
  menuColumns: NavbarMenuColumn[];
  disappear: () => void;
  className: string;
};

const NAV_ID = 'custom-hover-nav';
const getNavbar = () => document.getElementById(NAV_ID);

const ListItem = ({
  icon,
  title,
  description,
  link,
  prefix,
  onClick,
  isTextShown,
}: NavbarMenuItem & { onClick: () => void; prefix: string; isTextShown: boolean }) => {
  const itemContent = (
    <div className="d-flex">
      <Icon icon={icon} className="mt-3 mr-2" height={30} width={30} />
      <div>
        <h5 className={`text-primary mt-2 ${description ? 'mb-1' : 'mb-2'}`}>
          <DynamicTrans>{title}</DynamicTrans>
        </h5>
        <div className="list-item-hover-text mb-3">
          <DynamicTrans>{description}</DynamicTrans>
        </div>
      </div>
    </div>
  );

  return (
    <li className={`list-item-hover p-2 ${isTextShown ? 'show' : 'hide'}`}>
      {isExternalUrl(link) ? (
        <a href={link} onClick={onClick} {...targetBlank}>
          {itemContent}
        </a>
      ) : (
        <Link to={formatUrl(prefix, link)} onClick={onClick}>
          {itemContent}
        </Link>
      )}
    </li>
  );
};

const DropdownItem = ({
  eventHandlingProps,
  title: parentTitle,
  menuColumns,
  prefix,
  disappear,
  isTextShown,
  className,
}: ParentListItemProps) => (
  <li {...eventHandlingProps} className="dropdown-item-hover">
    <p>
      <DynamicTrans>{parentTitle}</DynamicTrans>
    </p>
    <div className={`hover-list-child ${className}`}>
      {menuColumns.map((column, i) => {
        const { items, header } = column;
        return (
          <div key={`${header}-${i}`} className="flex-1 px-2">
            {!!header && (
              <h6 className="column-header text-gray-neutral my-2">
                <DynamicTrans>{header.toUpperCase()}</DynamicTrans>
              </h6>
            )}
            {items.map((item) => (
              <ListItem
                {...item}
                prefix={prefix}
                key={item.link}
                onClick={disappear}
                isTextShown={isTextShown}
              />
            ))}
          </div>
        );
      })}
    </div>
  </li>
);

const { solutionsTitle, resourcesTitle, pricingTitle } = NAVBAR_TITLES;
const { solutions, resources, pricing } = NAVBAR_LINKS;

const dropdownItems: [string, NavbarMenuColumn[], string][] = [
  [solutionsTitle, solutions, 'solutions-dd'],
  [resourcesTitle, resources, 'resources-dd'],
  [pricingTitle, pricing, 'pricing-dd'],
];

export const DropdownFollowAlong = (props: LayoutProps) => {
  const [isFloatingBackground, setFloatingBackground] = useState(false);
  const [backgroundWidth, setBackgroundWidth] = useState('');
  const [backgroundHeight, setBackgroundHeight] = useState('');
  const [backgroundTransform, setBackgroundTransform] = useState('');
  const [firstHover, setFirstHover] = useState(true);
  const [isTextShown, setShowText] = useState(true);

  const hoverIn = (e: MouseEvent) => {
    setShowText(true);
    const navbar = getNavbar();
    if (navbar) {
      const { currentTarget } = e;
      currentTarget.classList.add('trigger-enter');
      setTimeout(() => currentTarget.classList.add('trigger-enter-active'), 100);
      const dropdown = currentTarget.querySelector('.hover-list-child');
      if (dropdown) {
        const dropdownPosition = dropdown.getBoundingClientRect();
        const nav = navbar.getBoundingClientRect();
        const shiftX = dropdownPosition.left - nav.left;
        const shiftY = dropdownPosition.top - nav.top;

        setFloatingBackground(true);
        setBackgroundWidth(`${dropdownPosition.width}px`);
        setBackgroundHeight(`${dropdownPosition.height}px`);
        setBackgroundTransform(`translate(${shiftX}px, ${shiftY}px)`);
        if (firstHover) setTimeout(() => setFirstHover(false), 0);
      }
    }
  };

  const hoverOut = (e: MouseEvent) => {
    const { currentTarget } = e;
    currentTarget.classList.remove('trigger-enter');
    setTimeout(() => currentTarget.classList.remove('trigger-enter-active'), 100);
    setFloatingBackground(false);
  };

  const disappear = () => {
    setShowText(false);
    setFloatingBackground(false);
    const triggered = document.querySelector('.trigger-enter');
    if (triggered) triggered.classList.remove('trigger-enter');
  };

  const eventHandlingProps = {
    onMouseEnter: (e: MouseEvent) => hoverIn(e),
    onMouseLeave: (e: MouseEvent) => hoverOut(e),
  };
  return (
    <>
      <nav id={NAV_ID}>
        <CSSTransition
          in={isFloatingBackground}
          timeout={500}
          classNames="dropdown-background-transition"
          unmountOnExit
        >
          <div
            className="dropdown-background d-flex justify-content-center position-absolute bg-white"
            style={{
              width: backgroundWidth,
              height: backgroundHeight,
              transform: backgroundTransform,
              transition: firstHover ? 'opacity 300ms' : 'all 200ms',
            }}
          >
            <span className="arrow" />
          </div>
        </CSSTransition>

        <ul className="dropdown-items-parent">
          {dropdownItems.map(([parentTitle, menuColumns, className]) => (
            <DropdownItem
              key={className}
              eventHandlingProps={eventHandlingProps}
              title={parentTitle}
              menuColumns={menuColumns}
              prefix={props.prefix}
              disappear={disappear}
              isTextShown={isTextShown}
              className={className}
            />
          ))}
        </ul>
      </nav>
    </>
  );
};
