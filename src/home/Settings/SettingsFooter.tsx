import { For } from 'solid-js';
import {
  CabalIcon,
  CabalLogoIcon,
  DocsIcon,
  TelegramIcon,
  Typography,
  XIcon,
} from '../../uikit/CabalExt';

const footerItems = [
  {
    label: 'Bot',
    href: 'https://cabalbot.ai/',
    icon: <CabalIcon />,
  },
  {
    label: 'Hub',
    href: 'https://t.me/cabalsolana_portal',
    icon: <TelegramIcon />,
  },
  {
    label: 'Docs',
    href: 'https://cabalbot-1.gitbook.io/cabalbot-docs',
    icon: <DocsIcon />,
  },
  {
    label: 'Twitter',
    href: 'https://x.com/CabalSolana_bot',
    icon: <XIcon />,
  },
];

export const SettingsFooter = () => {
  return (
    <div class="ext-flex ext-justify-center ext-items-center ext-gap-7 ext-pt-7">
      <div class="ext-flex">
        <CabalLogoIcon />
      </div>
      <div class="ext-flex ext-gap-4">
        <For each={footerItems}>
          {(footerItem) => {
            return (
              <div>
                <a href={footerItem.href}>
                  <div class="ext-flex ext-gap-1">
                    <div>{footerItem.icon}</div>
                    <div>
                      <Typography children={footerItem.label} />
                    </div>
                  </div>
                </a>
              </div>
            );
          }}
        </For>
      </div>
    </div>
  );
};
