import { Component } from 'solid-js';
import { IconButton } from '../Button';
import { LogoutIcon, MinIcon, PreferencesIcon } from '../Icons';

export const PopupToolBar: Component<{
  onLogout: () => void;
  onSettings: () => void;
}> = (props) => {
  return (
    <div class="e:flex e:mb-4">
      <div></div>
      <div class="e:flex e:flex-1 e:items-center">
        <div class="e:flex e:flex-1 e:justify-end e:gap-2">
          <div class="e:size-7.5">
            <IconButton cn="e:bg-black-100" onClick={props.onLogout}>
              <LogoutIcon size="7.5" />
            </IconButton>
          </div>
          <div class="e:size-7.5">
            <IconButton cn="e:bg-black-100" onClick={props.onSettings}>
              <PreferencesIcon size="7.5" />
            </IconButton>
          </div>
          <div class="e:size-7.5">
            <IconButton cn="e:bg-black-100">
              <MinIcon size="7.5" />
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
};
