<?php

declare(strict_types=1);

if (! function_exists('truncate_number'))
{
    function truncate_number(float $number, int $precision): float
    {
        $precision = pow(10, $precision);

        return floor($number * $precision) / $precision;
    }
}
