<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTradesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('trades', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('user_id');
            $table->string('payment_method');
            $table->unsignedBigInteger('rate')
                ->comment('Represented in Cents, 1 bitcoin price in currency');
            $table->unsignedBigInteger('amount')
                ->comment('Represented in Cents, amount that is used to buy a bitcoin');
            $table->string('currency');
            $table->unsignedBigInteger('satoshis')
                ->comment('Represented in Satoshis, how many satoshis got brought');
            $table->string('hash');
            $table->boolean('status');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('trades');
    }
}
