<svelte:head>
	<title>Dealer Inventory</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>

<script>
    import CaraddForm from '../../components/dealer/addCar.svelte'

    let addcarForm = false

    const openAddCarForm = ()=> { 
        addcarForm = !addcarForm
    }
</script>

<div class="container mx-auto px-4 py-8">
    <div class="flex justify-between items-center mb-4">
        <h1 class="text-3xl font-semibold">Inventory</h1>
        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" on:click={openAddCarForm}>Add Car +</button>
    </div>
    <div class="overflow-x-auto">
      <table class="min-w-full divide-y divide-gray-200">
        <thead class="bg-gray-50">
          <tr>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12">Car Type</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12">Name</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12">Model</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12">Manufacturer</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12">Year</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12">Color</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12">Mileage</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12">Condition</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12">Price</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12">Features</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12">Description</th>
            <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/12">Actions</th>
          </tr>
        </thead>
        <tbody class="bg-white divide-y divide-gray-200">
          <!-- Car Items -->
          <tr>
            <td class="px-6 py-4 whitespace-nowrap w-1/12">Car Type</td>
            <td class="px-6 py-4 whitespace-nowrap w-1/12">Car Name</td>
            <td class="px-6 py-4 whitespace-nowrap w-1/12">Car Model</td>
            <td class="px-6 py-4 whitespace-nowrap w-1/12">Car Manufacturer</td>
            <td class="px-6 py-4 whitespace-nowrap w-1/12">Car Year</td>
            <td class="px-6 py-4 whitespace-nowrap w-1/12">Car Color</td>
            <td class="px-6 py-4 whitespace-nowrap w-1/12">Car Mileage</td>
            <td class="px-6 py-4 whitespace-nowrap w-1/12">Car Condition</td>
            <td class="px-6 py-4 whitespace-nowrap w-1/12">Car Price</td>
            <td class="px-6 py-4 whitespace-nowrap w-1/12">Feature 1, Feature 2</td>
            <td class="px-6 py-4 whitespace-nowrap w-1/12">Car Description</td>
            <td class="px-6 py-4 whitespace-nowrap w-1/12">
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2">Edit</button>
              <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">Delete</button>
            </td>
          </tr>
          <!-- Repeat this row structure for each car item -->
        </tbody>
      </table>
    </div>
  </div>

  {#if addcarForm}
  <CaraddForm openCarForm={openAddCarForm}/>
  {/if}