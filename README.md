# IT Izglītības fonda - start(it) ietvaros komands 'fotoaparāts' izstrādāta darbu uzskaites sistēma.

Sākums
----------

Pirms komandu izpildes nepieciešams uzstādīt vides mainīgos ``FLASK_APP`` un ``FLASK_DEBUG``:

Unix:

    export FLASK_APP=/path/to/app.py
    export FLASK_DEBUG=1

Windows CMD:

    set FLASK_APP=/path/to/app.py
    set FLASK_DEBUG=1

Windows PowerShell:

    $env:FLASK_APP = /path/to/app.py
    $env:FLASK_DEBUG = 1

Veicam vides uzstādīšanu:

    cd fotoaparats
    pip3 install -r requirements.txt

Lai piedarbinātu lietotni izmantojam:

    flask run
