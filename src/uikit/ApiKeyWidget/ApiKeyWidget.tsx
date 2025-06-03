import { Component, createSignal } from 'solid-js';
import { z } from 'zod';

import { Input, Button } from '../../uikit';

const schema = z.object({
  apiKey: z.string().min(1, 'required'),
});
const cabalImg = chrome.runtime.getURL('assets2/cabal.svg');
const cabalTextImg = chrome.runtime.getURL('assets2/cabal_text.svg');

export type ApiKeyWidgetFormValues = { apiKey: string };

const ApiKeyWidget: Component<{ onApiKey: (apiKey: string) => void }> = ({
  onApiKey,
}) => {
  const [apiKey, setApiKey] = createSignal('');
  const [error, setError] = createSignal('');

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

  const handleOnInput = (e: Event & { currentTarget: HTMLInputElement }) =>
    setApiKey(e.currentTarget.value);

  return (
    <form onSubmit={handleSubmit}>
      <div class="ext-flex">
        <div>
          <img src={cabalImg} alt="cabal" />
        </div>
        <div>
          <img src={cabalTextImg} alt="cabal" />
        </div>
      </div>
      <div class="ext-flex ext-justify-center">
        <div class="ext-text-xl">To start enter an API key: </div>
      </div>
      <div class="ext-flex ext-justify-center ext-mt-4 ext-w-full">
        <Input
          cn="focus:ext-bg-black focus:ext-text-green-400"
          type="text"
          name="name"
          placeholder="key 427P1H3..."
          value={apiKey()}
          onInput={handleOnInput}
        />
      </div>
      <div class="ext-flex ext-justify-center ext-mt-4 ext-w-full">
        <Button type="submit" disabled={!apiKey()}>
          Connect to Cabal
        </Button>
      </div>
    </form>
  );
};

export default ApiKeyWidget;
