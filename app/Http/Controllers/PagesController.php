<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class PagesController extends Controller
{
    //
    public function index()
    {
        return view('welcome');
    }

    public function create()
    {
    
        return view ('awl.create');

    }


    public function store(Request $request){

        return request()->all();
    }

}
