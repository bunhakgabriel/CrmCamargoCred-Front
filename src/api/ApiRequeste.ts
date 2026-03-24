class ApiRequest {
  private defaultHeaders: Record<string, string>;

  constructor(defaultHeaders: Record<string, string> = {}) {
    this.defaultHeaders = {
      "Content-Type": "application/json",
      ...defaultHeaders
    };
  }

  private async send<T>(
    url: string,
    method: string = "GET",
    data?: unknown
  ): Promise<T | null> {
    const options: RequestInit = {
      method,
      headers: this.defaultHeaders
    };

    if (data) {
      options.body = JSON.stringify(data);
    }

    const response = await fetch(url, options);

    if (response.status === 404) {
      return null;
    }

    if (!response.ok) {
      throw new Error(`Erro HTTP: ${response.status}`);
    }

    return response.json() as Promise<T>;
  }

  async get<T>(url: string): Promise<T | null> {
    return this.send<T>(url, "GET");
  }

  async post<T, B = unknown>(url: string, data: B): Promise<T | null> {
    return this.send<T>(url, "POST", data);
  }

  async put<T, B = unknown>(url: string, data: B): Promise<T | null> {
    return this.send<T>(url, "PUT", data);
  }

  async delete<T>(url: string): Promise<T | null> {
    return this.send<T>(url, "DELETE");
  }
}

export default ApiRequest;