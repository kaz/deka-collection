import { HttpError } from "../error";
import { fetchAccount } from "../fetch";
import AccountStore from "../kv/accounts";
import { Handler } from "../router";

export const handleAdd: Handler = async request => {
	const screen_name = new URL(request.url).searchParams.get("screen_name");
	if (!screen_name) {
		throw new HttpError(400, "screen_name must be specified");
	}

	const account = await fetchAccount(screen_name);
	await AccountStore.put(account);

	return new Response(JSON.stringify(account), {
		status: 200,
		headers: {
			"Content-Type": "application/json",
		},
	});
};
