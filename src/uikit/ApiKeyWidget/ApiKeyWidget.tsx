import { Component, createEffect, createSignal } from 'solid-js';
import { z } from 'zod';

import { BColor, IColor, SaveButton, TextInput } from '../CabalExt';
import {
  contentAppStore,
  setContentAppStore,
} from '../../stores/contentAppStore';

const schema = z.object({
  apiKey: z.string().min(1, 'required'),
});

export type ApiKeyWidgetFormValues = { apiKey: string };

const ApiKeyWidget: Component<{ onApiKey: (apiKey: string) => void }> = ({
  onApiKey,
}) => {
  const [apiKey, setApiKey] = createSignal('');
  const [error, setError] = createSignal('');
  const [color, setColor] = createSignal(BColor.green);

  createEffect(() => {
    setError(contentAppStore.apiKeyError || '');
    setColor(!contentAppStore.apiKeyError ? BColor.green : BColor.red);
  });

  const handleApiKeyWidgetSubmit = ({ apiKey }: ApiKeyWidgetFormValues) => {
    onApiKey(apiKey);
  };

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    const result = schema.safeParse({ apiKey: apiKey() });

    if (!result.success) {
      setError(result.error.errors[0].message);
      return;
    }

    setError('');
    handleApiKeyWidgetSubmit({ apiKey: apiKey() });
  };

  return (
    <form>
      <div class="ext-flex ext-justify-center ext-mt-4 ext-w-full">
        <TextInput
          color={IColor.grey}
          placeholder="Paste API secret key from Telegram Bot"
          value={apiKey()}
          onChange={(value) => {
            console.log('$$$$$$$$$', value);
            setContentAppStore('apiKeyError', undefined);
            setApiKey(value);
          }}
        />
      </div>
      <div class="ext-flex ext-justify-center ext-mt-4 ext-w-full">
        <SaveButton
          color={color()}
          type="button"
          disabled={!(error() === '')}
          onClick={handleSubmit}
        >
          {error() || 'Connect to Cabal'}
        </SaveButton>
      </div>
    </form>
  );
};

export default ApiKeyWidget;
