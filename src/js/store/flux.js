import PropTypes from "prop-types";

const getState = ({ getStore, setStore }) => {
	return {
		store: {
			products: [],
			warehouses: [],
			sales: [],
			purchases: []
		},

		actions: {
			addToProducts: object => {
				console.log(object);
				fetch("https://3000-b00fbadb-74f8-48d4-aea2-d1f585fefeb0.ws-us0.gitpod.io/products/all/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(object)
				})
					.then(response => {
						if (response.status == 200) return response.json;
						else console.error("BAD RESPONSE code: " + response.status);
					})
					.then(response => {
						setStore({ products: response }); // OJO, OBJECT ASSIGN IS ALREADY ON APPCONTEXBOILER PLATE
					})
					.catch(function(error) {
						console.error(error);
					});
			},
			products: () => {
				fetch("https://3000-b00fbadb-74f8-48d4-aea2-d1f585fefeb0.ws-us0.gitpod.io/products/all/")
					.then(response => response.json())
					.then(data => {
						setStore({ products: data }); // OJO, OBJECT ASSIGN IS ALREADY ON APPCONTEXBOILER PLATE
					});
			},
			addToSales: object => {
				console.log(object);
				fetch("https://3000-b00fbadb-74f8-48d4-aea2-d1f585fefeb0.ws-us0.gitpod.io/sales/all/", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(object)
				})
					.then(response => {
						if (response.status == 200) return response.json;
						else console.error("BAD RESPONSE code: " + response.status);
					})
					.then(response => {
						setStore({ sales: response }); // OJO, OBJECT ASSIGN IS ALREADY ON APPCONTEXBOILER PLATE
					})
					.catch(function(error) {
						console.error(error);
					});
			},
			sales: () => {
				fetch("https://3000-b00fbadb-74f8-48d4-aea2-d1f585fefeb0.ws-us0.gitpod.io/sales/all/")
					.then(response => response.json())
					.then(data => {
						setStore({ sales: data }); // OJO, OBJECT ASSIGN IS ALREADY ON APPCONTEXBOILER PLATE
					});
			},
			addToPurchases: object => {
				console.log(object);
				fetch("https://3000-b00fbadb-74f8-48d4-aea2-d1f585fefeb0.ws-us0.gitpod.io/purchases/all", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify(object)
				})
					.then(response => {
						if (response.status == 200) return response.json;
						else console.error("BAD RESPONSE code: " + response.status);
					})
					.then(response => {
						setStore({ tabla2: response }); // OJO, OBJECT ASSIGN IS ALREADY ON APPCONTEXBOILER PLATE
					})
					.catch(function(error) {
						console.error(error);
					});
			},
			purchases: () => {
				fetch("https://3000-b00fbadb-74f8-48d4-aea2-d1f585fefeb0.ws-us0.gitpod.io/purchases/all")
					.then(response => response.json())
					.then(data => {
						setStore({ tabla1: purchases }); // OJO, OBJECT ASSIGN IS ALREADY ON APPCONTEXBOILER PLATE
					});
			},

			scanNewCode: scan => {
				let store = getStore();
				let num = store.purchases.length;
				let input1 = document.querySelector("#input1");
				console.log(input1);
				input1.value = "";

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
				fetch("https://3000-b00fbadb-74f8-48d4-aea2-d1f585fefeb0.ws-us0.gitpod.io/login", {
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
			}
		}
	};
};

getState.propTypes = {
	history: PropTypes.object
};

export default getState;
