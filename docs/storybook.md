# Storybook

## Write your stories

Now create a `./stories/[components]/index.stories.js` file.

```
•
├── src
│   └── components
│       └── Button
│           └── index.js
└── stories
    └── Button
        └── index.stories.js

```

> NOTE : stories directory outside src directory.

and write your story like this:

```javascript
import { action } from '@storybook/addon-actions'

import Button from '../../src/components/Button/Button.svelte'

export default {
  title: 'Button',
}

export const text = () => ({
  Component: Button,
  props: { text: 'Boilerplate Svelte' },
  on: { click: action('clicked') },
})

export const emoji = () => ({
  Component: Button,
  props: {
    text: '😀 😎 👍 💯',
  },
  on: { click: action('clicked') },
})
```

## Run your Storybook

Run your storybook with:

```bash
npm run storybook
```

Storybook should start, on a random open port in dev-mode.
