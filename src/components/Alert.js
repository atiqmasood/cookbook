import React from 'react';
import {Alert as MuiAlert} from '@material-ui/lab';

export default function Alert({severity, variant, message}) {

  return (
    <div>
      <MuiAlert severity={severity} variant={variant}>
          {message}
      </MuiAlert>
    </div>
  );
}