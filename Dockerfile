FROM node:16.20.0-alpine3.18 AS builder
WORKDIR /app
COPY . .
ARG ENVIRONMENT=null
RUN apk add git && npm config set registry https://registry.npmmirror.com && \
npm install -g pnpm@8.15.5 && pnpm install --frozen-lockfile && pnpm run build:$ENVIRONMENT

FROM nginx:1.24-alpine
RUN echo -e 'server {\n\
  root /usr/share/nginx/html;\n\
  gzip_static on;\n\
  location / {\n\
    if ($request_filename ~* index.html|.*\.ico$)\n\
    {\n\
        add_header Cache-Control "no-cache";\n\
    }\n\
    try_files $URI $URI/ /index.html;\n\
  }\n\
}' > /etc/nginx/conf.d/default.conf

COPY --from=builder /app/dist/ /usr/share/nginx/html/
CMD sh -c "exec nginx -g 'daemon off;'"