cd C:\Program Files\PIPC\PIVision\Scripts\app\editor\symbols\ext
set /p Number=<number2.txt
set /a result=(%Number%+1)
@echo off 
    setlocal enableextensions disabledelayedexpansion

    set "search=gauge5Tag_Y-K_%Number%"
    set "replace=gauge5Tag_Y-K_%result%"

    set "jsFile=sym-gauge5Tag_Y-K_%Number%.js"
    set "newJsFile=sym-gauge5Tag_Y-K_%result%.js"

    for /f "delims=" %%i in ('type "%jsFile%" ^& break ^> "%jsFile%" ') do (
        set "line=%%i"
        setlocal enabledelayedexpansion
        >>"%jsFile%" echo( %%i
        >>"%newJsFile%" echo(!line:%search%=%replace%!
        endlocal
    )

    setlocal enableextensions disabledelayedexpansion
    set "search2=gauge5Tag_Y-K_%Number%"
    set "replace2=gauge5Tag_Y-K_%result%"

    set "htmlFile=sym-gauge5Tag_Y-K_%Number%-template.html"
    set "newHtmlFile=sym-gauge5Tag_Y-K_%result%-template.html"

    for /f "delims=" %%i in ('type "%htmlFile%" ^& break ^> "%htmlFile%" ') do (
        set "line=%%i"
	setlocal enabledelayedexpansion
        >>"%htmlFile%" echo( %%i
        >>"%newHtmlFile%" echo(!line:%search2%=%replace2%!
        endlocal
    )

@echo off
>number2.txt echo %result%
