declare module '@apiverve/zipcodes' {
  export interface zipcodesOptions {
    api_key: string;
    secure?: boolean;
  }

  export interface zipcodesResponse {
    status: string;
    error: string | null;
    data: any;
    code?: number;
  }

  export default class zipcodesWrapper {
    constructor(options: zipcodesOptions);

    execute(callback: (error: any, data: zipcodesResponse | null) => void): Promise<zipcodesResponse>;
    execute(query: Record<string, any>, callback: (error: any, data: zipcodesResponse | null) => void): Promise<zipcodesResponse>;
    execute(query?: Record<string, any>): Promise<zipcodesResponse>;
  }
}
