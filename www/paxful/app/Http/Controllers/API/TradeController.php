<?php

declare(strict_types=1);

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Trade;
use Illuminate\Http\Request;
use Illuminate\Validation\ValidationException;
use Symfony\Component\HttpFoundation\Response;
use Validator;

class TradeController extends Controller
{
    /**
     * Returns last 30 trade records.
     *
     * Eager loading trades with user because in real world example, each trade should have different user, therefore
     *      the user data should differ from each other.
     *
     * IMPORTANT: Only loading count alongside with the trades in such way, because according to the assignment
     *      we assume that all the trades belong to only one user.
     *
     * @return Response
     */
    public function index()
    {
        $trades = Trade::orderBy('id', 'DESC')
            ->with('user')
            ->limit(30)
            ->get();

        $count = $trades->count();

        return response(['count' => $count, 'result' => $trades], Response::HTTP_OK);
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
        // user_id and currency are statically written in TradeController as they can be hardcoded according to task
        $validator = Validator::make($request->all(), [
            'user_id' => 'required|integer',
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
