const getState = ({ getStore, setStore }) => {
	return {
		store: {
			characters: [],
			planets: [],
			favorites: []
		},
		actions: {
			getCharacter: (name, id) => {},

			getPlanet: (name, id) => {},

			markFavorite: character => {}
		}
	};
};

export default getState;
