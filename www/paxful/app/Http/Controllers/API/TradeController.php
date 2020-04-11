<?php

declare(strict_types=1);

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Trade;
use App\User;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;
use Validator;

class TradeController extends Controller
{
    /**
     * Returns last 30 trade records.
     *
     * Eager loading trades with the user who created it.
     *
     * @return Response
     */
    public function index()
    {
        $trades = Trade::orderBy('id', 'DESC')
            ->with(['user' => function ($query) {
                $query->withCount('trades');
            }])
            ->limit(30)
            ->get();

        return response($trades, Response::HTTP_OK);
    }

    /**
     * Display the specified resource.
     *
     * @param Trade $trade
     *
     * @return Response
     */
    public function show(Trade $trade)
    {
        return response($trade, Response::HTTP_OK);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  Request  $request
     *
     * @return Response
     *
     * @throws ValidationException
     */
    public function store(Request $request)
    {
        // The currency is statically written in TradeController, as according to assignment is can be always USD
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|integer|exists:users,id',
            'payment_method' => 'required|string|max:255',
            'rate' => 'required|numeric',
            'amount' => 'required|numeric',
            'currency' => 'required|string|max:3',
            'hash' => 'required|string|max:255',
            'status' => 'required|boolean',
        ]);

        if ($validator->fails()) {
            return response($validator->errors(), Response::HTTP_UNPROCESSABLE_ENTITY);
        }

        return response(Trade::create($validator->validated()), Response::HTTP_CREATED);
    }
}
