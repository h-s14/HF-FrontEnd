# Build stage
FROM node:alpine3.18 as build

ARG VITE_BASE_SERVER_BASE_URL
ENV VITE_BASE_SERVER_BASE_URL=$VITE_BASE_SERVER_BASE_URL

# Set working directory and install dependencies
WORKDIR /app
COPY package.json .
RUN npm install
COPY . .
RUN npm run build

# Production stage
FROM nginx:alpine
WORKDIR /usr/share/nginx/html
RUN rm -rf *
COPY --from=0 /app/build .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
