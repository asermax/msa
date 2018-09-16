from .settings_base import *  # noqa

DEBUG = False

ALLOWED_HOSTS = [
    'msalimentaria.com.ar',
]
SECURE_PROXY_SSL_HEADER = ('HTTP_X_FORWARDED_PROTO', 'https')
SESSION_COOKIE_SECURE = True
CSRF_COOKIE_SECURE = True
