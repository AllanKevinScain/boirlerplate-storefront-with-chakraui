import { ActionResult } from '@plugins/types';

/**
 * Executa um conjunto de ações simultâneas de forma assíncrona e retorna uma mescla dos resultados.
 */
export function runAllAndMergeResult(actions: Array<Promise<ActionResult>> = []): Promise<ActionResult> {
  return Promise.all(actions)
    .then(results => {
      return {
        ok: results.every(result => result.ok),
        delta: Object.assign({}, ...results.map(result => result.delta))
      };
    })
    .catch(error => {
      return { ok: false, error };
    });
}
