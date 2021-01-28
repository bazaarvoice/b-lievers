import PropTypes from 'prop-types';
import React from 'react';
import {Flex, Box} from 'reflexbox';
import classNames from 'classnames';

import cxs from '../util/cxs';
import ClickToEdit from '../ClickToEdit';
import Button from '../Button';
import ButtonSubmit from '../ButtonSubmit';
import IconBazaarvoice from '../IconBazaarvoice';
import TabBar from '../TabBar';
import {borderLightColor, bvTeal} from '../colors';
import {selectorProps} from '../utils';

const styles = {
  editable: {
    cursor: 'pointer',
  },
  editableIcon: {
    fontSize: '0.5em',
    color: '#787878',
    marginRight: '0.25em',
  },
  input: {
    maxWidth: '60em',
  },
  base: {
    backgroundColor: '#fff',
    padding: '0.75rem 1rem 0.75rem 0',
    borderBottom: `1px solid ${borderLightColor}`,
    minHeight: 46,
  },
  title: {
    paddingTop: '0.5rem',
    fontWeight: 500,
    fontSize: '1.75rem',
    lineHeight: 1.2,
    display: 'inline-block',
    margin: '0 0 0 1rem',
  },
  headerButton: {
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  leftPad: {
    marginLeft: '0.5rem',
  },
  fullLeftPad: {
    marginLeft: '1.5rem',
  },
  internal: {
    height: '1.5em',
    backgroundColor: bvTeal,
  },
};
const PortalPageDetails = (props) => {
  const {
    children,
    editable,
    hasBackButton,
    headerButton,
    onEditSubmit,
    onBackClick,
    onPageChange,
    pages,
    secondaryHeaderButton,
    tab,
    tertiaryHeaderButton,
    title,
    subHeader,
  } = props;

  const renderHeading = () => {
    if (editable && onEditSubmit) {
      return (
        <ClickToEdit
          text={title}
          onEditSubmit={onEditSubmit}
          isHeader
        />
      );
    }

    return (
      <Flex style={styles.leftPad} className="PortalPageDetailsHeading">
        {hasBackButton &&
          <Button
            icon="AngleLeft"
            onClick={onBackClick}
            className="PortalPageDetailsBack"
          />
        }
        <h2 className={classNames('Heading', cxs(styles.title))} {...selectorProps(props)}>
          {title}
        </h2>
      </Flex>
    );
  };

  const buttonRightSyleProps = {mt: 0, mb: 0, mr: 0, ml: 1.5};

  return (
    <Box m={0} style={styles.base} className="PortalPageDetails">
      <div style={styles.header}>
        <Flex>
          <Box flex w={7 / 12}>
            { renderHeading() }
          </Box>
          <Box w={5 / 12} flex style={styles.headerButton} className="PortalPageDetailsActions">
            <span>
              {
                tertiaryHeaderButton.text &&
                <ButtonSubmit
                  type="secondary"
                  onClick={tertiaryHeaderButton.onClick}
                  submitting={tertiaryHeaderButton.submitting}
                  disabled={tertiaryHeaderButton.disabled}
                  className="PortalPageDetailsTertiaryAction"
                  {...buttonRightSyleProps}
                >
                  {tertiaryHeaderButton.text}
                </ButtonSubmit>
              }
              {
                secondaryHeaderButton.text &&
                <ButtonSubmit
                  type="normal"
                  onClick={secondaryHeaderButton.onClick}
                  submitting={secondaryHeaderButton.submitting}
                  disabled={secondaryHeaderButton.disabled}
                  className="PortalPageDetailsSecondaryAction"
                  {...buttonRightSyleProps}
                >
                  {secondaryHeaderButton.text}
                </ButtonSubmit>
              }
              {
                headerButton.text &&
                <ButtonSubmit
                  type="primary"
                  onClick={headerButton.onClick}
                  submitting={headerButton.submitting}
                  disabled={headerButton.disabled}
                  className="PortalPageDetailsPrimaryAction"
                  {...buttonRightSyleProps}
                >
                  {headerButton.text}
                </ButtonSubmit>
              }
            </span>
          </Box>
        </Flex>
        {subHeader &&
          <Flex style={styles.fullLeftPad} className="PortalPageDetailsSubheader">{subHeader}</Flex>
        }
      </div>
      {pages && pages.tabs &&
        <Box my={0} style={styles.leftPad} className="PortalPageDetailsTabs">
          <TabBar
            tabs={pages.tabs}
            selectedTab={tab.href}
            onTabSelected={onPageChange}
          />
          { tab.internal &&
          <Flex style={styles.internal}>
            <IconBazaarvoice narrow color="white" size={20} />
          </Flex>
          }
        </Box>
      }
      {children}
    </Box>
  );
};

PortalPageDetails.displayName = 'PageDetails';

PortalPageDetails.propTypes = {
  title: PropTypes.node.isRequired,
  hasBackButton: PropTypes.bool,
  editable: PropTypes.bool,
  onEditSubmit: PropTypes.func,
  onBackClick: PropTypes.func,
  children: PropTypes.node,
  onPageChange: PropTypes.func,
  section: PropTypes.object,
  pages: PropTypes.object,
  tab: PropTypes.object,
  hasCenteredContent: PropTypes.bool,
  subHeader: PropTypes.node,
  headerButton: PropTypes.shape({
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    submitting: PropTypes.bool,
    text: PropTypes.node,
  }),
  secondaryHeaderButton: PropTypes.shape({
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    submitting: PropTypes.bool,
    text: PropTypes.node,
  }),
  tertiaryHeaderButton: PropTypes.shape({
    disabled: PropTypes.bool,
    onClick: PropTypes.func,
    submitting: PropTypes.bool,
    text: PropTypes.string,
  }),
};

PortalPageDetails.defaultProps = {
  showBreadcrumbs: false,
  useCustomTabs: false,
  editable: false,
  hasBackButton: false,
  hasCenteredContent: false,
  headerButton: {
    submitting: false,
    disabled: false,
  },
  secondaryHeaderButton: {
    submitting: false,
    disabled: false,
  },
  tertiaryHeaderButton: {
    submitting: false,
    disabled: false,
  },
};

export default PortalPageDetails;