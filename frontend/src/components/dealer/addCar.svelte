
<script>
    export let openCarForm;

const closeForm = () => {
  openCarForm();
}
</script>

<div class="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
  <div class="bg-white p-6 rounded-lg shadow-xl w-full max-w-3xl relative">
    <button type="button" on:click={closeForm} class="absolute top-2 right-2 text-gray-600 hover:text-gray-800" aria-label="Close">
      <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
      </svg>
    </button>
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Add Car to Inventory</h2>
    <form class="space-y-6" action="#" method="POST">
      <div class="grid grid-cols-3 gap-4">
        <div>
          <label for="cartype" class="block text-sm font-medium leading-6 text-gray-900">Car Type</label>
          <input id="cartype" name="cartype" type="text" required class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div>
          <label for="name" class="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <input id="name" name="name" type="text" required class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div>
          <label for="model" class="block text-sm font-medium leading-6 text-gray-900">Model</label>
          <input id="model" name="model" type="text" required class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div>
          <label for="manufacturer" class="block text-sm font-medium leading-6 text-gray-900">Manufacturer</label>
          <input id="manufacturer" name="manufacturer" type="text" required class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div>
          <label for="year" class="block text-sm font-medium leading-6 text-gray-900">Year</label>
          <input id="year" name="year" type="number" required class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div>
          <label for="color" class="block text-sm font-medium leading-6 text-gray-900">Color</label>
          <input id="color" name="color" type="text" required class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div>
          <label for="mileage" class="block text-sm font-medium leading-6 text-gray-900">Mileage</label>
          <input id="mileage" name="mileage" type="number" required class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div>
          <label for="condition" class="block text-sm font-medium leading-6 text-gray-900">Condition</label>
          <select id="condition" name="condition" required class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
            <option value="new">New</option>
            <option value="used">Used</option>
          </select>
        </div>
        <div>
          <label for="price" class="block text-sm font-medium leading-6 text-gray-900">Price</label>
          <input id="price" name="price" type="number" required class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div>
          <label for="features" class="block text-sm font-medium leading-6 text-gray-900">Features (comma-separated)</label>
          <input id="features" name="features" type="text" required class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
        </div>
        <div class="w-full">
          <label for="description" class="block text-sm font-medium leading-6 text-gray-900">Description</label>
          <textarea id="description" name="description" rows="3" required class="block w-full px-2 py-1.5 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"></textarea>
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Car</button>
      </div>
    </form>
  </div>
</div>
