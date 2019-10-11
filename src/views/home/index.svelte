<script>
  import { Modal } from '@components'
  let showModal = false
</script>
<h1>Home Page</h1>
<button on:click={() => showModal = true}>Show Modal</button>

{#if showModal}
	<Modal on:close="{() => showModal = false}">
		<h2 slot="header">
			modal
			<small><em>adjective</em>  mod·al \ˈmō-dəl\</small>
		</h2>

		<ol class="definition-list">
			<li>of or relating to modality in logic</li>
			<li>containing provisions as to the mode of procedure or the manner of taking effect —used of a contract or legacy</li>
			<li>of or relating to a musical mode</li>
			<li>of or relating to structure as opposed to substance</li>
			<li>of, relating to, or constituting a grammatical form or category characteristically indicating predication</li>
			<li>of or relating to a statistical mode</li>
		</ol>

	</Modal>
{/if}