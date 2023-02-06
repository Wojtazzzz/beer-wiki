## Ważne informacje

W aplikacji zabrakło funkcjonalności wyszukiwania piwa po nazwie oraz filtracji po wartości IBU. Miałem z tym problemy, więc pominąłem ten punkt i skupiłem się na następnych. Jest to spowodowane niskim doświadczeniem w pracy z Vue.js. 

## Instalacja

#### Sklonuj repozytorium

```bash
  gh repo clone Wojtazzzz/beer-wiki
```

#### Przejdź do katalogu z aplikacją

```bash
  cd ./beer-wiki
```

#### Zainstaluj zależności

```bash
  npm install
```

#### Uruchom serwer

```bash
  npm run dev
```

#### Uruchom testy jednostkowe

```bash
  npm run test
```

#### Uruchom testy _end-to-end_
```bash
  npm run test:e2e
```

Uwaga! Testy e2e należy uruchomić na środowisku produkcyjnym (port 4173), więc przed uruchomieniem testów należy zbudować aplikację
```bash
  npm run build && npm run preview
```

## Kluczowe technologie

- TypeScript
- Vue.js
- Vue Router
- Vite
- TailwindCSS
- Axios
- Vue Query
- Zod
- Cypress
- Vitest

