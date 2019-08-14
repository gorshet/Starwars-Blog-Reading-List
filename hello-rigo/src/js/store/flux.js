const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			removeFavorites: (elementId, index) => {
				const store = getStore();
				setStore({ favorites: store.favorites.filter((item, i) => i !== index) });
			},

			getCharacter: (name, id) => {},

			getPlanet: (name, id) => {},

			markFavorite: (elementId, name, gender) => {
				const store = getStore();
				setStore({ favorites: store.favorites.concat({ Index: elementId, name: name, Gender: gender }) });
				//console.log("Index:", elementId);
			}
		}
	};
};

export default getState;
