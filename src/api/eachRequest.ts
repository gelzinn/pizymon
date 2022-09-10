import { get } from "http";
import { createApiRequest } from "./pokeapi";

class APICallCreator {
  getPokemons(limit: number, offset?: number) {
    return createApiRequest(`/pokemon/?limit=${limit}&offset=${offset}`, get);
  }
  getPokemonByNameOrId(id: number | string) {
    return createApiRequest(`/pokemon/${id}/`, get);
  }
  getSpeciesByNameOrId(id: number | string) {
    return createApiRequest(`/pokemon-species/${id}/`, get);
  }
  getEvolutionChainByNameOrId(id: string | number) {
    return createApiRequest(`/evolution-chain/${id}/`, get);
  }
}

const fromApi = new APICallCreator();
export default fromApi;
