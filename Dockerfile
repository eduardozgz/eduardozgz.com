FROM node:alpine as node_modules_cache

WORKDIR /cache/
COPY package.json .
COPY package-lock.json .
RUN npm install -g pnpm
RUN pnpm install

FROM node:alpine as builder
WORKDIR /app
COPY --from=node_modules_cache /cache/ .
COPY . .
RUN npm run build

FROM nginx:alpine
COPY nginx.conf /etc/nginx/conf.d/default.conf
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]

