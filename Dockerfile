FROM node:lts-alpine AS builder
WORKDIR /app
COPY . .
RUN npm run build

FROM node:lts-alpine 
RUN npm install serve -g
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]