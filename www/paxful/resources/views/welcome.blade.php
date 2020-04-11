<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <title>Paxful Dashboard</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div id="dashboard" data-app-url="{{ $app_url }}"></div>
    <script type="text/javascript" src="{{ asset('js/app.js')  }}"></script>
</body>
</html>
