import { Component } from 'solid-js';
import { Button, Paper } from '../../../uikit/CabalExt';

export const SettingsOthers: Component<{
  onSetStorageToDefault: () => void;
}> = (props) => {
  return (
    <Paper>
      <Button onClick={props.onSetStorageToDefault}>
        Set Storage to Default
      </Button>
    </Paper>
  );
};
