# ── Stage 1: Builder ──────────────────────────────────────────
FROM node:20-alpine AS builder
WORKDIR /app
# COPY SOURCE DESTINATION
COPY package.json package-lock.json ./
RUN npm install
COPY . .

ARG VITE_API_URL
ARG VITE_BACKEND_URL
ENV VITE_API_URL=$VITE_API_URL
ENV VITE_BACKEND_URL=$VITE_BACKEND_URL

RUN npm run build


# ── Stage 2: Runtime ──────────────────────────────────────────
FROM nginx:alpine
# nginx already knows its folder
# WORKDIR  
COPY --from=builder /app/dist /usr/share/nginx/html
# Option 1 - Check official nginx Docker Hub page
# Option 2 - Check what nginx image uses by default
# docker inspect nginx:alpine
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
