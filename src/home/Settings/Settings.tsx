import { Component, Show } from 'solid-js';

import { BuySellSettingsForm } from './BuySellSettingsForm/BuySellSettingsForm';
import { AutoLimitsSettingsForm } from './AutoLimitsSettingsForm/AutoLimitsSettingsForm';
import { MigrationSnipeSettingsForm } from './MigrationSnipeSettingsForm';
import { LimitSettingsForm } from './LimitSettingsForm';
import { TxProcessorsForm } from './TxProcessorsForm';
import { SettingsFooter } from './SettingsFooter';
import { useSettingsStore } from './useSettingsStore';
import { TabNames } from './Settings.enums';
import { TopSettingsNav } from './TopSettingsNav/TopSettingsNav';
import * as S from './Settings.parts';
import { SettingsOthers } from './SettingsOthers/SettingsOthers';
import { SettingsHandlers } from './types';
import { useStartCabalService } from '../../services/useCabalService';
import { BuySellConfig } from '../../services/CabalStorage/types';

const Settings: Component<{ handlers: SettingsHandlers }> = (props) => {
  const { saveBuySellSettings } = useStartCabalService();
  const { others, selectedTab, setSelectedTab, bsState } = useSettingsStore({
    handlers: props.handlers,
    saveBSConfig: (value: BuySellConfig) => {
      saveBuySellSettings(value);
    },
  });

  return (
    <S.Container>
      {/* Tabs */}
      <TopSettingsNav
        selectedTab={selectedTab()}
        setSelectedTab={setSelectedTab}
      />
      <S.Content>
        <Show when={selectedTab() === TabNames.buysell}>
          <BuySellSettingsForm state={bsState} />
        </Show>

        <Show when={selectedTab() === TabNames.autolimits}>
          <AutoLimitsSettingsForm />
        </Show>

        <Show when={selectedTab() === TabNames.migrationsnipe}>
          <MigrationSnipeSettingsForm />
        </Show>

        <Show when={selectedTab() === TabNames.limit}>
          <LimitSettingsForm />
        </Show>

        <Show when={selectedTab() === TabNames.txproc}>
          <TxProcessorsForm />
        </Show>

        <Show when={selectedTab() === TabNames.others}>
          <SettingsOthers
            onSetStorageToDefault={others.onSetStorageToDefault}
          />
        </Show>
      </S.Content>
      <SettingsFooter />
    </S.Container>
  );
};

export default Settings;
