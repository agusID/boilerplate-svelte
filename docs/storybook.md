# Storybook
## Write your stories
Now create a `./src/[components]/index.stories.js` file, and write your story like this:
```javascript
import { action } from '@storybook/addon-actions'

import Button from '../../src/commons/components/Button/Button.svelte'

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