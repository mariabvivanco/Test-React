<?php

$cadena= " Probando a quitar espacios  de varias maneras    !   ";
echo str_replace(" ", "", $cadena); 
echo preg_replace('/\s+/', '', $cadena); 