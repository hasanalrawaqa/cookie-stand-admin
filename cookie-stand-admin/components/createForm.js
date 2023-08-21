import React from 'react';

const CreateForm = (props) => (
    <main className="p-4">
    <div className="flex justify-center  items-center h-screen">
  
      <form  className="bg-green-200  p-8 rounded-lg w-2/3	"
            onSubmit={props.handeler}>
      <h2 className="text-xl font-semibold text-center text-black mb-4">Create Cookie Stand</h2>
        <label className="block mb-1">
          Location:
          <input
            type="text"
            className="w-full border rounded-md p-2"
            placeholder="Enter location"
            name="location" 
          />
        </label>
        <div className="flex items-center space-x-2">
        <label className="block mb-2">
          Minimum Customers per Hour:
          <input
            type="number"
            className="w-full border rounded-md p-2"
            placeholder="Enter minimum customers"
            name="minCustomersPerHour" 
          />
        </label>
        <label className="block mb-2">
          Maximum Customers per Hour:
          <input
            type="number"
            className="w-full border rounded-md p-2"
            placeholder="Enter maximum customers"
            name="maxCustomersPerHour" 

          />
        </label>
        <label className="block mb-2">
          Average Cookies per Sale:
          <input
            type="number"
            step="0.01"
            className="w-full border rounded-md p-2"
            placeholder="Enter average cookies"
            name="avgCookiesPerSale" 

          />
        </label>
        <button
          type="submit"
          className="bg-green-500 text-white w-48 h-24	 px-4 py-2 rounded"
        >
          Create
        </button>
        </div>
  
      </form >
      </div>
      <div className="p-4 bg-gray-100">
        {/* Add placeholder component here */}
      </div>
    </main>
  );

  export default CreateForm;