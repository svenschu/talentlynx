export const prerender = false;

export async function GET({ params }: any) {
	const message = params.message;

	return new Response(
		JSON.stringify({
			message: message
		})
	);
}