<template lang="pug">
	.header
		h1.title-main
			| Панель администрирования
		a(href='/').return-back
			| Вернуться на сайт
</template>
<script>
	
</script>
<style lang="scss" scoped>
	.header {
		display: flex;
		width: 100%;
		justify-content: space-between;
		align-items: center;
		padding: rem(25);
		min-height: rem(80);
		background-color: $brand-color;
		@include mobile {
			flex-wrap: wrap;
		}
	}
	.title-main {
		color: $primaryColor;
		font-size: rem(28);
		font-weight: 500;
		&:first-letter {
			text-transform: uppercase;
		}
		@include tablet {
			font-size: rem(20.93);
		}
		@include mobile {
			width: 100%;
			order: 2;
			text-align: center;
		}
	}
	.return-back {
		color: rgba($primaryColor, 0.7);
		text-decoration: underline;
		font-size: rem(16);
		font-weight: 500;
		&:first-letter {
			text-transform: uppercase;
		}
		&:hover {
			text-decoration: none;
		}
		@include mobile {
			width: 100%;
			order: 1;
			text-align: center;
			margin-bottom: 2%;
		}
	}
</style>