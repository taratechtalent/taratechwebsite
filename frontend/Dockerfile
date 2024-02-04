# Stage 1: Build the Next.js application
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./
# If using Yarn
# COPY yarn.lock ./

RUN npm install
# Or use Yarn
# RUN yarn install

COPY . .

RUN npm run build
# Or use Yarn
# RUN yarn build

# Stage 2: Serve the application using node
FROM node:18-alpine AS runner

WORKDIR /app

COPY --from=builder /app/next.config.js ./
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package*.json ./

EXPOSE 3000

CMD ["npm", "start"]
# Or use Yarn
# CMD ["yarn", "start"]
