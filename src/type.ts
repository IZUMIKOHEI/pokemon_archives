export type PokemonsType = {
  name: string;
  url: string;
}

export type PokemonType = {
  id: number;
  name: string;
  sprites: {
    front_default: string
  }
  stats: {
    base_stat: number;
    stat: {
      name: string;
    }
  }[]
}

// "hp" | "attack" | "defence" | "special-attack" | 'special-defence' | 'speed';