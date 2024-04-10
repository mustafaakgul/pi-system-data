cd C:\Program Files\PIPC\PIVision\Scripts\app\editor\symbols\ext
set /p Number=<number.txt
set /a result=(%Number%+1)
@echo off 
    setlocal enableextensions disabledelayedexpansion

    set "search=gauge5Tag2_%Number%"
    set "replace=gauge5Tag2_%result%"

    set "jsFile=sym-gauge5Tag2_%Number%.js"
    set "newJsFile=sym-gauge5Tag2_%result%.js"

    for /f "delims=" %%i in ('type "%jsFile%" ^& break ^> "%jsFile%" ') do (
        set "line=%%i"
        setlocal enabledelayedexpansion
        >>"%jsFile%" echo( %%i
        >>"%newJsFile%" echo(!line:%search%=%replace%!
        endlocal
    )

    setlocal enableextensions disabledelayedexpansion
    set "search2=gauge5Tag2_%Number%"
    set "replace2=gauge5Tag2_%result%"

    set "htmlFile=sym-gauge5Tag2_%Number%-template.html"
    set "newHtmlFile=sym-gauge5Tag2_%result%-template.html"

    for /f "delims=" %%i in ('type "%htmlFile%" ^& break ^> "%htmlFile%" ') do (
        set "line=%%i"
	setlocal enabledelayedexpansion
        >>"%htmlFile%" echo( %%i
        >>"%newHtmlFile%" echo(!line:%search2%=%replace2%!
        endlocal
    )

@echo off
>number.txt echo %result%
