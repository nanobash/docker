<?php

declare(strict_types=1);

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Trade;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Validator;

class TradeController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return response(Trade::all(), Response::HTTP_OK);
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
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
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
