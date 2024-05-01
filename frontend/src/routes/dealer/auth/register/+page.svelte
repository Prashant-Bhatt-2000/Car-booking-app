<div class="flex min-h-full flex-col justify-center px-6 lg:px-8">
    <div class="sm:mx-auto sm:w-full sm:max-w-sm">
      <img class="mx-auto h-10 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=red&shade=600" alt="Your Company">
      <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Register for a Dealer Account</h2>
    </div>
  
    <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-md">
      <form class="space-y-6" action="#" method="POST">
        <div class="flex space-x-4">
          <div class="w-1/2">
            <label for="dealership_email" class="block text-sm font-medium leading-6 text-gray-900">Email address</label>
            <input id="dealership_email" name="dealership_email" type="email" autocomplete="email" required class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
          <div class="w-1/2">
            <label for="dealership_name" class="block text-sm font-medium leading-6 text-gray-900">Dealership name</label>
            <input id="dealership_name" name="dealership_name" type="text" required class="block w-full px-2 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
  
        <div class="flex space-x-4">
          <div class="w-1/2">
            <label for="dealership_location" class="block text-sm font-medium leading-6 text-gray-900">Dealership location</label>
            <input id="dealership_location" name="dealership_location" type="text" required class="block px-2 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
          <div class="w-1/2">
            <label for="phone" class="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
            <input id="phone" name="phone" type="text" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
  
        <div class="flex space-x-4">
          <div class="w-1/2">
            <label for="deal_offered" class="block text-sm font-medium leading-6 text-gray-900">Deals offered</label>
            <select id="deal_offered" name="deal_offered" required class="block w-full rounded-md border-0 py-1.5 px-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
              <option value="" disabled selected>Select one</option>
              <option value="rental">Rental</option>
              <option value="sell">Sell</option>
              <option value="rent and sell">Available for both Rental and Selling</option>
            </select>
          </div>
          <div class="w-1/2">
            <label for="password" class="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <input id="password" name="password" type="password" autocomplete="new-password" required class="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6">
          </div>
        </div>
  
        <div>
          <button type="submit" class="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Sign up</button>
        </div>
        <p class="mt-10 text-center text-sm text-gray-500">
            already have an account?
            <a href="/dealer/auth/login" class="font-semibold leading-6 text-red-600 hover:text-red-500">login to your Dealer Account</a>
          </p>
      </form>

    </div>
  </div>
  