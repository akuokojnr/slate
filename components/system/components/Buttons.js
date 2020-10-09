import * as React from "react";
import * as Constants from "~/common/constants";

import { css } from "@emotion/react";

import { LoaderSpinner } from "~/components/system/components/Loaders";

const STYLES_BUTTON = `
  box-sizing: border-box;
  border-radius: 4px;
  outline: 0;
  border: 0;
  min-height: 40px;
  padding: 4px 16px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-size: 14px;
  letter-spacing: 0.2px;
  font-family: ${Constants.font.medium};
  transition: 200ms ease all;
  overflow-wrap: break-word;
  user-select: none;
`;

const STYLES_BUTTON_PRIMARY = css`
  ${STYLES_BUTTON}
  cursor: pointer;
  background-color: ${Constants.system.brand};
  color: ${Constants.system.white};

  :hover {
    background-color: #065ca8;
  }

  :focus {
    box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.3);
    background-color: #065ca8;
    outline: 0;
    border: 0;
  }
`;

const STYLES_BUTTON_PRIMARY_TRANSPARENT = css`
  ${STYLES_BUTTON}
  cursor: pointer;
  background-color: transparent;
  color: ${Constants.system.brand};
`;

export const ButtonPrimary = (props) => {
  if (props.loading) {
    return (
      <button
        css={
          props.transparent
            ? STYLES_BUTTON_PRIMARY_TRANSPARENT
            : STYLES_BUTTON_PRIMARY
        }
        style={{ ...props.style, width: props.full ? "100%" : "auto" }}
      >
        <LoaderSpinner style={{ height: 16, width: 16 }} />
      </button>
    );
  }

  if (props.type === "label") {
    return (
      <label
        css={
          props.transparent
            ? STYLES_BUTTON_PRIMARY_TRANSPARENT
            : STYLES_BUTTON_PRIMARY
        }
        style={{ ...props.style, width: props.full ? "100%" : "auto" }}
        children={props.children}
        type={props.label}
        htmlFor={props.htmlFor}
        onClick={props.onClick}
      />
    );
  }

  return (
    <button
      css={
        props.transparent
          ? STYLES_BUTTON_PRIMARY_TRANSPARENT
          : STYLES_BUTTON_PRIMARY
      }
      style={{ ...props.style, width: props.full ? "100%" : "auto" }}
      onClick={props.onClick}
      children={props.children}
    />
  );
};

export const ButtonPrimaryFull = (props) => {
  return <ButtonPrimary full {...props} />;
};

const STYLES_BUTTON_SECONDARY = css`
  ${STYLES_BUTTON}
  cursor: pointer;
  background-color: ${Constants.system.white};
  box-shadow: 0 0 0 1px ${Constants.system.border} inset;
  color: ${Constants.system.brand};

  :focus {
    outline: 0;
    border: 0;
  }
`;

const STYLES_BUTTON_SECONDARY_TRANSPARENT = css`
  ${STYLES_BUTTON}
  cursor: pointer;
  background-color: transparent;
  color: ${Constants.system.darkGray};
`;

export const ButtonSecondary = (props) => {
  if (props.loading) {
    return (
      <button
        css={
          props.transparent
            ? STYLES_BUTTON_SECONDARY_TRANSPARENT
            : STYLES_BUTTON_SECONDARY
        }
        style={{ ...props.style, width: props.full ? "100%" : "auto" }}
      >
        <LoaderSpinner style={{ height: 16, width: 16 }} />
      </button>
    );
  }

  if (props.type === "label") {
    return (
      <label
        css={
          props.transparent
            ? STYLES_BUTTON_SECONDARY_TRANSPARENT
            : STYLES_BUTTON_SECONDARY
        }
        style={{ ...props.style, width: props.full ? "100%" : "auto" }}
        onClick={props.onClick}
        children={props.children}
        type={props.label}
        htmlFor={props.htmlFor}
      />
    );
  }

  return (
    <button
      css={
        props.transparent
          ? STYLES_BUTTON_SECONDARY_TRANSPARENT
          : STYLES_BUTTON_SECONDARY
      }
      onClick={props.onClick}
      children={props.children}
      style={{ ...props.style, width: props.full ? "100%" : "auto" }}
    />
  );
};

export const ButtonSecondaryFull = (props) => {
  return <ButtonSecondary full {...props} />;
};

const STYLES_BUTTON_DISABLED = css`
  ${STYLES_BUTTON}
  cursor: not-allowed;
  background-color: ${Constants.system.gray};
  color: ${Constants.system.darkGray};

  :focus {
    outline: 0;
    border: 0;
  }
`;

const STYLES_BUTTON_DISABLED_TRANSPARENT = css`
  ${STYLES_BUTTON}
  cursor: not-allowed;
  background-color: transparent;
  color: ${Constants.system.gray};
`;

export const ButtonDisabled = (props) => {
  return (
    <button
      css={
        props.transparent
          ? STYLES_BUTTON_DISABLED_TRANSPARENT
          : STYLES_BUTTON_DISABLED
      }
      onClick={props.onClick}
      children={props.children}
      type={props.label}
      htmlFor={props.htmlFor}
      style={{ ...props.style, width: props.full ? "100%" : "auto" }}
    />
  );
};

export const ButtonDisabledFull = (props) => {
  return <ButtonDisabled full {...props} />;
};

const STYLES_BUTTON_WARNING = css`
  ${STYLES_BUTTON}
  cursor: pointer;
  background-color: #e0e0e0;
  color: ${Constants.system.red};

  :hover {
    background-color: #d4d4d4;
  }

  :focus {
    box-shadow: inset 0 0 5px 2px rgba(0, 0, 0, 0.3);
    background-color: #d4d4d4;
    outline: 0;
    border: 0;
  }
`;

const STYLES_BUTTON_WARNING_TRANSPARENT = css`
  ${STYLES_BUTTON}
  cursor: pointer;
  background-color: transparent;
  color: ${Constants.system.red};
`;

export const ButtonWarning = (props) => {
  if (props.loading) {
    return (
      <button
        css={
          props.transparent
            ? STYLES_BUTTON_WARNING_TRANSPARENT
            : STYLES_BUTTON_WARNING
        }
        style={{ ...props.style, width: props.full ? "100%" : "auto" }}
      >
        <LoaderSpinner style={{ height: 16, width: 16 }} />
      </button>
    );
  }

  if (props.type === "label") {
    return (
      <label
        css={
          props.transparent
            ? STYLES_BUTTON_WARNING_TRANSPARENT
            : STYLES_BUTTON_WARNING
        }
        style={{ ...props.style, width: props.full ? "100%" : "auto" }}
        children={props.children}
        type={props.label}
        htmlFor={props.htmlFor}
        onClick={props.onClick}
      />
    );
  }

  return (
    <button
      css={
        props.transparent
          ? STYLES_BUTTON_WARNING_TRANSPARENT
          : STYLES_BUTTON_WARNING
      }
      style={{ ...props.style, width: props.full ? "100%" : "auto" }}
      onClick={props.onClick}
      children={props.children}
    />
  );
};
