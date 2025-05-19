const base: string = "http://localhost:5173/api/v1";

interface SendOptions {
	method: string;
	path: string;
	data?: any;
	token?: string;
}

async function send({ method, path, data, token }: SendOptions): Promise<any> {
	const opts: RequestInit & { headers: Record<string, string> } = {
		method,
		headers: {},
	};

	if (data) {
		opts.headers["Content-Type"] = "application/json";
		opts.body = JSON.stringify(data);
	}

	if (token) {
		opts.headers["Authorization"] = `Token ${token}`;
	}

	try {
		const res = await fetch(`${base}/${path}`, opts);
		const response = await res.json();
		if (res.ok || res.status === 422) {
			return response ?? {};
		}

		throw `${response.errors[0]}`;
	} catch (error) {
		return {
			msg: error
		}
	}
}

export function get(path: string, token?: string): Promise<any> {
	return send({ method: "GET", path, token });
}

export function del(path: string, token?: string): Promise<any> {
	return send({ method: "DELETE", path, token });
}

export function post(path: string, data: any, token?: string): Promise<any> {
	return send({ method: "POST", path, data, token });
}

export function put(path: string, data: any, token?: string): Promise<any> {
	return send({ method: "PUT", path, data, token });
}
