<?php

declare(strict_types=1);

use App\Trade;
use App\User;
use Faker\Generator as Faker;

/** @var \Illuminate\Database\Eloquent\Factory $factory */

$factory->define(Trade::class, function (Faker $faker) {
    return [
        'user_id' => 1,
        'payment_method' => $faker->creditCardType,
        'rate' => $faker->randomFloat(10, 6000, 20000),
        'amount' => $faker->randomFloat(10, 1000, 10000),
        'currency' => 'USD',
        'hash' => $faker->shuffle(''),
        'status' => $faker->boolean,
        'created_at' => $faker->dateTimeBetween('- 5 years', '-3 years'),
        'updated_at' => $faker->boolean ? $faker->dateTimeBetween('-2 years', 'now') : null,
    ];
});
