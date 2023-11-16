# Project Name

Mint Pass Frontend

## Description

## Features

## Technologies Used

- React js
- Next js
- Typescript
- antd
- web3
- scss

## Screenshots/Demo

## Getting Started

- Make sure you you have `yarn` installed in your local machine
- `yarn` version ^1.22.18
- `Node` version ^16.14.0

### Installation

1. Clone the repository:
   git clone https://your-username:your-access-token@github.com/Solicy-App/Passphrase-Launchpad-FE.git

2. Create `.env` and `.env.example` file (command `cp .env` and `.env.example`)

- `NEXT_PUBLIC_API_BASE_URL` should be the server url where requests are sent
  for local server `http://localhost:8080`
- `NEXT_PUBLIC_RE_CAPTCHA_KEY` should be the recaptcha key for site
  It's not that important at the moment
- `NEXT_PUBLIC_GOOGLE_AUTH_CLIENT_ID` this will be used for Google Auth, it's the clientId of the owner account
- `NEXT_PUBLIC_FRIENDS_INVITE_LINK` a link that we will send to friends to visit the website
- `NEXT_PUBLIC_TEMPLATE_ID` we will get this from Anvil
- `NEXT_PUBLIC_SEO_LINK` this will be used for the url in the seo cards
- `NEXT_PUBLIC_FACTORY_SC_ADDRESS` this will be deployed Smart Contracts address

# You can get these values from your wallet Networks section

- `NEXT_PUBLIC_AVALANCHE_CHAIN_ID` this will be network Chain ID
- `NEXT_PUBLIC_AVALANCHE_RPC_URLS` this will be network New RPC URL
- `NEXT_PUBLIC_AVALANCHE_BLOCK_EXPLORER` this will be network Block explorer URL
- `NEXT_PUBLIC_AVALANCHE_NATIVE_TOKEN_SYMBOL` this will be network Currency symbol
- `NEXT_PUBLIC_METAMASK_DOWNLOAD_LINK` it will help to download metamask wallet, we can use this value `https://metamask.io/download/`
- `NEXT_PUBLIC_CONNECT_WALLET_BRIDGE` it will help to do exchange from one network to another, we can use this value `https://bridge.walletconnect.org/`

3. Run `yarn` command in terminal in root directory of project

#### Run Command

- `yarn dev`

#### Build Command

- `yarn build`

#### Folders Structure

```
├── assets
└── fonts
├── blockchain
    ├── fundraisingFactorySCService
        └── index.ts
    ├── contracts.ts
    └── provider.ts
├── components
    ├── feature
    └── shared
├── contracts
    ├── artifacts
    ├── cache
    ├── contracts
    ├── scripts
    ├── .env.example
    ├── .gitignore
    ├── hardhat.config.js
    ├── package-lock.json
    └── package.json
├── pages
    ├── changePassword
    ├── dashboard
    ├── faq
    ├── fundingPools
    ├── newPassword
    ├── recoverPassword
    ├── signup
    ├── _app.tsx
    ├── _document.tsx
    ├── 404.tsx
    └── index.tsx
├── public
    ├── icons
    ├── images
    └── favicon.ico
├── specs
    └── index.spec.tsx
├──styles
   ├──fonts.scss
   └── globals.scss
├── utils
    ├── constants
    ├── context
    ├── hooks
    ├── model
    ├── services
    ├── types
    ├── web3
    └── index.ts
├── .env
├── .env.example
├── .eslintignore
├── .eslintrc.js
├── .eslintrc.json
├── .gitignore
├── .prettierrc.json
├── index.d.ts
├── jest.config.js
├── next-env.d.ts
├── next.config.js
├── package.json
├── README.md
├── tsconfig.json
└── yarn.lock
```
