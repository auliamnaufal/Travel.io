import Dashboard from './views/Dashboard.js'
import About from './views/About.js'

const pathToRegex = path => new RegExp("^" + path.replace(/\//g, "\\/").replace(/:\w+/g, "(.+)") + "$");

const getParams = match => {
	const values = match.result.slice(1);
	const keys = Array.from(match.route.path.matchAll(/:(\w+)/g)).map(result => result[1]);

	return Object.fromEntries(keys.map((key, i) => {
			return [key, values[i]];
	}));
};

const navigateTo = url => {
	history.pushState(null, null, url);
	router();
};

const router = async () => {
	const routes = [
			{ path: "#/", view: Dashboard, },
			{ path: "#/about", view: About },
	];

	const potentialMatches = routes.map(route => {
    return {
        route: route,
        result: location.hash.match(pathToRegex(route.path))
    };
	});

	let match = potentialMatches.find(potentialMatch => potentialMatch.result !== null);

	/* Route not found - return first route OR a specific "not-found" route */
	if (!match) {
			match = {
					route: routes[0],
					result: [location.pathname]
			};
	}	

	console.log(match)
	console.log(potentialMatches)

	const view = new match.route.view(getParams(match));
	document.querySelector("#app").innerHTML = await view.getHtml();
}


window.addEventListener("popstate", router)

window.addEventListener("load", () => {
	const url = window.location.hash

	navigateTo(url)

	router()
});

window.addEventListener("hashchange", () => {
  const url = window.location.hash

	navigateTo(url)

	router()
});