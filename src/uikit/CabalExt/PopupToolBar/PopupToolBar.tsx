import { Component } from 'solid-js';
import { IconButton } from '../Button';
import { LogoutIcon, MinIcon, PreferencesIcon } from '../Icons';

export const PopupToolBar: Component<{
  onLogout: () => void;
  onSettings: () => void;
}> = (props) => {
  return (
    <div class="ext-flex ext-mb-4">
      <div></div>
      <div class="ext-flex ext-flex-1 ext-items-center">
        <div class="ext-flex ext-flex-1 ext-justify-end ext-gap-2">
          <div class="ext-size-7.5">
            <IconButton cn="ext-bg-black-100" onClick={props.onLogout}>
              <LogoutIcon size="7.5" />
            </IconButton>
          </div>
          <div class="ext-size-7.5">
            <IconButton cn="ext-bg-black-100" onClick={props.onSettings}>
              <PreferencesIcon size="7.5" />
            </IconButton>
          </div>
          <div class="ext-size-7.5">
            <IconButton cn="ext-bg-black-100">
              <MinIcon size="7.5" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
