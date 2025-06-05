chrome extensions
load unpacked

select `dist` folder

open https://gmgn.ai/sol/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr

handle messages from content:

handleMessagesToBackground

install ext

1. bg -> startApp

fetch apiKey from storage

start listen messages from `tabs`
BackgroundMessages.SET_APIKEY
BackgroundMessages.INIT_CABAL
BackgroundMessages.SUBSCRIBE_TOKEN
BackgroundMessages.BUY_MARKET
BackgroundMessages.SELL_MARKET

subscribe `changeCurrentTab` event

===

Content

[SEND TO Bg]

Register Tab

Active

In Active

ChangeUrl

====

SET_APIKEY
BUY_MARKET
SELL_MARKET
SUBSCRIBE_TOKEN

#### Description [content flow]

1. a new tab were created
   -> register tab

A: `service is ready`, `apiKey setted`, `tokenSubscribed`
service status
shouldSetApiKey
isReady
mint

config + setting + token settings
tips/slipapge
default btns

<-<-<-<- status

    isReady: true
    shouldSetApiKey: false
    mint
    settings
    ??? subscribedTokenData

B: `service is not ready: loading`, `apiKey setted` ,`not tokenSubscribed`

    <-<-<-<- status
    isReady: false
    shouldSetApiKey: false
    mint
    settings

    !!! wait for isReady
    !!! wait for Subscribe Toke

C: `service is not ready: loading`, `apiKey setted` ,`not tokenSubscribed`

    <-<-<-<- status
    isReady: false
    shouldSetApiKey: false
    mint
    settings

    !!! wait for setUP key
    !!! wait for isReady
    !!! wait for Subscribe Toke

### Enter api key

content

onMount
handleStart
startListen
registerTab

установка раширения

случай 2 вкладки

на обоих открываем расширение
экран api key

```
!!!register tab
    apiKey: null
    isReady: false
    mint: "7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr"
    url: "https://gmgn.ai/sol/token/7GCihgDB8fe6KNjn2MYtkzZcRjQy3t9GHdC8uHYmW2hr"
```
