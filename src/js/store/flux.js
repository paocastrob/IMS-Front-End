const getState = ({ getStore, setStore }) => {
	return {
		store: {
			purchases: [
				{
					title: "Item 1",
					sku: 101,
					description: "this product is amazing",
					quantity: 100000000000
				},
				{
					title: "Item 2",
					sku: 103,
					description: "wow this is panda",
					quantity: 4886
				},
				{
					title: "Item 3",
					sku: 107,
					description: "wow almost leaving",
					quantity: 4889
				}
			],
			sales: [
				{
					title: "Sales 1",
					sku: 101,
					description: "this product is amazing",
					quantity: 100000000000
				},
				{
					title: "Item 2",
					sku: 103,
					description: "wow this is panda",
					quantity: 4886
				},
				{
					title: "Item 3",
					sku: 107,
					description: "wow almost leaving",
					quantity: 4889
				}
			]
		},
		actions: {
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
