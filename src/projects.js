// const jsIco =
// 	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg';
// const cssIco =
// 	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg';
// const figmaIco =
// 	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg';
// const expIco =
// 	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg';
// const htmlIco =
// 	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg';
// const mongoIco =
// 	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg';
// const nodeIco =
// 	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original-wordmark.svg';
// const linkedinIco =
// 	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg';
// const pythonIco =
// 	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original-wordmark.svg';
// const reactIco =
// 	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg';
// const trelloIco =
// 	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/trello/trello-plain-wordmark.svg';
// const githubIco =
// 	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original-wordmark.svg';
// const sassIco =
// 	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg';
// const axiosIco = 'https://www.vectorlogo.zone/logos/axios/axios-icon.svg';
// const jqueryIco =
// 	'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg';

const projData = [
	{
		name: 'Weather Api App',
		img: 'https://images.unsplash.com/photo-1580193813605-a5c78b4ee01a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=465&q=80',
		links: {
			github: {
				frontEnd: '#',
				backEnd: '',
			},
			deployed: '#',
		},
		// tech: [jsIco, cssIco, jqueryIco, htmlIco],
		dependencies: ['JQuery'],
		description: {
			short: 'Weather API serving weekly, daily, hourly weather updates',
			long: '',
		},
		position: [1.75, 0, 1.5],
		rotation: [0, Math.PI / 2.5, 0],
	},
	{
		name: 'Cheese Api App',
		img: 'https://images.unsplash.com/photo-1631379578550-7038263db699?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=874&q=80',
		links: {
			github: {
				frontEnd: 'https://github.com/garoy001/CheeseLabFrontEnd',
				backEnd: 'https://github.com/garoy001/CheeseLabBackend',
			},
			deployed: '',
		},
		// tech: [
		// 	jsIco,
		// 	cssIco,
		// 	expIco,
		// 	htmlIco,
		// 	mongoIco,
		// 	nodeIco,
		// 	reactIco,
		// 	sassIco,
		// ],
		dependencies: [
			'react',
			'react-router-dom',
			'sass',
			'cors',
			'dotenv',
			'express',
			'mongoose',
			'morgan',
			'nodemon',
		],
		description: {
			short: 'An app to store your favorite cheeses',
			long: '',
		},
	},
	{
		name: 'Stocks Api App',
		img: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		links: {
			github: {
				frontEnd: 'https://github.com/garoy001/router_lab',
				backEnd: '',
			},
			deployed: '',
		},
		// tech: [jsIco, cssIco, htmlIco, reactIco],
		dependencies: ['react', 'react-router-dom'],
		description: {
			short: 'A stock tracking app',
			long: '',
		},
	},
	{
		name: 'Food Api App',
		img: 'https://images.unsplash.com/photo-1482049016688-2d3e1b311543?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=410&q=80',
		links: {
			github: {
				frontEnd: 'https://github.com/garoy001/GAProject2',
				backEnd: '',
			},
			deployed: '',
		},
		// tech: [jsIco, cssIco, expIco, htmlIco, axiosIco, mongoIco],
		dependencies: [
			'ajax',
			'axios',
			'dotenv',
			'ejs',
			'express',
			'method-override',
			'mongoose',
		],
		description: {
			short: 'An api that returns food information and stores searches',
			long: '',
		},
	},
	// {
	// 	name: 'Magic 8 Ball',
	// 	img: 'https://www.etftrends.com/wp-content/uploads/2019/08/A-Magic-8-Ball-Market.jpg',
	// 	links: {
	// 		github: {
	// 			frontEnd: 'https://github.com/garoy001/express-lab-2',
	// 			backEnd: '',
	// 		},
	// 		deployed: '',
	// 	},
	// 	// tech: [jsIco, cssIco, expIco, htmlIco],
	// 	dependencies: ['express', 'dotenv'],
	// 	description: {
	// 		short: 'A magic 8 ball app',
	// 		long: '',
	// 	},
	// },
	{
		name: 'Tavern Menu',
		img: 'https://images.unsplash.com/photo-1555658636-6e4a36218be7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80',
		links: {
			github: {
				frontEnd: 'https://github.com/garoy001/Git-Pub',
				backEnd: '',
			},
			deployed: '',
		},
		// tech: [jsIco, cssIco, expIco, htmlIco],
		dependencies: ['dotenv', 'ejs', 'express'],
		description: {
			short: 'An editable menu for a Tavern',
			long: '',
		},
	},
	{
		name: 'CETAMD',
		img: 'https://i.ibb.co/6ZVWJJg/Add-a-heading.png',
		links: {
			github: {
				frontEnd: 'https://github.com/garoy001/cetamdfrontend',
				backEnd: 'https://github.com/garoy001/cetamdbackend',
			},
			deployed: '',
		},
		// tech: [jsIco, cssIco, expIco, htmlIco, sassIco, reactIco, mongoIco],
		dependencies: [
			'dotenv',
			'react',
			'express',
			'react-datepicker',
			'react-router-dom',
			'sass',
			'react-icons',
			'react-places-autocomplete',
			'mongoose',
			'morgan',
			'nodemon',
			'jsonwebtoken',
			'bcrypt.js',
			'cors',
		],
		description: {
			short: 'Event Planning App',
			long: '',
		},
	},
];
const angle = (Math.PI / projData.length) * 2;
// console.log(projData.length);
const radius = 3;
const offset = 0;
// console.log(angle);
const ProjectDataTemp = [];
projData.map((e, k) => {
	const pos = 1;
	e.position = [
		Math.sin((k + offset) * angle) * radius,
		pos,
		Math.cos((k + offset) * angle) * radius,
	];
	e.angle = (k + offset) * angle;
	// console.log(e.angle);
	e.radius = radius;
	ProjectDataTemp.push(e);
});

export const ProjectData = ProjectDataTemp;
