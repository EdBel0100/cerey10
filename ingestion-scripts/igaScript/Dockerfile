# ---- build stage: full monorepo context ----
FROM public.ecr.aws/lambda/nodejs:22 AS build

WORKDIR /repo

RUN npm install -g pnpm

# workspace files
COPY pnpm-lock.yaml pnpm-workspace.yaml package.json ./

# full monorepo (required for pnpm graph)
COPY . .

RUN pnpm install --frozen-lockfile

RUN pnpm --filter igaScript build

# isolate igaScript + its resolved prod deps into a flat, dockerizable folder
RUN pnpm --filter igaScript deploy --prod --legacy /out

# ---- runtime stage: only the isolated package ----
FROM public.ecr.aws/lambda/nodejs:22 AS runtime

WORKDIR ${LAMBDA_TASK_ROOT}

COPY --from=build /out ${LAMBDA_TASK_ROOT}

CMD ["dist/ingestion.handler"]
