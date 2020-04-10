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
     * @return Response
     */
    public function index()
    {
        return response(
            Trade::orderBy('id', 'DESC')
                ->with('user')
                ->limit(30)
                ->get(),
            Response::HTTP_OK
        );
    }

    /**
     * Display the specified resource.
     *
     * @param Trade $trade
     *
     * @return \Illuminate\Http\Response
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
