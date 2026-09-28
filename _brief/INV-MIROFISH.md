# INV-MIROFISH: investigación de 666ghj/MiroFish (2026-09-28)

Fuentes base (citadas abajo como F1..F6):
- F1 = https://github.com/666ghj/MiroFish/blob/main/README.md (leído vía raw.githubusercontent.com/666ghj/MiroFish/main/README.md)
- F2 = https://github.com/666ghj/MiroFish (página del repo)
- F3 = https://raw.githubusercontent.com/666ghj/MiroFish/main/backend/requirements.txt
- F4 = https://raw.githubusercontent.com/666ghj/MiroFish/main/package.json
- F5 = https://raw.githubusercontent.com/666ghj/MiroFish/main/.env.example
- F6 = https://raw.githubusercontent.com/666ghj/MiroFish/main/LICENSE

Nota de método: las lecturas de WebFetch son resúmenes generados por un modelo pequeño; la redacción exacta del README puede diferir. No se usó WebSearch. No se leyó el código fuente de backend/ ni docs adicionales.

## 1) Qué es y para qué sirve
- Se presenta como "Swarm Intelligence Prediction Engine", plataforma de predicción con tecnología multiagente. [verificado: F1]
- Procesa información del mundo real para construir un "mundo digital paralelo de alta fidelidad" donde miles de agentes con personalidad propia, memoria a largo plazo y lógica de comportamiento interactúan. [verificado: F1]
- Entrada: materiales semilla + petición en lenguaje natural. Salida: informe de predicción y un entorno de simulación interactivo. [verificado: F1]
- Descripción del repo: motor de predicción multiagente que construye simulaciones a partir de datos reales para pronosticar resultados futuros en varios dominios. [verificado: F2]
- Respaldado por Shanda Group. [verificado: F2]
- Popularidad: ~75.2k estrellas y ~320 commits en main al momento de la consulta. [verificado: F2] (cifra volátil)
- Existe demo en vivo enlazada desde el repo. [verificado: F2] (URL no capturada: [no verificado])

## 2) Los cinco pasos del flujo (según el README)
1. Construcción de grafo (Graph Building): extrae información semilla y construye GraphRAG con inyección de memoria. [verificado: F1]
2. Preparación del entorno (Environment Setup): extracción de entidades y relaciones, generación de personas (personajes) y configuración de agentes. [verificado: F1]
3. Simulación: simulaciones paralelas en dos plataformas ("dual-platform") con actualización dinámica de memoria temporal. [verificado: F1]
4. Informe (Report Generation): un ReportAgent produce análisis detallado con un conjunto de herramientas interactivas. [verificado: F1]
5. Interacción profunda (Deep Interaction): el usuario conversa con los agentes simulados y con el ReportAgent. [verificado: F1]
- Cuáles son las "dos plataformas" simuladas (p. ej. tipo Twitter/Reddit): [no verificado] (no aparece en el resumen leído; OASIS soporta ambas en su propio proyecto, pero no se confirmó para MiroFish).

## 3) Piezas internas y versiones
- OASIS (Open Agent Social Interaction Simulations) de CAMEL-AI como motor de simulación social. [verificado: F1, F2]
- GraphRAG para construcción del grafo de conocimiento. [verificado: F1]
- Zep Cloud para gestión de memoria. [verificado: F1]
- LLM: cualquier API compatible con el formato del SDK de OpenAI. [verificado: F1, F2]
- Dependencias del backend (backend/requirements.txt): [verificado: F3]
  - flask>=3.0.0, flask-cors>=6.0.0
  - openai>=1.0.0
  - zep-cloud==3.25.0, httpx>=0.27.0
  - camel-oasis==0.2.5, camel-ai==0.2.78
  - PyMuPDF>=1.24.0, charset-normalizer>=3.0.0, chardet>=5.0.0
  - python-dotenv>=1.0.0, pydantic>=2.0.0
