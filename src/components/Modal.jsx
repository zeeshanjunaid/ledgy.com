// @flow

import React, { type Node } from 'react';

export default ({
  children,
  title = '',
  button,
  trigger = 'Learn more',
  hideFooter = false,
  onSave
}: {|
  children?: Node,
  title?: string,
  button?: Node,
  trigger?: Node,
  hideFooter?: boolean,
  onSave?: () => void
|}) => {
  const Button = button;
  return (
    <>
      {Button || (
        <button
          type="button"
          className="btn btn-round btn-light"
          data-toggle="modal"
          data-target="#customModal"
        >
          {trigger}
        </button>
      )}

      <div
        className="modal fade"
        id="customModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="customModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header bg-primary d-flex align-items-center justify-content-center">
              <h5 className="modal-title" id="customModalLabel">
                {title}
              </h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body text-dark">{children}</div>
            {!hideFooter && (
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">
                  Close
                </button>
                {onSave && (
                  <button type="button" className="btn btn-primary">
                    Save changes
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};
