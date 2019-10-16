# Testing

You can test Svelte components similar to testing other JavaScript code.

**[Jest](https://facebook.github.io/jest/)** is a JavaScript test runner that lets you access the DOM via [`jsdom`](/docs/testing-environments.html#mocking-a-rendering-surface). While jsdom is only an approximation of how the browser works, it is often good enough for testing React components. Jest provides a great iteration speed combined with powerful features like mocking [modules](/docs/testing-environments.html#mocking-modules) and [timers](/docs/testing-environments.html#mocking-timers) so you can have more control over how the code executes.

**[Testing Library](https://testing-library.com/svelte)** is a Simple and complete testing utilities that encourage good testing practices. The Svelte Testing Library is a very lightweight solution for testing Svelte components. It provides light utility functions on top of `svelte`, in a way that encourages better testing practices.

## Example

### Structure

```
•
└── src
    └── components
        └── Button
            ├── ...
            └── Button.test.js
```

### Component

```javascript
<script>
  import { createEventDispatcher } from 'svelte'

  export let text = ''

  const dispatch = createEventDispatcher()

  const onClick = event => {
    dispatch('click', event)
  }
</script>

<style src="./style.scss">

</style>

<button class="button" on:click={onClick}>{text}</button>
```

### Test

```javascript
import { render, fireEvent } from '@testing-library/svelte'

import Button from './Button.svelte'

test('shows proper heading when rendered', () => {
  const { getByText } = render(Button, {
    props: { text: 'Button Text' },
  })

  expect(getByText('Button Text')).toBeInTheDocument()
})

// Note: This is as an async test as we are using `fireEvent`
test('changes button text on click', async () => {
  const { getByText } = render(Button, {
    props: { text: 'Button Text' },
  })
  const button = getByText('Button Text')

  // Using await when firing events is unique to the svelte testing library because
  // we have to wait for the next `tick` so that Svelte flushes all pending state changes.
  await fireEvent.click(button)

  expect(button).toHaveTextContent('Button Text')
})
```

## Run your Testing

Run your testing with:

```bash
npm run test
```
