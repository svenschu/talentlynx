export const prerender = false;

// Outputs: /builtwith.json
export async function GET({ params, request }: any) {
	return new Response(
		JSON.stringify({
			name: 'Astro',
			url: 'https://astro.build/'
		})
	);
}