
for /r .\ %%i in (*.png) do (  
    cwebp -lossless %%~fi -o %%~dpni.webp
)