import './style.css'
import * as sdk from './cinema.js'

type FieldType = 'text' | 'id' | 'ids' | 'number' | 'json' | 'datetime'

interface Field {
  name: string
  label: string
  type: FieldType
  required?: boolean
  placeholder?: string
}

// Navnene på alle funktioner cinema.ts eksporterer
type SdkFunction = Exclude<keyof typeof sdk, 'state'>

interface FormConfig {
  fn: SdkFunction
  title: string
  fields: Field[]
}

const parsers: Record<FieldType, (v: string) => unknown> = {
  text: (v) => v,
  id: Number,
  ids: (v) => v.split(',').map((s) => s.trim()).filter(Boolean).map(Number),
  number: Number,
  json: (v) => JSON.parse(v),
  datetime: (v) => new Date(v),
}

const inputTypes: Partial<Record<FieldType, string>> = { number: 'number', datetime: 'datetime-local' }

const moviesExample = '[{"title": "Dune", "duration": 155}]'

const forms: FormConfig[] = [
  {
    fn: 'createCinema',
    title: 'Opret biograf',
    fields: [
      { name: 'name', label: 'Navn', type: 'text', required: true, placeholder: 'Grand Teatret' },
      { name: 'movies', label: 'Film (JSON)', type: 'json', placeholder: moviesExample },
    ],
  },
  {
    fn: 'addMovies',
    title: 'Tilføj film',
    fields: [
      { name: 'cinemaId', label: 'Biograf-id', type: 'id', required: true },
      { name: 'movies', label: 'Film (JSON)', type: 'json', required: true, placeholder: moviesExample },
    ],
  },
  {
    fn: 'addScreening',
    title: 'Tilføj forestilling',
    fields: [
      { name: 'movieId', label: 'Film-id', type: 'id', required: true },
      { name: 'dateTime', label: 'Tidspunkt', type: 'datetime', required: true },
      { name: 'cinemaId', label: 'Biograf-id', type: 'id', required: true },
    ],
  },
  {
    fn: 'createUser',
    title: 'Opret bruger',
    fields: [
      { name: 'name', label: 'Navn', type: 'text', required: true, placeholder: 'Anna' },
      { name: 'favorites', label: 'Ønskeliste (film-id’er, kommasepareret)', type: 'ids', placeholder: '1, 2' },
    ],
  },
  {
    fn: 'addFavoriteMovie',
    title: 'Tilføj til ønskeliste',
    fields: [
      { name: 'userId', label: 'Bruger-id', type: 'id', required: true },
      { name: 'movieId', label: 'Film-id', type: 'id', required: true },
    ],
  },
  {
    fn: 'addBooking',
    title: 'Book plads',
    fields: [
      { name: 'screeningId', label: 'Forestillings-id', type: 'id', required: true },
      { name: 'seatNumber', label: 'Pladsnummer', type: 'number', required: true },
      { name: 'userId', label: 'Bruger-id (tom = anonym)', type: 'id' },
      { name: 'cinemaId', label: 'Biograf-id', type: 'id', required: true },
      { name: 'movieId', label: 'Film-id', type: 'id', required: true },
    ],
  },
]

const renderField = ({ name, label, type, required, placeholder = '' }: Field) => {
  const attrs = `name="${name}" placeholder='${placeholder}' ${required ? 'required' : ''}`
  const input =
    type === 'json'
      ? `<textarea ${attrs} rows="3"></textarea>`
      : `<input ${attrs} type="${inputTypes[type] ?? 'text'}">`
  return `<label>${label}${input}</label>`
}

const signature = ({ fn, fields }: FormConfig) =>
  `${fn}(${fields.map((f) => f.name + (f.required ? '' : '?')).join(', ')})`

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <h1>Biograf SDK</h1>
  <main>
    <section id="forms">
      ${forms
        .map(
          (form) => `
        <form data-fn="${form.fn}">
          <h2>${form.title}</h2>
          <code>${signature(form)}</code>
          ${form.fields.map(renderField).join('')}
          <button type="submit">Kald ${form.fn}</button>
          <output></output>
        </form>`,
        )
        .join('')}
    </section>
    <section id="state">
      <h2>state</h2>
      <pre></pre>
    </section>
  </main>
`

const statePre = document.querySelector('#state pre')!
const renderState = () => (statePre.textContent = JSON.stringify(sdk.state, null, 2))

const call = ({ fn, fields }: FormConfig, data: FormData) => {
  if (typeof sdk[fn] !== 'function') throw new Error(`${fn} er ikke eksporteret fra cinema.ts`)
  const args = fields.map(({ name, type }) => {
    const value = String(data.get(name) ?? '').trim()
    return value === '' ? undefined : parsers[type](value)
  })
  // Formularerne sørger for rækkefølgen af argumenterne, så typerne kan ikke tjekkes her
  return (sdk[fn] as (...args: unknown[]) => unknown)(...args)
}

for (const form of document.querySelectorAll('form')) {
  const config = forms.find((f) => f.fn === form.dataset.fn)!
  const output = form.querySelector('output')!
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    try {
      output.textContent = `→ ${JSON.stringify(call(config, new FormData(form)), null, 2) ?? 'undefined'}`
      output.classList.remove('error')
    } catch (error) {
      output.textContent = `⚠ ${error instanceof Error ? error.message : String(error)}`
      output.classList.add('error')
    }
    renderState()
  })
}

renderState()
