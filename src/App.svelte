<script>
	import { Router, Link, Route } from 'svelte-routing'
	import Home from '@views/home/index.svelte'
	import Explore from '@views/explore/index.svelte'

	export let url = ''
</script>

<Router url={url}>
	<nav>
		<Link to="/">Home</Link>
    <Link to="explore">Explore</Link>
	</nav>
	<div>
		<Route path="/" component={Home} />
		<Route path="explore" component="{Explore}" />
	</div>
</Router>