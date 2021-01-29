FROM mhart/alpine-node:14.15.4 AS builder
WORKDIR /app
COPY . .
RUN npm run build

FROM mhart/alpine-node:14.15.4
RUN npm install serve -g
WORKDIR /app
COPY --from=builder /app/build .
CMD ["serve", "-p", "80", "-s", "."]