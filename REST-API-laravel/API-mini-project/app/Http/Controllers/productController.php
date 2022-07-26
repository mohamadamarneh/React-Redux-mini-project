<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\product;

class productController extends Controller
{
    //


    // GET functions
    function index()
    {
        return product::all();
    }

    function single($id)
    {
        return product::firstWhere('id', $id);
    }



    // Create (POST) function
    function store(Request $request)
    {
        //validation 
        // request()->validate([
        //     'title' => 'required',
        //     'content' => 'required'
        // ]);
        //create command

        // return product::create([
        //     'title' => "mohamad",
        //     'content' => 'amarneh'
        // ]);


        
        return product::create([
            'title' => request('title'),
            'name' => request('name'),
            'price' => request('price'),
            'imgpath' => request('imgpath'),
            'desc' => request('desc')
        ]);
    }



    // Update (PUT) function
    function update(product $product)
    {


        return $product->update([
            'title' => "mohamad2",
            'content' => 'amarneh244'

        ]);


        // return $product->update([
        //     'title' => request('name'),
        //     'content' => request('content')

        // ]);


    }



    // Delete (DELETE) function
    function destroy(product $product)
    {
        return  $product->delete();
    }
}
