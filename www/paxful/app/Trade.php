<?php

declare(strict_types=1);

namespace App;

use Illuminate\Database\Eloquent\Model;

class Trade extends Model
{
    public const FIAT_PRECISION = 2;

    public const CENTS_IN_FIAT = 100;

    public const CURRENCY = 'USD';

    public const BITCOIN_PRECISION = 8;

    public $fillable = [
        'user_id',
        'payment_method',
        'rate',
        'amount',
        'currency',
        'hash',
        'status',
    ];

    /**
     * Statically writing user_id as 1, since according to task requirements it is okay to have hardcoded user, even
     *     though I have anyways added user into database and made foreign key relationship to trades table.
     *     User with the id of 1 will be created by faker and all the trades will be assigned to this first user.
     *
     * @param int|null $value
     */
    public function setUserIdAttribute(?int $value): void
    {
        $this->attributes['user_id'] = 1;
    }

    /**
     * Truncates income rate by a FIAT_PRECISION constant and multiplies to 100,
     *      in order to save it into DB represented as cents.
     *
     * @param float $rate
     */
    public function setRateAttribute(float $rate): void
    {
        $this->attributes['rate'] = truncate_number($rate, self::FIAT_PRECISION) * self::CENTS_IN_FIAT;
    }

    /**
     * Truncates income amount by a FIAT_PRECISION constant and multiplies to 100,
     *      in order to save it into DB represented as cents.
     *
     * Logically satoshis could be not saved in DB, since they can be calculated based on rate and amount, however
     *      for more clarity I am saving it as well. Basically each separate member (rate, amount, satoshis) can be
     *      calculated based on other two parameters.
     *
     * @param float $amount
     */
    public function setAmountAttribute(float $amount): void
    {
        $this->attributes['amount'] = truncate_number($amount, self::FIAT_PRECISION) * self::CENTS_IN_FIAT;

        $this->attributes['satoshis'] = truncate_number(
            $this->attributes['amount'] / $this->attributes['rate'],
            self::BITCOIN_PRECISION
        ) * pow(10, self::BITCOIN_PRECISION);
    }

    /**
     * Statically writing USD since according to the task USD is the only currency
     *
     * @param string|null $value
     */
    public function setCurrencyAttribute(?string $value): void
    {
        $this->attributes['currency'] = self::CURRENCY;
    }

    /**
     * Returns rate as cents and as its converted fiat representation
     *
     * @param int $rate
     *
     * @return array
     */
    public function getRateAttribute(int $rate): array
    {
        return [
            'cents' => $rate,
            $this->attributes['currency'] => $rate / self::CENTS_IN_FIAT,
        ];
    }

    /**
     * Returns amount as cents and as its converted fiat representation
     *
     * @param int $amount
     *
     * @return array
     */
    public function getAmountAttribute(int $amount): array
    {
        return [
            'cents' => $amount,
            $this->attributes['currency'] => $amount / self::CENTS_IN_FIAT,
        ];
    }

    /**
     * Returns satoshis as satoshis and its converted bitcoin representation
     *
     * @param int $satoshis
     *
     * @return array
     */
    public function getSatoshisAttribute(int $satoshis): array
    {
        return [
            'satoshis' => $satoshis,
            'bitcoin' => $satoshis / pow(10, self::BITCOIN_PRECISION),
        ];
    }

    public function user()
    {
        return $this->belongsTo(User::class);
    }
}