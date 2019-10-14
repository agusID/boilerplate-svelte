<script>
  import { Link } from 'svelte-routing'

  export let to = ''

  function getProps({ href, isPartiallyCurrent, isCurrent }) {
    const isActive =
      href === '/' ? isCurrent : isPartiallyCurrent || isCurrent

    // The object returned here is spread on the anchor element's attributes
    return isActive ? { class: 'active' } : {}
  }
</script>

<Link {to} {getProps}>
  <slot />
</Link>
