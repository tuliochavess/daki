import { useState } from "react";
import { DataItem } from "../../api/request/db-request";

type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

const url = "http://localhost:3000/data";

interface RequestOptions {
  method: HttpMethod;
  data?: object;
}

interface ApiResponse<T> {
  data?: T;
  error: null;
}

export default function useRequest<T>() {
  const [response, setResponse] = useState<ApiResponse<T> | undefined>();
  const [data, setData] = useState<DataItem[]>([]);

  async function fetchApi(options: RequestOptions) {
    try {
      const { data, method = "GET" } = options;
      const isGet = method === "GET";

      const queryParams = isGet ? getParams(data) : "";
      const body = getBody(isGet, data);

      const response = await fetch(`${url}${queryParams}`, {
        method: options.method,
        headers: {
          "Content-Type": "application/json",
        },
        body,
      });

      if (!response.ok) {
        throw new Error("Request failed");
      }

      const responseData = await response.json();
      setData(responseData);

      setResponse({ data: responseData, error: null });
    } catch (error) {
      setResponse({ data: undefined, error: null });
    }
  }

  return { data, response, fetchApi };
}

function getBody(isGet: boolean, data?: object | FormData) {
  if (isGet || !data) {
    return undefined;
  }
  if (data instanceof FormData) {
    return data;
  }
  return JSON.stringify(data);
}

const getParamsFromEntries = (entries: [string, unknown][]): string =>
  entries
    .map(([key, value]) => {
      if (Array.isArray(value)) {
        return getParamsFromEntries(value.map((v) => [key, v]));
      }

      return value ? `${key}=${value}` : null;
    })
    .join("&");

export function getParams(params?: object) {
  if (!params) return "";

  const str = getParamsFromEntries(
    Object.entries(params).filter(([value]) => value !== undefined)
  );

  return "?" + str;
}
