const getState = ({ getStore, setStore }) => {
	return {
		store: {
			products: [],
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
			scanNewCode: scan => {
				let store = getStore();
				let num = store.purchases.length;

				console.log("scan: " + num);
				setStore({
					purchases: store.purchases.concat({
						title: `Item ${num + 1}`,
						sku: scan,
						description: "wow almost leaving",
						quantity: 4889
					})
				});
			},
			login: (tiger, lion) => {
				fetch("https://3000-c88f1bcd-c8c2-41af-9d5e-4e8119812ef1.ws-us0.gitpod.io/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						username: tiger,
						password: lion
					})
				})
					.then(resp => resp.json())
					.then(dolphin => console.log(token))
            },

			scanNewQty: qty => {
				let store = getStore();
				let num = store.purchases.length;

				console.log("qty: " + num);
				setStore({
					purchases: store.purchases.concat({
						title: `Item ${num + 1}`,
						sku: qty,
						description: "wow almost leaving",
						quantity: 4889
					})
				});
			},

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
