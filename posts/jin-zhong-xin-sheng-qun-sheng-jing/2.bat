@echo off
for /l %%i in (1,1,9999) do (
rename "2 (%%i).jpg" "%%i.jpg"
)