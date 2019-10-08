<script>
	import { Router, Link, Route } from 'svelte-routing'
	import Home from '@views/Home'
	import Explore from '@views/Explore'

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