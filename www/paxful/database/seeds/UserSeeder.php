<?php

declare(strict_types=1);

use App\Trade;
use App\User;
use Illuminate\Database\Seeder;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Generate random multiple users with their own trades
        factory(User::class, 18)
            ->create()
            ->each(function ($user) {
                $user->trades()->save(factory(Trade::class)->make());
            });

        // Just for fun creating user "Satoshi Nakamoto" and assign several trades to him
        factory(Trade::class, 2)->create([
            'user_id' => factory(User::class, 1)->create([
                'username' => 'Nakamoto',
            ])->first(),
        ]);
    }
}
