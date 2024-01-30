from .base import *

DATABASES = {
    'default': {
    'ENGINE': 'django.db.backends.postgresql_psycopg2',
    'NAME': "money_wasted",
    'USER': 'root',
    'PASSWORD': 'root',
    'HOST': 'db',
    'PORT': '5432',
    }
}