FROM node:18 AS build
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine AS production
EXPOSE 80
COPY --from=build /app/dist /usr/share/nginx/html

