import adapter from '@sveltejs/adapter-static';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({ strict: false }),
		prerender: {
      		entries: [
				'/',
				'/PCTO',
				'/CambiamentoClimatico',
				'/Carceri',
				'/ComportamentoOnline',
				'/Covid',
				'/DirittiUmani',
				'/Genocidi',
				'/Informatica',
				'/Mafia',
				'/Migranti',
				'/PenaDiMorte',
				'/ViolenzaDiGenere',
				'/WarPoetry'
			]
    	},
		paths: {
			base: process.env.BASE_PATH ?? ""
		}	
	}
};

export default config;