- Estructura del repo: /backend (Python, motor de simulación), /frontend (interfaz web), /locales (i18n), /tests, docker-compose.yml, .env.example. [verificado: F2]
- Framework del frontend (Vue/React, etc.): [no verificado]. Cómo se integra exactamente GraphRAG con Zep en el código: [no verificado].
- devDependency raíz: concurrently ^9.2.4. [verificado: F4]

## 4) Requisitos e instalación (sin precios)
- Node.js 18+ (engines: >=18.0.0). [verificado: F1, F4]
- Python >=3.11 y <=3.12. [verificado: F1]
- Gestor de paquetes uv (última versión). [verificado: F1]
- Variables .env: [verificado: F1, F5]
  - LLM_API_KEY (credencial del LLM)
  - LLM_BASE_URL (ejemplo/por defecto: https://dashscope.aliyuncs.com/compatible-mode/v1)
  - LLM_MODEL_NAME (ejemplo/recomendado: qwen-plus)
  - ZEP_API_KEY (memoria Zep)
  - Opcionales de aceleración: LLM_BOOST_API_KEY, LLM_BOOST_BASE_URL, LLM_BOOST_MODEL_NAME (incluir solo si se usan) [verificado: F5]
- El .env.example sugiere la plataforma Bailian de Aliyun y avisa de que el consumo de tokens es sustancial; recomienda probar antes con menos de 40 iteraciones. [verificado: F5]
- Instalación: `npm run setup:all` (= `npm run setup` + `npm run setup:backend`). [verificado: F1, F4]
  - setup: "npm install && cd frontend && npm install"; setup:backend: "cd backend && uv sync". [verificado: F4]
- Arranque: `npm run dev` (backend y frontend en paralelo con `concurrently`). [verificado: F1, F4]
  - Scripts sueltos: `npm run backend` (= cd backend && uv run python run.py), `npm run frontend`, `npm run build` (frontend). [verificado: F4]
- Puertos: frontend http://localhost:3000; backend API http://localhost:5001. [verificado: F1]
- Docker: `docker compose up -d` disponible. [verificado: F1] Mapeo de puertos/volúmenes del compose: [no verificado].
- Requisito de cuenta Zep Cloud (servicio externo, se necesita ZEP_API_KEY): [verificado: F1, F5]. Alternativa local a Zep: [no verificado].

## 5) Licencia
- AGPL-3.0 (GNU Affero General Public License v3, 19 noviembre 2007). [verificado: F6; coincide con F2 y F4]
- Implicación práctica (nota interpretativa, no del repo): la AGPL exige ofrecer el código fuente a quienes usen una versión modificada a través de red. [no verificado: interpretación general de la AGPL, no leída en el repo]. Consultar a un abogado antes de uso comercial.

## 6) Qué predice y qué no; limitaciones
- Qué pretende hacer: simular la interacción social de agentes a partir de semillas del mundo real para explorar futuros posibles y generar un informe. [verificado: F1, F2]
- El README no fue leído con una sección explícita de limitaciones o descargo de responsabilidad en el resumen obtenido. Cualquier afirmación de precisión/validación empírica: [no verificado] (no se encontró evidencia de benchmarks).
- Limitaciones documentadas (verificadas): 
  - Dependencia de un LLM externo y de Zep Cloud (claves API obligatorias). [verificado: F1, F5]
  - Consumo alto de tokens/coste de LLM; se aconseja pocas iteraciones al probar. [verificado: F5]
  - Versión de Python acotada a 3.11-3.12. [verificado: F1]
- Limitaciones inferidas (no del repo, criterio del analista): [no verificado]
  - Es una simulación generativa: los resultados dependen del LLM, de las semillas y de la personas generadas; no es un modelo estadístico calibrado ni proporciona intervalos de confianza.
  - Puede reflejar sesgos del LLM y del material semilla; no hay garantía de reproducibilidad entre ejecuciones.
  - Mejor tratarlo como herramienta de exploración de escenarios, no como pronóstico probabilístico validado.
- Por verificar en una siguiente pasada: README completo (docs), issues abiertos, releases/versión, ejemplos de casos de uso, mapa de puertos Docker, uso real de GraphRAG.
