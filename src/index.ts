import { Engine } from 'json-rules-engine';

let engine = new Engine();

engine.addRule({
	conditions: {
		any: [{
			all: [{
				fact: 'gameDuration',
				operator: 'equal',
				value: 40
			}, {
				fact: 'personalFoulCount',
				operator: 'greaterThanInclusive',
				value: 5
			}]
		}, {
			all: [{
				fact: 'gameDuration',
				operator: 'equal',
				value: 48
			}, {
				fact: 'personalFoulCount',
				operator: 'greaterThanInclusive',
				value: 6
			}]
		}]
	},
	event: {  // define the event to fire when the conditions evaluate truthy
		type: 'fouledOut',
		params: {
			message: 'Player has fouled out!'
		}
	}
});

let facts = {
	personalFoulCount: 6,
	gameDuration: 40
}

export default {
	async fetch(request, env, ctx): Promise<Response> {
		engine.run(facts).then(console.log);
		return new Response('Hello World!');
	},
} satisfies ExportedHandler<Env>;
