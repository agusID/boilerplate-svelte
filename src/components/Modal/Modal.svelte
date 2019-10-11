<script>
  import { createEventDispatcher } from 'svelte'
	
	const dispatch = createEventDispatcher()
	
	const handleClick = () => {
		dispatch('close')
	}

</script>

<style src="./style.scss"></style>

<div class='modal-background' on:click={handleClick}></div>

<div class='modal'>
	<slot name='header'></slot>
	<hr>
	<slot></slot>
	<hr>

	<button on:click={handleClick}>close</button>
</div>