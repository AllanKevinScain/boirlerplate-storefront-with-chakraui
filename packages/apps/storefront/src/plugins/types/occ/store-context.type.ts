/* eslint-disable @typescript-eslint/no-explicit-any */
export interface ActionResult {
  ok: boolean;
  delta?: Record<string, unknown>;
  error?: Array<unknown>;
  json?: { total: number };
}

export interface StoreInterface {
  action: (type: string, payload?: Record<string, any>, meta?: any) => Promise<ActionResult>;
  endpoint: (type: string, payload?: Record<string, any>, meta?: any) => Promise<ActionResult>;
  dispatch: (action: string) => any;
  getState: () => any;
  subscribe: (listener: any) => any;
  subscribeDispatch: (listener: any) => any;
}
