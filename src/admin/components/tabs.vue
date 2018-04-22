<template lang="pug">
	.tabs
		ul.list
			li.item(v-for="item in tabs")
				router-link.link(
				:to="item.href" exact)
					| {{item.name}}
</template>
<script>
	export default {
		data() {
			return {
				tabs: [{name:'Tab 1', href: '/'},
				{name:'Tab 2', href: '/blog'},
				{name:'Tab 3', href: '/works'}],
			}
		}
	}	
</script>
<style lang="scss" scoped>
	.tabs {
		background-color: #f0efe9;
		width: 100%;
	}
	.list {
		display: flex;
		width: 100%;
		flex-wrap: wrap;
	}
	.item {
		border: none;
		border-right: 2px solid $primaryColor;
		width: rem(180);
		height: rem(60);
		text-align: center;
		@include tablet {
			width: 25%;
		}
		@include mobile {
			width: 100%;
		}
	}
	.link {
		display: block;
		@include size(100%);
		padding: rem(20);
		vertical-align: middle;
		text-transform: uppercase;
		color: rgba($text-color, 0.8);
		font-weight: 500;
		font-size: rem(16);
		background-color: #f0efe9;
		transition: color 0.2s, background-color 0.2s;
		&.router-link-active {
			color: rgba($brand-color, 1);
			background-color: rgba($primaryColor, 0.59);
		}
	}	
</style>