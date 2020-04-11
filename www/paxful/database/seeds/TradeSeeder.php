<?php

declare(strict_types=1);

use App\Trade;
use Illuminate\Database\Seeder;

class TradeSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(Trade::class, 20)->create();
    }
}
