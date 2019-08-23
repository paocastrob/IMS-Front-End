import PropTypes from "prop-types";

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
			],

			saleslist: [
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
			],
			delivery: [
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

			login: (usernameParameter, passwordParameter, props) => {
				fetch("https://3000-db7c35eb-5776-4017-bdb0-095b0f95f4dc.ws-us0.gitpod.io/login", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},

					body: JSON.stringify({
						username: usernameParameter,
						password: passwordParameter
					})
				})
					.then(resp => {
						if (!resp.ok) throw Error();
						return resp.json();
					})
					.then(tokenRecieved => {
						setStore({ token: tokenRecieved.jwt });
						props.history.push("/private/sales");
					})
					.catch(err => console.error(err));
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

getState.propTypes = {
	history: PropTypes.object
};

export default getState;
