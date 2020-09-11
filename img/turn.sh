#!/bin/bash
for i in $(seq 20 36) 
do
cwebp -lossless $i.jpg -o $i.webp 
done

