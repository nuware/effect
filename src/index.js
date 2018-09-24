import {
  K
} from '@nuware/functions'

const Effect = (f) => ({
  map: (g) => Effect((x) => g(f(x))),
  join: (x) => f(x),
  chain: (g) => Effect(f).map(g).join(),
  ap: (m) => m.map((g) => g(f())),
  inspect: () => `Effect(${f})`
})

Effect.of = (value) => Effect(K(value))

export default Effect
