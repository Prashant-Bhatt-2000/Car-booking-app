<script>
	import logo from "../lib/images/logo.jpeg";
	import { navigate } from "svelte-routing";
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<section class="text-gray-600 body-font">
	<div class="container mx-auto flex py-10 md:flex-row flex-col items-center">
		<div
			class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center"
		>
			<h1
				class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"
			>
				Need Car Urgent ?
				<br class="hidden lg:inline-block" />Book your favourite car
				from bookmycar.com
			</h1>
			<p class="mb-8 leading-relaxed">
				Discover Automotive Excellence at BookMyCar! Explore Premium
				Vehicles, Expert Guidance, and Seamless Services. Join Us Today
				for a Journey of Luxury and Convenience!.
			</p>
			<div class="flex justify-center">
				<a href="/carbookings">
				<button class="inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-red-600 rounded text-lg">Book my Car</button></a>
				<a href="/carbookings">
				<button class="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">View Available cars</button></a>
			  </div>
			
		</div>
		<div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
			<img
				class="object-cover object-center rounded"
				alt="hero"
				src={logo}
			/>
		</div>
	</div>
</section>
