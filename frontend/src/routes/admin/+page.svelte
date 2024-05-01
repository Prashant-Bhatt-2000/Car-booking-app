<script>
    import { onMount } from 'svelte';
  
    let activeLink = 'Users'; // Default active link
    
    // Function to handle click events on navigation links
    function handleClick(link) {
      activeLink = link;
    }
  
    // Optional: You can use onMount to set the active link based on the current route or page
    onMount(() => {
      // Logic to set activeLink based on current route or page
    });
  </script>
  
  <ul class="flex">
    <li class="mr-3">
      <a class={activeLink === 'Users' ? 'inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white' : 'inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3'} on:click={() => handleClick('Users')} href="#">Users</a>
    </li>
    <li class="mr-3">
      <a class={activeLink === 'Dealerships' ? 'inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white' : 'inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3'} on:click={() => handleClick('Dealerships')} href="#">Dealerships</a>
    </li>
    <li class="mr-3">
      <a class={activeLink === 'Cars' ? 'inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white' : 'inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3'} on:click={() => handleClick('Cars')} href="#">Cars</a>
    </li>
    <li class="mr-3">
      <a class={activeLink === 'Deals' ? 'inline-block border border-blue-500 rounded py-1 px-3 bg-blue-500 text-white' : 'inline-block border border-white rounded hover:border-gray-200 text-blue-500 hover:bg-gray-200 py-1 px-3'} on:click={() => handleClick('Deals')} href="#">Deals</a>
    </li>
  </ul>
  