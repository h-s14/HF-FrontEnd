# Build stage
FROM node:alpine3.18 as build

ARG VITE_BK_URL
ARG VITE_PORT
ENV VITE_BK_URL=$VITE_BK_URL
ENV VITE_PORT=$VITE_PORT

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
COPY --from=0 /app/dist .
EXPOSE 80
ENTRYPOINT ["nginx", "-g", "daemon off;"]
