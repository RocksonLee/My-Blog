@echo off
for /l %%i in (1,1,9999) do (
rename "1 (%%i).png" "%%i.jpg"
)