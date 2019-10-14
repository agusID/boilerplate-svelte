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
