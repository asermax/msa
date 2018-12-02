# Base api build
FROM python:3.7.1-alpine AS api-base

RUN apk add --no-cache bash gcc python-dev musl-dev postgresql-dev

EXPOSE 8000

# Dev api build
FROM api-base AS api-dev

VOLUME /usr/local/lib/python3.7/site-packages
VOLUME /opt/app

# Prod api build
FROM api-base AS api-prod

WORKDIR /opt/app
COPY api ./
COPY ./api/src/msa/settings_prod.py ./src/msa/settings.py
RUN pip install --no-cache-dir -r requirements.txt
RUN pip install --no-cache-dir gunicorn

ENV PYTHONPATH="/opt/app/src"
ENTRYPOINT ["./entrypoint.sh"]
CMD ["gunicorn", "--config=python:msa.gunicorn", "msa.wsgi"]

# Static api build
FROM api-prod AS api-static

RUN DJANGO_SECRET=placeholder /opt/app/src/manage.py collectstatic --noinput

# Web base build
FROM node:11.3.0-alpine AS web-base

ARG GOOGLE_OAUTH_CLIENT_ID

WORKDIR /opt/app
COPY web ./
RUN yarn install
RUN yarn build

# Web prod build
FROM nginx:1.15.7-alpine AS web-prod
LABEL maintainer="asermax@gmail.com"

COPY --from=web-base /opt/app/dist /usr/share/nginx/html
COPY --from=api-static /opt/app/src/static /usr/share/nginx/html/static
COPY nginx-prod.conf /etc/nginx/conf.d/default.conf
